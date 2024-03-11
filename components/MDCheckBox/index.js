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

// Custom styles for MDCheckBox

import InputMask from 'react-input-mask';
import MDCheckBoxRoot from "./MDCheckBoxRoot";
import { FormControlLabel } from "@mui/material";

const MDCheckBox = forwardRef(({ label, error, success, disabled, ...rest }, ref) => {

    return (
        <FormControlLabel label={label}
            control={
                <MDCheckBoxRoot
                    {...rest}
                    ref={ref}
                    ownerState={{ error, success, disabled }}
                />}
        />
    );
});

// Setting default values for the props of MDInput
MDCheckBox.defaultProps = {
    error: false,
    success: false,
    disabled: false,
};

// Typechecking props for the MDCheckBox
MDCheckBox.propTypes = {
    error: PropTypes.bool,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
};

MDCheckBox.displayName = "MDCheckBox";
export default MDCheckBox;
