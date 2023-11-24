import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import BrandSect from "./components/BrandSect";
import OurMission from "./components/OurMission";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <>
      <div className="font-Poppins h-screen relative bg-white px-8 ">
        <Navbar />

        <HeroSection />

        <Feature />
        <BrandSect />
        <OurMission />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
