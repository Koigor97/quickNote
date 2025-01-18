import Nav from "./Nav.tsx";
import HeroSection from "./HeroSection.tsx";
import FeaturesTab from "./FeaturesTab.tsx";

export default function HomeHeader() {
    return (
        <header className="bg-hero-bg-image bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-16">
            <Nav />
            <HeroSection />
            <FeaturesTab />
        </header>
    )
}

//DEV
// Hi, I’m Samuel Koigor Fogbawa Turay, a Software Development student at
// Brigham Young University - Idaho. I’m passionate about creating
// innovative, user-friendly applications that solve real-world problems.
//     NoteEase is a reflection of my commitment to delivering clean code and
// thoughtful design.
