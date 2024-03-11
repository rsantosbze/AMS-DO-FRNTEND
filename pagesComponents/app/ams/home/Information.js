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
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "./SimpleInfoCardHome";

function Information() {
    const action1 = { route: "/app/ams/organizations/list-organizations", color: "error", label: "List Organizations" };
    const action2 = { route: "/app", color: "info", label: "User Management" };
    const action3 = { route: "/app", color: "warning", label: "Want to Learn More" };
    const action4 = { route: "/app", color: "success", label: "Want to Learn More" };
    return (
        <MDBox component="section" py={{ xs: 6, md: 2 }}>
            <Container>
                <Grid container item xs={12} justifyContent="center">
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{ ml: { xs: 0, md: "auto" }, mr: { xs: 0, md: 4 }, mb: { xs: 4, md: 0 } }}
                    >
                        <Stack spacing={{ xs: 4, md: 8 }}>
                            <SimpleInfoCard
                                action={action1}
                                icon="assignment"
                                color="error"
                                title="Organization Management"
                                description="Lengthy experience in the management of Construction, Industrial and Utility projects."
                            />
                            <SimpleInfoCard
                                action={action2}
                                icon="engineering"
                                title="Engineering Design"
                                description="Extensive experience in the design of electrical systems - Commercial, Industrial, and Utility Grade Systems."
                            />
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{ mr: { xs: 0, md: "auto" }, ml: { xs: 0, md: 4 }, mb: { xs: 4, md: 0 } }}
                    >
                        <Stack spacing={{ xs: 4, md: 8 }}>
                            <SimpleInfoCard
                                action={action3}
                                icon="code_sharp"
                                color="warning"
                                title="Software Solutions"
                                description="Development of unique Software Architectures and Solutions using React/Angular, AWS, Kubernetes, GraphQL, C#"
                            />
                            <SimpleInfoCard
                                action={action4}
                                icon="manage_account"
                                color="success"
                                title="Consultancy"
                                description="Complete array of support services, Operations Management, Engineering Consultancy and Technical Support."
                            />
                        </Stack>
                    </Grid>



                </Grid>
            </Container>
        </MDBox>
    );
}

export default Information;
