import logoNoBackground from "../assets/logo/logo-no-background.svg"

export default function Logo() {
    return (
        <div className="w-32 lg:w-40">
            <img
                src={logoNoBackground}
                alt="logo"
                width={1500}
                height={204}
                className="w-full h-auto"
            />
        </div>
    )
}
