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

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NewAsset page components
import FormField from "../../../../../generalComponents/FormField";
import FormSelect from "../../../../../generalComponents/FormSelect";
import FormDatePicker from "../../../../../generalComponents/FormDatePicker";
import AuthContext from "../../../../../../store/auth-context";

function InvoiceInfo({ formData }) {
    let disabled = false;

    const { user } = useContext(AuthContext);
    const { formField, values, errors, touched, operation, contractors, suppliers, facilityId, assetId } = formData;
    const {
        invoiceNo,
        invoiceInformation,
        serviceReportNo,
        dateOfInvoice,
        invoiceCost,
        contractorId,
        supplierId
    } =
        formField;

    const {
        invoiceNo: invoiceNoV,
        invoiceInformation: invoiceInformationV,
        serviceReportNo: serviceReportNoV,
        dateOfInvoice: dateOfInvoiceV,
        invoiceCost: invoiceCostV,
        contractorId: contractorIdV,
        supplierId: supplierIdV,
    } = values;

    ////////////////////////////////////////////////////

    if (operation === "Add") {
        values.userId = user.userId;
        values.facilityId = facilityId;
        values.assetId = assetId;
        values.companyId = user.companyId;
        values.maintenanceRecordId = "";
    }

    if (operation === "Delete") {
        disabled = true;
    }

    let supplierOptions = [];
    let contractorOptions = [];

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
    /////////////////////////////////////////////////////////////////
    return (
        <MDBox>
            <MDBox mt={1.625}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={invoiceNo.type}
                            label={invoiceNo.label}
                            name={invoiceNo.name}
                            disabled={disabled}
                            value={invoiceNoV}
                            placeholder={invoiceNo.placeholder}
                            error={errors.invoiceNo && touched.invoiceNo}
                            success={invoiceNoV.length > 0 && !errors.invoiceNo}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={invoiceInformation.type}
                            label={invoiceInformation.label}
                            name={invoiceInformation.name}
                            disabled={disabled}
                            value={invoiceInformationV}
                            placeholder={invoiceInformation.placeholder}
                            error={errors.invoiceInformation && touched.invoiceInformation}
                            success={invoiceInformationV.length > 0 && !errors.invoiceInformation}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={serviceReportNo.type}
                            label={serviceReportNo.label}
                            name={serviceReportNo.name}
                            disabled={disabled}
                            value={serviceReportNoV}
                            placeholder={serviceReportNo.placeholder}
                            error={errors.serviceReportNo && touched.serviceReportNo}
                            success={serviceReportNoV.length > 0 && !errors.serviceReportNo}
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


                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormField
                            type={invoiceCost.type}
                            label={invoiceCost.label}
                            name={invoiceCost.name}
                            disabled={disabled}
                            value={invoiceCostV}
                            placeholder={invoiceCost.placeholder}
                            error={errors.invoiceCost && touched.invoiceCost}
                            success={invoiceCostV !== undefined && !errors.invoiceCost}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormDatePicker
                            type={dateOfInvoice.type}
                            label={dateOfInvoice.label}
                            name={dateOfInvoice.name}
                            disabled={disabled}
                            value={dateOfInvoiceV}
                            error={errors.dateOfInvoice && touched.dateOfInvoice}
                            success={dateOfInvoiceV && !errors.dateOfInvoice}
                        />
                    </Grid>
                </Grid>

            </MDBox>
        </MDBox>
    );
}

// typechecking props for UserInfo
InvoiceInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default InvoiceInfo;
