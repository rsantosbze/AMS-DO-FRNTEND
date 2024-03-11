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
        username,
        password,

    },
} = checkout;

const validations = [
    Yup.object().shape({
        [username.name]: Yup.string().required(username.errorMsg),
        [password.name]: Yup.string()
            .required(password.errorMsg)
            .min(4, password.invalidMsg),
    }),
];

export default validations;
