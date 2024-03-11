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


import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { Select, Tooltip } from '@mui/material';
import Grid from "@mui/material/Grid";
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "@structures/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@structures/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";

///////////////////////////////////////////////////////////
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { assetActions } from '@store/asset-slice';
import * as statements from '@sections/graphql/assets/grapql-statements';
import { useLazyQuery, useQuery } from '@apollo/client';

import { useSelector } from 'react-redux';
///////////////////////////////////////////////////////////

import DataTable from "@structures/Tables/DataTable";
import AuthContext from '@store/auth-context';
import Alert from '@pagesComponents/generalComponents/Alert';
import { fillButtons } from "@pagesComponents/generalComponents/HelperFunctions"

function AssetsList() {

    const dispatch = useDispatch();
    const router = useRouter();
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const [assets, setAssets] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [contractors, setContractors] = useState([]);
    const [selectedFacility, setSelectedFacility] = useState('');
    const [showAssetList, setShowAssetList] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const facilityId = useSelector(state => state.asset.facilityId);

    //Select company Id based on role.
    let selectionId = user.role === 'superuser' ? '' : user.companyId;

    let tableInfo = {};

    let assetTypes = ["AC", "BUILDING", "COMPUTER EQUIPMENT"];

    ///////////////////////GraphQL Query information

    ///**********Get Facilities in the system under the company */
    // const { error, data: facilityData } = useQuery(
    //     statements.FINDALLFACILITIESBYCOMPANYID, {
    //     variables: { _id: user.companyId },
    // }
    // );

    const [facilitiesQuery, { loading: loadingFacilities }] = useLazyQuery(
        statements.FINDALLFACILITIESBYCOMPANYID,
        { fetchPolicy: 'cache-and-network' }
    );


    ///**********Get All assets as selected by Facility */
    const [assetQuery, { refetch: assetRefetch, loading: assetLoading }] = useLazyQuery(
        statements.FINDASSETBYFACILITY,
        { fetchPolicy: 'cache-and-network' }
    );

    ///////////////////////////////////////////////////////////

    ///////////////////////Error Handling////////////////////////////////////

    let errorHandling = (err) => {
        if (err) {
            if (err.graphQLErrors[0] == undefined) {
                setMessage('ISSUE WITH BACKEND, PLEASE TRY AGAIN LATER!');
                setShowAlertBar(true);

            } else {
                if (err.graphQLErrors[0].extensions.code === 'FORBIDDEN') {
                    setMessage('FORBIDDEN RESOURCE: YOU ARE NOT AUTHORIZED!');
                    setShowAlertBar(true);

                }
                if (err.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') {
                    logout();
                    router.push({
                        pathname: '/app/ams/login',
                        query: { returnUrl: router.asPath },
                    });
                }
            }

        }

    }

    ///////////////////////Perform Query Request on load
    useEffect(() => {

        let facilityData = [];


        facilitiesQuery(
            {
                variables: {
                    _id: selectionId
                },
                onCompleted: (data) => {

                    if (data) {

                        facilityData = data.findAllFacilitiesByCompanyId;
                        if (facilityData) {
                            let organizations = facilityData;
                            setFacilities(
                                organizations.filter((org) => org.organizationType === 'FACILITY')
                            );

                            setSuppliers(
                                organizations.filter((org) => org.organizationType === 'SUPPLIER')
                            );

                            setContractors(
                                organizations.filter((org) => org.organizationType === 'CONTRACTOR')
                            );


                            if (facilityId != 0) {
                                queryInfo(facilityId);
                            }

                            // if (assetId != 0) {
                            //     queryAssetInfo(assetId);
                            // }
                        }

                    }
                },

                onError: (err) => {
                    errorHandling(err);
                }
            }

        );



        //  errorHandling(error);
        // if (facilityData) {
        //     let organizations = facilityData.findAllFacilitiesByCompanyId;
        //     setFacilities(
        //         organizations.filter((org) => org.organizationType === 'FACILITY')
        //     );
        //     setSuppliers(
        //         organizations.filter((org) => org.organizationType === 'SUPPLIER')
        //     );
        //     setContractors(
        //         organizations.filter((org) => org.organizationType === 'CONTRACTOR')
        //     );

        //     if (facilityId != 0) {
        //         queryInfo(facilityId);
        //     }
        // }
    }, []);
    //  }, [facilityData, error]);


    ///////////////////////////////////////////////////////////Alert Bar Message

    let displayAlert = <Alert message={message} display={showAlertBar} />;
    ///////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////Submission for Edit or Delete Action

    const viewHandler = (id, op) => {
        let selected = {};
        if (op !== "Add") {
            let intermediateselected = assets.filter((ast) => {
                return ast._id === id;
            })
            selected = { ...intermediateselected[0] };
            selected.dateOfManufacture = formatDateForInput(selected.dateOfManufacture);
            selected.dateOfInstallation = formatDateForInput(selected.dateOfInstallation);
        }

        dispatch(assetActions.addInfo({ asset: selected, assetTypes, facilityId: selectedFacility, suppliers: suppliers, contractors: contractors, operation: op }));
        router.push('/app/ams/assets/mutate-asset');
    };

    ///////////////////////////////////////////////////////////Create Table To Display
    function formatDateForInput(storedDate) {
        return moment(storedDate).format('DD-MMM-YYYY')
    }

    // const fillButtons = (id) => {
    //     let buttons = [
    //         { color: 'success', icon: 'edit', handler: 'Edit', tooltipMessage: 'Edit Item', location: "left" },
    //         { color: 'error', icon: 'close', handler: 'Delete', tooltipMessage: 'Remove Item', location: "right" },
    //     ].map((prop, key) => {
    //         return (
    //             <Tooltip
    //                 key={key}
    //                 id="close1"
    //                 title={prop.tooltipMessage}
    //                 placement={prop.location}

    //             >
    //                 <MDBox
    //                     ml={1}
    //                     display='inline'
    //                     key={key}
    //                 >
    //                     <MDButton
    //                         iconOnly
    //                         size="small"
    //                         variant="contained"
    //                         onClick={() => viewHandler(id, prop.handler)}
    //                         color={prop.color}

    //                     >
    //                         <Icon>{prop.icon}</Icon>
    //                     </MDButton>
    //                 </MDBox>
    //             </Tooltip>
    //         );
    //     });
    //     return buttons;
    // };


    let createData = (id, code, name, description) => {
        return { code, name, description, actions: fillButtons(id, viewHandler) };
    };


    tableInfo = {
        columns: [
            { Header: "Asset Code", accessor: "code" },
            { Header: "Asset Name", accessor: "name" },
            { Header: "Asset Description", accessor: "description" },
            { Header: "actions", accessor: "actions" },

        ], rows: []
    };

    if (assets.length !== 0) {
        assets.map((asset) => {
            tableInfo.rows.push(createData(
                asset._id,
                asset.assetCode,
                asset.assetName,
                asset.assetDescription
            ));
        });
    }

    ///////////////////////////////////////////////////////////

    //////////////////// Display Facility and Query Database for the Asset
    const queryInfo = (value) => {
        setSelectedFacility(value);
        if (value === '') {
            setShowAssetList(false);
        } else {
            assetQuery({
                variables: { id: value },
                onCompleted: (data) => {
                    setShowAssetList(true);
                    setAssets(data?.findOrg.facassets);
                },
                onError: (err) => {
                    errorHandling(err);
                }
            });
        }
    };

    const selectHandler = (event) => {
        let value = event.target.value;
        queryInfo(value);

    };

    let addButton = (
        <MDBox p={1}>
            <MDButton
                iconOnly
                size="large"
                variant="contained"
                onClick={() => viewHandler(selectedFacility, "Add")}
                color="success"
            >
                <Icon>add</Icon>
            </MDButton>
        </MDBox>
    );


    let displayTable = showAssetList && assets.length != 0 ?
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={8} >
                <Card >
                    <MDBox p={3} lineHeight={1} textAlign={"center"}>
                        <MDTypography variant="h3" fontWeight="medium" textAlign="center" textTransform="uppercase" color="info">
                            List of Assets
                        </MDTypography>
                        {addButton}
                    </MDBox>

                    <DataTable table={tableInfo} />
                </Card>
            </Grid>
        </Grid> : assetLoading || selectedFacility === "" ? "" : <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item >
                <MDTypography variant="h3" fontWeight="medium" textAlign="center" color="text">
                    There are no Assets. Please add!
                </MDTypography>
            </Grid>
            <Grid item  >

                {addButton}

            </Grid>
        </Grid>;

    ////////////////////////////////////////////////// Main display for the page. 
    let display = !showAlertBar ? <>
        <Grid container alignContent={"center"} justifyContent={"center"}>
            <Card sx={{ marginBottom: 5, width: 600, textAlign: "center" }}>
                <Grid item xs={12} sm={12} >
                    <MDBox p={1}>
                        <MDTypography variant="h5" fontWeight="medium" textAlign="center" color="info">
                            Select a Facility
                        </MDTypography>
                    </MDBox>
                    <MDBox p={1}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>

                            <InputLabel id="demo-simple-select-standard-label">SELECT A FACILITY</InputLabel>
                            <Select
                                name="selectFacility"
                                value={selectedFacility}
                                onChange={selectHandler}
                            >
                                <MenuItem default value="">None</MenuItem>
                                {facilities.map((f) => (
                                    <MenuItem key={f._id} value={f._id}>
                                        {f.organizationName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </MDBox>
                </Grid>
            </Card>
        </Grid>
        {displayTable}
    </> : '';


    return (

        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={2} pb={3}>
                <MDBox mb={3}>
                    {displayAlert}
                </MDBox>
                {display}
            </MDBox>
            <Footer company={{ name: 'RJS Engineering', href: 'http://ams.rjsengineeringbz.com' }} />
        </DashboardLayout >
    );
}

export default AssetsList;
