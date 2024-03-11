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
        assetCode,
        assetName,
        assetType,
        assetDescription,
        dateOfManufacture,
        dateOfInstallation,
        acquisitionCost,
        supplierId,
        contractorId,

    },
} = checkout;

const initialValues = {
    [assetCode.name]: "",
    [assetName.name]: "",
    [assetType.name]: "",
    [acquisitionCost.name]: "",
    [assetDescription.name]: "",
    [dateOfManufacture.name]: "",
    [dateOfInstallation.name]: "",
    [supplierId.name]: "",
    [contractorId.name]: "",
};

export default initialValues;
