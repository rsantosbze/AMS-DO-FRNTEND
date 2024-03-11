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

import * as Yup from "yup";
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

const validations = [
    Yup.object().shape({
        [invoiceNo.name]: Yup.string().required(invoiceNo.errorMsg),
        [invoiceInformation.name]: Yup.string().required(invoiceInformation.errorMsg),
        [serviceReportNo.name]: Yup.string().required(serviceReportNo.errorMsg),
        [contractorId.name]: Yup.string().required(contractorId.errorMsg),
        [supplierId.name]: Yup.string().required(supplierId.errorMsg),
        [invoiceCost.name]: Yup.string().required(invoiceCost.errorMsg),
        [dateOfInvoice.name]: Yup.date()
            .nullable()
            .required(dateOfInvoice.errorMsg)
            .max(new Date(), dateOfInvoice.dateErrorMsg),

    })
];

export default validations;
