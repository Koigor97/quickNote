import AddNotes from "./AddNotes.tsx";
import {dummyNotes} from "../../lib/dummyNotesData.ts";
import {Card, CardHeader, CardTitle, CardContent} from "./NoteCard.tsx";
import {Trash2} from "lucide-react";

export default function DashboardBody() {
    return (
        <main className="grid gap-4 md:grid-cols-3 h-full">
            <section className="bg-primary-100 md:col-span-2 rounded-md py-3 px-4 ">
                <h1 className="text-xl font-bold">List of Notes</h1>
                <div className="grid md:grid-cols-3 gap-2">
                    {dummyNotes.map((note, i) => (
                        <Card key={i} >
                            <CardHeader>
                                <CardTitle>{note.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {note.note}
                            </CardContent>
                            <div className="px-4 py-2">
                                <Trash2 className="self-end justify-self-end cursor-pointer hover:text-red-700"/>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
            <section className="bg-secondary-50 md:col-start-3 rounded-md py-3 px-4 text-text-800 grid gap-4 outline outline-1 outline-secondary-200 h-fit">
                <div>
                    <h1 className="text-xl font-bold">Start penning 🖋️ down your notes</h1>
                    <p>Jotting down your thought or just simply taking note of things doesn't need to be a hassle</p>
                </div>
                <AddNotes />
            </section>
        </main>
    )
}
