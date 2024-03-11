import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import People from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
import { InfoOutlined } from '@material-ui/icons';
// core components

import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput.js';

import registerStyle from '../../styles/Sections/registerStyle';

import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import SnackbarContent from '../../components/Snackbar/SnackbarContent.js';
import * as statements from '../user/grapql-statements';
import { useMutation } from '@apollo/client';
import { useForm } from '../../hooks/useForm.js';

import { registerValidations } from '../../hooks/validations';
const useStyles = makeStyles(registerStyle);

export default function SectionRegisterPage(props) {
    const history = useHistory();
    const classes = useStyles();

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [message, setMessage] = useState('');
    const { className } = props;
    const cardClasses = classNames({
        [className]: className !== undefined,
    });
    const [registerUser] = useMutation(statements.REGISTER, {
        fetchPolicy: 'network-only',
    });
    // API Handler to insert new organization
    const registerHandler = async () => {
        setShowSnackBar(false);
        registerUser({
            variables: { input: values },
            onCompleted: (data) => {
                if (data.registerUser.action === 'error') {
                    setMessage(data.registerUser.message);
                    setShowSnackBar(true);
                }
                else history.push('/login');
            },
        });
    };
    /////////////////////////////////////////////////////////

    const initialState = {
        username: '',
        password: '',
        email: '',
        organizationId: '62096344619b916968e22c4f',
    };

    const { values, isValid, touched, errors, changeHandler, submitHandler } =
        useForm(initialState, registerValidations, registerHandler);

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
            icon={InfoOutlined}
        />
    ) : '';


    ///////////////////////////////////////////////////////////////

    return (
        <div className={classes.section}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    {displaySnackBar}
                    <Card className={cardClasses}>
                        <form className={classes.form} autoComplete='off'>
                            <CardHeader color="rose" className={classes.cardHeader}>
                                <h1>Register</h1>
                            </CardHeader>

                            <CardBody>
                                <CustomInput
                                    labelText="Username..."
                                    id="username"
                                    error={touched.username && errors.username ? true : false}
                                    success={errors.username ? false : true}
                                    errorText={errors.username ? errors.username : ''}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        onChange: changeHandler,
                                        name: 'username',
                                        value: values.username,
                                        type: 'text',
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <People className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <CustomInput
                                    labelText="Password"
                                    id="password"
                                    error={touched.password && errors.password ? true : false}
                                    success={errors.password ? false : true}
                                    errorText={errors.password ? errors.password : ''}
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
                                <CustomInput
                                    labelText="Email..."
                                    id="email"
                                    error={touched.email && errors.email ? true : false}
                                    success={errors.email ? false : true}
                                    errorText={errors.email ? errors.email : ''}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        onChange: changeHandler,
                                        name: 'email',
                                        value: values.email,
                                        type: 'email',
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Email className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                <Button
                                    round
                                    color="danger"
                                    size="lg"
                                    onClick={() => {
                                        history.push('/home');
                                    }}
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
                                    Register
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
