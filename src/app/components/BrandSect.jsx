import Image from "next/image";
import React from "react";

const BrandSect = () => {
  return (
    <>
      {/* <!--Section Logo Cloud --> */}
      <section className="">
        {/* <!--Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12 lg:py-16">
          {/* <!--Title --> */}
          <h5 className="mb-6 text-center text-xl font-bold md:mb-12">
            The world’s innovative companies use AD Export
          </h5>
          {/* <!--Content --> */}
          <div className="grid grid-cols-2 items-center justify-center gap-8 rounded-md bg-[#D9D9D9] p-16 px-8 py-12 sm:grid-cols-3 md:gap-16">
            <div className="flex items-center justify-center">
              <Image
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ffde6cf70_Microsoft%20Logo.svg"
                alt=""
                width={500}
                height={500}
                className="max-w-full items-center justify-center sm:max-w-[80%]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94ae44e6cf75_PayPal%20Logo.svg"
                alt=""
                width={500}
                height={500}
                className="max-w-full sm:max-w-[80%]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9467b4e6cf74_Google%20Logo.svg"
                alt=""
                width={500}
                height={500}
                className="max-w-full sm:max-w-[80%]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94ea75e6cf71_Chase%20Logo%20(2).svg"
                alt=""
                width={500}
                height={500}
                className="max-w-full sm:max-w-[80%]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948d9ce6cf68_Walmart%20Logo.svg"
                alt=""
                width={500}
                height={500}
                className="max-w-full sm:max-w-[80%]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a941ae8e6cf69_Slack%20Logo%20(1).svg"
                alt=""
                width={500}
                height={500}
                className="max-w-full sm:max-w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSect;
