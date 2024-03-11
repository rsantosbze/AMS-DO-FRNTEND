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

const form = {
    formId: "new-invoice-form",
    formField: {
        invoiceNo: {
            name: "invoiceNo",
            label: "Invoice No",
            type: "text",
            errorMsg: "Invoice No is required.",
        },
        invoiceInformation: {
            name: "invoiceInformation",
            label: "Invoice Information",
            type: "text",
            errorMsg: "Invoice Information is required.",
        },
        serviceReportNo: {
            name: "serviceReportNo",
            label: "Service Report No.",
            type: "text",
            errorMsg: "Service Report Number is required.",
        },
        invoiceCost: {
            name: "invoiceCost",
            label: "Invoice Cost",
            type: "number",
            errorMsg: "Invoice Cost is required.",
        },
        dateOfInvoice: {
            name: "dateOfInvoice",
            label: "Date Of Invoice",
            placeholder: "Date Of Invoice",
            type: "datetime",
            errorMsg: "Date Of Invoiceis required.",
            dateErrorMsg: "Date Of Invoice must be earlier than today",
        },
        contractorId: {
            name: "contractorId",
            label: "Contractor",
            type: "text",
            errorMsg: "Contractor is required.",
        },
        supplierId: {
            name: "supplierId",
            label: "Supplier",
            type: "text",
            errorMsg: "Supplier is required.",
        },



    },
};

export default form;
