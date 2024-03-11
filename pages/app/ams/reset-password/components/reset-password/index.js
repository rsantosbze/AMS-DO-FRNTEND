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

function ResetPasswordForm({ formData }) {
    const { formField, values, errors, touched, inAppRequest } = formData;
    const { temppassword, newpassword, verifypassword } = formField;
    const { temppassword: temppasswordV, newpassword: newpasswordV, verifypassword: verifypasswordV } = values;

    // values.temppassword = code ? code : '';

    return (
        <MDBox >
            {/* <MDTypography variant="h5" fontWeight="bold">
                Login
            </MDTypography> */}
            <MDBox mt={0.625} >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={9} >
                        <FormField
                            type={temppassword.type}
                            label={!inAppRequest ? temppassword.label : "Existing  Password"}
                            name={temppassword.name}
                            value={temppasswordV}
                            placeholder={temppassword.placeholder}
                            error={errors.temppassword && touched.temppassword}
                            success={temppasswordV.length > 0 && !errors.temppassword}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <FormField
                            type={newpassword.type}
                            label={newpassword.label}
                            name={newpassword.name}
                            value={newpasswordV}
                            placeholder={newpassword.placeholder}
                            error={errors.newpassword && touched.newpassword}
                            success={newpasswordV.length > 0 && !errors.newpassword}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <FormField
                            type={verifypassword.type}
                            label={verifypassword.label}
                            name={verifypassword.name}
                            value={verifypasswordV}
                            placeholder={verifypassword.placeholder}
                            error={errors.verifypassword && touched.verifypassword}
                            success={verifypasswordV.length > 0 && !errors.verifypassword}
                        />
                    </Grid>
                </Grid>
            </MDBox>
        </MDBox>
    );
}

// typechecking props for Profile
ResetPasswordForm.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ResetPasswordForm;
