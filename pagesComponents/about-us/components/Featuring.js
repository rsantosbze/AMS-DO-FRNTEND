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

// Material Kit 2 PRO React examples
import DefaultCounterCard from "@structures/Examples/Cards/CounterCards/DefaultCounterCard";

// Images
import sancas from "@assets/images/ams/logos/sancas.png";
import bowen from "@assets/images/ams/logos/bowen2.png";
import bal from "@assets/images/ams/logos/BAL.png";
import becol from "@assets/images/ams/logos/BECOL.png";
import ngc from "@assets/images/ams/logos/NGC.png";
import vodafone from "/assets/images/logos/gray-logos/logo-vodafone.svg";

function Featuring() {
    return (
        <MDBox component="section" pt={4} pb={1}>
            <Container>
                <Grid container spacing={3} sx={{ mb: 5, textAlign: "center" }}
                    justifyContent="center" >
                    <Grid item xs={6} md={12} lg={12}>
                        <MDTypography variant="Heading4" color="dark" opacity={0.8} mt={1} mb={3} textTransform="uppercase" fontWeight="bold">
                            Our Client List
                        </MDTypography>
                    </Grid>

                </Grid>
                <Grid container justifyContent="center" spacing={3} sx={{ mb: 2, textAlign: "center" }} >
                    <Grid item xs={5} md={4} lg={2}>
                        <MDBox component="img" src={sancas.src} alt="coinbase" width="100%" opacity={1} />
                    </Grid>
                    <Grid item xs={5} md={4} lg={2}>
                        <MDBox component="img" src={bowen.src} alt="nasa" width="100%" maxWidth="5rem" opacity={0.9} />
                    </Grid>
                    <Grid item xs={5} md={4} lg={2}>
                        <MDBox component="img" src={bal.src} alt="nasa" width="100%" maxWidth="35rem" opacity={0.9} />
                    </Grid>
                    <Grid item xs={5} md={4} lg={2}>
                        <MDBox component="img" src={becol.src} alt="nasa" width="100%" maxWidth="10rem" opacity={0.9} />
                    </Grid>
                    <Grid item xs={4} md={4} lg={2}>
                        <MDBox component="img" src={ngc.src} alt="nasa" width="100%" maxWidth="15rem" opacity={0.9} />
                    </Grid>


                    {/* <Grid item xs={6} md={4} lg={2}>
                        <MDBox component="img" src={netflix.src} alt="netflix" width="100%" opacity={0.7} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <MDBox component="img" src={pinterest.src} alt="pinterest" width="100%" opacity={0.7} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <MDBox component="img" src={spotify.src} alt="spotify" width="100%" opacity={0.7} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <MDBox component="img" src={vodafone.src} alt="vodafone" width="100%" opacity={0.7} />
                    </Grid> */}
                </Grid>
                {/* <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                    <Grid item xs={12} md={3}>
                        <DefaultCounterCard
                            count={5234}
                            separator=","
                            title="Projects"
                            description="Of “high-performing” level are led by a certified project manager"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DefaultCounterCard
                            count={3400}
                            separator=","
                            suffix="+"
                            title="Hours"
                            description="That meets quality standards required by our users"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DefaultCounterCard
                            count={24}
                            suffix="/7"
                            title="Support"
                            description="Actively engage team members that finishes on time"
                        />
                    </Grid>
                </Grid> */}
            </Container>
        </MDBox >
    );
}

export default Featuring;
