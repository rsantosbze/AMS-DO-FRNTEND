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
import { Select, Tooltip } from '@mui/material';
import Grid from "@mui/material/Grid";
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "@structures/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@structures/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";

///////////////////////////////////////////////////////////
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
///////////////////////////////////////////////////////////

import * as statements from '@sections/graphql/invoices/grapql-statements';
import AuthContext from '@store/auth-context';
//////////////////////////////////////////////////////////


// ///////////////Invoice page components
import Header from "/pagesComponents/invoices/components/Header";
import InvoiceModal from '@pages-app-ams/invoices/components/InvoiceModal';
import SelectAsset from '@pages-app-ams/invoices/components/SelectionAsset';
import Alert from '@pagesComponents/generalComponents/Alert';
import InvoiceTable from '@pages-app-ams/invoices/components/InvoiceTable';
/////////////////////////////////////////////////////////////////

function InvoiceList() {

    const dispatch = useDispatch();
    const router = useRouter();

    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const [invoices, setInvoices] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [contractors, setContractors] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [asset, setAsset] = useState([]);
    const [selectionAssets, setSelectionAssets] = useState([]);
    const [selectedFacility, setSelectedFacility] = useState('');
    const [selectedAsset, setSelectedAsset] = useState('');
    const [showAssetDetails, setShowAssetDetails] = useState(false);
    const [showAssetSelect, setShowAssetSelect] = useState(false);
    const [showInvoicesList, setShowInvoicesList] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    // const [facility, setFacility] = useState({});
    // const [supplier, setSupplier] = useState({});
    // const [contractor, setContractor] = useState({});
    const [invoice, setInvoice] = useState({});
    const [operation, setOperation] = useState({});


    const { user, logout } = useContext(AuthContext);
    const facilityId = useSelector(state => state.record.facilityId);
    const assetId = useSelector(state => state.record.assetId);

    //Select company Id based on role.
    let selectionId = user.role === 'superuser' ? '' : user.companyId;

    //console.log(user);
    ///**********Get All assets as selected by Facility */
    const [assetByFacilityQuery, { loading: loadingAsset }] = useLazyQuery(
        statements.FINDASSETBYFACILITY,
        { fetchPolicy: 'cache-and-network' }
    );

    ///**********Get All selected Asset Information */
    const [assetQuery, { loading: loadingSelectedAsset }] = useLazyQuery(
        statements.FINDASSET,
        { fetchPolicy: 'cache-and-network' }
    );

    ///**********Get All assets as selected by Facility */

    // const { loading: loadingFacilities, error, data: facilityData } = useQuery(
    //     statements.FINDALLFACILITIESBYCOMPANYID, {
    //     variables: { _id: user.companyId },
    // }
    // );

    const [facilitiesQuery, { loading: loadingFacilities }] = useLazyQuery(
        statements.FINDALLFACILITIESBYCOMPANYID,
        { fetchPolicy: 'cache-and-network' }
    );


    ///*****************Get all invoices for selected Asset */
    const [invoicesQuery, { loading: loadingInvoices, error: errorInvoices, refetch: refetchInvoicesQuery, data: invoicesData }] = useLazyQuery(
        statements.FINDINVOICESBYASSET,
        { fetchPolicy: 'cache-and-network' }
    );

    /// **************** Mutations for Invoice  */
    const [updateInvoice] = useMutation(statements.UPDATE);
    const [deleteInvoice] = useMutation(statements.DELETE);
    const [createInvoice] = useMutation(statements.CREATE);

    ///////////////////////////////////////////////////////////
    /// Error Handling function for GraphQL

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


    let refetchQ = () => {
        refetchInvoicesQuery({ id: selectedAsset });
    }


    /// Success Handling for GraphQL
    let successAction = () => {
        refetchQ();
    }


    ///////////////////////////////////////////////////////////

    ///////////////////////Perform Query Request on load find all organizations for particular company
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
                            setOrganizations(facilityData.findAllFacilitiesByCompanyId);

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

        //   errorHandling(error);

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
        //     setOrganizations(facilityData.findAllFacilitiesByCompanyId);

        //     if (facilityId != 0) {
        //         queryFacilityInfo(facilityId);
        //     }

        //     if (assetId != 0) {
        //         queryAssetInfo(assetId);
        //     }
        // }
    }, []);
    //  }, [facilityData, error]);

    //////////////////////////////////////////////////////////
    const postDataHandler = async (inv) => {
        setShowAlertBar(false);
        createInvoice({
            variables: { input: inv },
            onCompleted: (data) => {

                if (data.createInvoice.action === 'error') {
                    setMessage(data.createAsset.message.toUpperCase());
                    setShowAlertBar(true);

                } else {
                    successAction();
                }
            },
            onError: (err) => {
                //console.log(err)
                errorHandling(err);
            }
        });
    };
    // API Handler to put asset
    const putDataHandler = async (inv) => {
        updateInvoice({
            variables: { input: inv },
            onCompleted: () => {
                successAction();
            },
            onError: (err) => {
                //console.log(err)
                errorHandling(err);
            }
        });
    };

    // API Handler to delete asset
    const deleteDataHandler = async (inv) => {
        deleteInvoice({
            variables: { input: inv },
            onCompleted: () => {
                successAction();
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };

    // ////////////////// Display Facility choice to select
    const queryFacilityInfo = (value) => {
        setSelectedFacility(value);
        setSelectedAsset('');
        setShowAssetDetails(false);
        setShowInvoicesList(false);
        if (value === '') {
            setShowAssetSelect(false);
            setShowAssetDetails(false);
            setShowInvoicesList(false);
        } else {
            assetByFacilityQuery({
                variables: { id: value },
                onCompleted: (data) => {
                    if (data.findOrg.facassets.length == 0) {
                        setShowAssetSelect(false);
                    } else {
                        setShowAssetSelect(true);
                        setSelectionAssets(data?.findOrg.facassets);
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
        setShowInvoicesList(false);

        if (value === '') {
            setShowAssetDetails(false);
        } else {
            //console.log(selectedAsset);
            assetQuery({
                variables: { id: value },
                onCompleted: (data) => {
                    //console.log(data);
                    setAsset(data?.findAsset);
                    // Set each particular Organization for the Asset.
                    //    selectAssetOrganizationInfo(data?.findAsset);
                    // Display the Asset Detail Component
                    setShowAssetDetails(true);
                },
                onError: (err) => {
                    errorHandling(err);
                }
            });
        }
    };

    // const selectAssetOrganizationInfo = (asset) => {
    //     setFacility(organizations.filter(org => org._id === asset.facilityId));
    //     setSupplier(organizations.filter(fa => fa._id === asset.supplierId));
    //     setContractor(organizations.filter(fa => fa._id === asset.contractorId))
    // }

    const selectAssetHandler = (event) => {
        let value = event.target.value;
        queryAssetInfo(value);
    };

    let displayAssetSelect = <SelectAsset router={router} selectHandler={selectAssetHandler} data={{ selectedAsset, showAssetSelect, selectionAssets, selectedFacility, loadingAsset }
    } />

    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////Submission for Delete or Edit

    function formatDateForInput(storedDate) {
        return moment(storedDate).format('DD-MMM-YYYY')
    }

    const viewHandler = (id, op) => {
        let selected = {};
        setOperation(op);
        setOpenModal(true);
        if (op !== "Add") {
            let intermediateselected = invoices.filter((inv) => {
                return inv._id === id;
            })
            selected = { ...intermediateselected[0] };
            setInvoice(selected);
            //   selected.dateOfMaintenance = formatDateForInput(selected.dateOfMaintenance);
        }
        // dispatch(recordActions.addInfo({ record: selected, facilityId: selectedFacility, assetId: selectedAsset, operation: op }));
        // router.push('/records/mutate-record');
    };

    let listInvoicesHandler = () => {
        //console.log(selectedAsset)

        invoicesQuery({
            variables: { id: selectedAsset },
            onCompleted: (data) => {
                setInvoices(data?.findAsset.invoices);
                setShowInvoicesList(true);
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };


    let displayTable = <InvoiceTable showTable={showInvoicesList} data={invoices} operationHandler={viewHandler} />;

    ////////////////////////////////////////Alert Bar for Display

    let displayAlert = <Alert message={message} display={showAlertBar} />;

    ///////////////////////////////////////Dialog Control

    let closeModalHandler = () => {
        setOpenModal(false);
    };

    const operationHandler = (values, operation, actions) => {

        // Close Modal/dialog
        setOpenModal(false);

        if (operation === 'Add') {
            postDataHandler(values);
        } else if (operation === 'Edit') {
            putDataHandler(values);
        } else {
            deleteDataHandler(values);
        }
    };

    ////////////////////////////////////////////////////////////////////
    let assetDetails = showAssetDetails && (
        <MDBox sx={{ height: "450" }}>
            <Card>
                <MDBox pt={2} px={2}>
                    <Header listHandler={listInvoicesHandler} asset={asset} operationHandler={viewHandler} />
                </MDBox>
            </Card>
        </MDBox>);

    /////////////////////////////////////////////////Main Display
    let display = !showAlertBar ? <>
        <Grid container spacing={3} alignContent={"center"} justifyContent={"center"}>
            <Grid item>
                {displayFacilities}
            </Grid>
            <Grid item>
                {displayAssetSelect}
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={12}>
                {assetDetails}
            </Grid>
        </Grid>
        <Grid sx={{ pt: 3 }}
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item xs={12} sm={12} >
                {displayTable}
            </Grid>
        </Grid>
    </> : '';

    if (loadingFacilities) return null;
    //////////////////////////////////////////////////////////////////////////////////////
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={2} pb={3}>
                <MDBox mb={3}>
                    {displayAlert}
                </MDBox>
                {display}
                <InvoiceModal onSave={operationHandler} formData={{ facilityId: selectedFacility, invoice, operation: operation, suppliers, contractors, openModal, closeModalHandler, assetId: selectedAsset }} />
            </MDBox>
            <Footer company={{ name: 'RJS Engineering', href: 'http://ams.rjsengineeringbz.com' }} />
        </DashboardLayout >
    );
}

export default InvoiceList;
