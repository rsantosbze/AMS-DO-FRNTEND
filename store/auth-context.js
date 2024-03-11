import React, { useState, useEffect } from "react";

///////////////////////////////////////////////////////////////
import { Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { authenticationService } from '../sections/auth/authentication.service';
import { useRouter } from "next/router";

///////////////////////////////////////////////////////////////

const AuthContext = React.createContext({
    // token:null,
    isLoggedIn: false,
    user: {},
    login: (data) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {

    //////////////////////////////////////////////////
    const destroy$ = new Subject();
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState('');
    const router = useRouter();

    useEffect(() => {
        //////////////////////////////////////////////////


        const currentUser = authenticationService.currentUser;
        currentUser.pipe(takeUntil(destroy$)).subscribe((status) => {
            if (JSON.stringify(status) !== 'null') {
                setLoggedIn(true);
                setUser(authenticationService.getTokenObject());

            } else {
                setLoggedIn(false);
                setUser('');
            }
        });


        return () => {
            // executed when unmount
            destroy$.next();
            destroy$.complete();
        }
        //////////////////////////////////////////////////
    }, [loggedIn]);

    let calculateRemainingTime = (exp) => {

        // //console.log(exp);
        // //console.log(new Date().getTime());
        // //console.log(exp * 1000 - new Date().getTime());
        // //console.log(new Date(exp * 1000));
        return exp * 1000 - new Date().getTime();
    }

    let logoutHandler = (url = '/home', logOutOnly = false) => {
        // //console.log(url);
        !logOutOnly ? router.push(url) : '';
        setLoggedIn(false);
        setToken(null);
        authenticationService.logout();
        destroy$.next();
        destroy$.complete();

    }

    let loginHandler = (data) => {
        const remainingtime = calculateRemainingTime(authenticationService.getTokenObject().exp) * 4;
        //console.log(remainingtime);
        const currentUser = authenticationService.currentUser;
        currentUser.pipe(takeUntil(destroy$)).subscribe((status) => {
            if (JSON.stringify(status) !== 'null') {
                setLoggedIn(true);
                setUser(authenticationService.getTokenObject());
                //  setTimeout(()=>logoutHandler('/login'),remainingtime);

            } else {
                setLoggedIn(false);
                setUser('');
            }
        });

        setToken(data.login.accessToken);
        authenticationService.saveJWT(data);

    }

    return (
        < AuthContext.Provider value={{
            isLoggedIn: loggedIn,
            user: user,
            logout: logoutHandler,
            login: loginHandler
        }
        }>
            {props.children}
        </AuthContext.Provider >)
}



export default AuthContext;

