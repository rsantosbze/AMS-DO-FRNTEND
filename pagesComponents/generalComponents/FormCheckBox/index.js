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

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDCheckBox from "components/MDCheckBox";

import InputMask from 'react-input-mask';

function FormCheckBox({ label, name, ...rest }) {
    return (
        <MDBox mb={1.5}>

            <Field
                {...rest}
                name={name}
                as={MDCheckBox}

                label={label}
                color="secondary"
                size="large"
            >
            </Field>


            {/* <MDBox mt={0.75}>
                <MDTypography
                    component="div"
                    variant="caption"
                    color="error"
                    fontWeight="regular"
                >
                    <ErrorMessage name={name} />
                </MDTypography>
            </MDBox> */}
        </MDBox>
    );
}

// typechecking props for FormCheckBox
FormCheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormCheckBox;
