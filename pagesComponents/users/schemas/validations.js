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
        firstName,
        lastName,
        username,
        status,
        role,
        contactNo,
        email,
    },
} = checkout;

const validations = [
    Yup.object().shape({
        [firstName.name]: Yup.string().required(firstName.errorMsg),
        [lastName.name]: Yup.string().required(lastName.errorMsg),
        [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
        [contactNo.name]: Yup.string().required(contactNo.errorMsg),
        [status.name]: Yup.string().required(status.errorMsg),
        [role.name]: Yup.string().required(role.errorMsg),
        [username.name]: Yup.string().required(username.errorMsg),
    }),
    Yup.object().shape({
        // [addressType.name]: Yup.string().required(addressType.errorMsg),
        // [streetLine1.name]: Yup.string().required(streetLine1.errorMsg),
        // [city.name]: Yup.string().required(city.errorMsg),
        // [country.name]: Yup.string().required(country.errorMsg)
    }),
];

export const validationsMutate =
    Yup.object().shape({
        [firstName.name]: Yup.string().required(firstName.errorMsg),
        [lastName.name]: Yup.string().required(lastName.errorMsg),
        [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
        [contactNo.name]: Yup.string().required(contactNo.errorMsg),
        [status.name]: Yup.string().required(status.errorMsg),
        [role.name]: Yup.string().required(role.errorMsg),
        [username.name]: Yup.string().required(username.errorMsg),
    })
    ;

export default validations;
