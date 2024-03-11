import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import People from '@material-ui/icons/People';

// core components

import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput.js';

import loginStyle from '../../styles/Sections/loginStyle';
import SnackbarContent from '../../components/Snackbar/SnackbarContent.js';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem.js';
import * as statements from '../user/grapql-statements';
import { useMutation } from '@apollo/client';

import { authenticationService } from './authentication.service';
import { useForm } from '../../hooks/useForm.js';
import { loginValidations } from '../../hooks/validations.js';
const useStyles = makeStyles(loginStyle);

export default function SectionLoginPage(props) {
    const history = useHistory();
    const classes = useStyles();
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [message, setMessage] = useState('');
    const redirect = props.redirect ? props.redirect : '/users';
    const [loginUser] = useMutation(statements.LOGIN, {
        fetchPolicy: 'network-only',
    });

    // API Handler to delete User
    const loginHandler = async () => {
        setShowSnackBar(false);
        loginUser({
            variables: { input: values },
            onCompleted: (data) => {
                if (data.login.action === 'error') {
                    setMessage(data.login.message);
                    setShowSnackBar(true);
                } else {

                    authenticationService.saveJWT(data);

                    // history.push(redirect);
                }
            },
        });
        //console.log("authenticationService.getTokenObject().role");
    };
    /////////////////////////////////////////////////////////

    const initialState = { username: '', password: '' };
    const { values, isValid, touched, errors, changeHandler, submitHandler } =
        useForm(initialState, loginValidations, loginHandler);

    ///////////////////////////////////////////////////////////////
    let displaySnackBar = showSnackBar ? (
        <SnackbarContent
            message={
                <span>
                    <b>INFO ALERT:</b> {message}
                </span>
            }
            close
            color="danger"
            icon="info_outline"
        />
    ) : (
        ''
    );

    ///////////////////////////////////////////////////////////////

    return (
        <div className={classes.section}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    {displaySnackBar}
                    <Card>
                        <form className={classes.form} autoComplete='off'>
                            <CardHeader color="rose" className={classes.cardHeader}>
                                <h1>Login</h1>
                            </CardHeader>

                            <CardBody>
                                <CustomInput
                                    labelText="Username..."
                                    id="username"
                                    error={touched.username && errors.username ? true : false}
                                    success={errors.username ? false : true}
                                    errorText={errors.username ? errors.username : ''}
                                    labelProps={{
                                        required: true,
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                        required: true,
                                    }}
                                    inputProps={{
                                        onChange: changeHandler,
                                        name: 'username',
                                        value: values.username,
                                        type: 'text',
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <People className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <CustomInput
                                    labelText="Password"
                                    error={touched.password && errors.password ? true : false}
                                    success={errors.password ? false : true}
                                    errorText={errors.password ? errors.password : ''}
                                    id="password"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        onChange: changeHandler,
                                        name: 'password',

                                        value: values.password,
                                        type: 'password',
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>
                                                    lock_outline
                                                </Icon>
                                            </InputAdornment>
                                        ),
                                        autoComplete: 'off',
                                    }}
                                />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                <Button
                                    round
                                    color="danger"
                                    size="lg"
                                    onClick={() => { history.push('/home'); }}
                                >
                                    cancel
                                </Button>
                                <Button
                                    disabled={!isValid}
                                    round
                                    color="rose"
                                    size="lg"
                                    onClick={submitHandler}
                                >
                                    LOGIN
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
