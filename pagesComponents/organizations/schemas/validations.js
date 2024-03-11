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
        organizationName,
        organizationType,
        contactPerson,
        contactBusinessNo,
        contactEmail,
        addressType,
        streetLine1,
        city,
        country,
    },
} = checkout;

const validations = [
    Yup.object().shape({
        [organizationName.name]: Yup.string().required(organizationName.errorMsg),
        [organizationType.name]: Yup.string().required(organizationType.errorMsg),
        [contactEmail.name]: Yup.string().required(contactEmail.errorMsg).email(contactEmail.invalidMsg),
        [contactBusinessNo.name]: Yup.string().required(contactBusinessNo.errorMsg),
        [contactPerson.name]: Yup.string().required(contactPerson.errorMsg),
    }),
    Yup.object().shape({
        [addressType.name]: Yup.string().required(addressType.errorMsg),
        [streetLine1.name]: Yup.string().required(streetLine1.errorMsg),
        [city.name]: Yup.string().required(city.errorMsg),
        [country.name]: Yup.string().required(country.errorMsg)
    }),
];

export const validationsMutate = 
    Yup.object().shape({
        [organizationName.name]: Yup.string().required(organizationName.errorMsg),
        [organizationType.name]: Yup.string().required(organizationType.errorMsg),
        [contactEmail.name]: Yup.string().required(contactEmail.errorMsg).email(contactEmail.invalidMsg),
        [contactBusinessNo.name]: Yup.string().required(contactBusinessNo.errorMsg),
        [contactPerson.name]: Yup.string().required(contactPerson.errorMsg),
        [addressType.name]: Yup.string().required(addressType.errorMsg),
        [streetLine1.name]: Yup.string().required(streetLine1.errorMsg),
        [city.name]: Yup.string().required(city.errorMsg),
        [country.name]: Yup.string().required(country.errorMsg)
    })
;

export default validations;
