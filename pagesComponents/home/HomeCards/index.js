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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";

// NextJS Material Dashboard 2 PRO examples
import DefaultPricingCard from "/examples/Cards/PricingCards/DefaultPricingCard";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";
// NextJS Material Dashboard 2 PRO context
import { useMaterialUIController } from "/context";

function HomeCards({ prices }) {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;
    const [starter, premium, enterprise] = prices;
    return (
        <MDBox position="relative" zIndex={10} mt={8} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} lg={4}>
                    <DefaultInfoCard
                        color="success"
                        icon="assignment"
                        title="Project Management"
                        description="Great investments in equipment and operational
                                assets represent a sizeable amount of the capital invested by
                                organizations. Being able to maximize these capital investments
                                presents great financial opportunities. It is difficult to track
                                asset efficiencies and operational expenses during the useful
                                life of equipment. The system will allow the user to be able
                                record asset information into the system for maintenance
                                monitoring and expense tracking."
                    />
                    {/* <DefaultPricingCard
                        color={darkMode ? "dark" : "white"}
                        badge={{ color: darkMode ? "warning" : "light", label: "starter" }}
                        price={{ currency: "$", value: starter, type: "mo" }}
                        specifications={[
                            { label: "2 team members", includes: true },
                            { label: "20GB Cloud storage", includes: true },
                            { label: "Integration help", includes: false },
                            { label: "Sketch Files", includes: false },
                            { label: "API Access", includes: false },
                            { label: "Complete documentation", includes: false },
                        ]}
                        action={{
                            type: "internal",
                            route: "/",
                            color: darkMode ? "warning" : "dark",
                            label: "join",
                        }}
                        shadow={darkMode}
                    /> */}
                </Grid>
                <Grid item xs={12} lg={4}>
                    <DefaultInfoCard
                        color="dark"
                        icon="engineering"
                        title="Engineering"
                        description="Great investments in equipment and operational
                                assets represent a sizeable amount of the capital invested by
                                organizations. Being able to maximize these capital investments
                                presents great financial opportunities. It is difficult to track
                                asset efficiencies and operational expenses during the useful
                                life of equipment. The system will allow the user to be able
                                record asset information into the system for maintenance
                                monitoring and expense tracking."
                    />
                    {/* <DefaultPricingCard
                        color="dark"
                        badge={{ color: "info", label: "premium" }}
                        price={{ currency: "$", value: premium, type: "mo" }}
                        specifications={[
                            { label: "10 team members", includes: true },
                            { label: "40GB Cloud storage", includes: true },
                            { label: "Integration help", includes: true },
                            { label: "Sketch Files", includes: true },
                            { label: "API Access", includes: false },
                            { label: "Complete documentation", includes: false },
                        ]}
                        action={{
                            type: "internal",
                            route: "/",
                            color: "info",
                            label: "try premium",
                        }}
                    /> */}
                </Grid>
                <Grid item xs={12} lg={4}>
                    <DefaultInfoCard
                        color="error"
                        icon="wysiwyg"
                        title="Software Solutions Development"
                        description="Great investments in equipment and operational
                                assets represent a sizeable amount of the capital invested by
                                organizations. Being able to maximize these capital investments
                                presents great financial opportunities. It is difficult to track
                                asset efficiencies and operational expenses during the useful
                                life of equipment. The system will allow the user to be able
                                record asset information into the system for maintenance
                                monitoring and expense tracking."
                    />
                    {/*  <DefaultPricingCard
                        color={darkMode ? "dark" : "white"}
                        badge={{
                            color: darkMode ? "warning" : "light",
                            label: "enterprise",
                        }}
                        price={{ currency: "$", value: enterprise, type: "mo" }}
                        specifications={[
                            { label: "Unlimited team members", includes: true },
                            { label: "100GB Cloud storage", includes: true },
                            { label: "Integration help", includes: true },
                            { label: "Sketch Files", includes: true },
                            { label: "API Access", includes: true },
                            { label: "Complete documentation", includes: true },
                        ]}
                        action={{
                            type: "internal",
                            route: "/",
                            color: darkMode ? "warning" : "dark",
                            label: "join",
                        }}
                        shadow={darkMode}
                    /> */}
                </Grid>
            </Grid>
        </MDBox>
    );
}

// Typechecking props for the PricingCards
HomeCards.propTypes = {
    prices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeCards;
