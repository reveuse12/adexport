import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import BrandSect from "./components/BrandSect";
import OurMission from "./components/OurMission";
import Testimonials from "./components/Testimonials";
import Email from "./components/Email";

export default function Home() {
  return (
    <>
      <div className="font-Poppins bg-white px-8 ">
        <HeroSection />
        <Feature />
        <BrandSect />
        <OurMission />
        <Testimonials />
        <Email />
      </div>
    </>
  );
}
