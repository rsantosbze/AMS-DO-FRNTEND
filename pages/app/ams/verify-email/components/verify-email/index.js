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

// Reset Password page components
import FormField from "@pagesComponents/generalComponents/FormField";

function EmailVerifyForm({ formData }) {
    const { formField, values, errors, touched, code } = formData;
    const { verifyCode } = formField;
    const { verifyCode: verifyCodeV } = values;


    return (
        <MDBox >
            {/* <MDTypography variant="h5" fontWeight="bold">
                Login
            </MDTypography> */}
            <MDBox mt={0.625} >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={9} >
                        <FormField
                            type={verifyCode.type}
                            label={verifyCode.label}
                            name={verifyCode.name}
                            value={verifyCodeV}
                            placeholder={verifyCode.placeholder}
                            error={errors.verifyCode && touched.verifyCode}
                            success={verifyCodeV.length > 0 && !errors.verifyCode}
                        />
                    </Grid>

                </Grid>
            </MDBox>
        </MDBox>
    );
}

// typechecking props for Profile
EmailVerifyForm.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EmailVerifyForm;
