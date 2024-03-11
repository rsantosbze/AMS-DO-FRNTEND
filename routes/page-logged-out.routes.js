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

/** 
  All of the routes for the page layout of NextJS Material Dashboard 2 PRO are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// @mui material components
import Icon from "@mui/material/Icon";


const pageLoggedOutRoutes = [
    //     {
    //         name: "pages",
    //         columns: 3,
    //         rowsPerColumn: 2,
    //         collapse: [
    //             {
    //                 name: "dashboards",
    //                 icon: <Icon>dashboard</Icon>,
    //                 collapse: [
    //                     {
    //                         name: "analytics",
    //                         route: "/dashboards/analytics",
    //                     },
    //                     {
    //                         name: "sales",
    //                         route: "/dashboards/sales",
    //                     },
    //                     {
    //                         name: "home",
    //                         route: "/dashboards/home",
    //                     },
    //                 ],
    //             },
    //  ] },

    {
        type: "collapse",
        name: "Home",
        key: "Home",
        route: "/home",
        icon: <Icon fontSize="medium" color="warning">home</Icon>,
        noCollapse: true,
    },
    {
        name: "Services",
        columns: 1,
        rowsPerColumn: 2,
        icon: <Icon fontSize="medium" color="warning">miscellaneous_services</Icon>,
        collapse: [
            {
                name: "Services",
                icon: <Icon>miscellaneous_services</Icon>,
                collapse: [
                    {
                        name: "Project Management",
                        route: "/services/project-management",
                    },
                    // {
                    //     name: "Software Solutions",
                    //     route: "/dashboards/sales",
                    // },
                    // {
                    //     name: "Engineering Design",
                    //     route: "/dashboards/home",
                    // },
                    // {
                    //     name: "Consultancy",
                    //     route: "/dashboards/home",
                    // },
                ],
            },
        ]
    },
    // {
    //     type: "collapse",
    //     name: "Projects",
    //     key: "Projects",
    //     route: "/projects",
    //     icon: <Icon fontSize="medium" color="warning">design_services</Icon>,
    //     noCollapse: true,
    // },

    {
        type: "collapse",
        name: "About Us",
        key: "AboutUs",
        route: "/about-us",
        icon: <Icon fontSize="medium" color="warning">contact_page</Icon>,
        noCollapse: true,
    },
    // , {
    //     type: "collapse",
    //     name: "Applications",
    //     key: "AMS",
    //     route: "/app",
    //     icon: <Icon fontSize="medium" color="warning">apps</Icon>,
    //     noCollapse: true,
    // },
    {
        name: "Applications",
        columns: 1,
        rowsPerColumn: 2,
        icon: <Icon fontSize="medium" color="warning">apps</Icon>,
        collapse: [
            {
                name: "Applications",
                icon: <Icon>apps</Icon>,
                collapse: [
                    {
                        name: "Asset Management System",
                        route: "/app/ams",
                    },
                    // {
                    //     name: "sales",
                    //     route: "/dashboards/sales",
                    // },
                    // {
                    //     name: "home",
                    //     route: "/dashboards/home",
                    // },
                ],
            },
        ]
    },

    {
        type: "collapse",
        name: "Login",
        key: "Login",
        route: "/app/ams/login",
        icon: <Icon fontSize="medium" color="success">login</Icon>,
        noCollapse: true,
    }
]

export default pageLoggedOutRoutes;
