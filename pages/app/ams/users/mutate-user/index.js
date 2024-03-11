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

import { useSelector } from 'react-redux';
import { validationsMutate } from "@pages-app-ams/users/schemas/validations";
import form from "@pages-app-ams/users/schemas/form";
import * as statements from '@sections/graphql/users/grapql-statements';
import { useMutation, useQuery } from '@apollo/client';
import AuthContext from "@store/auth-context";
/////////////////////////////////////////////

// Mutate page components
import UserInfo from "@pages-app-ams/users/components/UsersInfo";
import Address from "@pages-app-ams/users/components/Address";
import { AMSAlert } from "@pagesComponents/generalComponents/HelperFunctions";

function MutateUser() {

    const [showAlertBar, setShowAlertBar] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');
    const item = useSelector(state => state.mu.item);
    const operation = useSelector(state => state.mu.operation);
    const router = useRouter();
    const { user } = useContext(AuthContext);

    ///////////////////////////////////////////////////////////////
    const [updateUser] = useMutation(statements.UPDATE);
    const [deleteUser] = useMutation(statements.DELETE);
    const { data: companyData } = useQuery(statements.FINDALLCOMPANIES);
    const [companies, setCompanies] = useState([]);
    const { formId, formField } = form;

    const returnLink = "/app/ams/users/list-users";

    useEffect(() => {
        if (item.length == 0) {
            setShowAlertBar(true);
            setMessage('You are not allowed access directly to this page.');
        }
    }, [])

    useEffect(() => {

        if (companyData) {
            setCompanies(companyData.findAllCompanies)
            setShowForm(true);
        }
    }, [companyData]);

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
    // API Handler to put user
    const putDataHandler = async (usr, actions) => {
        updateUser({
            variables: { input: insertUserInformation(usr) },
            onCompleted: () => {
                router.push(returnLink)
                actions.setSubmitting(true);
            },
            onError: (err) => {
                errorHandling(err);
            }
        });
    };

    // API Handler to delete user
    const deleteDataHandler = async (usr, actions) => {
        setShowAlertBar(false);
        const loggedInId = user.userId;
        if (loggedInId !== usr._id) {
            deleteUser({
                variables: { input: insertUserInformation(usr) },
                onCompleted: () => {
                    router.push(returnLink)
                    actions.setSubmitting(true);
                },
                onError: (err) => {
                    errorHandling(err);
                }
            });
        } else {

            setMessage('CANNOT DELETE LOGGED IN USER!');
            setShowAlertBar(true);
        }
    };
    ///////////////////////////////////////////////////////////////

    const handleSubmit = (values, actions) => {

        if (operation === "Edit") {
            actions.setTouched({});
            putDataHandler(values, actions);
        } else {
            deleteDataHandler(values, actions);
        }
        // if (isLastStep) {
        //     submitForm(values, actions);
        // } else {
        //     // setActiveStep(activeStep + 1);
        //     actions.setTouched({});
        //     actions.setSubmitting(false);
        // }

        actions.setSubmitting(false);
        actions.resetForm();
    };
    ///////////////////////////////////////////////////////////////
    let displayAlert = AMSAlert(message, showAlertBar);

    ///////////////////////////////////////////////////////////////

    return (
        <DashboardLayout>
            <DashboardNavbar />
            {displayAlert}
            {item.length == 0 ? '' :
                (<MDBox my={3}>
                    <Formik
                        initialValues={item[0]}
                        validationSchema={operation !== "Edit" ? "" : validationsMutate}
                        onSubmit={handleSubmit}
                        validateOnMount={operation !== "Edit" ? false : true}
                    >

                        {({ values, errors, touched, isSubmitting, isValid, dirty }) => (
                            <Form id={formId} autoComplete="off">
                                <MDBox mb={6}>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={12} lg={6}>
                                            <MDTypography variant="h4" fontWeight="medium">
                                                {operation} User
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
                                {showForm ?
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} lg={5}>
                                            <Card sx={{ padding: 3, height: 300 }}>
                                                <UserInfo formData={{
                                                    values,
                                                    touched,
                                                    formField,
                                                    errors,
                                                    operation,
                                                    companies
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
                                    : ''}
                            </Form>
                        )}

                    </Formik>
                </MDBox>)}
            <Footer company={{ name: 'RJS Engineering', href: 'http://ams.rjsengineeringbz.com' }} />
        </DashboardLayout>
    );
}

export default MutateUser;
