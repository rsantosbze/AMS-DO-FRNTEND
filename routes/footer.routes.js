// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MDTypography from "/components/MDTypography";

// Images
import logoCT from "/assets/images/ams/RJS_Logo1.png";

const date = new Date().getFullYear();

export default {
    brand: {
        name: "RJS Engineering",
        image: logoCT,
        route: "/",
    },
    socials: [
        // {
        //     icon: <FacebookIcon />,
        //     link: "https://www.facebook.com/CreativeTim/",
        // },
        // {
        //     icon: <TwitterIcon />,
        //     link: "https://twitter.com/creativetim",
        // },
        // {
        //     icon: <GitHubIcon />,
        //     link: "https://github.com/creativetimofficial",
        // },
        // {
        //     icon: <YouTubeIcon />,
        //     link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
        // },
    ],
    menus: [
        {
            name: "company",
            items: [
                // { name: "about us", href: "https://www.creative-tim.com/presentation" },
                { name: "about us", route: "/about-us" },
                // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
                // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
                // { name: "blog", href: "https://www.creative-tim.com/blog" },
            ],
        },
        {
            name: "Applications",
            items: [
                { name: "Asset Management System", route: "/app/ams" },
                //     { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
                //     { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
            ],
        },
        // {
        //     name: "Projects",
        //     items: [
        //         { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        //         { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        //         { name: "custom development", href: "https://services.creative-tim.com/" },
        //         { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
        //     ],
        // },
        // {
        //     name: "legal",
        //     items: [
        //         { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        //         { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        //         { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
        //     ],
        // },
    ],
    copyright: (
        <MDTypography variant="button" fontWeight="regular" sx={{ color: "amsColors1.main" }}>
            All rights reserved. Copyright &copy; {date} by{" "}
            <MDTypography
                component="a"
                href=""
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"

            >
                RJS Engineering
            </MDTypography>
            .
        </MDTypography>
    ),
};
