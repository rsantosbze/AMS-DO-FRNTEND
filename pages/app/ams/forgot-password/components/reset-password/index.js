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

function ForgotPasswordForms({ formData }) {
    const { formField, values, errors, touched, inAppRequest } = formData;
    const { identity } = formField;
    const { identity: identityV } = values;


    return (
        <MDBox >

            <MDBox mt={0.625} >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={9} >
                        <FormField
                            type={identity.type}
                            label={identity.label}
                            name={identity.name}
                            value={identityV}
                            placeholder={identity.placeholder}
                            error={errors.identity && touched.identity}
                            success={identityV.length > 0 && !errors.identity}
                        />
                    </Grid>
                </Grid>
            </MDBox>
        </MDBox>
    );
}

// typechecking props for Profile
ForgotPasswordForms.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ForgotPasswordForms;
