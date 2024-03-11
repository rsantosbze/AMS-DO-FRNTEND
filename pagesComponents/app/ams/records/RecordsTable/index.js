import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import moment from 'moment';
// ///////////////Records List Details for Table.
import { fillButtons, AMSButton, AMSMessage } from "@pagesCompponents/generalComponents/HelperFunctions";
import DataTable from "@structures/Tables/DataTable";

function RecordsTable({ data, operationHandler, showTable }) {

    let tableInfo = {};

    let displayNoRecordMessage = AMSMessage("There are no Records. Please add!", "add", "success", operationHandler);

    function formatDateForInput(storedDate) {
        return moment(storedDate).format('DD-MMM-YYYY')
    }


    let createData = (id, description, date) => {
        return { description, date, actions: fillButtons(id, operationHandler) };
    };

    tableInfo = {
        columns: [
            { Header: "Mainteance Description", accessor: "description" },
            { Header: "Maintenance Date", accessor: "date" },
            { Header: "actions", accessor: "actions" },

        ], rows: []
    };

    if (data.length !== 0) {
        data.map((rec) => {
            tableInfo.rows.push(createData(
                rec._id,
                rec.maintenanceDescription,
                formatDateForInput(rec.dateOfMaintenance)
            ));
        });
    }
    return showTable ? (data.length != 0 ?
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={8} >
                <Card >
                    <MDBox p={3} lineHeight={1} textAlign={"center"}>
                        <MDTypography variant="h3" fontWeight="medium" textAlign="center" textTransform="uppercase" color="info">
                            List of records
                        </MDTypography>
                        {AMSButton("add", "success", operationHandler)}
                    </MDBox>

                    <DataTable table={tableInfo} />
                </Card>
            </Grid>
        </Grid> : displayNoRecordMessage) : '';
}

export default RecordsTable;
