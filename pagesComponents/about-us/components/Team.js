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
import HorizontalTeamCard from "../../../structures/Examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import rolando from "@assets/images/ams/rolando-image.png";
import team2 from "/assets/images/bruce-mars.jpg";
import team3 from "/assets/images/ivana-squares.jpg";
import team4 from "/assets/images/ivana-square.jpg";


function Team() {
    return (
        <MDBox
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-1}
        >
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} sx={{ mb: 6 }}>
                        <MDTypography variant="h3" color="white">
                            The Team
                        </MDTypography>
                        <MDTypography variant="body2" color="white" opacity={0.8}>
                            There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                            at. That&apos;s my skill.
                        </MDTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <MDBox mb={1}>
                            <HorizontalTeamCard
                                image={rolando}
                                displayOther
                                name="Rolando Santos - MEng., MBA, MSSE"
                                position={{ color: "info", label: "Owner/Lead Engineer" }}
                                description="A dynamic and competent engineering professional with over 25 years working experience in commercial, industrial, and electric utility engineering. Highly knowledgeable in commercial and industrial electrical systems, control equipment, industrial equipment installation and maintenance, electric transmission and distribution systems including substations at the design, implementation, commissioning, operations, and maintenance levels. A futuristic thinker with a strong academic and practical background in the commercial, industrial, and electric utility industry, who marvels the examination of existing, new, and emerging technologies and their application in industries for problem-solving, decision-making, and improvement of efficiency, safety, and environmental sustainability. An individual who thrives in challenging working environments and enjoys being part of a successful and productive team whose goal is to contribute to the growth and development of organizations and the environment in which they operate. "
                            />

                        </MDBox>
                    </Grid>
                    {/* <Grid item xs={12} lg={6}>
                        <MDBox mb={1}>
                            <HorizontalTeamCard
                                image={team2}
                                name="William Pearce"
                                position={{ color: "info", label: "Boss" }}
                                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                            />
                        </MDBox>
                    </Grid> */}
                    {/*  <Grid item xs={12} lg={6}>
                        <MDBox mb={{ xs: 1, lg: 0 }}>
                            <HorizontalTeamCard
                                image={team3}
                                name="Ivana Flow"
                                position={{ color: "info", label: "Athlete" }}
                                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MDBox mb={{ xs: 1, lg: 0 }}>
                            <HorizontalTeamCard
                                image={team4}
                                name="Marquez Garcia"
                                position={{ color: "info", label: "JS Developer" }}
                                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                            />
                        </MDBox>
                    </Grid> */}
                </Grid>
            </Container>
        </MDBox>
    );
}

export default Team;
