import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MDTypography from "/components/MDTypography";

// formik components

/////////////////////////
import validations from '../../../invoices/components/mutation/schemas/validations';
import form from "../../../invoices/components/mutation/schemas/form";
import initialValues from "../../../invoices/components/mutation/schemas/initialValues";
import InvoiceInfo from '../mutation/components/InvoiceInfo';
/////////////////////
import { Formik, Form } from "formik";

function InvoiceModal({ formData, onSave }) {
    const { openModal, closeModalHandler, operation, suppliers, contractors, invoice, assetId, facilityId } = formData;
    const { formId, formField } = form;
    const handleSubmit = (values, actions) => {
        if (values) {
            actions.setSubmitting(true);
            actions.resetForm();
            onSave(values, operation, actions);
        } else {
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };
    return (

        <Dialog open={openModal} onClose={closeModalHandler} fullWidth={true} maxWidth={"lg"}>
            {/* <DialogTitle></DialogTitle> */}
            <DialogContent>
                {/* <DialogContentText> */}
                <MDBox lineHeight={0}>
                    <MDTypography variant="h5" color="text">
                        {assetId} Asset
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                        Mandatory information
                    </MDTypography>
                </MDBox>
                {/* </DialogContentText> */}
                <Formik
                    initialValues={operation === "Add" ? initialValues : invoice}
                    validationSchema={validations[0]}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, isValid, dirty }) => (
                        <Form id={formId} autoComplete="off">
                            <InvoiceInfo formData={{
                                values,
                                touched,
                                formField,
                                errors,
                                operation,
                                contractors,
                                suppliers,
                                facilityId,
                                assetId
                            }} />

                            <DialogActions>
                                <MDButton
                                    variant="gradient"
                                    color="error"
                                    onClick={closeModalHandler}
                                >
                                    Cancel
                                </MDButton>

                                <MDButton
                                    type="submit"
                                    variant="gradient"
                                    color={isValid && (operation === "Delete" || operation === "Edit" ? true : dirty) ? "success" : "dark"}
                                >
                                    {operation}
                                </MDButton>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>

            </DialogContent>

        </Dialog>
    );
}


export default InvoiceModal;