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

import { useState, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DefaultNavbar from "../../../structures/Navbars/DefaultNavbar"

// NextJS Material Dashboard 2 PRO page layout routes
import pageRoutes from "../../../routes/page.routes"
import pageLoggedOutRoutes from "../../../routes/page-logged-out.routes";
import AuthContext from "../../../store/auth-context";
// Images
import bgImage from "/assets/images/ams/landing.jpg";

function PricingHeader({ tabValue, tabHandler, children }) {
    const { isLoggedIn, user } = useContext(AuthContext);
    let selectedRoutes = isLoggedIn ? pageRoutes : pageLoggedOutRoutes;

    return (
        <>
            <DefaultNavbar
                routes={selectedRoutes}
                // action={{
                //     type: "external",
                //     route:
                //         "https://creative-tim.com/product/nextjs-material-dashboard-pro",
                //     label: "buy now",
                //     color: "light",
                // }}
                transparent
                light
            />
            <MDBox
                position="relative"
                minHeight="50vh"
                height="40vh"
                borderRadius="xl"
                m={2}
                pt={2}
                sx={{
                    backgroundImage: ({
                        functions: { linearGradient, rgba },
                        palette: { black },
                    }) =>
                        `${linearGradient(
                            rgba(black.main, 0.25),
                            rgba(black.main, 0.25),
                        )}, url(${bgImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ position: "relative", py: 22, textAlign: "center" }}
                >
                    <Grid item xs={11} lg={5}>
                        <MDBox mb={1}>
                            <MDTypography variant="h2" color="white" fontWeight="bold">
                                Welcome to the Asset Management!!
                            </MDTypography>
                        </MDBox>
                        <MDBox mb={2}>
                            <MDTypography upperCase variant="body2" color="white" fontWeight="light">
                                A One Stop Solution For The Management Of All Your Assets!!!

                            </MDTypography>
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <Grid container sx={{ px: 6, my: 0 }}>
                <Grid item xs={12}>
                    <Card sx={{ mt: -16 }}>
                        {/* <MDBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto" mt={6}>
                            <AppBar position="static">
                                <Tabs value={tabValue} onChange={tabHandler}>
                                    <Tab
                                        id="monthly"
                                        label={
                                            <MDBox py={0.5} px={2} color="inherit">
                                                Monthly
                                            </MDBox>
                                        }
                                    />
                                    <Tab
                                        id="annual"
                                        label={
                                            <MDBox py={0.5} px={2} color="inherit">
                                                Annual
                                            </MDBox>
                                        }
                                    />
                                </Tabs>
                            </AppBar>
                        </MDBox> */}
                        {children}
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

// Typechecking props for the Header
PricingHeader.propTypes = {
    // tabValue: PropTypes.number.isRequired,
    // tabHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default PricingHeader;
