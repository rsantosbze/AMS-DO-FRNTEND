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
        assetCode,
        assetName,
        assetType,
        assetDescription,
        dateOfManufacture,
        dateOfInstallation,
        supplierId,
        contractorId,
        acquisitionCost
    },
} = checkout;

const validations = [
    Yup.object().shape({
        [assetCode.name]: Yup.string().required(assetCode.errorMsg),
        [assetType.name]: Yup.string().required(assetType.errorMsg),
        [supplierId.name]: Yup.string().required(supplierId.errorMsg),
        [contractorId.name]: Yup.string().required(contractorId.errorMsg),
        [assetName.name]: Yup.string().required(assetName.errorMsg),
        [acquisitionCost.name]: Yup.string().required(acquisitionCost.errorMsg),
        [assetDescription.name]: Yup.string().required(assetDescription.errorMsg),
        [dateOfManufacture.name]: Yup.date()
            .nullable()
            .required(dateOfManufacture.errorMsg)
            .max(new Date(), dateOfManufacture.dateErrorMsg),
        [dateOfInstallation.name]: Yup.date()
            .nullable()
            .required(dateOfInstallation.errorMsg)
            .max(new Date(), dateOfInstallation.dateErrorMsg)
            .min(Yup.ref(dateOfManufacture.name)
                , dateOfInstallation.dateErrorMsg2)
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
        [assetCode.name]: Yup.string().required(assetCode.errorMsg),
        [assetName.name]: Yup.string().required(assetName.errorMsg),
        [assetDescription.name]: Yup.string().required(assetDescription.errorMsg),
        [dateOfManufacture.name]: Yup.date()
            .nullable()
            .required(dateOfManufacture.errorMsg)
            .max(new Date(), dateOfManufacture.dateErrorMsg),
        [dateOfInstallation.name]: Yup.date()
            .nullable()
            .required(dateOfInstallation.errorMsg)
            .max(new Date(), dateOfInstallation.dateErrorMsg)
            .min(Yup.ref(dateOfManufacture.name)
                , dateOfInstallation.dateErrorMsg2)
    })
    ;

export default validations;
