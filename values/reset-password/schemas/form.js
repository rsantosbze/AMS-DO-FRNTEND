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
    formId: "reset-password-form",
    formField: {
        temppassword: {
            name: "temppassword",
            label: "Temporary Password",
            type: "text",
            errorMsg: "Temporary Password is required.",
        },

        newpassword: {
            name: "newpassword",
            label: "New Password",
            type: "password",
            errorMsg: "New Password is required.",
            invalidMsg: "Your New Password should be more than 6 characters.",
        },
        verifypassword: {
            name: "verifypassword",
            label: "Verify Password",
            type: "password",
            errorMsg: "Verify Password is required.",
            invalidMsg: "Your Verify Password should be more than 6 characters.",
            invalidMsg2: "Your password doesn't match.",
        },

    },
};

export default form;
