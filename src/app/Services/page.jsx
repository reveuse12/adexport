import React from "react";
import Feature from "../components/Feature";

const page = () => {
  return (
    <div>
      <Feature />

      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16 lg:text-left">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>

          <div className="grid justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 lg:gap-6">
            <a
              href="#"
              className="relative flex h-[500px] flex-col gap-4 rounded-md px-4 py-8 [grid-area:1/1/2/2] md:p-0 md:[grid-area:1/1/2/4]"
            >
              <div className="absolute bottom-12 left-8 z-20 flex w-56 max-w-[464px] flex-col items-start rounded-md bg-white p-6 sm:w-full md:bottom-[10px] md:left-[10px]">
                <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                  <p className="text-sm font-semibold text-[#6574f8]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 max-w-xs text-xl font-bold md:text-2xl">
                  Diam cursus a ornare massa orci sodales habitasse gravida
                  bibendum.
                </p>
                <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                  <p>Laila Bahar</p>
                  <p className="mx-2 hidden lg:block">-</p>
                  <p>6 mins read</p>
                </div>
              </div>
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg"
                alt=""
                className="inline-block h-full w-full object-cover"
              />
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg"
                alt=""
                className="inline-block h-60 w-full object-cover"
              />
              <div className="flex flex-col items-start py-4">
                <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                  <p className="text-sm font-semibold text-[#6574f8]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  The latest news with Flowspark
                </p>
                <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                  <p>Laila Bahar</p>
                  <p className="mx-2 hidden lg:block">-</p>
                  <p>6 mins read</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg"
                alt=""
                className="inline-block h-60 w-full object-cover"
              />
              <div className="flex flex-col items-start py-4">
                <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                  <p className="text-sm font-semibold text-[#6574f8]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  The latest news with Flowspark
                </p>
                <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                  <p>Laila Bahar</p>
                  <p className="mx-2 hidden lg:block">-</p>
                  <p>6 mins read</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg"
                alt=""
                className="inline-block h-60 w-full object-cover"
              />
              <div className="flex flex-col items-start py-4">
                <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                  <p className="text-sm font-semibold text-[#6574f8]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  The latest news with Flowspark
                </p>
                <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                  <p>Laila Bahar</p>
                  <p className="mx-2 hidden lg:block">-</p>
                  <p>6 mins read</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
