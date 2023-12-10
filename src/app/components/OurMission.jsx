import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="mb-8 text-3xl underline decoration-pink-500 font-bold md:text-5xl lg:mb-14">
            About AD Export: Precision Redefined
          </h2>
          <p className="mb-8 max-w-xl text-sm text-[#808080] sm:text-base lg:mb-24">
            Welcome to AD Export, where precision meets innovation in the CNC
            world. Our mission is clear—to deliver unmatched CNC solutions that
            empower automotive, agriculture, and plumbing industries. From our
            humble beginnings, we have evolved, adapting to challenges and
            consistently pushing the boundaries of precision engineering.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <Image
              width={500}
              height={550}
              src="/Euromax_Modular_Vice.jpg"
              alt=""
              className="inline-block border shadow-lg rounded-2xl object-fill"
            />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
              <h2 className="mb-4 text-2xl underline decoration-pink-500 font-semibold md:text-3xl lg:mb-8">
                Our Mission
              </h2>
              <p className="text-base text-[#808080] sm:text-base">
                {" "}
                At AD Export, we thrive on adaptability and embrace change as a
                catalyst for growth. Our journey is marked by a pivotal aha!
                moment, recognizing the need for precision solutions that exceed
                industry standards. We cater to global markets while maintaining
                a laser focus on serving those who value excellence, delivering
                tangible benefits through efficient, durable CNC components.
              </p>

              <p className="text-base text-[#808080] sm:text-base">
                {" "}
                Our values go beyond business; they shape our culture and
                commitment to making a positive impact. As your trusted CNC
                partner, AD Export invites you to experience precision
                excellence that simplifies complexity and sets a new standard
                for reliability. Join us on this journey—where precision is not
                just a promise, but a commitment in every detail.
              </p>
              <h4 className="font-semibold">
                {" "}
                Contact AD Export for Precision Excellence
              </h4>
              <p>
                <span className="font-semibold">Email:</span>info@adexport.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
