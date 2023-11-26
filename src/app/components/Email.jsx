import React from "react";

const Email = () => {
  return (
    <div>
      <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-[48px]  py-20 text-center border border-[#0f2b7f] max-[479px]:px-2">
          <div className="mx-auto mb-6 max-w-[720px] md:mb-12">
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
              <span className="bg-cover bg-center px-4 text-[#0f2b7f] underline decoration-pink-500">
                Lightning Fast
              </span>
              &nbsp;Webflow Dev Made Easy
            </h2>
            <div className="max-w-[630px]">
              <p className="text-[#e0e0e0]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
              </p>
            </div>
          </div>

          <form
            name="email-form"
            method=""
            className="relative mx-auto flex w-full max-w-[80%] flex-col md:max-w-[560px]"
          >
            <input
              type="email"
              className="h-9 w-full rounded-xl bg-gray-300 px-3 py-8 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              name="email"
              placeholder="Enter your email"
            />
            <input
              type="submit"
              value="Subscribe"
              className="absolute bottom-auto left-auto right-0 top-0 inline-block cursor-pointer rounded-xl bg-black hover:shadow-xl hover:shadow-[#0f2b7f] px-8 py-5 hover:bg-[#0f2b7f] font-semibold text-white [box-shadow:rgb(19,_83,_254)_2px_2px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
