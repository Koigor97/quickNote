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
