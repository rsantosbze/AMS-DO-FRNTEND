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
import FormField from "../../../generalComponents/FormField"
import FormSelect from "../../../generalComponents/FormSelect";
import { useContext } from "react";
import AuthContext from "../../../../store/auth-context";

function UserInfo({ formData }) {
    let disabled = false;

    const { user } = useContext(AuthContext);
    const { formField, values, errors, touched, operation, companies } = formData;
    const { firstName, lastName, username, email, role, status, contactNo, companyId } =
        formField;

    const {
        firstName: firstNameV,
        lastName: lastNameV,
        username: usernameV,
        email: emailV,
        role: roleV,
        status: statusV,
        contactNo: contactNoV,
        companyId: companyIdV,
    } = values;

    ////////////////////////////////////////////////////

    if (operation === "Add") {
        values.creatorRole = user.role;
        values.role !== "admin" ? values.organizationName = user.organizationName : '';
        values.role !== "admin" ? values.companyId = user.companyId : '';
    }

    if (operation === "Delete") {
        disabled = true;
    }

    let optionsStatus = [{ value: true, description: "ACTIVE" }, { value: false, description: "NOT ACTIVE" }];
    let options = [];

    if (user.role === 'superuser') {
        options.push({ value: 'superuser', description: "SUPERUSER" });
        options.push({ value: 'admin', description: "ADMIN" });
    }

    options.push({ value: 'user', description: "USER" });
    options.push({ value: 'contractor', description: "CONTRACTOR" });

    let displayCompaniesSelect = (
        values.role === "admin" ? <FormSelect
            type={companyId.type}
            optionvalues={[...companies.map(comp => {
                return { value: comp._id, description: comp.organizationName }
            }), { value: user.companyId, description: "MASTER'S COMPANY" }]}
            disabled={disabled}
            label={companyId.label}
            name={companyId.name}
            value={companyIdV}
            error={errors.companyId && touched.companyId}
            success={companyIdV.length > 0 && !errors.companyId}
        /> : ''

    );

    return (
        <MDBox>
            <MDBox lineHeight={0}>
                <MDTypography variant="h5">User Info</MDTypography>
                <MDTypography variant="button" color="text">
                    Mandatory information
                </MDTypography>
            </MDBox>
            <MDBox mt={1.625}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={firstName.type}
                            label={firstName.label}
                            name={firstName.name}
                            disabled={disabled}
                            value={firstNameV}
                            placeholder={firstName.placeholder}
                            error={errors.firstName && touched.firstName}
                            success={firstNameV.length > 0 && !errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={lastName.type}
                            label={lastName.label}
                            name={lastName.name}
                            disabled={disabled}
                            value={lastNameV}
                            placeholder={lastName.placeholder}
                            error={errors.lastName && touched.lastName}
                            success={lastNameV.length > 0 && !errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={username.type}
                            label={username.label}
                            name={username.name}
                            disabled={disabled}
                            value={usernameV}
                            placeholder={username.placeholder}
                            error={errors.username && touched.username}
                            success={usernameV.length > 0 && !errors.username}
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormSelect
                            type={role.type}
                            optionvalues={options}
                            disabled={disabled}
                            label={role.label}
                            name={role.name}
                            value={roleV}
                            error={errors.role && touched.role}
                            success={roleV.length > 0 && !errors.role}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={email.type}
                            label={email.label}
                            name={email.name}
                            disabled={disabled}
                            value={emailV}
                            placeholder={email.placeholder}
                            error={errors.email && touched.email}
                            success={emailV.length > 0 && !errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={contactNo.type}
                            label={contactNo.label}
                            name={contactNo.name}
                            disabled={disabled}
                            value={contactNoV}
                            placeholder={contactNo.placeholder}
                            error={errors.contactNo && touched.contactNo}
                            success={contactNoV.length > 0 && !errors.contactNo}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        {displayCompaniesSelect}
                    </Grid>
                    <Grid item xs={12} sm={4} justifyContent="center"
                        alignItems="center"
                    >
                        <FormSelect
                            type={status.type}
                            optionvalues={optionsStatus}
                            disabled={disabled}
                            label={status.label}
                            name={status.name}
                            value={statusV}
                            error={errors.status && touched.status}
                            success={statusV.length > 0 && !errors.status}
                        />
                    </Grid>

                </Grid>

            </MDBox>
        </MDBox>
    );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
