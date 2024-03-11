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
        firstName,
        lastName,
        username,
        email,
        role,
        status,
        contactNo,
        streetLine1,
        streetLine2,
        city,
        country,
        companyId,
        companyName,
        creatorRole,
    },
} = checkout;

const initialValues = {
    [firstName.name]: "",
    [lastName.name]: "",
    [username.name]: "",
    [contactNo.name]: "",
    [email.name]: "",
    [role.name]: "",
    [status.name]: "",
    [companyId.name]: "",
    [streetLine1.name]: "",
    [streetLine2.name]: "",
    [city.name]: "",
    [country.name]: "",


};

export default initialValues;
