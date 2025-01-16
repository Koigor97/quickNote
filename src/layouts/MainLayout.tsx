import { type ReactNode} from "react";
import Footer from "../components/Footer.tsx";

function MainLayout({children}: {children: ReactNode}) {
    return (
        <>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
