/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MDAlert from "/components/MDAlert";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";

// NewRecord page components

import RecordInfo from "@pages-app-ams/records/components/RecordInfo";
import Media from "@pages-app-ams/records/components/Media";

// NewRecord layout schemas for form and form feilds
import validations from "@pages-app-ams/records/schemas/validations";
import form from "@pages-app-ams/records/schemas/form";
import initialValues from "@pages-app-ams/records/schemas/initialValues";
import AuthContext from "@store/auth-context";
///////////////////////////////////////////

import { useSelector } from 'react-redux';
import { useMutation, useLazyQuery } from '@apollo/client';
import * as statements from '@sections/graphql/maintenance-records/grapql-statements'
import Alert from "@pagesComponents/generalComponents/Alert";

//////////////////////////////////////////
function getSteps() {
    return ["Maintenance Record Info", "Upload Report"];
}

function getStepContent(stepIndex, formData) {
    switch (stepIndex) {
        case 0:
            return <RecordInfo formData={formData} />;
        case 1:
            return <Media formData={formData} />;
        // case 2:
        //   return <Socials formData={formData} />;
        // case 3:
        //   return <Profile formData={formData} />;
        default:
            return null;
    }
}

function MutateRecord() {
    const returnLink = "/app/ams/records/list-records";
    ///////////////////////////////////

    const [createRecord] = useMutation(statements.CREATE);
    const [updateRecord] = useMutation(statements.UPDATE);
    const [deleteRecord] = useMutation(statements.DELETE);

    ///////////////////////////////////

    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const record = useSelector(state => state.record.record);
    const operation = useSelector(state => state.record.operation);
    const assetId = useSelector(state => state.record.assetId);
    const facilityId = useSelector(state => state.record.facilityId);
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        if (assetId.length == 0) {
            setShowAlertBar(true);
            setMessage('You are not allowed access directly to this page.');
        }
    }, [showAlertBar])

    ///////////////////////Error Handling////////////////////////////////////
    let errorHandling = (err) => {
        if (err) {
            if (err.graphQLErrors[0] == undefined) {
                setMessage('ISSUE WITH BACKEND, PLEASE TRY AGAIN LATER!');
                setShowAlertBar(true);

            } else {
                if (err.graphQLErrors[0].extensions.code === 'FORBIDDEN') {
                    setMessage('FORBIDDEN RESOURCE: YOU ARE NOT AUTHORIZED!');
                    setShowAlertBar(true);

                }
                if (err.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') {
                    logout();
                    router.push({
                        pathname: '/app/ams/login',
                        query: { returnUrl: router.asPath },
                    });
                }
            }
        }
    }
    ////////////////////////////////////////////////////////////

    function insertUserInformation(data) {
        let obj = { ...data };
        obj.operationUserId = user.userId;
        obj.operationUserName = user.firstName + " " + user.lastName;
        obj.operationUserRole = user.role;
        return obj;
    }

    const postDataHandler = async (rec, actions) => {
        setShowAlertBar(false);
        createRecord({
            variables: { input: insertUserInformation(rec) },
            onCompleted: (data) => {
                if (data.createMaintenanceRecord.action === 'error') {
                    setMessage(data.createMaintenanceRecord.message.toUpperCase());
                    setShowAlertBar(true);

                } else {

                    router.push(returnLink);
                    actions.setSubmitting(false);
                    actions.resetForm();
                    setActiveStep(0);
                }
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };
    /////////////////////// API Handler to put record
    const putDataHandler = async (rec, actions) => {
        updateRecord({
            variables: { input: insertUserInformation(rec) },
            onCompleted: () => {
                router.push(returnLink);
                actions.setSubmitting(false);
                actions.resetForm();
                setActiveStep(0);
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };
    ////////////////////// API Handler to delete record
    const deleteDataHandler = async (rec, actions) => {
        deleteRecord({
            variables: { input: insertUserInformation(rec) },
            onCompleted: () => {
                router.push(returnLink);
                actions.setSubmitting(false);
                actions.resetForm();
                setActiveStep(0);
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };
    /////////////////////////////////////////

    /////////////////////////////////////////
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const { formId, formField } = form;
    const currentValidation = validations[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    const handleBack = () => setActiveStep(activeStep - 1);

    const operationHandler = (values, actions) => {
        if (operation === 'Add') {
            postDataHandler(values, actions);
        } else if (operation === 'Edit') {
            putDataHandler(values, actions);
        } else {
            deleteDataHandler(values, actions);
        }
    };

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            operationHandler(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };
    ///////////////////////////////////////////////////////////////

    let displayAlert = <Alert message={message} display={showAlertBar} />;

    ///////////////////////////////////////////////////////////////

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3} mb={20} height="65vh">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%", mt: 8 }}
                >
                    <Grid item xs={12} lg={8}>
                        <MDBox pb={5}>{displayAlert}</MDBox>
                        {assetId.length == 0 ? '' : <Formik
                            initialValues={operation === "Add" ? initialValues : record}
                            validationSchema={currentValidation}
                            onSubmit={handleSubmit}
                        >
                            {({ values, errors, touched, isSubmitting, isValid, dirty }) => (
                                <Form id={formId} autoComplete="off">
                                    <Card sx={{ height: "100%", textAlign: "center" }}>
                                        <MDBox mx={2} mt={-3}>
                                            <Stepper activeStep={activeStep} alternativeLabel>
                                                {steps.map((label) => (
                                                    <Step key={label}>
                                                        <StepLabel>{label}</StepLabel>
                                                    </Step>
                                                ))}
                                            </Stepper>
                                        </MDBox>
                                        <MDBox p={3} justifyContent="space-between"
                                            alignItems="center">
                                            <MDBox>
                                                {getStepContent(activeStep, {
                                                    values,
                                                    touched,
                                                    formField,
                                                    errors,
                                                    operation,
                                                    assetId,
                                                    facilityId
                                                })}
                                                <MDBox
                                                    mt={5}
                                                    width="100%"
                                                    display="flex"
                                                    justifyContent="space-between"
                                                >
                                                    <MDButton
                                                        variant="gradient"
                                                        color="error"
                                                        onClick={() => router.push(returnLink)}
                                                    >
                                                        Cancel
                                                    </MDButton>
                                                    {activeStep === 0 ? (
                                                        <MDBox />
                                                    ) : (
                                                        <MDButton
                                                            variant="gradient"
                                                            color="light"
                                                            onClick={handleBack}
                                                        >
                                                            back
                                                        </MDButton>
                                                    )}
                                                    {/* {//console.log(values)} */}

                                                    <MDButton

                                                        type="submit"
                                                        variant="gradient"
                                                        color={isValid && (operation === "Delete" || operation === "Edit" ? true : dirty) ? "success" : "dark"}
                                                    >
                                                        {isLastStep ? operation : "next"}
                                                    </MDButton>
                                                </MDBox>
                                            </MDBox>
                                        </MDBox>
                                    </Card>
                                </Form>
                            )}
                        </Formik>}
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default MutateRecord;
