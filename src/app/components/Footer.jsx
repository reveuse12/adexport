import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bottom-0 relative text-black">
      <div className="mx-auto w-full max-w-7xl  ">
        <div className="flex flex-col items-center">
          <Link
            href="#"
            className="mb-8 md:text-5xl text-xl inline-block group text-black transition-all duration-300 ease-in-out max-w-full"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              AD Export
            </p>
          </Link>
          <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal group text-black transition-all duration-300 ease-in-out"
            >
              <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </p>
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal group text-black transition-all duration-300 ease-in-out"
            >
              <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Features
              </p>
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal group text-black transition-all duration-300 ease-in-out"
            >
              <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Works
              </p>
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal group text-black transition-all duration-300 ease-in-out"
            >
              <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Support
              </p>
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal group text-black transition-all duration-300 ease-in-out"
            >
              <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Help
              </p>
            </Link>
          </div>
          <div className="mb-4 mt-4 w-48 border-b border-solid border-b-black"></div>
          <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
            <Link
              href="#"
              className="font-bold hover:bg-black rounded-full mx-auto flex max-w-[24px] flex-col"
            >
              <Image
                width={150}
                height={150}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              href="#"
              className="mx-auto hover:bg-black rounded-full flex max-w-[24px] flex-col font-bold"
            >
              <Image
                width={150}
                height={150}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              href="#"
              className="font-bold mx-auto hover:bg-black rounded-full flex max-w-[24px] flex-col"
            >
              <Image
                width={150}
                height={150}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bde1a389ee15d86fc6_Frame%205481-1.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              href="#"
              className="mx-auto hover:bg-black rounded-full flex max-w-[24px] flex-col font-bold"
            >
              <Image
                width={250}
                height={250}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf10337117b26b8e51_Frame%205481.svg"
                alt=""
                className="inline-block"
              />
            </Link>
          </div>
          <p className="max-[479px]:text-sm">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
