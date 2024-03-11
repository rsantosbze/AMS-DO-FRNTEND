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

import { useRouter } from 'next/router';
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MDTypography from "/components/MDTypography";

// Images
import bgPattern from "/assets/images/shapes/pattern-lines.svg";
import laptop from "/assets/images/macbook-2.png";

function Banner() {
    const router = useRouter();
    return (
        <MDBox
            variant="gradient"
            bgColor="warning"
            position="relative"
            borderRadius="xl"
            mx={{ xs: 2, xl: 3, xxl: 16 }}
            mt={-32}
            py={13}
            px={3}
            sx={{ overflow: "hidden" }}
        >
            <MDBox
                component="img"
                src={bgPattern.src}
                alt="pattern-lines"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                opacity={0.6}
            />
            <Container sx={{ position: "relative" }}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={7} lg={5} py={{ xs: 0, sm: 6 }} mr="auto" position="relative">
                        <MDTypography variant="h2" color="dark" mb={1}>
                            Asset Management System
                        </MDTypography>
                        <MDTypography variant="body1" color="white" mb={6}>
                            Great investments in equipment and operational
                            assets represent a sizeable amount of the capital invested by
                            organizations. Being able to maximize these capital investments
                            presents great financial opportunities. It is difficult to track
                            asset efficiencies and operational expenses during the useful
                            life of equipment. The system will allow the user to be able
                            record asset information into the system for maintenance
                            monitoring and expense tracking.
                        </MDTypography>
                        <MDButton variant="gradient" color="dark" onClick={() => router.push('/app/ams/login')}>
                            Login
                        </MDButton>
                        {/* <MDButton variant="text" color="white" sx={{ ml: 1 }}>
                            Read more
                        </MDButton> */}
                    </Grid>
                    <Grid item xs={12} position="absolute" left="50%" mr={-32} width="75%">
                        <MDBox
                            component="img"
                            src={laptop.src}
                            alt="macbook"
                            width="100%"
                            display={{ xs: "none", md: "block" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MDBox>
    );
}

export default Banner;
