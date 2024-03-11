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
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
// import MDTypography from "components/MDTypography";

import DefaultNavbar from "@structures/Navbars/DefaultNavbar";
import DefaultFooter from "@structures/DefaultFooter";
import PageLayout from "@structures/LayoutContainers/PageLayout";

// DesktopApp page sections
import Banner from "@pagesComponents/services/project-managment/Banner";
import Information from "@pagesComponents/services/project-managment/Information";
import Features from "@pagesComponents/app/sections/Features";
import Testimonials from "@pagesComponents/app/sections/Testimonials";
import Pricing from "@pagesComponents/app/sections/Pricing";

import rolando from "@assets/images/ams/rolando-image.png";
import canningline from "@assets/images/ams/projects/canning-line.png";
import reeflofts from "@assets/images/ams/projects/reef-lofts.png";

// Routes
import pageRoutes from "@routes/page-logged-out.routes";
import footerRoutes from "@routes/footer.routes";

function AMSApp() {
    return (
        <>
            <PageLayout>
                <DefaultNavbar
                    routes={pageRoutes}
                    // action={{
                    //     type: "external",
                    //     route: "https://www.creative-tim.com/product/material-kit-pro-react",
                    //     label: "buy now",
                    //     color: "warning",
                    // }}
                    sticky

                />
                <MDBox bgColor="white">
                    <MDBox
                        minHeight="50vh"
                        width="100%"
                        sx={{
                            backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                                linearGradient(gradients.dark.main, gradients.dark.state),
                        }}
                    />
                    <Banner headline="Belize Brewing Canning Line" topShift="20" color="primary" year="2022" location="LadyVille, Belize" image={canningline}>
                        Project Management and Technical Consultancy of a newly installed 15K per hour canning line for the production of Coca Cola and Belikin Products.
                    </Banner>
                    <Banner headline="Reef Lofts" topShift="-10" color="warning" year="2017" location="San Pedro Ambergris, Belize" image={reeflofts}>
                        Project Management and Technical Consultancy of a 5 floor multi-million Short Term Rental condominium complex with 4th floor seaview pool and 360 degree glass floor to ceiling penthouse on the 5th Floor.
                    </Banner>
                    {/* <Information /> */}
                    {/* <Features />
                    <Testimonials />
                    <Pricing /> */}
                    <MDBox pt={6} px={1} mt={6}>
                        <DefaultFooter content={footerRoutes} />
                    </MDBox>
                </MDBox>
            </PageLayout>
        </>
    );
}

export default AMSApp;
