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

import { useEffect, useRef } from "react";

// rellax
import Rellax from "rellax";
// typed-js
import * as Typed from "typed.js";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "../../structures/Navbars/DefaultNavbar";
import DefaultFooter from "../../structures/DefaultFooter";
// Coworking page sections
import Information from "../../pagesComponents/landing/sections/Information";
import Featuring from "../../pagesComponents/about-us/components/Featuring";
// import Testimonials from "pages/LandingPages/Coworking/sections/Testimonials";
// import AboutUs from "pages/LandingPages/Coworking/sections/AboutUs";
import Places from "../../pagesComponents/landing/sections/Places";

// Routes
import pageRoutes from "../../routes/page-logged-out.routes";
import footerRoutes from "../../routes/footer.routes";
import PageLayout from "../../structures/LayoutContainers/PageLayout";

// Images
import bgImage from "/assets/images/ams/landing.jpg";

function Home() {
    const headerRef = useRef(null);
    const typedJSRef = useRef(null);

    // Setting up rellax
    useEffect(() => {
        const parallax = new Rellax(headerRef.current, {
            speed: -20,
        });

        return () => parallax.destroy();
    }, []);

    // Setting up typedJS
    useEffect(() => {
        const typedJS = new Typed(typedJSRef.current, {
            strings: [" Your Perfect Partner to Help You Grow.", "Let's do it Together!!!"],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 300,
            startDelay: 200,
            loop: true,
        });

        return () => typedJS.destroy();
    }, []);
    return (
        <>
            <PageLayout>
                <DefaultNavbar
                    routes={pageRoutes}
                    // action={{
                    //     type: "external",
                    //     route: "https://www.creative-tim.com/product/material-kit-pro-react",
                    //     label: "buy now",
                    //     color: "info",
                    // }}
                    sticky

                    white
                />
                <MDBox
                    ref={headerRef}
                    minHeight="55vh"
                    width="100%"
                    sx={{
                        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.5),
                                rgba(gradients.dark.state, 0.5)
                            )}, url(${bgImage.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <Container>
                        <Grid
                            container
                            item
                            xs={12}
                            md={12}
                            justifyContent={{ xs: "center", md: "center" }}
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            <MDTypography
                                variant="h2"
                                sx={[{ color: 'amsColors1.main' }, ({ breakpoints, typography: { size } }) => ({
                                    [breakpoints.down("md")]: {
                                        fontSize: size["3xl"],
                                    }
                                })]}
                            >
                                <span ref={typedJSRef} />
                            </MDTypography>

                        </Grid>
                    </Container>
                </MDBox>
                <Card
                    sx={{
                        p: 2,
                        mx: { xs: 2, lg: 10 },
                        mt: -20,
                        mb: 4,
                        backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <Information />
                    <Featuring />
                    {/* {/* <Testimonials />
        <AboutUs /*} */}
                    {/* <Places /> */}
                    {/* <Container>
                        <MDBox
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderRadius="xl"
                            my={10}
                            p={6}
                            sx={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)",
                            }}
                        >
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={12} md={8} lg={6}>
                                    <MDTypography variant="h5" color="white" fontWeight="bold">
                                        100% - Customers Satisfied, 100% - Return Customers.
                                    </MDTypography>
                                </Grid>
                                <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
                                    <MDBox width="12rem" ml="auto">
                                        <MDButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                                            Let's Get Started!
                                        </MDButton>
                                    </MDBox>
                                </Grid>
                            </Grid>
                        </MDBox>
                    </Container> */}
                </Card>
                <MDBox pt={6} px={1} mt={6}>
                    <DefaultFooter content={footerRoutes} />
                </MDBox>
            </PageLayout>
        </>
    );
}

export default Home;
