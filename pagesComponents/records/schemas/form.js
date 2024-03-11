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
    formId: "new-record-form",
    formField: {
        maintenanceDescription: {
            name: "maintenanceDescription",
            label: "Maintenance Description",
            type: "text",
            errorMsg: "Maintenance Description is required.",
        },
    
        dateOfMaintenance: {
            name: "dateOfMaintenance",
            label: "Date Of Maintenance",
            placeholder: "Date Of Maintenance",
            type: "datetime",
            errorMsg: "Date Of Maintenance is required.",
            dateErrorMsg: "Date Of Maintenance must be earlier than today",
        },

    },
};

export default form;
