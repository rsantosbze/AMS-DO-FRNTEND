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
    formId: "login-form",
    formField: {
        username: {
            name: "username",
            label: "Username",
            type: "text",
            errorMsg: "Username is required.",
        },

        password: {
            name: "password",
            label: "Password",
            type: "password",
            errorMsg: "Password is required.",
            invalidMsg: "Your password should be more than 6 characters.",
        },

    },
};

export default form;
