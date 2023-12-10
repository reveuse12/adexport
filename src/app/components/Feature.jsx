import React from "react";
import Image from "next/image";
import { GiLaserPrecision, GiRevolt } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const Feature = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-bold underline decoration-pink-500 mb-16 md:text-5xl">
              Why AD Export?
            </h2>
            {/* <p className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p> */}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="grid gap-8 border rounded-lg border-solid border-[#dfdfdf] p-8 md:p-10">
              <GiLaserPrecision className=" inline-block rounded-full text-6xl text-[#0f2b7f] " />

              <p className="text-xl font-semibold"> Unparalleled Precision</p>
              <p className="text-sm text-[#636262]">
                At AD Export, we pride ourselves on delivering CNC parts with
                unmatched precision. Our state-of-the-art machinery ensures the
                highest quality components for your automotive, agriculture, and
                water plumbing needs.
              </p>
            </div>
            <div className="grid gap-8 border rounded-lg border-solid border-[#dfdfdf] p-8 md:p-10">
              <GiRevolt className=" inline-block rounded-full text-6xl text-[#0f2b7f] " />

              <p className="text-xl font-semibold">
                {" "}
                Revolutionize Your Automotive Production
              </p>
              <p className="text-sm text-[#636262]">
                In the fast-paced world of automotive manufacturing, every
                detail matters. AD Exports CNC parts empower your production
                line with accuracy and efficiency, ensuring that your vehicles
                meet the highest standards of performance and safety.
              </p>
            </div>
            <div className="grid gap-8 border rounded-lg border-solid border-[#dfdfdf] p-8 md:p-10">
              <GrOptimize className="text-center text-6xl text-[#0f2b7f]  " />

              <p className="text-xl font-semibold">
                {" "}
                Optimize Agriculture Machinery
              </p>
              <p className="text-sm text-[#636262]">
                Agriculture demands machinery that can withstand the rigors of
                the field. AD Exports CNC parts are designed to endure the
                toughest conditions, providing reliability and longevity to your
                agricultural equipment. Boost your productivity with components
                you can trust.
              </p>
            </div>

            <div className="grid gap-8 border rounded-lg border-solid border-[#dfdfdf] p-8 md:p-10">
              <MdOutlinePrecisionManufacturing className=" inline-block rounded-full text-6xl text-[#0f2b7f] " />

              <p className="text-xl font-semibold">
                {" "}
                Elevate Water Plumbing Manufacturing
              </p>
              <p className="text-sm text-[#636262]">
                In water plumbing, precision is non-negotiable. AD Exports CNC
                parts contribute to the seamless functionality and durability of
                your plumbing systems. Ensure water flows smoothly and reliably
                with our precision-engineered components.
              </p>
            </div>

            <div className="grid gap-8 border border-solid rounded-lg border-[#dfdfdf] p-8 md:p-10">
              <FaHandsHelping className=" inline-block rounded-full text-6xl text-[#0f2b7f] " />

              <p className="text-xl font-semibold">Proven Track Record</p>
              <p className="text-sm text-[#636262]">
                With a track record of delivering excellence, AD Export has
                become the trusted choice for CNC parts across industries. Our
                satisfied clients speak for the quality and reliability we bring
                to the table.
              </p>
            </div>

            <div className="grid gap-8 border border-solid rounded-lg border-[#dfdfdf] p-8 md:p-10">
              <RiGlobalLine className=" inline-block rounded-full text-6xl text-[#0f2b7f] " />

              <p className="text-xl font-semibold">
                Global Reach, Local Commitment
              </p>
              <p className="text-sm text-[#636262]">
                AD Export combines the reach of a global supplier with the
                commitment of a local partner. We understand the unique needs of
                different industries and tailor our solutions to meet them,
                ensuring your success on a global scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
