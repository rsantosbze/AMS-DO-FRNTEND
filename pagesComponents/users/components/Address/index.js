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
import Autocomplete from "@mui/material/Autocomplete";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";

// NewUser page components
import FormField from "../../../generalComponents/FormField";

function Address({ formData }) {
    let disabled = false;
    const { formField, values, errors, touched, operation } = formData;
    const { streetLine1, streetLine2, city, country } = formField;
    const {
        streetLine1: streetLine1V,
        streetLine2: streetLine2V,
        city: cityV,
        country: countryV,
    } = values;

    if (operation === "Delete") {
        disabled = true;
    }


    return (
        <MDBox>
            <MDTypography variant="h5" fontWeight="bold">
                Address
            </MDTypography>
            <MDBox mt={1.625}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormField
                            type={streetLine1.type}
                            label={streetLine1.label}
                            name={streetLine1.name}
                            disabled={disabled}
                            value={streetLine1V}
                            placeholder={streetLine1.placeholder}
                            error={errors.streetLine1 && touched.streetLine1}
                            success={streetLine1V && streetLine1V.length > 0 && !errors.streetLine1}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MDBox mt={-1.625}>
                            <FormField
                                type={streetLine2.type}
                                label={streetLine2.label}
                                disabled={disabled}
                                name={streetLine2.name}
                                value={streetLine2V}
                                placeholder={streetLine2.placeholder}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormField
                            type={city.type}
                            label={city.label}
                            name={city.name}
                            disabled={disabled}
                            value={cityV}
                            placeholder={city.placeholder}
                            error={errors.city && touched.city}
                            success={cityV && cityV.length > 0 && !errors.city}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormField
                            type={country.type}
                            label={country.label}
                            name={country.name}
                            disabled={disabled}
                            value={countryV}
                            placeholder={country.placeholder}
                            error={errors.country && touched.country}
                            success={countryV && countryV.length > 0 && !errors.country}
                        />
                    </Grid>
                </Grid>
            </MDBox>
        </MDBox>
    );
}

// typechecking props for Address
Address.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
