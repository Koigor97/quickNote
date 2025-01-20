import { type ReactNode} from "react";
import Footer from "../components/Footer.tsx";
import {cn} from '../../lib/utils.ts'
import {useLocation} from "react-router";

function MainLayout({children}: {children: ReactNode}) {
    const location = useLocation();
    const isSignInPage = location.pathname === '/signin';

    return (
        <>
            <div className={cn(`${isSignInPage ? "flex flex-col justify-center" : ""}`)}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
