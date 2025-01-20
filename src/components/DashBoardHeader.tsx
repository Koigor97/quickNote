import {UserButton} from "@clerk/clerk-react";
import {formatDate} from "../../lib/utils.ts";


export default function DashBoardHeader() {
    const todaysDate = formatDate(new Date, "full")

    return (
        <header className="grid gap-4">
            <div className="flex items-center justify-between bg-accent-50 px-6 mt-4 rounded-md outline outline-1 outline-accent-100">
                <div>
                    <h1 className="text-[2rem] font-bold text-text-800"> Dashboard
                    </h1>
                </div>
                <UserButton showName={true} />
            </div>
            <div className="grid gap-1 text-text-800">
                <h1 className="text-xl font-bold">Welcome to QuickNotes!</h1>
                <p>Today's: {todaysDate}</p>
            </div>
        </header>
    )
}
