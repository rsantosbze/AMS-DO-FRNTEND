/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

function HorizontalTeamCard({ image, name, position, description, displayOther }) {

    let diplomas = displayOther ?

        <MDBox pt={1} pb={1} sx={{ mx: "auto", textAlign: "center" }}>
            <MDTypography variant="h5" color="text" sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("xl")]: {
                    fontSize: size["md"],
                },
            })}>
                - Masters of Engineering - Electrical and Electronic
            </MDTypography >
            <MDTypography variant="h6" color={position.color} ml={5}>
                University of Nottingam - 1996
            </MDTypography>
            <MDTypography variant="h5" color="text" sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("xl")]: {
                    fontSize: size["md"],
                },
            })}>
                - Masters in Business Administration - Operations Management
            </MDTypography >
            <MDTypography variant="h6" color={position.color} ml={5}>
                Regis University - 2015
            </MDTypography>
            <MDTypography variant="h5" color="text" sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("xl")]: {
                    fontSize: size["md"],
                },
            })}>
                - Masters of Science - Software Engineering

            </MDTypography >
            <MDTypography variant="h6" color={position.color} ml={5}>
                Regis University - 2022
            </MDTypography>
        </MDBox>


        : '';
    return (
        <Card sx={{ mt: 3 }}>
            <Grid container>
                <Grid item xs={6} md={6} lg={3} sx={{ mt: -6 }}>
                    <MDBox width="120%" pt={2} pb={1} px={4}>
                        <MDBox
                            component="img"
                            src={image.src}
                            alt={name}
                            width="90%"
                            borderRadius="md"
                            shadow="lg"
                        />
                    </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                    <MDBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                        <MDTypography variant="h5">{name}</MDTypography>
                        <MDTypography variant="h6" color={position.color} mb={1}>
                            {position.label}
                        </MDTypography>
                        <MDTypography variant="body2" color="text">
                            {description}
                        </MDTypography>
                        {diplomas}
                    </MDBox>
                </Grid>
            </Grid>
        </Card>
    );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light",
        ]),
        label: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
