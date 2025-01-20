import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2, Edit } from "lucide-react";

import AddNotes from "./AddNotes.tsx";
import { ICreateNotes } from "../types/ICreateNotes.ts";
import { sendApiRequest } from "../helpers/sendApiRequest.ts";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./NoteCard.tsx";

export default function DashboardBody() {
    const queryClient = useQueryClient();

    const { data: notes = [] } = useQuery<ICreateNotes[]>({
        queryKey: ["notes"],
        queryFn: async () => {
            const res = await sendApiRequest("http://localhost:3000/notes", "GET");

            // @ts-ignore
            return res.data; // Assuming res has data property
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) =>
            sendApiRequest(`http://localhost:3000/notes/${id}`, "DELETE"),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] }); // Refresh the notes list
        },
    });

    const handleDelete = (id: string) => {
        if (!id) {
            console.error("Invalid note ID");
            return;
        }
        console.log("Deleting note with ID:", id); // Debugging
        deleteMutation.mutate(id);
    };

    const handleEdit = (note: ICreateNotes) => {
        queryClient.setQueryData(["edit-note"], note);
    };

    return (
        <main className="grid gap-4 md:grid-cols-3 h-full">
            <section className="bg-primary-100 md:col-span-2 rounded-md py-3 px-4">
                <h1 className="text-xl font-bold">List of Notes</h1>
                <div className="grid md:grid-cols-3 gap-2">
                    {notes.map((note, i) => (
                        <Card key={note.id || i}>
                            <CardHeader>
                                <CardTitle>{note.title}</CardTitle>
                            </CardHeader>
                            <CardContent>{note.notes}</CardContent>
                            <CardFooter className="px-4 py-2 flex justify-end gap-2 items-center">
                                <Edit
                                    onClick={() => handleEdit(note)}
                                    className="cursor-pointer hover:text-secondary-500"
                                />
                                <Trash2
                                    onClick={() => handleDelete(note.id)}
                                    className="cursor-pointer hover:text-red-700"
                                />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
            <section className="bg-secondary-50 md:col-start-3 rounded-md py-3 px-4 text-text-800 grid gap-4 outline outline-1 outline-secondary-200 h-fit">
                <div>
                    <h1 className="text-xl font-bold">Start penning 🖋️ down your notes</h1>
                    <p>Jotting down your thoughts or just simply taking note of things doesn't need to be a hassle</p>
                </div>
                <AddNotes />
            </section>
        </main>
    );
}
