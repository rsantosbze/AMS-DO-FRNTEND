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

// react-router-dom components
import Link from "next/link";
import MuiLink from "@mui/material/Link";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

function DefaultFooter({ content }) {
    const { brand, socials, menus, copyright } = content;

    return (
        <MDBox component="footer" >
            <Container >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} md={3} sx={{ mb: 0 }}>
                        <MDBox>
                            <Link href={brand.route}>
                                <MDBox component="img" src={brand.image.src} alt={brand.name} maxWidth="5rem" mb={2} />
                            </Link>
                            <MDTypography sx={{ color: "amsColors1.main" }} variant="h6">{brand.name}</MDTypography>
                        </MDBox>
                        <MDBox display="flex" alignItems="center" mt={3}>
                            {socials.map(({ icon, link }, key) => (
                                <MDTypography
                                    key={link}
                                    component="a"
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="h5"
                                    color="dark"
                                    opacity={0.8}
                                    mr={key === socials.length - 1 ? 0 : 2.5}
                                >
                                    {icon}
                                </MDTypography>
                            ))}
                        </MDBox>
                    </Grid>
                    {menus.map(({ name: title, items }) => (
                        <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
                            <MDTypography
                                display="block"
                                variant="button"
                                fontWeight="bold"
                                textTransform="capitalize"
                                mb={1}
                                sx={{ color: "amsColors1.main" }}
                            >
                                {title}
                            </MDTypography>
                            <MDBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                                {items.map(({ name, route, href }) => (
                                    <MDBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                                        {href ? (
                                            <MDTypography
                                                component="a"
                                                href={href}
                                                target="_blank"
                                                sx={{ color: "amsColors1.main" }}
                                                rel="noreferrer"
                                                variant="button"
                                                fontWeight="regular"
                                                textTransform="capitalize"
                                            >
                                                {name}
                                            </MDTypography>
                                        ) : (
                                            <Link href={route} passHref>
                                                <MDTypography
                                                    component="a"
                                                    href={route}
                                                    sx={{ color: "amsColors1.main" }}
                                                    variant="button"
                                                    fontWeight="regular"
                                                    textTransform="capitalize"
                                                >
                                                    {name}
                                                </MDTypography>

                                            </Link>



                                        )}
                                    </MDBox>
                                ))}
                            </MDBox>
                        </Grid>
                    ))}
                    <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
                        {copyright}
                    </Grid>
                </Grid>
            </Container>
        </MDBox>
    );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
    content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
