import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { authenticationService } from './authentication.service';
import AuthContext from '../../store/auth-context';

export { RouteGuard };

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check
        router.events.on('routeChangeComplete', authCheck);

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = ['/services/project-management', '/services/software-solutions', '/services/engineering-design', '/services/consultancy', 'landing', '/projects', '/app/ams/register', '/app/ams', '/about-us', '/pricing-page', '/app/ams/verify-email', '/app/ams/forgot-password', '/app/ams/reset-password', '/app/ams/login', '/home', '/signup', '/'];
        const path = url.split('?')[0];
        // //console.log(isLoggedIn)
        //         if (isLoggedIn && !publicPaths.includes(path)) {
        //             setAuthorized(false);
        //             router.push({
        //                 pathname: '/login',
        //                 query: { returnUrl: router.asPath },
        //             });
        //         } else {
        //             setAuthorized(true);
        //         }
        if (!authenticationService.currentUserValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/app/ams/login',
                query: { returnUrl: router.asPath },
            });
        } else {
            setAuthorized(true);
        }
    }

    return authorized && children;
}
