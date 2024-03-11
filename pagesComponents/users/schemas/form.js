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
    formId: "new-user-form",
    formField: {
        firstName: {
            name: "firstName",
            label: "First Name",
            type: "text",
            errorMsg: "First Name is required.",
        },
        lastName: {
            name: "lastName",
            label: "Last Name",
            type: "text",
            errorMsg: "Last Name is required.",
        },
        username: {
            name: "username",
            label: "Username",
            type: "text",
            errorMsg: "Username is required.",
        },
        role: {
            name: "role",
            label: "Role",
            type: "text",
            errorMsg: "Role is required.",
        },
        contactNo: {
            name: "contactNo",
            label: "Contact No",
            type: "text",
            errorMsg: "Contact No. is required.",
        },
        status: {
            name: "status",
            label: "Status",
            type: "text",
            errorMsg: "Status is required.",
        },
        companyId: {
            name: "companyId",
            label: "Company",
            type: "text",
            errorMsg: "Company is required.",
        },
        email: {
            name: "email",
            label: "Email",
            type: "email",
            errorMsg: "Email is required.",
            invalidMsg: "Your Email is invalid",
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
        // companyId: {
        //     name: "companyId",
        //     label: "Company Id",
        //     type: "text",
        //     errorMsg: "Company Id is required.",
        // },

    },
};

export default form;
