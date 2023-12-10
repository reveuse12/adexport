import React from "react";
import ProductGallery from "../components/ProductGallery";
import Card from "../components/Card";

const page = () => {
  const demoData = [
    { title: "Verneir", content: `0-900 MM` },
    { title: "Height Gauage", content: "1" },
    { title: "Bore Gauage", content: "0-250 MM" },
    { title: "Radius Gauage", content: "1" },
    { title: "Micrometer", content: "0-300 MM" },
    { title: "Slip Gauage", content: "2" },
    // Add more demo data as needed
  ];
  const MAchineryData = [
    { title: "CNC Machines", content: `4 NOS` },
    { title: "VMC Machine", content: `4 NOS` },
    { title: "VTL Machine", content: `2 NOS` },
    { title: "HMC Machine", content: `1 NOS` },
    { title: "Pillar Drill Machine", content: `10 NOS` },
    { title: "Bandsaw Cutting Machine", content: `2` },
    { title: "Gas Cutting", content: `2` },
    { title: "Heavy Duty Welding ", content: `2` },
  ];
  return (
    <div className="p-8">
      <header className="text-black py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="text-[#0f2b7f]"> AD Export Products</span>
        </h1>
        <p className="max-w-md mx-auto text-lg md:max-w-3xl md:text-xl">
          Explore our precision CNC-manufactured parts, including agricultural
          components, water pump parts, automotive parts, industrial valves, and
          plumbing solutions.
        </p>
      </header>

      <div className="">
        <h2 className="text-3xl underline decoration-pink-500 text-center font-bold mb-4">
          Measurement List
        </h2>
        <div className="grid-cols-2 grid ">
          {demoData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              index={index}
            />
          ))}
        </div>

        <div className="">
          <h2 className="text-3xl underline decoration-pink-500 text-center font-bold mb-4">
            {" "}
            Machinery List
          </h2>
          <div className=" grid grid-cols-2">
            {MAchineryData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                content={item.content}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <ProductGallery />

      <section className="py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">
            Ready to Elevate Your CNC Components?
          </h2>
          <p className="text-black mb-6 max-w-md mx-auto md:max-w-2xl">
            Reach out to{" "}
            <span className="text-[#0f2b7f] font-semibold">AD Export</span> for
            more information or start your order process today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
