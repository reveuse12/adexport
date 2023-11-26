import React from "react";
import ProductGallery from "../components/ProductGallery";
const page = () => {
  return (
    <div>
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
