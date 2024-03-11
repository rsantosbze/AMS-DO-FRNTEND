/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";

// Material Kit 2 PRO React examples
import DefaultInfoCard from "../../../structures/Examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
    return (
        <MDBox component="section" py={3} mt={8}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard
                            color="warning"
                            icon="grid_view"
                            title="Components"
                            description="Able to Manage Organizations, Assets, Records, Invoices"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard
                            color="warning"
                            icon="schedule"
                            title="Maintenance Scheduler"
                            description="Schedule the Maintenance of Assets"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard
                            color="warning"
                            icon="cloud"
                            title="Leverage the Cloud"
                            description="Access your information from anywhere."
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard
                            color="warning"
                            icon="textsms"
                            title="Communicate"
                            description="Be able to communicate with you support team."
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard
                            color="warning"
                            icon="assessment"
                            title="Generate Reports"
                            description="Track the management of your Asset."
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard
                            color="warning"
                            icon="attach_money"
                            title="Finanical Management"
                            description="Manage the financial lifecycle of your assets."
                            direction="center"
                        />
                    </Grid>
                </Grid>
            </Container>
        </MDBox>
    );
}

export default Information;
