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

function Banner({ location, topShift, headline, description, color, children, year, image }) {
    const router = useRouter();
    return (
        <MDBox
            variant="gradient"
            bgColor={color}
            position="relative"
            borderRadius="xl"
            mx={{ xs: 2, xl: 3, xxl: 16 }}
            mt={-topShift}
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
                    <Grid item xs={12} md={7} lg={6} py={{ xs: 0, sm: 6 }} mr="auto" position="relative">
                        <MDTypography variant="h2" color="dark" mb={1}>
                            {headline}
                        </MDTypography>
                        <MDTypography variant="body1" color="dark" mb={1}>
                            {location}
                        </MDTypography>
                        <MDTypography variant="body1" color="white" mb={6}>
                            {children}
                        </MDTypography>
                        <MDTypography variant="body1" color="white" mb={6}>
                            {year}
                        </MDTypography>
                        {/* <MDButton variant="gradient" color="dark" onClick={() => router.push('/app/ams/login')}>
                            Login
                        </MDButton> */}
                        {/* <MDButton variant="text" color="white" sx={{ ml: 1 }}>
                            Read more
                        </MDButton> */}
                    </Grid>
                    <Grid item xs={12} position="absolute" left="60%" mr={-32} width="65%">
                        <MDBox
                            component="img"
                            src={image.src}
                            alt="macbook"
                            width="55%"
                            display={{ xs: "none", md: "block" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MDBox>
    );
}

export default Banner;
