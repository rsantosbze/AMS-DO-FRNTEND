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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDInput
import MDSelectRoot from "/components/MDSelect/MDSelectRoot";
import MDFormControlRoot from "./MDFormControlRoot";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
const MDSelect = forwardRef(({ label, error, success, disabled, ...rest }, ref) => {

    return (
         <MDFormControlRoot fullWidth variant="standard" sx={{ mt: 1.1 }}
       
             ownerState={{ error, success, disabled }} 
        >
            <InputLabel sx={{ mt: -1 }} >{label}</InputLabel>
            <MDSelectRoot
                {...rest}
                ref={ref}
                ownerState={{ error, success, disabled }}
            />
        
         </MDFormControlRoot>

    );
});

// Setting default values for the props of MDInput
MDSelect.defaultProps = {
    error: false,
    success: false,
    disabled: false,
};

// Typechecking props for the MDInput
MDSelect.propTypes = {
    error: PropTypes.bool,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
};

MDSelect.displayName = "MDSelect";
export default MDSelect;
