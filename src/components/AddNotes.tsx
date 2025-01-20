import { ReactElement, useState, useEffect } from "react";
import Button from "./Button.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendApiRequest } from "../helpers/sendApiRequest.ts";
import { NoteTitle, Textarea } from "./TextEntry.tsx";
import { ICreateNotes } from "../types/ICreateNotes.ts";

export default function AddNotes(): ReactElement {
    const [title, setTitle] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const queryClient = useQueryClient();

    useEffect(() => {
        const editNote = queryClient.getQueryData<ICreateNotes>(["edit-note"]);
        if (editNote) {
            setTitle(editNote.title || "");
            setNotes(editNote.notes || "");
        }
    }, [queryClient, queryClient.getQueryData(["edit-note"])]);

    const createNoteMutation = useMutation({
        mutationFn: (data: Omit<ICreateNotes, "id">) =>
            sendApiRequest("http://localhost:3000/notes", "POST", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] }); // Refresh the notes list
            setTitle("");
            setNotes("");
        },
        onError: (error) => {
            console.error("Error creating note:", error);
        },
    });

    const handleCreateNote = () => {
        if (!title || !notes) {
            console.error("Title or notes is missing");
            return;
        }
        createNoteMutation.mutate({ title, notes });
    };

    return (
        <div className="flex flex-col gap-4">
            <NoteTitle
                type="text"
                label={"Title"}
                value={title}
                disabled={createNoteMutation.isPending}
                onChange={setTitle}
            />
            <Textarea
                label={"Note"}
                value={notes}
                disabled={createNoteMutation.isPending}
                onChange={setNotes}
            />
            <Button
                label={createNoteMutation.isPending ? "Creating..." : "Add Note"}
                variant={"3D"}
                onClick={handleCreateNote}
                className={createNoteMutation.isPending ? "cursor-not-allowed" : ""}
            />
        </div>
    );
}
