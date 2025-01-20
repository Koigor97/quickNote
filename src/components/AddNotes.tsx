import { ReactElement} from "react";
import {NoteTitle, Textarea} from "./TextEntry.tsx";
import Button from "./Button.tsx";

export default function AddNotes () : ReactElement {
    // const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-4 ">
            <NoteTitle
                type='text'
                label={"Title"}
            />

            <Textarea
                label={"Note"}
            />

            <Button
                label={"Add Note"}
                variant={"3D"}
            />
        </div>
    )
}
