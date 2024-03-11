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

import checkout from "./form";

const {
    formField: {
        invoiceNo,
        invoiceInformation,
        serviceReportNo,
        dateOfInvoice,
        invoiceCost,
        contractorId,
        supplierId

    },
} = checkout;

const initialValues = {
    [invoiceNo.name]: "",
    [invoiceInformation.name]: "",
    [serviceReportNo.name]: "",
    [dateOfInvoice.name]: "",
    [invoiceCost.name]: "",
    [contractorId.name]: "",
    [supplierId.name]: "",
};

export default initialValues;