import {ReactNode} from "react";
import Footer from "../components/Footer.tsx";


export default function DashBoardLayout({children}: { children: ReactNode }) {
    return (
        <>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}
