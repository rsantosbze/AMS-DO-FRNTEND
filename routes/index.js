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
  All of the routes for the NextJS Material Dashboard 2 PRO are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
*/

// NextJS Material Dashboard 2 PRO components
import MDAvatar from "/components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "/assets/images/ams/rolando-image.png";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const loggedInRoutes = (userInfo) => {

    return [
        {
            type: "collapse",
            name: "Log Out",
            key: "Logout",
            route: "/app/ams/logout",
            icon: <Icon fontSize="medium">logout</Icon>,
            noCollapse: true,
        },
        { type: "divider", key: "divider-1" },

        {
            type: "collapse",
            name: "Home",
            key: "home",
            route: "/app/ams/home",
            icon: <Icon fontSize="medium">home</Icon>,
            noCollapse: true,
        },
        { type: "divider", key: "divider-2" },
        // {
        //     type: "collapse",
        //     name: "Dashboards",
        //     key: "dashboards",
        //     icon: <Icon fontSize="medium">dashboard</Icon>,
        //     collapse: [
        //         {
        //             name: "Analytics",
        //             key: "analytics",
        //             route: "/dashboards/analytics",
        //         },
        //         {
        //             name: "Sales",
        //             key: "sales",
        //             route: "/dashboards/sales",
        //         },
        //     ],
        // },

        (userInfo.role && (userInfo.role === 'superuser' | userInfo.role === 'admin') ? {
            type: "collapse",
            name: "Users",
            key: "users-management",
            icon: <Icon fontSize="medium">face</Icon>,
            collapse: [


                {
                    name: "List Users",
                    key: "list-users",
                    route: "/app/ams/users/list-users",
                },
                {
                    name: "Add User",
                    key: "add-user",
                    route: "/app/ams/users/add-user",
                },
            ],


        } : ''),
        (userInfo.role && (userInfo.role === 'superuser' | userInfo.role === 'admin') ? {
            type: "collapse",
            name: "Organizations",
            key: "organization-management",
            icon: <Icon fontSize="medium">corporate_fare</Icon>,
            collapse: [


                {
                    name: "List Organizations",
                    key: "list-organizations",
                    route: "/app/ams/organizations/list-organizations",
                },
                {
                    name: "Add Organization",
                    key: "add-organization",
                    route: "/app/ams/organizations/add-organization",
                },
            ],


        } : ''),
        (userInfo.role && (userInfo.role === 'superuser' | userInfo.role === 'admin') ? {
            type: "collapse",
            name: "Invoices",
            key: "invoice-management",
            icon: <Icon fontSize="medium">corporate_fare</Icon>,
            collapse: [


                {
                    name: "List Invoices",
                    key: "list-invoices",
                    route: "/app/ams/invoices/list-invoices",
                },
                {
                    name: "Add Invoice",
                    key: "add-invoice",
                    route: "/app/ams/invoices/add-invoice",
                },
            ],


        } : ''),
        {
            type: "collapse",
            name: "Assets",
            key: "asset-management",
            icon: <Icon fontSize="medium">add_card</Icon>,
            collapse: [


                {
                    name: "List Assets",
                    key: "list-assets",
                    route: "/app/ams/assets/list-assets",
                },
                {
                    name: "Add Asset Category",
                    key: "add-asset-category",
                    route: "/app/ams/assets/add-asset-category",
                },
                {
                    name: "Add Asset",
                    key: "add-asset",
                    route: "/app/ams/assets/add-asset",
                },
            ],


        },
        {
            type: "collapse",
            name: "Maintenance Records",
            key: "Records-Management",
            icon: <Icon fontSize="medium">assignment</Icon>,
            collapse: [


                {
                    name: "List Records",
                    key: "list-Records",
                    route: "/app/ams/records/list-records",
                },

                {
                    name: "Mutate Records",
                    key: "mutate-records",
                    route: "/app/ams/records/mutate-record",
                },
            ],


        },

        // {
        //     type: "collapse",
        //     name: "Features",
        //     key: "features",
        //     icon: <Icon fontSize="medium">cameraalt</Icon>,
        //     collapse: [

        //         {
        //             name: "Profile",
        //             key: "profile",
        //             collapse: [
        //                 {
        //                     name: "Profile Overview",
        //                     key: "profile-overview",
        //                     route: "/pages/profile/profile-overview",
        //                 },
        //                 {
        //                     name: "All Projects",
        //                     key: "all-projects",
        //                     route: "/pages/profile/all-projects",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Users",
        //             key: "users",
        //             collapse: [
        //                 {
        //                     name: "New User",
        //                     key: "new-user",
        //                     route: "/pages/users/new-user",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Account",
        //             key: "account",
        //             collapse: [
        //                 {
        //                     name: "Settings",
        //                     key: "settings",
        //                     route: "/pages/account/settings",
        //                 },
        //                 {
        //                     name: "Billing",
        //                     key: "billing",
        //                     route: "/pages/account/billing",
        //                 },
        //                 {
        //                     name: "Invoice",
        //                     key: "invoice",
        //                     route: "/pages/account/invoice",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Projects",
        //             key: "projects",
        //             collapse: [
        //                 {
        //                     name: "Timeline",
        //                     key: "timeline",
        //                     route: "/pages/projects/timeline",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Pricing Page",
        //             key: "pricing-page",
        //             route: "/pages/pricing-page",
        //         },
        //         { name: "RTL", key: "rtl", route: "/pages/rtl" },
        //         {
        //             name: "Widgets",
        //             key: "widgets",
        //             route: "/pages/widgets",
        //         },
        //         {
        //             name: "Charts",
        //             key: "charts",
        //             route: "/pages/charts",
        //         },
        //         {
        //             name: "Notfications",
        //             key: "notifications",
        //             route: "/pages/notifications",
        //         },
        //     ],
        // },
        // {
        //     type: "collapse",
        //     name: "Applications",
        //     key: "applications",
        //     icon: <Icon fontSize="medium">apps</Icon>,
        //     collapse: [
        //         {
        //             name: "Kanban",
        //             key: "kanban",
        //             route: "/applications/kanban",
        //         },
        //         {
        //             name: "Wizard",
        //             key: "wizard",
        //             route: "/applications/wizard",
        //         },
        //         {
        //             name: "Data Tables",
        //             key: "data-tables",
        //             route: "/applications/data-tables",
        //         },
        //         {
        //             name: "Calendar",
        //             key: "calendar",
        //             route: "/applications/calendar",
        //         },
        //     ],
        // },
        // {
        //     type: "collapse",
        //     name: "Ecommerce",
        //     key: "ecommerce",
        //     icon: <Icon fontSize="medium">shopping_basket</Icon>,
        //     collapse: [
        //         {
        //             name: "Products",
        //             key: "products",
        //             collapse: [
        //                 {
        //                     name: "New Product",
        //                     key: "new-product",
        //                     route: "/ecommerce/products/new-product",
        //                 },
        //                 {
        //                     name: "Edit Product",
        //                     key: "edit-product",
        //                     route: "/ecommerce/products/edit-product",
        //                 },
        //                 {
        //                     name: "Product Page",
        //                     key: "product-page",
        //                     route: "/ecommerce/products/product-page",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Orders",
        //             key: "orders",
        //             collapse: [
        //                 {
        //                     name: "Order List",
        //                     key: "order-list",
        //                     route: "/ecommerce/orders/order-list",
        //                 },
        //                 {
        //                     name: "Order Details",
        //                     key: "order-details",
        //                     route: "/ecommerce/orders/order-details",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     type: "collapse",
        //     name: "Authentication",
        //     key: "authentication",
        //     icon: <Icon fontSize="medium">content_paste</Icon>,
        //     collapse: [
        //         {
        //             name: "Sign In",
        //             key: "sign-in",
        //             collapse: [
        //                 {
        //                     name: "Basic",
        //                     key: "basic",
        //                     route: "/authentication/sign-in/basic",
        //                 },
        //                 {
        //                     name: "Cover",
        //                     key: "cover",
        //                     route: "/authentication/sign-in/cover",
        //                 },
        //                 {
        //                     name: "Illustration",
        //                     key: "illustration",
        //                     route: "/authentication/sign-in/illustration",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Sign Up",
        //             key: "sign-up",
        //             collapse: [
        //                 {
        //                     name: "Cover",
        //                     key: "cover",
        //                     route: "/authentication/sign-up/cover",
        //                 },
        //             ],
        //         },
        //         {
        //             name: "Reset Password",
        //             key: "reset-password",
        //             collapse: [
        //                 {
        //                     name: "Cover",
        //                     key: "cover",
        //                     route: "/authentication/reset-password/cover",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // { type: "divider", key: "divider-4" },
        // { type: "title", title: "Docs", key: "title-docs" },
        // {
        //     type: "collapse",
        //     name: "Basic",
        //     key: "basic",
        //     icon: <Icon fontSize="medium">upcoming</Icon>,
        //     collapse: [
        //         // {
        //         //     name: "Getting Started",
        //         //     key: "getting-started",
        //         //     collapse: [
        //         //         {
        //         //             name: "Overview",
        //         //             key: "overview",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/overview/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "License",
        //         //             key: "license",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/license/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Quick Start",
        //         //             key: "quick-start",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/quick-start/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Build Tools",
        //         //             key: "build-tools",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/build-tools/material-dashboard/",
        //         //         },
        //         //     ],
        //         // },
        //         // {
        //         //     name: "Foundation",
        //         //     key: "foundation",
        //         //     collapse: [
        //         //         {
        //         //             name: "Colors",
        //         //             key: "colors",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/colors/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Grid",
        //         //             key: "grid",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/grid/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Typography",
        //         //             key: "base-typography",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/base-typography/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Borders",
        //         //             key: "borders",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/borders/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Box Shadows",
        //         //             key: "box-shadows",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/box-shadows/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Functions",
        //         //             key: "functions",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/functions/material-dashboard/",
        //         //         },
        //         //         {
        //         //             name: "Routing System",
        //         //             key: "routing-system",
        //         //             href: "https://www.creative-tim.com/learning-lab/nextjs/routing-system/material-dashboard/",
        //         //         },
        //         //     ],
        //         // },
        //     ],
        // },
        // {
        //     type: "collapse",
        //     name: "/components",
        //     key: "/components",
        //     icon: <Icon fontSize="medium">view_in_ar</Icon>,
        //     collapse: [
        //         {
        //             name: "Alerts",
        //             key: "alerts",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/alerts/material-dashboard/",
        //         },
        //         {
        //             name: "Avatar",
        //             key: "avatar",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/avatar/material-dashboard/",
        //         },
        //         {
        //             name: "Badge",
        //             key: "badge",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/badge/material-dashboard/",
        //         },
        //         {
        //             name: "Badge Dot",
        //             key: "badge-dot",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/badge-dot/material-dashboard/",
        //         },
        //         {
        //             name: "Box",
        //             key: "box",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/box/material-dashboard/",
        //         },
        //         {
        //             name: "Buttons",
        //             key: "buttons",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/buttons/material-dashboard/",
        //         },
        //         {
        //             name: "Date Picker",
        //             key: "date-picker",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/datepicker/material-dashboard/",
        //         },
        //         {
        //             name: "Dropzone",
        //             key: "dropzone",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/dropzone/material-dashboard/",
        //         },
        //         {
        //             name: "Editor",
        //             key: "editor",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/quill/material-dashboard/",
        //         },
        //         {
        //             name: "Input",
        //             key: "input",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/input/material-dashboard/",
        //         },
        //         {
        //             name: "Pagination",
        //             key: "pagination",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/pagination/material-dashboard/",
        //         },
        //         {
        //             name: "Progress",
        //             key: "progress",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/progress/material-dashboard/",
        //         },
        //         {
        //             name: "Snackbar",
        //             key: "snackbar",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/snackbar/material-dashboard/",
        //         },
        //         {
        //             name: "Social Button",
        //             key: "social-button",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/social-buttons/material-dashboard/",
        //         },
        //         {
        //             name: "Typography",
        //             key: "typography",
        //             href: "https://www.creative-tim.com/learning-lab/nextjs/typography/material-dashboard/",
        //         },
        //     ],
        // },
        // {
        //     type: "collapse",
        //     name: "Change Log",
        //     key: "changelog",
        //     href: "https://github.com/creativetimofficial/ct-nextjs-material-dashboard-pro/blob/main/CHANGELOG.md",
        //     icon: <Icon fontSize="medium">receipt_long</Icon>,
        //     noCollapse: true,
        // }
    ]
}

function routes() {

    const { isLoggedIn, user } = useContext(AuthContext);

    return [

        (isLoggedIn ? {
            type: "collapse",
            name: user.firstName === 'undefined' ? '' : user.firstName + ' ' + user.lastName,
            key: user.firstName + ' ' + user.lastName,
            icon: <MDAvatar src={profilePicture.src} alt={user.firstName} size="sm" />,
            collapse: [
                {
                    name: "My Profile",
                    key: "my-profile",
                    route: "/pages/profile/profile-overview",
                },
                // {
                //     name: "Settings",
                //     key: "profile-settings",
                //     route: "/account/settings",
                // },
                {
                    name: "Logout",
                    key: "logout",
                    route: "/app/ams/logout",
                },
            ],
        } : ''),
        { type: "divider", key: "divider-0" },
        ...(isLoggedIn ? loggedInRoutes(user) : [{
            type: "collapse",
            name: "Login",
            key: "Login",
            route: "/app/ams/login",
            icon: <Icon fontSize="medium">login</Icon>,
            noCollapse: true,
        }])
        ,


    ];
}



export default routes;
