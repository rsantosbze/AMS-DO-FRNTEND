

import Card from "@mui/material/Card";

import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';


import { Select, Tooltip } from '@mui/material';
import Icon from "@mui/material/Icon";


import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
import { AMSMessage } from '@pagesComponents/generalComponents/HelperFunctions';

function SelectAsset({ data, selectHandler, router }) {
    const { selectedAsset, showAssetSelect, selectionAssets, selectedFacility, loadingAsset } = data;
    // let addAssetButton = (
    //     <MDBox p={1}>
    //         <MDButton
    //             iconOnly
    //             size="large"
    //             variant="contained"
    //             onClick={() => router.push("/assets/list-assets")}
    //             color="success"
    //         >
    //             <Icon>add</Icon>
    //         </MDButton>
    //     </MDBox>
    // );

    // let displayNoAssetMessage = (
    //     <Grid container
    //         direction="column"
    //         justifyContent="center"
    //         alignItems="center"
    //     >
    //         <Grid item >
    //             <MDTypography variant="h3" fontWeight="medium" textAlign="center" color="text">
    //                 There are no Asset Records. Please add!
    //             </MDTypography>
    //         </Grid>
    //         <Grid item  >
    //             {addAssetButton}
    //         </Grid>
    //     </Grid>);

    let displayNoAssetMessage = AMSMessage("There are no Asset Records. Please add!", "add", "success", '', router, "/assets/list-assets")
    return (showAssetSelect ? (
        <Card sx={{ marginBottom: 5, width: 600, textAlign: "center" }}>
            <Grid item xs={12} sm={12} >
                <MDBox p={1}>
                    <MDTypography variant="h5" fontWeight="medium" textAlign="center" color="info">
                        Select an Asset
                    </MDTypography>
                </MDBox>
                <MDBox p={1}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>

                        <InputLabel id="demo-simple-select-standard-label">SELECT AN ASSET</InputLabel>
                        <Select
                            name="selectFacility"
                            value={selectedAsset}
                            onChange={selectHandler}
                        >
                            <MenuItem default value="">None</MenuItem>
                            {selectionAssets.map((a) => (
                                <MenuItem key={a._id} value={a._id}>
                                    {a.assetName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </MDBox>
            </Grid>
        </Card>) : selectedFacility === "" || loadingAsset ? "" : displayNoAssetMessage);
}

export default SelectAsset;