import Card from "@mui/material/Card";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import moment from 'moment';
// ///////////////Invoice List Details for Table.
import { fillButtons, AMSMessage } from "../../../generalComponents/HelperFunctions";

import DataTable from "../../../../structures/Tables/DataTable";

function InvoiceTable({ data, operationHandler, showTable }) {

    let tableInfo = {};

    let displayNoInvoiceMessage = AMSMessage("There are no Invoices. Please add!", "add", "success", operationHandler);

    function formatDateForInput(storedDate) {
        return moment(storedDate).format('DD-MMM-YYYY')
    }


    let createData = (id, invoiceNo, date, cost, serviceReportNo) => {
        return { invoiceNo, date, cost, serviceReportNo, actions: fillButtons(id, operationHandler) };
    };

    tableInfo = {
        columns: [
            { Header: "invoiceNo", accessor: "invoiceNo" },
            { Header: "date", accessor: "date" },
            { Header: "cost", accessor: "cost" },
            { Header: "Service Report No.", accessor: "serviceReportNo" },
            { Header: "actions", accessor: "actions" },

        ], rows: []
    };

    if (data.length !== 0) {
        data.map((inv) => {
            tableInfo.rows.push(createData(
                inv._id,
                inv.invoiceNo,
                formatDateForInput(inv.dateOfInvoice),
                inv.invoiceCost,
                inv.serviceReportNo,
            ));
        });
    }
    /////////////////////////////////////////////////////
    return showTable ? (showTable && data.length != 0 ?
        <Card >
            <MDBox p={2} lineHeight={1} textAlign={"center"}>
                <MDTypography variant="h3" fontWeight="medium" textAlign="center" textTransform="uppercase" color="info">
                    List of Invoices
                </MDTypography>
            </MDBox>
            <DataTable table={tableInfo} />
        </Card> : displayNoInvoiceMessage) : '';

}
export default InvoiceTable;