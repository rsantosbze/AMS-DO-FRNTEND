/* eslint-disable react/jsx-no-duplicate-props */
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
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";
import MDButton from "/components/MDButton";

// Images
import macbook from "/assets/images/macbook.png"

function Newsletter() {
    return (
        <MDBox component="section" pt={6} my={6}>
            <Container>
                <Grid container alignItems="center">
                    <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
                        <MDTypography variant="h4">Be the first to see the news</MDTypography>
                        <MDTypography variant="body2" color="text" mb={3}>
                            Your company may not be in the software business, but eventually, a software company
                            will be in your business.
                        </MDTypography>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <MDInput type="email" label="Email Here..." fullWidth />
                            </Grid>
                            <Grid item xs={4}>
                                <MDButton variant="gradient" color="info" sx={{ height: "100%" }}>
                                    Subscribe
                                </MDButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
                        <MDBox position="relative">
                            <MDBox component="img" src={macbook.src} alt="macbook" width="100%" />
                        </MDBox>
                    </Grid>
                </Grid>
            </Container>
        </MDBox>
    );
}

export default Newsletter;
