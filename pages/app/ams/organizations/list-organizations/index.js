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
// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "@structures/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@structures/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";


///////////////////////////////////////////////////////////
import { useDispatch } from 'react-redux';
import { mutateActions } from "@store/mutate-slice";
import * as statements from '@sections/graphql/organizations/grapql-statements';
import { useQuery, useLazyQuery } from '@apollo/client';
///////////////////////////////////////////////////////////
import DataTable from "@structures/Tables/DataTable";
import { AMSAlert, fillButtons, AMSRouterButton } from '@pagesComponents/generalComponents/HelperFunctions';

import AuthContext from '@store/auth-context';

function DataTables() {

    const dispatch = useDispatch();

    const router = useRouter();
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const [organizations, setOrganizations] = useState([]);
    const [companies, setCompanies] = useState([]);
    const { user, logout } = useContext(AuthContext);
    let tableInfo = {};

    let selectionId = user.role === 'superuser' ? '' : user.companyId;

    ////////////////////////////GraphQL Queries
    const [lazyQuery, { refetch: orgRefetch, data, error, loading }] = useLazyQuery(statements.FINDALLORGSBYCOMPANYID, {
        fetchPolicy: 'cache-and-network', // Used for first execution

    });

    const { loading: companiesLoading, data: companiesData, error: companiesError } = useQuery(statements.FINDALLCOMPANIES, {
        fetchPolicy: 'cache-and-network', // Used for first execution

    });
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

    ////////////////////////////////////////////////////////////

    useEffect(() => {
        setShowAlertBar(false);
        if (companiesData) {
            setCompanies(companiesData.findAllCompanies)
        }
        errorHandling(companiesError)
    }, [companiesData]);


    useEffect(() => {
        setShowAlertBar(false);
        lazyQuery(
            {
                variables: {
                    _id: selectionId
                },
                onCompleted: (data) => {

                    if (data) {
                        if (user.role !== 'superuser') {
                            const result = data.findAllOrgsByCompanyId.filter(org => {
                                // return org.organizationType !== 'COMPANY' && org.organizationType !== 'MASTER'
                                return org.organizationType !== 'MASTER'
                            })
                            setOrganizations(result);
                        } else {
                            setOrganizations(data.findAllOrgsByCompanyId);
                        }

                    }
                },

                onError: (err) => {
                    errorHandling(err);
                }
            }

        );

    }, []);


    let displayAlert = AMSAlert(message, showAlertBar);
    ///////////////////////////////////////////////////////////

    const reload = () => {
        orgRefetch({
            variables: {
                _id: selectionId
            }
        }
        );
        if (data) {

            if (role !== 'superuser') {
                const result = data.findAllOrgsByCompanyId.filter(org => {
                    org.organizationType !== 'COMPANY'
                })
                setOrganizations(result);
            } else {
                setOrganizations(data.findAllOrgsByCompanyId);
            }
        }
    };
    ///////////////////////////////////////////////////////////

    const viewHandler = (id, op) => {
        let selected = organizations.filter((org) => {
            return org._id === id;
        })
        dispatch(mutateActions.mutate({ item: selected, operation: op }));

        router.push('/app/ams/organizations/mutate-organization');
    };

    let createData = (id, orgName, orgType, company, city) => {
        return { organizationName: orgName, organizationType: orgType, company: company, city: city, actions: fillButtons(id, viewHandler) };
    };

    ///////////////////////////////////////////////////////////
    tableInfo = {
        columns: [
            { Header: "organization name", accessor: "organizationName", width: "20%" },
            { Header: "organization type", accessor: "organizationType", width: "25%" },
            { Header: "company", accessor: "company" },
            { Header: "city", accessor: "city" },
            { Header: "actions", accessor: "actions" },

        ], rows: []
    };


    let companyName = (compId) => {
        let selectedOrg = companies.filter(comp => comp._id === compId);
        if (selectedOrg.length == 0) {
            return "AMS";
        } else {
            return selectedOrg[0].organizationName;
        }

    }
    if (organizations.length !== 0) {
        organizations.map((org) => {
            tableInfo.rows.push(createData(org._id, org.organizationName, org.organizationType, companyName(org.companyId), org.city));
        });
    }

    let displayTable = !showAlertBar ?
        <Card>
            <MDBox p={3} lineHeight={1}>
                <MDTypography variant="h3" fontWeight="medium" textAlign="center" textTransform="uppercase" color="info">
                    List of Organizations
                </MDTypography>
                {AMSRouterButton("add", "success", router, "/app/ams/organizations/add-organization")}
            </MDBox>
            <DataTable table={tableInfo} />
        </Card> : '';

    if (loading) return null;

    return (

        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <MDBox mb={3}>
                    {displayAlert}
                </MDBox>
                {displayTable}
            </MDBox>
            <Footer company={{ name: 'RJS Engineering', href: 'http://ams.rjsengineeringbz.com' }} />
        </DashboardLayout>
    );
}

export default DataTables;
