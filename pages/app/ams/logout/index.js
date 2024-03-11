
import { useContext, useEffect } from "react";
import AuthContext from '@store/auth-context';
import { useRouter } from "next/router";



export default function LogOut() {
    const router = useRouter();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        router.push("/home");
        logout();
    }, [])

    return null;
}