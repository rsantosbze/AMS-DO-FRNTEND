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
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MDBox from "/components/MDBox";
import MDAvatar from "/components/MDAvatar";
import MDTypography from "/components/MDTypography";

function TransparentTeamCard({ image, name, position, description, socials }) {
    return (
        <MDBox display="flex" flexDirection="column">
            <MDBox position="relative" width="max-content">
                <MDAvatar
                    variant="rounded"
                    size="xxl"
                    src={image}
                    alt={name}
                    sx={{
                        borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
                        position: "relative",
                        zIndex: 2,
                    }}
                />
                <MDBox
                    borderRadius="lg"
                    shadow="md"
                    width="100%"
                    height="100%"
                    position="absolute"
                    left={0}
                    top="3%"
                    zIndex={1}
                    sx={{
                        backgroundImage: `url(${image.src})`,
                        transform: "scale(0.87)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                    }}
                />
            </MDBox>
            <MDBox py={2}>
                <MDTypography variant="h5">{name}</MDTypography>
                <MDTypography variant="body2" color="text" mb={2}>
                    {position}
                </MDTypography>
                <MDTypography variant="body2" color="text" mb={2}>
                    {description}
                </MDTypography>
                <Stack direction="row" spacing={4} mt={3}>
                    {socials}
                </Stack>
            </MDBox>
        </MDBox>
    );
}

// Setting default props for the TransparentTeamCard
TransparentTeamCard.defaultProps = {
    description: "",
    socials: "",
};

// Typechecking props for the TransparentTeamCard
TransparentTeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string,
    socials: PropTypes.node,
};

export default TransparentTeamCard;
