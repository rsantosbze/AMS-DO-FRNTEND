

import Icon from "@mui/material/Icon";
import { Tooltip } from '@mui/material';
import MDBox from "/components/MDBox";
import MDAlert from "/components/MDAlert";
import MDTypography from "/components/MDTypography";
import Grid from "@mui/material/Grid";

import MDButton from "/components/MDButton";

export const fillButtons = (id, viewHandler) => {
    let buttons = [
        { color: 'success', icon: 'edit', handler: 'Edit', tooltipMessage: 'Edit Item', location: "left" },
        { color: 'error', icon: 'close', handler: 'Delete', tooltipMessage: 'Remove Item', location: "right" },
    ].map((prop, key) => {
        return (
            <Tooltip
                key={key}
                id="close1"
                title={prop.tooltipMessage}
                placement={prop.location}

            >
                <MDBox
                    ml={1}
                    display='inline'
                    key={key}
                >
                    <MDButton
                        iconOnly
                        size="small"
                        variant="contained"
                        onClick={() => viewHandler(id, prop.handler)}
                        color={prop.color}

                    >
                        <Icon>{prop.icon}</Icon>
                    </MDButton>
                </MDBox>
            </Tooltip>
        );
    });
    return buttons;
};

export const AMSButton = (icon, color, handler) => {
    return < MDBox p={1} >
        <MDButton
            iconOnly
            size="large"
            variant="contained"
            onClick={() => handler("", "Add")}
            color={color}
        >
            <Icon>{icon}</Icon>
        </MDButton>
    </MDBox >
}
export const AMSRouterButton = (icon, color, router, route) => {
    return < MDBox p={1} >
        <MDButton
            iconOnly
            size="large"
            variant="contained"
            onClick={() => router.push(route)}
            color={color}
        >
            <Icon>{icon}</Icon>
        </MDButton>
    </MDBox >
}

export const AMSMessage = (message, icon, color, handler = '', router = '', route = '') => {
    let displayMessage = (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item >
                <MDTypography variant="h3" fontWeight="medium" textAlign="center" color="text">
                    {message}
                </MDTypography>
            </Grid>
            <Grid item  >
                {handler !== '' ? AMSButton(icon, color, handler) : AMSRouterButton(icon, color, router, route)}
            </Grid>
        </Grid>);

    return displayMessage;

}

export const AMSAlert = (message, display) => {
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

