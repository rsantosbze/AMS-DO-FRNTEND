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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NewUser page components
import FormField from "@sections/components/FormField";

function RegisterForm({ formData }) {
    const { formField, values, errors, touched } = formData;
    const { firstName, lastName, username, password, repeatPassword, email } = formField;
    const { firstName: firstNameV, lastName: lastNameV, username: usernameV, password: passwordV, repeatPassword: repeatPasswordV, email: emailV } = values;

    values.companyId = "AMS";

    return (
        <MDBox >
            {/* <MDTypography variant="h5" fontWeight="bold">
                Login
            </MDTypography> */}
            <MDBox mt={-0.625} >
                <Grid container spacing={.75} justifyContent="center">


                    <Grid item xs={9} >
                        <FormField
                            type={firstName.type}
                            label={firstName.label}
                            name={firstName.name}
                            value={firstNameV}
                            placeholder={firstName.placeholder}
                            error={errors.firstName && touched.firstName}
                            success={firstNameV.length > 0 && !errors.firstName}
                        />
                    </Grid>


                    <Grid item xs={9} >
                        <FormField
                            type={lastName.type}
                            label={lastName.label}
                            name={lastName.name}
                            value={lastNameV}
                            placeholder={lastName.placeholder}
                            error={errors.lastName && touched.lastName}
                            success={lastNameV.length > 0 && !errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={9} >
                        <FormField
                            type={username.type}
                            label={username.label}
                            name={username.name}
                            value={usernameV}
                            placeholder={username.placeholder}
                            error={errors.username && touched.username}
                            success={usernameV.length > 0 && !errors.username}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <FormField
                            type={password.type}
                            label={password.label}
                            name={password.name}
                            value={passwordV}
                            placeholder={password.placeholder}
                            error={errors.password && touched.password}
                            success={passwordV.length > 0 && !errors.password}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <FormField
                            type={repeatPassword.type}
                            label={repeatPassword.label}
                            name={repeatPassword.name}
                            value={repeatPasswordV}
                            placeholder={repeatPassword.placeholder}
                            error={errors.repeatPassword && touched.repeatPassword}
                            success={repeatPasswordV.length > 0 && !errors.repeatPassword}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <FormField
                            type={email.type}
                            label={email.label}
                            name={email.name}
                            value={emailV}
                            placeholder={email.placeholder}
                            error={errors.email && touched.email}
                            success={emailV.length > 0 && !errors.email}
                        />
                    </Grid>
                </Grid>
            </MDBox>
        </MDBox >
    );
}

// typechecking props for Profile
RegisterForm.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RegisterForm;
