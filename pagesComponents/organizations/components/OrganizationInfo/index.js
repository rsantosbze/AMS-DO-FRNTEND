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
import FormField from "../../../generalComponents/FormField";
import FormSelect from "../../../generalComponents/FormSelect";
import { useContext } from "react";
import AuthContext from "../../../../store/auth-context";


function OrganizationInfo({ formData }) {
    let disabled = false;
    const { user } = useContext(AuthContext);
    const { formField, values, errors, touched, operation } = formData;
    const { role, companyId, organizationName, organizationType, contactPerson, contactBusinessNo, contactEmail } =
        formField;

    const {
        organizationName: organizationNameV,
        organizationType: organizationTypeV,
        contactPerson: contactPersonV,
        contactBusinessNo: contactBusinessNoV,
        contactEmail: contactEmailV,
    } = values;

    if (operation === "Add") {
        values.companyId = user.companyId;
        values.role = user.role;
    }

    if (operation === "Delete") {
        disabled = true;
    }


    let options = [];

    if (user.role === 'superuser') {
        options.push({ value: 'COMPANY', description: "COMPANY" });
        options.push({ value: 'MASTER', description: "MASTER" });
    }

    options.push({ value: 'CONTRACTOR', description: "CONTRACTOR" });
    options.push({ value: 'SUPPLIER', description: "SUPPLIER" });
    options.push({ value: 'FACILITY', description: "FACILITY" });


    return (
        <MDBox>
            <MDBox lineHeight={0}>
                <MDTypography variant="h5">Organization Info</MDTypography>
                <MDTypography variant="button" color="text">
                    Mandatory information
                </MDTypography>
            </MDBox>
            <MDBox mt={1.625}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormField
                            type={organizationName.type}
                            label={organizationName.label}
                            name={organizationName.name}
                            disabled={disabled}
                            value={organizationNameV}
                            placeholder={organizationName.placeholder}
                            error={errors.organizationName && touched.organizationName}
                            success={organizationNameV.length > 0 && !errors.organizationName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormSelect
                            type={organizationType.type}
                            optionvalues={options}
                            disabled={disabled}
                            label={organizationType.label}
                            name={organizationType.name}
                            value={organizationTypeV}
                            error={errors.organizationType && touched.organizationType}
                            success={organizationTypeV.length > 0 && !errors.organizationType}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormField
                            type={contactPerson.type}
                            label={contactPerson.label}
                            name={contactPerson.name}
                            disabled={disabled}
                            value={contactPersonV}
                            placeholder={contactPerson.placeholder}
                            error={errors.contactPerson && touched.contactPerson}
                            success={contactPersonV.length > 0 && !errors.contactPerson}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormField
                            type={contactEmail.type}
                            label={contactEmail.label}
                            name={contactEmail.name}
                            disabled={disabled}
                            value={contactEmailV}
                            placeholder={contactEmail.placeholder}
                            error={errors.contactEmail && touched.contactEmail}
                            success={contactEmailV.length > 0 && !errors.contactEmail}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormField
                            type={contactBusinessNo.type}
                            label={contactBusinessNo.label}
                            name={contactBusinessNo.name}
                            disabled={disabled}
                            value={contactBusinessNoV}
                            placeholder={contactBusinessNo.placeholder}
                            error={errors.contactBusinessNo && touched.contactBusinessNo}
                            success={contactBusinessNoV.length > 0 && !errors.contactBusinessNo}
                        />
                    </Grid>

                </Grid>
            </MDBox>
        </MDBox>
    );
}

// typechecking props for UserInfo
OrganizationInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default OrganizationInfo;
