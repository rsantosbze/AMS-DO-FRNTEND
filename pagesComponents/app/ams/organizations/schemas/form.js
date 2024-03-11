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
    formId: "new-organization-form",
    formField: {
        organizationName: {
            name: "organizationName",
            label: "Organization Name",
            type: "text",
            errorMsg: "Organization Name is required.",
        },
        organizationType: {
            name: "organizationType",
            label: "Organization Type",
            type: "text",
            errorMsg: "Organization Type is required.",
        },
        contactPerson: {
            name: "contactPerson",
            label: "Contact Person",
            type: "text",
            errorMsg: "Contact Person is required.",
        },
        contactBusinessNo: {
            name: "contactBusinessNo",
            label: "Contact Business No",
            type: "text",
            errorMsg: "Contact Business No. is required.",
        },
        contactEmail: {
            name: "contactEmail",
            label: "Contact Email",
            type: "email",
            errorMsg: "Email address is required.",
            invalidMsg: "Your email address is invalid",
        },
        addressType: {
            name: "addressType",
            label: "Address Type",
            type: "password",
            errorMsg: "Address Type is required.",
        },
        streetLine1: {
            name: "streetLine1",
            label: "Street Line 1",
            type: "text",
            errorMsg: "Street Line 1 is required.",

        },
        streetLine2: {
            name: "streetLine2",
            label: "Street Line 2",
            type: "text",

        },
        city: {
            name: "city",
            label: "City",
            type: "text",
            errorMsg: "City is required.",
        },
        country: {
            name: "country",
            label: "Country",
            type: "text",
            errorMsg: "Country is required.",
        },
        companyId: {
            name: "companyId",
            label: "Company Id",
            type: "text",
            errorMsg: "Company Id is required.",
        },
        disable: {
            name: "disable",
            label: "Disable Organization",
            type: "checkbox",
        },

    },
};

export default form;
