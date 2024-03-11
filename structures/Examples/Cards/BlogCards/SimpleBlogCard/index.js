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

// react-router components
import { Link } from "next/link";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

function SimpleBlogCard({ image, title, description, action }) {
    return (
        <Card>
            <MDBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                <MDBox
                    component="img"
                    src={image}
                    alt={title}
                    borderRadius="lg"
                    shadow="md"
                    width="100%"
                    position="relative"
                    zIndex={1}
                />
                <MDBox
                    borderRadius="lg"
                    shadow="md"
                    width="100%"
                    height="100%"
                    position="absolute"
                    left={0}
                    top={0}
                    sx={{
                        backgroundImage: `url(${image})`,
                        transform: "scale(0.94)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                    }}
                />
            </MDBox>
            <MDBox p={3} mt={-2}>
                <MDTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                    {title}
                </MDTypography>
                <MDBox mt={1} mb={3}>
                    <MDTypography variant="body2" component="p" color="text">
                        {description}
                    </MDTypography>
                </MDBox>
                {action.type === "external" ? (
                    <MDButton
                        component={MuiLink}
                        href={action.route}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        size="small"
                        color={action.color ? action.color : "dark"}
                    >
                        {action.label}
                    </MDButton>
                ) : (
                    <MDButton
                        component={Link}
                        to={action.route}
                        variant="outlined"
                        size="small"
                        color={action.color ? action.color : "dark"}
                    >
                        {action.label}
                    </MDButton>
                )}
            </MDBox>
        </Card>
    );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]).isRequired,
        route: PropTypes.string.isRequired,
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
};

export default SimpleBlogCard;
