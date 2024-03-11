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

import Link from "next/link";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

function SimpleInfoCard({ color, icon, title, description, direction }) {
    let alignment = "flex-start";

    if (direction === "center") {
        alignment = "center";
    } else if (direction === "right") {
        alignment = "flex-end";
    }

    return (
        <MDBox
            display="flex"
            flexDirection="column"
            alignItems={alignment}
            textAlign={direction}
            p={direction === "center" ? 2 : 0}
            lineHeight={1}
        >
            <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="3rem"
                height="3rem"
                borderRadius="xl"
                variant="gradient"
                color="white"
                bgColor={color}
                coloredShadow={color}
            >
                {typeof icon === "string" ? <Icon fontSize="small">{icon}</Icon> : icon}
            </MDBox>
            <MDTypography display="block" variant="5" fontWeight="bold" mt={2.5} mb={1.5}>
                {title}
            </MDTypography>
            <MDTypography display="block" variant="body2" color="text">
                {description}
            </MDTypography>
        </MDBox>
    );
}

// Setting default props for the SimpleInfoCard
SimpleInfoCard.defaultProps = {
    color: "info",
    direction: "left",
};

// Typechecking props for the SimpleInfoCard
SimpleInfoCard.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]),
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(["left", "right", "center"]),
};

export default SimpleInfoCard;
