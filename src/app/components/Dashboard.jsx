import React from "react";
import HeroSection from "./HeroSection";
import BrandSect from "./BrandSect";
import Feature from "./Feature";

const Dashboard = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-lg p-5">
          <h1 className="text-gray-600 italic font-serif leading-8">
            Modular Product Line
          </h1>
          <h1 className="text-black font-bold leading-10 text-xl">
            EXPANDABLE AND CUSTOMIZABLE
          </h1>
          <p className="text-gray-500 leading-loose">
            Thanks to our system of modular components, your waterjet cutter,
            can be tailored to your individual needs. Your system can be
            upgraded with new features at any time and is designed to be
            flexible.
          </p>
        </div>
        <div className="bg-white rounded-lg p-5">
          <h1 className="text-gray-600 italic font-serif leading-8">
            Modular Product Line
          </h1>
          <h1 className="text-black font-bold leading-10 text-xl">
            EXPANDABLE AND CUSTOMIZABLE
          </h1>
          <p className="text-gray-500 leading-loose">
            Thanks to our system of modular components, your waterjet cutter,
            can be tailored to your individual needs. Your system can be
            upgraded with new features at any time and is designed to be
            flexible.
          </p>
        </div>
        <div className="bg-white rounded-lg p-5">
          <h1 className="text-gray-600 italic font-serif leading-8">
            Modular Product Line
          </h1>
          <h1 className="text-black font-bold leading-10 text-xl">
            EXPANDABLE AND CUSTOMIZABLE
          </h1>
          <p className="text-gray-500 leading-loose">
            Thanks to our system of modular components, your waterjet cutter,
            can be tailored to your individual needs. Your system can be
            upgraded with new features at any time and is designed to be
            flexible.
          </p>
        </div>
      </div>
      <Feature />
      <BrandSect />
    </>
  );
};

export default Dashboard;
