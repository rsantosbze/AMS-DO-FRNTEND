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

import { useContext, useState } from "react";
import { useRouter } from 'next/router';

import Link from "next/link";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// formik components
import { Formik, Form } from "formik";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";
import MDButton from "/components/MDButton";
import MDAlert from "/components/MDAlert";

// Authentication layout components
import BasicLayout from "@structures/LayoutContainers/LoginLayout";

// Login Form page components
import LoginForm from "./components/reset-password";

// Login layout schemas for form and form feilds
import validations from "@values/reset-password/schemas/validations";
import form from "@values/reset-password/schemas/form";
import initialValues from "@values/reset-password/schemas/initialValues";

// Images
import bgImage from "/assets/images/ams/landing.jpg";

///////////////////////////////////////////////////////////////
import { useMutation } from '@apollo/client';
import * as statements from '@sections/auth/grapql-statements';
import { authenticationService } from '@sections/auth/authentication.service';
import AuthContext from "@store/auth-context";
///////////////////////////////////////////////////////////////

function Basic() {

    const router = useRouter();
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [showForm, setShowform] = useState(true);
    const [message, setMessage] = useState('');
    // let r= router.query.returnUrl ? router.query.returnUrl : '/organizations/list-organizations';
    let code = router.query.code;
    let inAppRequest = true;
    let headingMessage = "Existing";
    const [resetPassword] = useMutation(statements.RESET_PASSWORD, {
        fetchPolicy: 'network-only',
    });

    const [rememberMe, setRememberMe] = useState(false);

    const handleSetRememberMe = () => setRememberMe(!rememberMe);
    const { formId, formField } = form;
    const currentValidation = validations[0];
    // const { user, login } = useContext(AuthContext);

    // let modifyInitialValues = { ...initialValues };
    // modifyInitialValues.temppassword ="hello"
    // //console.log(modifyInitialValues);

    // API Handler to delete User
    const resetPasswordHandler = async (values, actions) => {
        setShowAlertBar(false);
        resetPassword({
            variables: { input: values },
            onCompleted: (data) => {
                if (data.resetPassword.action === 'error') {
                    setMessage(data.resetPassword.message);
                    setShowAlertBar(true);
                } else {
                    setMessage('Password has been updated.')
                    setShowAlertBar(true);
                    actions.resetForm();
                    setShowform(false);

                }
            },
        });
        actions.setSubmitting(false);

    };
    // Set Initial value from query into the field
    if (code) {
        initialValues.temppassword = code;
        // Change label on password
        inAppRequest = false;
        headingMessage = "Temp.";
    }
    ///////////////////////////////////////////////////////////////
    let displayAlert = showAlertBar ? (
        <MDAlert
            color="error"
            dismissible
        >
            <Icon fontSize="small">warning</Icon> &nbsp;
            <MDTypography variant="h6" fontWeight="medium" color="white" ml={1}>
                {message}
            </MDTypography>
        </MDAlert >
    ) : (
        ''
    );

    let displayForm = showForm ? <Formik
        initialValues={initialValues}
        validationSchema={currentValidation}
        onSubmit={resetPasswordHandler}
    >
        {({ values, errors, touched, isSubmitting, isValid, dirty }) => (
            <Form id={formId} autoComplete="off">
                <LoginForm formData={{
                    values,
                    touched,
                    formField,
                    errors,
                    inAppRequest
                }} />
                <MDBox mt={1} mb={1}>

                    <MDButton variant="gradient" color={isValid && dirty ? "success" : "dark"} fullWidth
                        type="submit">
                        Reset Password
                    </MDButton>
                </MDBox>

            </Form>

        )}

    </Formik> : "";
    ///////////////////////////////////////////////////////////////

    return (
        <BasicLayout image={bgImage}>
            <Card>
                <MDBox
                    variant="gradient"

                    borderRadius="lg"
                    coloredShadow="dark"
                    mx={2}
                    mt={-5}
                    p={0}
                    mb={2}
                    textAlign="center"
                    sx={{ bgcolor: 'amsColors1.main' }}
                >
                    <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
                        Password Reset
                    </MDTypography>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        sx={{ mt: 1, mb: 2 }}
                    >
                        <Grid item xs={12}>
                            <MDTypography
                                component={MuiLink}
                                // href="#"
                                variant="body2"
                                color="white"
                            >
                                Please enter your {headingMessage} Password and New Passwords.
                            </MDTypography>
                        </Grid>

                    </Grid>
                </MDBox>
                <MDBox pt={0} pb={3} px={3} >
                    <MDBox pt={0} pb={0} px={0} >
                        {displayAlert}
                    </MDBox>
                    <MDBox >

                        {displayForm}
                        {/* <MDBox mb={2}>
              <MDInput type="username" label="Username" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox> */}
                        {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}

                        <MDBox mt={3} mb={1} textAlign="center">
                            <MDTypography variant="button" color="text">
                                Back To {" "}
                                <Link href="login">
                                    <a>
                                        <MDTypography
                                            variant="button"
                                            color="dark"
                                            fontWeight="medium"
                                            textGradient
                                        >
                                            Login
                                        </MDTypography>
                                    </a>
                                </Link>
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </MDBox>
            </Card>
        </BasicLayout>
    );
}

export default Basic;
