import React from "react";

const page = () => {
  return (
    <section className="relative">
      {/* Container */}
      <div className="py-16 md:py-24 lg:py-32">
        {/* Component */}
        <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
          {/* Heading Div */}
          <h2 className="text-3xl font-semibold md:text-5xl">
            <span className="bg-contain bg-center bg-no-repeat px-4 text-black">
              Let's Build
            </span>
            Something Exciting Together
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus magna fringilla urna
          </p>
          {/* Form */}
          <form
            method="get"
            className="mb-4 rounded-3xl border border-solid border-black bg-white px-4 py-10 [box-shadow:rgb(0,_0,_0)_9px_9px] sm:px-8 sm:py-16 md:px-20"
          >
            {/* Name */}
            <div className="mb-4 grid w-full grid-cols-2 gap-6">
              <div className="relative">
                <label className="mb-1 font-semibold">First Name</label>
                <input
                  type="text"
                  className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                />
              </div>
              <div className="relative">
                <label className="mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                />
              </div>
            </div>
            {/* Email */}
            <div className="relative mb-4">
              <label htmlFor="field" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="text"
                className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                name="field"
              />
            </div>
            {/* Message */}
            <div className="relative mb-5 md:mb-6 lg:mb-8">
              <label htmlFor="field" className="mb-1 font-medium">
                Message
              </label>
              <textarea
                placeholder=""
                maxLength="5000"
                name="field"
                className="min-h-[186px] w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              ></textarea>
            </div>
            <label className="flex pb-4 pl-5 font-medium">
              <input
                type="checkbox"
                name="checkbox-2"
                className="float-left -ml-[20px] mt-1"
              />
              <span
                className="ml-4 inline-block cursor-pointer text-sm font-normal"
                htmlFor="checkbox-2"
              >
                By selecting this, you agree to the
                <a href="#" className="font-bold text-[#1353fe]">
                  {" "}
                  Privacy Policy
                </a>
              </span>
            </label>
            <input
              type="submit"
              value="Submit"
              className="inline-block w-full cursor-pointer rounded-xl bg-black px-8 py-4 text-center font-semibold text-white no-underline [box-shadow:rgb(19,_83,_254)_6px_6px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
