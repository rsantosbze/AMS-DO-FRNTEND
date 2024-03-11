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
        temppassword,
        newpassword,
        verifypassword
    },
} = checkout;

const validations = [
    Yup.object().shape({
        [temppassword.name]: Yup.string().required(temppassword.errorMsg),
        [newpassword.name]: Yup.string()
            .required(newpassword.errorMsg)
            .min(4, newpassword.invalidMsg),
        [verifypassword.name]: Yup.string()
            .required(verifypassword.errorMsg)
            .min(4, verifypassword.invalidMsg)
            .oneOf([Yup.ref(newpassword.name), null], verifypassword.invalidMsg2),
    }),
];

export default validations;
