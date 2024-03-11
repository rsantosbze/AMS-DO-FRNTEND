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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

function DefaultCounterCard({ color, count, title, description, ...rest }) {
    return (
        <MDBox p={2} textAlign="center" lineHeight={1}>
            <MDTypography variant="h1" color={color} textGradient>
                <CountUp end={count} duration={1} {...rest} />
            </MDTypography>
            {title && (
                <MDTypography variant="h5" mt={2} mb={1}>
                    {title}
                </MDTypography>
            )}
            {description && (
                <MDTypography variant="body2" color="text">
                    {description}
                </MDTypography>
            )}
        </MDBox>
    );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
    color: "info",
    description: "",
    title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
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
    count: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default DefaultCounterCard;
