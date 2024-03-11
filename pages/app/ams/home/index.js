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

import { useState, useContext } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "@structures/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@structures/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";
import HomeCard from "@structures/Examples/Cards/HomeCards";
import Information from "@pagesComponents/app/ams/home/Information";
// Project page components
import Header from "/pagesComponents/projects/Header";

// Images
import team1 from "/assets/images/team-1.jpg";
import team2 from "/assets/images/team-2.jpg";
import team3 from "/assets/images/team-3.jpg";
import team4 from "/assets/images/team-4.jpg";
import team5 from "/assets/images/team-5.jpg";
import logoSlack from "/assets/images/small-logos/logo-slack.svg";
import logoSpotify from "/assets/images/small-logos/logo-spotify.svg";
import logoXD from "/assets/images/small-logos/logo-xd.svg";
import logoAsana from "/assets/images/small-logos/logo-asana.svg";
import logoInvision from "/assets/images/small-logos/logo-invision.svg";
import logoAtlassian from "/assets/images/small-logos/logo-atlassian.svg";

// Import Auth Context for logged - in  Information.

import AuthContext from "@store/auth-context";



function Home() {

  const { isLoggedIn, user } = useContext(AuthContext);


  //  HomeCard dropdown menu state
  const [slackBotMenu, setSlackBotMenu] = useState(null);
  const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  const [designToolsMenu, setDesignToolsMenu] = useState(null);
  const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  const openSlackBotMenu = (event) => setSlackBotMenu(event.currentTarget);
  const closeSlackBotMenu = () => setSlackBotMenu(null);
  const openPremiumSupportMenu = (event) =>
    setPremiumSupportMenu(event.currentTarget);
  const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  const openDesignToolsMenu = (event) =>
    setDesignToolsMenu(event.currentTarget);
  const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  const openLookingGreatMenu = (event) =>
    setLookingGreatMenu(event.currentTarget);
  const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  const openDeveloperFirstMenu = (event) =>
    setDeveloperFirstMenu(event.currentTarget);
  const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

  // Dropdown menu template for the HomeCard 
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Action</MenuItem>
      <MenuItem onClick={close}>Another action</MenuItem>
      <MenuItem onClick={close}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar absolute />
      </MDBox>
      {/* <Header /> */}
      <MDBox pb={15} pt={15}>
        <Grid container >
          <Grid item xs={12} md={12}>
            <MDBox mb={1}>
              <MDTypography variant="h5"
                sx={[{ color: 'amsColors1.main' }, ({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["md"],
                  }
                })]}
              >
                Welcome <em>{user.firstName + ' ' + user.lastName} </em>to the Asset Management Application, Please Select a Function:
              </MDTypography>
            </MDBox>
            {/* <MDBox mb={2}>
              <MDTypography variant="body2" color="text">
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </MDTypography>
            </MDBox> */}
          </Grid>
          {/* <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
            <MDButton variant="gradient" color="dark">
              <Icon>add</Icon>&nbsp; Add New
            </MDButton>
          </Grid> */}
        </Grid>

        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 2 },
            mt: 5,
            mb: -5,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Information />
          {/* <Featuring /> */}
        </Card>
        {/* <MDBox mt={5}>
       <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <HomeCard
                  image={logoSlack}
                  color='primary'
                  title="organization Management"
                  description="If everything I did failed - which it doesn't, I think that it actually succeeds."
                  dateTime="02.03.22"
                  members={[team1, team2, team3, team4, team5]}
                  dropdown={{
                    action: openSlackBotMenu,
                    menu: renderMenu(slackBotMenu, closeSlackBotMenu),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <HomeCard
                  image={logoSpotify}
                  color='warning'
                  title="User Management"
                  description="Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you."
                  dateTime="22.11.21"
                  members={[team1, team2, team3]}
                  dropdown={{
                    action: openPremiumSupportMenu,
                    menu: renderMenu(
                      premiumSupportMenu,
                      closePremiumSupportMenu,
                    ),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <HomeCard
                  image={logoXD}
                  title="design tools"
                  description="Constantly growing. We’re constantly making mistakes from which we learn and improve."
                  dateTime="06.03.20"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDesignToolsMenu,
                    menu: renderMenu(designToolsMenu, closeDesignToolsMenu),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <HomeCard
                  image={logoAsana}
                  title="looking great"
                  description="You have the opportunity to play this game of life you need to appreciate every moment."
                  dateTime="14.03.24"
                  members={[team1, team2, team3, team4, team5, team3]}
                  dropdown={{
                    action: openLookingGreatMenu,
                    menu: renderMenu(lookingGreatMenu, closeLookingGreatMenu),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <HomeCard
                  image={logoInvision}
                  title="developer first"
                  description="For standing out. But the time is now to be okay to be the greatest you."
                  dateTime="16.01.22"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDeveloperFirstMenu,
                    menu: renderMenu(
                      developerFirstMenu,
                      closeDeveloperFirstMenu,
                    ),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <HomeCard
                  image={logoAtlassian}
                  title="Product Development"
                  description="We strive to embrace and drive change in our industry. We are happy to work at such a project."
                  dateTime="16.01.22"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDeveloperFirstMenu,
                    menu: renderMenu(
                      developerFirstMenu,
                      closeDeveloperFirstMenu,
                    ),
                  }}
                />
              </MDBox>
            </Grid>
          </Grid> 
        </MDBox>*/}
      </MDBox>
      <Footer company={{ name: 'RJS Engineering', href: 'http://www.rjsengineeringbz.com' }} />
    </DashboardLayout>
  );
}

export default Home;
