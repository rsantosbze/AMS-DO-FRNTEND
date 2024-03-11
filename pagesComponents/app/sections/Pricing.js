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
import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Material Kit 2 PRO React examples
import SimplePricingCard from "../../../structures/Examples/Cards/PricingCards/SimplePricingCard";

function Pricing() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabType = (event, newValue) => setActiveTab(newValue);

    return (
        <MDBox component="section" py={{ xs: 0, md: 12 }}>
            <Container>
                <Grid container item xs={12} justifyContent="center" md={8} mx="auto" textAlign="center">
                    <MDTypography variant="h3">Pick the best plan for you</MDTypography>
                    <MDTypography variant="body2" color="text">
                        You have Free Unlimited Updates and Premium Support on each package.
                    </MDTypography>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={10}
                    lg={8}
                    justifyContent="center"
                    textAlign="center"
                    mx="auto"
                    mt={6}
                >
                    <AppBar position="static">
                        <Tabs value={activeTab} onChange={handleTabType}>
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
                </Grid>
                <Grid container spacing={3} mt={6}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <SimplePricingCard
                            color="dark"
                            title="Starter"
                            description="Free access for 2 members"
                            price={{ value: "$199", type: "year" }}
                            action={{ type: "internal", route: "/", label: "buy now" }}
                            specifications={["Complete documentation", "Working materials in Sketch"]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <SimplePricingCard
                            color="dark"
                            title="Pro"
                            description="Free access for 30 members"
                            price={{ value: "$299", type: "year" }}
                            action={{ type: "internal", route: "/", label: "buy now" }}
                            specifications={[
                                "Complete documentation",
                                "Working materials in Sketch",
                                "2GB cloud storage",
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <SimplePricingCard
                            variant="gradient"
                            color="dark"
                            title="Premium"
                            description="Free access for 200 members"
                            price={{ value: "$499", type: "year" }}
                            action={{ type: "internal", route: "/", label: "buy now" }}
                            specifications={[
                                "Complete documentation",
                                "Working materials in Sketch",
                                "20GB cloud storage",
                                "100 team members",
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <SimplePricingCard
                            color="dark"
                            title="Enterprise"
                            description="Free access for all members"
                            price={{ value: "$899", type: "year" }}
                            action={{ type: "internal", route: "/", label: "buy now" }}
                            specifications={[
                                "Complete documentation",
                                "Working materials in Sketch",
                                "100GB cloud storage",
                                "500 team members",
                                "Premium support",
                            ]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MDBox>
    );
}

export default Pricing;
