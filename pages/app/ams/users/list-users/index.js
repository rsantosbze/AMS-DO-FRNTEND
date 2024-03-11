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
import * as statements from '@sections/graphql/users/grapql-statements';
import { useLazyQuery } from '@apollo/client';
///////////////////////////////////////////////////////////

import DataTable from "@structures/Tables/DataTable";
import { AMSAlert, fillButtons } from '@pagesComponents/generalComponents/HelperFunctions';
import AuthContext from '@store/auth-context';

function UsersList() {

    const dispatch = useDispatch();

    const router = useRouter();
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);
    const { user, logout } = useContext(AuthContext);
    let tableInfo = {};


    let selectionId = user.role === 'superuser' ? '' : user.companyId;

    console.log(selectionId);

    ////////////////////////////GraphQL Queries
    const [usersQuery, { data, errors, refetch, loading }] = useLazyQuery(statements.FINDALLUSERSBYCOMPANYID, {
        fetchPolicy: 'network-only', // Used for first execution
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
        usersQuery(
            {
                variables: {
                    _id: selectionId
                },
                onCompleted: (data) => {

                    if (data) {
                        if (user.role !== 'superuser') {
                            const results = data.findAllUsersByCompanyId.filter(usr => {
                                // return (usr.role !== 'superuser' && usr.role !== 'admin')
                                return (usr.role !== 'superuser')
                            })
                            setUsers(results);
                        } else {
                            setUsers(data.findAllUsersByCompanyId);
                        }

                    }
                },

                onError: (err) => {
                    errorHandling(err);
                }
            }

        );

    }, []);


    ///////////////////////////////////////////////////////////
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
                const results = data.findAllUsersByCompanyId.filter(usr => {
                    return (usr.role !== 'superuser' && usr.role !== 'admin')
                })
                setUsers(results);
            } else {
                setUsers(data.findAllUsersByCompanyId);
            }

        };
    }
    ///////////////////////////////////////////////////////////

    const viewHandler = (id, op) => {
        let selected = users.filter((user) => {
            return user._id === id;
        })
        dispatch(mutateActions.mutate({ item: selected, operation: op }));

        router.push('/app/ams/users/mutate-user');
    };

    let createData = (id, firstName, lastName, username, organizationName, email, role, status, creatorRole) => {
        return { firstName, lastName, username, organizationName, email, role, status, creatorRole, actions: fillButtons(id, viewHandler) };
    };

    ///////////////////////////////////////////////////////////
    tableInfo = {
        columns: [
            { Header: "first name", accessor: "firstName" },
            { Header: "last name", accessor: "lastName" },
            { Header: "username", accessor: "username" },
            { Header: "organization name", accessor: "organizationName" },
            { Header: "email", accessor: "email" },
            { Header: "role", accessor: "role" },
            { Header: "status", accessor: "status" },
            { Header: "creator role", accessor: "creatorRole" },
            { Header: "actions", accessor: "actions" },

        ], rows: []
    };

    if (users.length !== 0) {
        users.map((usr) => {
            tableInfo.rows.push(createData(usr._id,
                usr.firstName,
                usr.lastName,
                usr.username,
                usr.companyName,
                usr.email,
                usr.role,
                usr.status.toString(),
                usr.creatorRole));
        });
    }

    let displayTable = !showAlertBar ?
        <Card>
            <MDBox p={3} lineHeight={1}>
                <MDTypography variant="h3" fontWeight="medium" textAlign="center" textTransform="uppercase" color="info">
                    List of Users
                </MDTypography>
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

export default UsersList;
