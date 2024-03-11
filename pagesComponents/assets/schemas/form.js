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
    formId: "new-asset-form",
    formField: {
        assetCode: {
            name: "assetCode",
            label: "Asset Code",
            type: "text",
            errorMsg: "Asset Code is required.",
        },
        assetName: {
            name: "assetName",
            label: "Asset Name",
            type: "text",
            errorMsg: "Asset Name is required.",
        },
        assetDescription: {
            name: "assetDescription",
            label: "Asset Description",
            type: "text",
            errorMsg: "Asset Description is required.",
        },
        assetType: {
            name: "assetType",
            label: "Asset Type",
            type: "text",
            errorMsg: "Asset Type is required.",
        },
        acquisitionCost: {
            name: "acquisitionCost",
            label: "Acquisition Cost",
            type: "number",
            errorMsg: "Acquisition Cost is required.",
        },
        dateOfManufacture: {
            name: "dateOfManufacture",
            label: "Date Of Manufacture",
            placeholder: "Date Of Manufacture",
            type: "datetime",
            errorMsg: "Date Of Manufacture is required.",
            dateErrorMsg: "Date of Manufacture must be earlier than today",
        },
        dateOfInstallation: {
            name: "dateOfInstallation",
            label: "Date Of Installation",
            placeholder: "Date Of Installation",
            type: "datetime",
            errorMsg: "Date Of Installation is required.",
            dateErrorMsg: "Date of Installation must be earlier than today",
            dateErrorMsg2: "Installation cannot be before Manufacture",
        },
        supplierId: {
            name: "supplierId",
            label: "Supplier",
            type: "text",
            errorMsg: "Supplier is required.",
        },
        contractorId: {
            name: "contractorId",
            label: "Contractor",
            type: "text",
            errorMsg: "Contractor is required.",
        },



    },
};

export default form;
