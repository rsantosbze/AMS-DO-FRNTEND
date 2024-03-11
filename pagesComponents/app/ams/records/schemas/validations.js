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
        maintenanceDescription,
        dateOfMaintenance,
        // files
    },
} = checkout;

const validations = [
    Yup.object().shape({
        [maintenanceDescription.name]: Yup.string().required(maintenanceDescription.errorMsg),
        // [supplierId.name]: Yup.string().required(supplierId.errorMsg),
        // [assetName.name]: Yup.string().required(assetName.errorMsg),
        // [assetDescription.name]: Yup.string().required(assetDescription.errorMsg),
        [dateOfMaintenance.name]: Yup.date()
            .nullable()
            .required(dateOfMaintenance.errorMsg)
            .max(new Date(), dateOfMaintenance.dateErrorMsg),
        // [dateOfInstallation.name]: Yup.date()
        //     .nullable()
        //     .required(dateOfInstallation.errorMsg)
        //     .max(new Date(), dateOfInstallation.dateErrorMsg)
        //     .min(Yup.ref(dateOfManufacture.name)
        //         , dateOfInstallation.dateErrorMsg2)
    }),
    Yup.object().shape({
        // [files.name]: Yup.mixed().required(files.errorMsg),
        // [streetLine1.name]: Yup.string().required(streetLine1.errorMsg),
        // [city.name]: Yup.string().required(city.errorMsg),
        // [country.name]: Yup.string().required(country.errorMsg)
    }),
];


export default validations;
