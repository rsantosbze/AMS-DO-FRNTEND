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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

import Autocomplete from "@mui/material/Autocomplete";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";
import MDSelect from "/components/MDSelect";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
function FormSelect({ optionvalues, label, name, ...rest }) {

    let displayOptions = optionvalues.map(opt => {
        return <MenuItem key={opt.value} value={opt.value}>{opt.description}</MenuItem>
})

    return (
        <MDBox mt={0}>
            <Field
                {...rest}
                name={name}
                variant="standard"
                as={MDSelect}
                label={label}
                fullWidth
                id={name}
            >
                <InputLabel sx={{ mb: 2 }} id="demo-select-small">{label}</InputLabel>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {/* <MenuItem value="ten">Ten</MenuItem>
                <MenuItem value="wenty">Twenty</MenuItem>
                <MenuItem value="thirty">Thirty</MenuItem> */}
                {displayOptions}

            </Field>


            <MDBox mt={1}>
                <MDTypography
                    component="div"
                    variant="caption"
                    color="error"
                    fontWeight="regular"
                >
                    <ErrorMessage name={name} />
                </MDTypography>
            </MDBox>
        </MDBox>
    );
}

// typechecking props for FormField
FormSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormSelect;
