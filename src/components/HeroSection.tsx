import Button from "./Button.tsx";
import {useMediaQuery} from "../hooks/use-media-query.tsx";
import {Link} from "react-router";


export default function HeroSection() {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isBreak = isDesktop ? <br/> : ""

    return (
        <div className="grid gap-10 place-items-center">
            <div className="px-4">
                <p className="text-center text-text-600">Capture. Organize. Remember.</p>
                <h1 className="font-heading text-2xl lg:text-[2.8rem] font-bold text-center leading-tight text-pretty">
                    A simple, minimalist note-taking app {isBreak} for your thoughts and tasks
                </h1>
                <p className="mx-auto md:text-center text-text-800 max-w-[70ch] mt-3">
                    QuickNotes is a simple, clean, and intuitive note-taking application
                    designed to help you organize your thoughts, ideas, and tasks
                    effortlessly. Whether you're brainstorming, or
                    jotting down important information, NoteEase provides a seamless and
                    distraction-free environment.
                </p>
            </div>
            <div >
                <Link to="/signIn">
                    <Button
                        label={"Start Penning Down Notes ✒️️"}
                        variant={"3D"}
                        className="mb-5"
                    />
                </Link>
            </div>
        </div>
    )
}
