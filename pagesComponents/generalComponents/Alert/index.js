
import Icon from "@mui/material/Icon";
import MDAlert from "/components/MDAlert";
import MDTypography from "/components/MDTypography";


function Alert({ message, display }) {
    return (display ? (
        <MDAlert
            color="error"
            dismissible
        >
            <Icon fontSize="small">warning</Icon> &nbsp;
            <MDTypography variant="h6" fontWeight="medium" color="white" ml={1}>
                {message}
            </MDTypography>
        </MDAlert >
    ) : ''
    );
}

export default Alert;