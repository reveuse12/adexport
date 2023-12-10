import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      {/* <!-- Hero top --> */}

      <div className="bg-[#D9D9D9] rounded-xl">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
            AD Exports:{" "}
            <span className="text-[#0f2b7f]">
              Your Source for Innovative CNC Manufacturing Solutions
            </span>
          </h1>

          <div className="flex items-stretch">
            <Link
              href="//api.whatsapp.com/send?phone=917874114149&text=Hey there, can i get more info on this?"
              className="overflow-hidden w-32 p-2 h-12 bg-black hover:shadow-xl hover:shadow-green-400 text-white border-none rounded-lg text-xl font-bold cursor-pointer relative z-10 group"
            >
              Contact Us
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
                WhatsApp
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
          <a href="#footer" className="absolute bottom-0 left-0">
            <Image
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946f0be6cfa0_Frame%2048040.svg"
              alt=""
              width={80}
              height={80}
              className="hidden lg:inline-block"
            />
          </a>
          <div className="max-w-xl lg:mr-[500px] lg:max-w-xs">
            <h3 className="text-3xl underline decoration-pink-500 font-bold mb-4 md:text-5xl">
              Introduction
            </h3>

            <p className="text-sm text-[#636262]">
              At AD Export, our journey is woven with a commitment to excellence
              and a passion for international trade. Established with a vision
              to bridge global industries, we have evolved into a reliable name
              in the export sector. Our story is one of unwavering dedication,
              meticulous attention to detail, and a relentless pursuit of
              delivering top-notch solutions to our clients.
            </p>
          </div>

          <Image
            src="/hero.jpg"
            width={480}
            height={480}
            alt=""
            className="relative bottom-0 right-0 mt-12 w-[480px] object-cover rounded-lg lg:absolute lg:mt-0 lg:h-[480px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
