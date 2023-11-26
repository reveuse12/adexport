import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import BrandSect from "./components/BrandSect";
import OurMission from "./components/OurMission";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Email from "./components/Email";

export default function Home() {
  return (
    <>
      <div className="font-Poppins h-screen relative bg-white px-8 ">
        <HeroSection />

        <Feature />
        <BrandSect />
        <OurMission />
        <Testimonials />
        <Email />
        <Footer />
      </div>
    </>
  );
}
