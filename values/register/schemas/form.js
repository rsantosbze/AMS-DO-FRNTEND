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

        password: {
            name: "password",
            label: "Password",
            type: "password",
            errorMsg: "Password is required.",
            invalidMsg: "Your password should be more than 6 characters.",
        },
        repeatPassword: {
            name: "repeatPassword",
            label: "Repeat Password",
            type: "password",
            errorMsg: "Password is required.",
            invalidMsg: "Your password doesn't match.",
        },
        username: {
            name: "username",
            label: "Username",
            type: "text",
            errorMsg: "Username is required.",
        },
        email: {
            name: "email",
            label: "Email Address",
            type: "email",
            errorMsg: "Email address is required.",
            invalidMsg: "Your email address is invalid",
        },

    },
};

export default form;
