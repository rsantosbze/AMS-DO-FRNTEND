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

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
import moment from 'moment';
import Grid from "@mui/material/Grid";

function Header({ asset, operationHandler, listHandler }) {
    function formatDateForInput(storedDate) {
        return moment(storedDate).format('DD-MMM-YYYY')
    }
    return (
        <>
            <Grid container >
                <Grid item xs={12} md={4} xl={4}>
                    <MDBox >
                        <MDBox>
                            <MDBox mb={1}>
                                <MDTypography variant="h6" fontWeight="medium">
                                    Asset Details
                                </MDTypography>
                            </MDBox>
                            <MDTypography component="p" variant="button" color="text">
                                Asset Code no. <b>{asset.assetCode}</b>
                            </MDTypography>
                            <MDTypography
                                component="p"
                                variant="button"
                                fontWeight="regular"
                                color="text"
                            >
                                Asset Name: <b>{asset.assetName}</b>
                            </MDTypography>
                        </MDBox>
                    </MDBox >
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <MDBox>
                        <MDBox mb={1}>
                            <MDTypography variant="h6" fontWeight="medium">
                                Acquistion Cost: ${asset.acquisitionCost}
                            </MDTypography>
                        </MDBox>
                        <MDTypography
                            component="p"
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Manufacture Date: <b>{formatDateForInput(asset.dateOfManufacture)}</b>
                        </MDTypography>
                        <MDTypography component="p" variant="button" color="text">
                            Installation Date. <b>{formatDateForInput(asset.dateOfInstallation)}</b>
                        </MDTypography>
                    </MDBox>
                </Grid>
                <Grid container item xs={12} md={2} xl={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item >
                        <MDButton variant="gradient" color="dark" onClick={() => operationHandler("", "Add")}>
                            Add Invoice
                        </MDButton>
                    </Grid>

                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4} xl={4}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                        <MDBox>
                            <MDBox mt={1}>
                                <MDTypography variant="h6" fontWeight="medium">
                                    Description:
                                </MDTypography>
                            </MDBox>
                            <MDTypography component="p" variant="button" color="text">
                                <b>{asset.assetDescription}</b>
                            </MDTypography>

                        </MDBox>
                    </MDBox>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="end">
                        <MDBox>
                            <MDBox mt={1}>
                                <MDTypography variant="h6" fontWeight="medium">
                                    Asset Type:
                                </MDTypography>
                            </MDBox>
                            <MDTypography component="p" variant="button" color="text">
                                <b>{asset.assetType}</b>
                            </MDTypography>

                        </MDBox>
                    </MDBox>
                </Grid>
                <Grid container item xs={12} md={4} xl={4} justifyContent="center"
                    alignItems="center">
                    <MDButton variant="gradient" color="primary" onClick={listHandler}>
                        Display Invoices
                    </MDButton>
                </Grid>

            </Grid>
        </>
    );
}

export default Header;
