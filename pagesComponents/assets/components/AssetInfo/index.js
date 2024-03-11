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

// NewAsset page components
import FormField from "../../../generalComponents/FormField"
import FormSelect from "../../../generalComponents/FormSelect";
import FormDatePicker from "../../../generalComponents/FormDatePicker";
import MDDatePicker from "../../../../components/MDDatePicker";
import AuthContext from "../../../../store/auth-context";
import moment from 'moment';

function AssetInfo({ formData }) {

    let disabled = false;

    const { user } = useContext(AuthContext);
    const { formField, values, errors, touched, operation, suppliers, contractors, assetTypes, facilityId } = formData;
    const {
        assetCode,
        assetName,
        assetDescription,
        dateOfManufacture,
        dateOfInstallation,
        supplierId,
        contractorId,
        assetType,
        acquisitionCost
    } =
        formField;

    const {
        assetCode: assetCodeV,
        assetName: assetNameV,
        assetDescription: assetDescriptionV,
        dateOfManufacture: dateOfManufactureV,
        dateOfInstallation: dateOfInstallationV,
        supplierId: supplierIdV,
        contractorId: contractorIdV,
        assetType: assetTypeV,
        acquisitionCost: acquisitionCostV
    } = values;

    ////////////////////////////////////////////////////

    if (operation === "Add") {
        values.userId = user.userId;
        values.facilityId = facilityId;
        values.companyId = user.companyId;
    }

    if (operation === "Delete") {
        disabled = true;
    }

    let supplierOptions = [];
    let contractorOptions = [];
    let assetTypesOptions = [];

    if (suppliers) {
        supplierOptions = suppliers.map(sup => {
            return { value: sup._id, description: sup.organizationName }
        })
    }
    if (contractors) {
        contractorOptions = contractors.map(cont => {
            return { value: cont._id, description: cont.organizationName }
        })
    }

    if (assetTypes) {
        assetTypesOptions = assetTypes.map(ast => {
            return { value: ast, description: ast }
        })
    }

    return (
        <MDBox>
            <MDBox lineHeight={0}>
                <MDTypography variant="h5">{operation} Asset</MDTypography>

                <MDTypography variant="button" color="text">
                    Mandatory information
                </MDTypography>
            </MDBox>
            <MDBox mt={1.625}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={assetCode.type}
                            label={assetCode.label}
                            name={assetCode.name}
                            disabled={disabled}
                            value={assetCodeV}
                            placeholder={assetCode.placeholder}
                            error={errors.assetCode && touched.assetCode}
                            success={assetCodeV.length > 0 && !errors.assetCode}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={assetName.type}
                            label={assetName.label}
                            name={assetName.name}
                            disabled={disabled}
                            value={assetNameV}
                            placeholder={assetName.placeholder}
                            error={errors.assetName && touched.assetName}
                            success={assetNameV.length > 0 && !errors.assetName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={assetDescription.type}
                            label={assetDescription.label}
                            name={assetDescription.name}
                            disabled={disabled}
                            value={assetDescriptionV}
                            placeholder={assetDescription.placeholder}
                            error={errors.assetDescription && touched.assetDescription}
                            success={assetDescriptionV.length > 0 && !errors.assetDescription}
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormSelect
                            type={supplierId.type}
                            optionvalues={supplierOptions}
                            disabled={disabled}
                            label={supplierId.label}
                            name={supplierId.name}
                            value={supplierIdV}
                            error={errors.supplierId && touched.supplierId}
                            success={supplierIdV.length > 0 && !errors.supplierId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormSelect
                            type={contractorId.type}
                            optionvalues={contractorOptions}
                            disabled={disabled}
                            label={contractorId.label}
                            name={contractorId.name}
                            value={contractorIdV}
                            error={errors.contractorId && touched.contractorId}
                            success={contractorIdV.length > 0 && !errors.contractorId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormSelect
                            type={assetType.type}
                            optionvalues={assetTypesOptions}
                            disabled={disabled}
                            label={assetType.label}
                            name={assetType.name}
                            value={assetTypeV}
                            error={errors.assetType && touched.assetType}
                            success={assetTypeV.length > 0 && !errors.assetType}
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={acquisitionCost.type}
                            label={acquisitionCost.label}
                            name={acquisitionCost.name}
                            disabled={disabled}
                            value={acquisitionCostV}
                            placeholder={acquisitionCost.placeholder}
                            error={errors.acquisitionCost && touched.acquisitionCost}
                            success={acquisitionCostV !== undefined && !errors.acquisitionCost}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormDatePicker
                            type={dateOfManufacture.type}
                            label={dateOfManufacture.label}
                            name={dateOfManufacture.name}
                            disabled={disabled}
                            value={dateOfManufactureV}
                            error={errors.dateOfManufacture && touched.dateOfManufacture}
                            success={dateOfManufactureV && !errors.dateOfManufacture}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <FormDatePicker
                            type={dateOfInstallation.type}
                            label={dateOfInstallation.label}
                            name={dateOfInstallation.name}
                            disabled={disabled}
                            value={dateOfInstallationV}
                            error={errors.dateOfInstallation && touched.dateOfInstallation}
                            success={dateOfInstallationV && !errors.dateOfInstallation}
                        />
                    </Grid>


                </Grid>

            </MDBox>
        </MDBox>
    );
}

// typechecking props for UserInfo
AssetInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AssetInfo;
