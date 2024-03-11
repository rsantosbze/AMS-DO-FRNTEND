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

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "../../structures/Navbars/DefaultNavbar";
import DefaultFooter from "../../structures/DefaultFooter";
import Footer from "../../structures/PageFooter";
// About Us page sections
import Information from "../../pagesComponents/about-us/components/Information";
import Team from "../../pagesComponents/about-us/components/Team";
import Featuring from "../../pagesComponents/about-us/components/Featuring";
import Newsletter from "../../pagesComponents/about-us/components/Newsletter";
import PageLayout from "../../structures/LayoutContainers/PageLayout";
// Routes
import pageRoutes from "../../routes/page-logged-out.routes";
import footerRoutes from "../../routes/footer.routes";
// Images
import bgImage from "/assets/images/ams/landing.jpg"

function AboutUs() {
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
            strings: ["Electrical Engineering", "Operations Management", "Project Management", "Software Engineering"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 200,
            startDelay: 500,
            loop: true,
        });

        return () => typedJS.destroy();
    }, []);

    return (
        <> <PageLayout>
            <DefaultNavbar
                routes={pageRoutes}
                // action={{
                //     type: "external",
                //     route: "https://www.creative-tim.com/product/material-kit-pro-react",
                //     label: "buy now",
                //     color: "default",
                // }}

                dark
                sticky
            />
            <MDBox
                ref={headerRef}
                minHeight="65vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
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
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MDTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["2xl"],
                                },
                            })}
                        >
                            Experience in  <span ref={typedJSRef} />
                        </MDTypography>
                        <MDTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["md"],
                                },
                            })}
                        >
                            We&apos;re constantly trying to innovate and break the traditional barriers by actualizing our dreams. If you
                            have the opportunity, do so with us!
                        </MDTypography>
                        {/* <MDButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                            create account
                        </MDButton>
                        <MDTypography variant="h6" color="white" mt={8} mb={1}>
                            Find us on
                        </MDTypography>
                        <MDBox display="flex" justifyContent="center" alignItems="center">
                            <MDTypography component="a" variant="body1" color="white" href="#" mr={3}>
                                <i className="fab fa-facebook" />
                            </MDTypography>
                            <MDTypography component="a" variant="body1" color="white" href="#" mr={3}>
                                <i className="fab fa-instagram" />
                            </MDTypography>
                            <MDTypography component="a" variant="body1" color="white" href="#" mr={3}>
                                <i className="fab fa-twitter" />
                            </MDTypography>
                            <MDTypography component="a" variant="body1" color="white" href="#">
                                <i className="fab fa-google-plus" />
                            </MDTypography>
                        </MDBox> */}
                    </Grid>
                </Container>
            </MDBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Team />
                {/* <Information />

                <Featuring /> */}
                {/* <Newsletter /> */}
            </Card>
            <MDBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />

            </MDBox>
        </PageLayout>
        </>
    );
}

export default AboutUs;
