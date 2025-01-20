import DashBoardHeader from "../components/DashBoardHeader.tsx";
import DashboardBody from "../components/DashboardBody.tsx";


export default function Dashboard() {
    return (
        <main className="max-w-custom-clamp2 mx-auto grid gap-6">
            <DashBoardHeader />
            <DashboardBody />
        </main>
    )
}
