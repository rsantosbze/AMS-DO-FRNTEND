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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDDatePicker from "../../../components/MDDatePicker";
import { textTransform } from "@mui/system";
import moment from 'moment';
import parseISO from 'date-fns/parseISO'


function FormDatePicker({ label, name, success, error, disabled, ...rest }) {

    function formatDateForInput(storedDate) {
        // the returned value will be available as `input.value`
        return moment(storedDate).format('DD-MMM-YYYY')
    }
    return (
        <MDBox mt={2.5}>

            <Field
                {...rest}
                name={name}
                variant="standard"
                label={label}
                fullWidth
            >
                {({ field, meta, form: { setFieldValue, setFieldTouched } }) => {

                    return (
                        <>
                            <style>
                                {`.date-picker input {
                                    width: 100%;
                                    border:none;
                                    text-align: center;
                                    background-color: transparent;
                                    border-bottom: 1px solid #D3D3D3;
                                    &:focus {
                                    outline: none;
                                    }
                                   
                                }`
                                }
                                {`.date-picker-error input {
                                    width: 100%;
                                    border:none;
                                    text-align: center;
                                    background-color: transparent;
                                    border-bottom: 2px solid red;
                                    &:focus {
                                    outline: none;
                                    }
                                   
                                }`}

                                {`.date-picker-success input {
                                    width: 100%;
                                    border:none;
                                    text-align: center;
                                    background-color: transparent;
                                    border-bottom: 2px solid green;
                                    &:focus {
                                    outline: none;
                                    }
                                   
                                }`
                                }
                            </style>
                            <DatePicker
                                {...field}
                                wrapperClassName={error ? "date-picker-error" : success ? "date-picker-success" : "date-picker"}
                                todayButton="Today"
                                dateFormat="dd/MMM/yyyy"
                                format
                                disabled={disabled}
                                isClearable
                                placeholderText={label}
                                showYearDropdown
                                dateFormatCalendar="MMMM"
                                yearDropdownItemNumber={15}
                                scrollableYearDropdown
                                // selected={dateValue ? moment(dateValue).toDate() : null}
                                selected={field.value ? new Date(field.value) : null}
                                //selected={field.value?new Date(parseISO(field.value)) : null}
                                onChange={(val) => {
                                    setFieldValue(field.name, val);
                                }}
                                onChangeRaw={e => {
                                    setFieldTouched(field.name, true, true);
                                }}

                            >
                                <div style={{ color: "red", textTransform: "uppercase" }}>{label}</div>
                            </DatePicker>
                        </>
                    );
                }}
            </Field>


            <MDBox mt={0.75}>
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

// typechecking props for FormDatePicker
FormDatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormDatePicker;
