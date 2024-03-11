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
import DashboardLayout from "@structures/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@structures/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";
// NewUser page components

import Address from "@pages-app-ams/users/components/Address";
import UserInfo from "@pages-app-ams/users/components/UsersInfo";
// import Socials from "/pagesComponents/pages/users/new-user/components/Socials";
// import Profile from "/pagesComponents/pages/users/new-user/components/Profile";

// NewUser layout schemas for form and form feilds
import validations from "@pages-app-ams/users/schemas/validations";
import form from "@pages-app-ams/users/schemas/form";
import initialValues from "@pages-app-ams/users/schemas/initialValues";

///////////////////////////////////////////

import AuthContext from "@store/auth-context";
import { useMutation, useLazyQuery } from '@apollo/client';
import * as statements from '@sections/graphql/users/grapql-statements'
import { AMSAlert } from "@pagesComponents/generalComponents/HelperFunctions";

//////////////////////////////////////////
function getSteps() {
    return ["User Info", "Address"];
}

function getStepContent(stepIndex, formData) {
    switch (stepIndex) {
        case 0:
            return <UserInfo formData={formData} />;
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

function NewUser() {
    const returnLink = "/app/ams/users/list-users";
    const operation = "Add";
    ///////////////////////////////////

    const [createUser] = useMutation(statements.CREATE);
    const [companiesQuery, { data: companyData }] = useLazyQuery(statements.FINDALLCOMPANIES);

    ///////////////////////////////////
    const [companies, setCompanies] = useState([]);
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { user, logout } = useContext(AuthContext);

    // Retrieve Companies information for Admin role selection

    useEffect(() => {
        companiesQuery();
        if (companyData) setCompanies(companyData.findAllCompanies)
    }, [companyData, companiesQuery]);

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

    // API Handler to insert new user
    const postDataHandler = async (usr, actions) => {
        setShowAlertBar(false);
        createUser({
            variables: { input: insertUserInformation(usr) },
            onCompleted: (data) => {

                if (data.createUser.action === 'error') {
                    setMessage(data.createUser.message.toUpperCase());
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

    /////////////////////////////////////////
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const { formId, formField } = form;
    const currentValidation = validations[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    const handleBack = () => setActiveStep(activeStep - 1);

    const selectOrganizationName = (values) => {
        let company = companies.filter(comp => comp._id === values.companyId);
        values.companyName = company[0].organizationName;
    }

    const handleSubmit = (values, actions) => {
        values.role === "admin" ? selectOrganizationName(values) : '';
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
                                                    companies
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
                                                    <MDButton

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

export default NewUser;
