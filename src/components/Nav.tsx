import Logo from "./Logo.tsx";
import Button from "./Button.tsx";


export default function Nav() {
    return (
        <div className="p-2 bg-accent-100 w-fit rounded-md mt-4  backdrop-blur-25 border border-accent-100/25">
            <nav
                className="flex items-center justify-center gap-5 lg:gap-14">
                <Logo />
                <Button
                    label={'Sign In'}
                    label2={"Let's ..👉"}
                    variant={'Hover'}
                />
            </nav>
        </div>
    )
}
