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

import { useEffect, useState, useContext } from "react";
import { useRouter } from 'next/router';

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";

import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "@structures/Footer";


//////////////////////////////////////////////
import AuthContext from "@store/auth-context";
import { useSelector } from 'react-redux';
import { validationsMutate } from "@pages-app-ams/organizations/schemas/validations";
import form from "@pages-app-ams/organizations/schemas/form";
import * as statements from '@sections/graphql/organizations/grapql-statements';
import { useMutation } from '@apollo/client';

/////////////////////////////////////////////


// Mutate page components
import OrganizationInfo from "@pages-app-ams/organizations/components/OrganizationInfo"
import Address from "@pages-app-ams/organizations/components/Address";
import { AMSAlert } from "@pagesComponents/generalComponents/HelperFunctions";


function MutateOrganization() {
    const returnLink = "/app/ams/organizations/list-organizations";
    const { formId, formField } = form;
    const [showAlertBar, setShowAlertBar] = useState(false);
    const [message, setMessage] = useState('');
    const item = useSelector(state => state.mu.item);
    const operation = useSelector(state => state.mu.operation);
    const router = useRouter();

    ///////////////////////////////////////////////////////////////
    const [updateOrg] = useMutation(statements.UPDATE);
    const [deleteOrg] = useMutation(statements.DELETE);
    const { user, logout } = useContext(AuthContext);

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

    function insertUserInformation(data) {
        let obj = { ...data };
        obj.operationUserId = user.userId;
        obj.operationUserName = user.firstName + " " + user.lastName;
        obj.operationUserRole = user.role;
        return obj;
    }

    // API Handler to put organization
    const putDataHandler = async (org, actions) => {
        updateOrg({
            variables: { input: insertUserInformation(org) },
            onCompleted: () => {
                router.push(returnLink);
                actions.setSubmitting(false);
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };

    // API Handler to delete organization
    const deleteDataHandler = async (org, actions) => {
        deleteOrg({
            variables: { input: insertUserInformation(org) },
            onCompleted: () => {
                router.push(returnLink);
                actions.setSubmitting(false);
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };
    ///////////////////////////////////////////////////////////////

    useEffect(() => {
        if (item.length == 0) {
            setShowAlertBar(true);
            setMessage('You are not allowed access directly to this page.');
        }
    }, [])

    const handleSubmit = (values, actions) => {
        if (operation === "Edit") {
            actions.setTouched({});
            putDataHandler(values, actions);
        } else {
            deleteDataHandler(values, actions);
        }

    };
    ///////////////////////////////////////////////////////////////
    let displayAlert = AMSAlert(message, showAlertBar);
    ///////////////////////////////////////////////////////////////

    return (
        <DashboardLayout>
            <DashboardNavbar />
            {item.length == 0 ? displayAlert :
                (<MDBox my={3}>
                    <Formik
                        initialValues={item[0]}
                        validationSchema={operation !== "Edit" ? "" : validationsMutate}
                        onSubmit={handleSubmit}
                        validateOnMount={operation !== "Edit" ? false : true}
                    >

                        {({ values, errors, touched, isSubmitting, isValid, dirty, setFieldValue }) => (
                            <Form id={formId} autoComplete="off">
                                <MDBox mb={6}>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={12} lg={6}>
                                            <MDTypography variant="h4" fontWeight="medium">
                                                {operation} Organization
                                            </MDTypography>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <MDBox display="flex" justifyContent="flex-end">
                                                <MDButton sx={{ paddingLeft: 4, paddingRight: 4 }} color="error" variant="gradient" onClick={() => router.push(returnLink)}>
                                                    Cancel
                                                </MDButton>
                                                <MDButton sx={{ marginLeft: 5, paddingLeft: 5, paddingRight: 5 }} color={isValid ? "success" : "dark"} type="submit" variant="gradient" >
                                                    {operation}
                                                </MDButton>
                                            </MDBox>

                                        </Grid>
                                    </Grid>
                                </MDBox>


                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={5}>
                                        <Card sx={{ padding: 3, height: 300 }}>
                                            <OrganizationInfo formData={{
                                                values,
                                                touched,
                                                formField,
                                                errors,
                                                operation,
                                                setFieldValue
                                            }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={5}>
                                        <Card sx={{ padding: 3, height: 300 }}>
                                            <Address formData={{
                                                values,
                                                touched,
                                                formField,
                                                errors,
                                                operation
                                            }} />
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}

                    </Formik>
                </MDBox>)}
            <Footer company={{ name: 'RJS Engineering', href: 'http://ams.rjsengineeringbz.com' }} />
        </DashboardLayout>
    );
}

export default MutateOrganization;
