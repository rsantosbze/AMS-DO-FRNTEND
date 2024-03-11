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

// react-router-dom components
import Link from "next/link";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

function SimplePricingCard({ variant, color, title, description, price, specifications, action }) {
    let titleColor = "white";
    let priceColor = "white";
    let buttonColor = "white";

    if (variant === "contained") {
        titleColor = color;
        priceColor = color;
        buttonColor = color;
    } else if (variant === "gradient" && color === "light") {
        titleColor = "dark";
        priceColor = "dark";
        buttonColor = "dark";
    }

    const renderSpecifications = specifications.map((specification) => (
        <MDBox key={specification} display="flex" alignItems="center" pb={2}>
            <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="1.5rem"
                height="1.5rem"
                mr={2}
                mt={-0.125}
                lineHeight={0}
            >
                <MDTypography variant="body1" color={titleColor} sx={{ lineHeight: 0 }}>
                    <Icon>done</Icon>
                </MDTypography>
            </MDBox>
            <MDTypography
                variant="button"
                color={
                    variant === "contained" || (variant === "gradient" && color === "light")
                        ? "text"
                        : "white"
                }
                fontWeight="regular"
            >
                {specification}
            </MDTypography>
        </MDBox>
    ));

    return (
        <Card sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <MDBox variant={variant} bgColor={variant === "gradient" ? color : "white"} height="100%">
                <MDBox p={3} lineHeight={1}>
                    <MDTypography variant="h5" fontWeight="bold" color={titleColor} mb={0.5}>
                        {title}
                    </MDTypography>
                    <MDTypography
                        variant="button"
                        color={
                            variant === "contained" || (variant === "gradient" && color === "light")
                                ? "text"
                                : "white"
                        }
                        mb={2}
                    >
                        {description}
                    </MDTypography>
                    <MDTypography variant="h3" color={priceColor} mt={2} mb={1}>
                        {price.value}&nbsp;
                        {price.type && (
                            <MDTypography
                                display="inline"
                                component="small"
                                variant="h6"
                                color={
                                    variant === "contained" || (variant === "gradient" && color === "light")
                                        ? "secondary"
                                        : "white"
                                }
                                sx={{
                                    fontFamily: ({ typography: { h1 } }) => h1.fontFamily,
                                }}
                            >
                                / {price.type}
                            </MDTypography>
                        )}
                    </MDTypography>
                    {action.type === "internal" ? (
                        <MDBox mt={3}>
                            <Link href={action.route}>
                                <MDButton
                                    variant={variant === "gradient" ? "contained" : "gradient"}
                                    size="small"
                                    color={buttonColor}
                                    fullWidth
                                >
                                    {action.label}
                                </MDButton>
                            </Link>

                        </MDBox>
                    ) : (
                        <MDBox mt={3}>
                            <MDButton
                                component="a"
                                href={action.route}
                                target="_blank"
                                rel="noreferrer"
                                variant={variant === "gradient" ? "contained" : "gradient"}
                                size="small"
                                color={buttonColor}
                                fullWidth
                            >
                                {action.label}
                            </MDButton>
                        </MDBox>
                    )}
                </MDBox>
                <Divider
                    light={variant === "gradient" || (variant === "gradient" && color === "light")}
                    sx={{ my: 0, opacity: variant === "gradient" ? 0.5 : 0.25 }}
                />
                <MDBox p={3}>{renderSpecifications}</MDBox>
            </MDBox>
        </Card>
    );
}

// Setting default props for the SimplePricingCard
SimplePricingCard.defaultProps = {
    color: "dark",
    variant: "contained",
};

// Typechecking props for the SimplePricingCard
SimplePricingCard.propTypes = {
    variant: PropTypes.oneOf(["contained", "gradient"]),
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        type: PropTypes.string,
    }).isRequired,
    specifications: PropTypes.arrayOf(PropTypes.string).isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]).isRequired,
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default SimplePricingCard;
