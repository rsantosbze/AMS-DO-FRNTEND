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

import { useContext } from "react";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { parseISO } from 'date-fns';

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Newrecord page components
import FormField from "../../../generalComponents/FormField"
import FormSelect from "../../../generalComponents/FormSelect";
import FormDatePicker from "../../../generalComponents/FormDatePicker";
import AuthContext from "../../../../store/auth-context";
import moment from 'moment';
// import { useLazyQuery } from '@apollo/client';
// import * as statements from '../../../../sections/graphql/users/grapql-statements';

function RecordInfo({ formData }) {

    let disabled = false;
    const { user } = useContext(AuthContext);
    const { formField, values, errors, touched, operation, facilityId, assetId } = formData;
    const {
        maintenanceDescription,
        dateOfMaintenance,
    } =
        formField;

    const {
        maintenanceDescription: maintenanceDescriptionV,
        dateOfMaintenance: dateOfMaintenanceV,
    } = values;

    ////////////////////////////////////////////////////

    if (operation === "Add") {
        values.userId = user.userId;
        values.facilityId = facilityId;
        values.companyId = user.companyId;
        values.assetId = assetId;
        values.invoiceId = "";
    }

    if (operation === "Delete") {
        disabled = true;
    }

    let options = [];

    // if (suppliers) {
    //     options = suppliers.map(sup => {
    //         return { value: sup._id, description: sup.organizationName }
    //     })
    // }

    return (
        <MDBox>
            <MDBox lineHeight={0}>
                <MDTypography variant="h5">{operation} record</MDTypography>

                <MDTypography variant="button" color="text">
                    Mandatory information
                </MDTypography>
            </MDBox>
            <MDBox mt={1.625}>
                <Grid container spacing={3} justifyContent={"center"}
                    alignItems={"center"}>
                    <Grid item xs={12} sm={5}>
                        <FormField
                            type={maintenanceDescription.type}
                            label={maintenanceDescription.label}
                            name={maintenanceDescription.name}
                            disabled={disabled}
                            value={maintenanceDescriptionV}
                            placeholder={maintenanceDescription.placeholder}
                            error={errors.maintenanceDescription && touched.maintenanceDescription}
                            success={maintenanceDescriptionV.length > 0 && !errors.maintenanceDescription}
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={3} justifyContent={"center"}
                    alignItems={"center"}>

                    <Grid item xs={12} sm={5}>
                        <FormDatePicker
                            type={dateOfMaintenance.type}
                            label={dateOfMaintenance.label}
                            name={dateOfMaintenance.name}
                            disabled={disabled}
                            value={dateOfMaintenanceV}
                            error={errors.dateOfMaintenance && touched.dateOfMaintenance}
                            success={dateOfMaintenanceV && !errors.dateOfMaintenance}
                        />
                    </Grid>

                </Grid>

            </MDBox>
        </MDBox>
    );
}

// typechecking props for UserInfo
RecordInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RecordInfo;
