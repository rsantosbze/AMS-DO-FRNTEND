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

import { useState, useContext } from "react";
import { useRouter } from 'next/router';

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "@structures/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@structures/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";

// NewUser page components
import OrganizationInfo from "@pages-app-ams/organizations/components/OrganizationInfo"
import Address from "@pages-app-ams/organizations/components/Address";

// NewUser layout schemas for form and form feilds
import validations from "@pages-app-ams/organizations/schemas/validations";
import form from "@pages-app-ams/organizations/schemas/form";
import initialValues from "@pages-app-ams/organizations/schemas/initialValues";

///////////////////////////////////////////
import AuthContext from "@store/auth-context";
import { useMutation } from '@apollo/client';
import * as statements from '@sections/graphql/organizations/grapql-statements'
import { AMSAlert } from "@pagesComponents/generalComponents/HelperFunctions";
//////////////////////////////////////////
function getSteps() {
    return ["Organization Info", "Address"];
}

function getStepContent(stepIndex, formData) {
    switch (stepIndex) {
        case 0:
            return <OrganizationInfo formData={formData} />;
        case 1:
            return <Address formData={formData} />;
        // case 2:
        //   return <Socials formData={formData} />;
        // case 3:
        //   return <Profile formData={formData} />;
        default:
            return null;
    }
}

function NewOrganization() {

    const returnLink = "/app/ams/organizations/list-organizations";
    const operation = "Add";
    ///////////////////////////////////

    const [createOrg] = useMutation(statements.CREATE);
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { user } = useContext(AuthContext);

    // API Handler to insert new organization

    function insertUserInformation(data) {
        let obj = { ...data };
        obj.operationUserId = user.userId;
        obj.operationUserName = user.firstName + " " + user.lastName;
        obj.operationUserRole = user.role;
        return obj;
    }

    const postDataHandler = async (org, actions) => {
        setShowAlertBar(false);
        // If type is COMPANY then empth companyId
        if (org.organizationType === 'COMPANY') {
            org.companyId = '';
        }

        createOrg({
            variables: { input: insertUserInformation(org) },
            onCompleted: (data) => {
                if (data.createOrg.action === 'error') {
                    setMessage(data.createOrg.message.toUpperCase());
                    setShowAlertBar(true);
                } else {
                    router.push(returnLink);
                    actions.setSubmitting(false);
                    actions.resetForm();
                    setActiveStep(0);
                }
            },
            onError: (err) => {
                if (err) {
                    if (err.graphQLErrors[0].extensions.code === 'FORBIDDEN') {
                        setMessage('FORBIDDEN RESOURCE: YOU ARE NOT AUTHORIZED!');
                        setShowAlertBar(true);
                    }
                    if (err.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') {
                        router.push({
                            pathname: '/app/ams/login',
                            query: { returnUrl: router.asPath },
                        });
                    }
                }
            }
        });
    };

    /////////////////////////////////////////
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const { formId, formField } = form;
    const currentValidation = validations[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    const handleBack = () => setActiveStep(activeStep - 1);

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            postDataHandler(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    ///////////////////////////////////////////////////////////////

    let displayAlert = AMSAlert(message, showAlertBar);
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
                        <Formik
                            initialValues={initialValues}
                            validationSchema={currentValidation}
                            onSubmit={handleSubmit}
                        >
                            {({ values, errors, touched, isSubmitting, isValid, dirty, setFieldValue }) => (
                                <Form id={formId} autoComplete="off">
                                    <Card sx={{ height: "100%" }}>
                                        <MDBox mx={2} mt={-3}>
                                            <Stepper activeStep={activeStep} alternativeLabel >
                                                {steps.map((label) => (
                                                    <Step key={label}>
                                                        <StepLabel>{label}</StepLabel>
                                                    </Step>
                                                ))}
                                            </Stepper>
                                        </MDBox>
                                        <MDBox p={3}>
                                            <MDBox>
                                                {getStepContent(activeStep, {
                                                    values,
                                                    touched,
                                                    formField,
                                                    errors,
                                                    operation,
                                                    setFieldValue
                                                })}
                                                <MDBox
                                                    mt={2}
                                                    width="100%"
                                                    display="flex"
                                                    justifyContent="space-between"
                                                >
                                                    <MDButton
                                                        variant="gradient"
                                                        color="error"
                                                        onClick={() => router.push("/app/ams/organizations/list-organizations")}
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
                                                    <MDButton
                                                        disabled={isSubmitting}
                                                        type="submit"
                                                        variant="gradient"
                                                        color={isValid && dirty ? "success" : "dark"}
                                                    >
                                                        {isLastStep ? "send" : "next"}
                                                    </MDButton>
                                                </MDBox>
                                            </MDBox>
                                        </MDBox>
                                    </Card>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer company={{ name: 'RJS Engineering', href: 'http://ams.rjsengineeringbz.com' }} />
        </DashboardLayout>
    );
}

export default NewOrganization;
