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
        streetLine2,
        city,
        country,
        companyId,
        disable
    },
} = checkout;

const initialValues = {
    [organizationName.name]: "",
    [organizationType.name]: "CONTRACTOR",
    [contactPerson.name]: "",
    [contactBusinessNo.name]: "",
    [contactEmail.name]: "",
    [addressType.name]: "BUSINESS",
    [streetLine1.name]: "",
    [streetLine2.name]: "",
    [city.name]: "",
    [country.name]: "",
    [companyId.name]: "",
    [disable.name]: false,


};

export default initialValues;
