/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
import MDAvatar from "/components/MDAvatar";
import MDBadge from "/components/MDBadge";

// Images
import orderImage from "/assets/images/product-12.jpg";

function LocationInfo({ supplier, contractor, facility }) {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12} md={4} xl={4}>
                <MDBox >
                    {/* <MDBox mr={2}>
                        <MDAvatar size="xxl" src={orderImage.src} alt="Gold Glasses" />
                    </MDBox> */}
                    <MDBox lineHeight={1}>
                        <MDTypography variant="h6" fontWeight="medium">
                            Facility: {facility.organizationName}
                        </MDTypography>
                        <MDBox mb={0}>
                            <MDTypography variant="button" color="text">
                                {facility.streetLine1}
                            </MDTypography>
                        </MDBox>
                        <MDBox mb={0}>
                            <MDTypography variant="button" color="text">
                                {facility.streetLine2}
                            </MDTypography>
                        </MDBox>
                        <MDBox mb={0}>
                            <MDTypography variant="button" color="text">
                                {facility.city}
                            </MDTypography>
                        </MDBox>
                        <MDBox mb={0}>
                            <MDTypography variant="button" color="text">
                                {facility.country}
                            </MDTypography>
                        </MDBox>
                        {/* <MDBadge
                            variant="gradient"
                            color="success"
                            size="xs"
                            badgeContent="delivered"
                            container
                        /> */}
                    </MDBox>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                <MDBox lineHeight={1}>
                    <MDTypography variant="h6" fontWeight="medium">
                        Supplier: {supplier.organizationName}
                    </MDTypography>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {supplier.streetLine1}
                        </MDTypography>
                    </MDBox>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {supplier.streetLine2}
                        </MDTypography>
                    </MDBox>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {supplier.city}
                        </MDTypography>
                    </MDBox>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {supplier.country}
                        </MDTypography>
                    </MDBox>
                    {/* <MDBadge
                            variant="gradient"
                            color="success"
                            size="xs"
                            badgeContent="delivered"
                            container
                        /> */}
                </MDBox>

            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                {/* <MDButton variant="gradient" color="dark" size="small">
                    contact us
                </MDButton> */}
                <MDBox lineHeight={1}>
                    <MDTypography variant="h6" fontWeight="medium">
                        Supplier: {contractor.organizationName}
                    </MDTypography>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {contractor.streetLine1}
                        </MDTypography>
                    </MDBox>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {contractor.streetLine2}
                        </MDTypography>
                    </MDBox>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {contractor.city}
                        </MDTypography>
                    </MDBox>
                    <MDBox mb={0}>
                        <MDTypography variant="button" color="text">
                            {contractor.country}
                        </MDTypography>
                    </MDBox>
                    {/* <MDBadge
                            variant="gradient"
                            color="success"
                            size="xs"
                            badgeContent="delivered"
                            container
                        /> */}
                </MDBox>
                {/* <MDBox mt={0.5}>
                    <MDTypography variant="button" color="text">
                        Do you like the product? Leave us a review{" "}
                        <MDTypography
                            component="a"
                            href="#"
                            variant="button"
                            color="text"
                            fontWeight="regular"
                        >
                            here
                        </MDTypography>
                        .
                    </MDTypography>
                </MDBox> */}
            </Grid>
        </Grid>
    );
}

export default LocationInfo;
