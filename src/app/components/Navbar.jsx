"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  p-4 rounded-lg hover:shadow-lg ">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" flex items-center text-2xl">AD exports</div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="group text-black  transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom font-medium bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </p>
          </Link>
          <Link
            href="About"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </p>
          </Link>
          <Link
            href="Products"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Products
            </p>
          </Link>
          <Link
            href="Services"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Services
            </p>
          </Link>
          <Link
            href="Contact"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="About"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="Products"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Products
            </Link>
            <Link
              href="Services"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="Contact"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;