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
import { Select } from '@mui/material';
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
import { recordActions } from '@store/record-slice';
import * as statements from '@sections/graphql/maintenance-records/grapql-statements';
import { useLazyQuery, useQuery } from '@apollo/client';

import { useSelector } from 'react-redux';
///////////////////////////////////////////////////////////
import { AMSMessage, AMSAlert } from '@pagesComponents/generalComponents/HelperFunctions';
import RecordsTable from '@pagesComponents/records/RecordsTable';
import AuthContext from '@store/auth-context';


function RecordsList() {

    const dispatch = useDispatch();
    const router = useRouter();

    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const [records, setRecords] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [assets, setAssets] = useState([]);
    const [selectedFacility, setSelectedFacility] = useState('');
    const [selectedAsset, setSelectedAsset] = useState('');
    const [showRecordsList, setShowRecordsList] = useState(false);
    const [showAssetSelect, setShowAssetSelect] = useState(false);


    const { user, logout } = useContext(AuthContext);
    const facilityId = useSelector(state => state.record.facilityId);
    const assetId = useSelector(state => state.record.assetId);

    //Select company Id based on role.
    let selectionId = user.role === 'superuser' ? '' : user.companyId;

    ///////////////////////GraphQL Query information
    ///**********Get Facilities in the system under the company */

    const [facilitiesQuery, { loading: loadingFacilities }] = useLazyQuery(
        statements.FINDALLFACILITIESBYCOMPANYID,
        { fetchPolicy: 'cache-and-network' }
    );
    // const { loading: loadingFacilities, error, data: facilityData } = useQuery(
    //     statements.FINDALLFACILITIESBYCOMPANYID, {
    //     variables: { _id: user.companyId },
    // }
    // );

    ///**********Get All assets as selected by Facility */
    const [assetQuery, { loading: assetLoading }] = useLazyQuery(
        statements.FINDASSETBYFACILITY,
        { fetchPolicy: 'cache-and-network' }
    );

    ///**********Get All records as selected for the Asset */
    const [recordQuery, { refetch: recordRefetch, loading: loadingRecords }] = useLazyQuery(
        statements.FINDASSET,
        { fetchPolicy: 'cache-and-network' }
    );

    ///////////////////////////////////////////////////////////
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
    ///////////////////////////////////////////////////////////

    ///////////////////////Perform Query Request on load
    useEffect(() => {

        let facilityData = [];

        //  errorHandling(error);

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

                            if (facilityId != 0) {
                                queryFacilityInfo(facilityId);
                            }

                            if (assetId != 0) {
                                queryAssetInfo(assetId);
                            }
                        }

                    }
                },

                onError: (err) => {
                    errorHandling(err);
                }
            }

        );



        // if (facilityData) {
        //     let organizations = facilityData.findAllFacilitiesByCompanyId;
        //     setFacilities(
        //         organizations.filter((org) => org.organizationType === 'FACILITY')
        //     );

        //     if (facilityId != 0) {
        //         queryFacilityInfo(facilityId);
        //     }

        //     if (assetId != 0) {
        //         queryAssetInfo(assetId);
        //     }
        // }
    }, []);
    //}, [facilityData, error]);

    //////////////////// Display Facility choice to select
    let displayNoAssetMessage = AMSMessage("There are no Asset Records. Please add!", "add", "success", '', router, "/app/ams/assets/list-assets")

    const queryFacilityInfo = (value) => {
        setSelectedFacility(value);
        setSelectedAsset('');
        setShowRecordsList(false);
        setShowAssetSelect(false);
        if (value === '') {
            setShowAssetSelect(false);
            setShowRecordsList(false);
        } else {
            assetQuery({
                variables: { id: value },
                onCompleted: (data) => {
                    if (data.findOrg.facassets.length == 0) {
                        setShowAssetSelect(false);
                    } else {
                        setShowAssetSelect(true);
                        setAssets(data?.findOrg.facassets);
                    }
                },
                onError: (err) => {
                    errorHandling(err);
                }
            });
        }
    };

    const selectFacilityHandler = (event) => {
        let value = event.target.value;
        queryFacilityInfo(value);

    };
    let displayFacilities = (
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
                            onChange={selectFacilityHandler}
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
        </Card>)

    //////////////Display and Select Options for Assets

    const queryAssetInfo = (value) => {
        setSelectedAsset(value);
        if (value === '') {
            setShowRecordsList(false);
        } else {
            recordQuery({
                variables: { id: value },
                onCompleted: (data) => {
                    setShowRecordsList(true);
                    setRecords(data?.findAsset.maintenanceRecords);
                },
                onError: (err) => {
                    errorHandling(err);
                }
            });
        }
    };

    const selectAssetHandler = (event) => {
        let value = event.target.value;
        queryAssetInfo(value);
    };

    let displayAssetSelect = showAssetSelect && assets.length != 0 ? (
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
                            onChange={selectAssetHandler}
                        >
                            <MenuItem default value="">None</MenuItem>
                            {assets.map((a) => (
                                <MenuItem key={a._id} value={a._id}>
                                    {a.assetName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </MDBox>
            </Grid>
        </Card>) : assetLoading || selectedFacility === "" ? "" : displayNoAssetMessage;

    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////Submission for Edit or Delete

    function formatDateForInput(storedDate) {
        return moment(storedDate).format('DD-MMM-YYYY')
    }

    const viewHandler = (id, op) => {
        let selected = {};
        if (op !== "Add") {
            let intermediateselected = records.filter((ast) => {
                return ast._id === id;
            })
            selected = { ...intermediateselected[0] };
            selected.dateOfMaintenance = formatDateForInput(selected.dateOfMaintenance);
        }

        dispatch(recordActions.addInfo({ record: selected, facilityId: selectedFacility, assetId: selectedAsset, operation: op }));
        router.push('/app/ams/records/mutate-record');
    };

    /////////////////////////////////////////////////////////// Prepare Table

    let displayTable = <RecordsTable showTable={showRecordsList} data={records} operationHandler={viewHandler} />;

    //////////////////////////////////////////Alert Bar for display
    let displayAlert = AMSAlert(message, showAlertBar);
    //////////////////////////////////////////Main Page Display
    let display = !showAlertBar ? <>
        <Grid container alignContent={"center"} justifyContent={"center"}>
            {displayFacilities}
        </Grid>
        <Grid container alignContent={"center"} justifyContent={"center"}>
            {displayAssetSelect}
        </Grid>
        {displayTable}

    </> : '';

    if (loadingFacilities) return null;
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

export default RecordsList;
