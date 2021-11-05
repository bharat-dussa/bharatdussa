// import Link from "next/link";
import React, { FunctionComponent } from "react";
import "tailwindcss/tailwind.css";
import { FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useTheme } from "next-themes";

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <div className="mt-6 mb-12 lg:mt-16">
        <p className="mt-8 text-3xl font-medium text-left text-black md:text-4xl lg:text-6xl dark:text-white">
          Hello! I’m Bharat Dussa.
        </p>{" "}
        <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
          I am a <b>Front End Developer</b> and technology knowledge seeker.
          Currently working at Deuex Solutions.Completed Engineering at{" "}
          <b>Mumbai University</b>
        </p>
      </div>
      <button className="flex border border-blue-300 justify-between py-2 px-4 font-semibold rounded-lg shadow-md text-white border-gray-800 hover:border-gray-800">
        <Link href="https://google.com">
          <div className="flex items-center">
            <FaLinkedin />
            Follow me on Linked in
          </div>
        </Link>
      </button>
      <div className="flex flex-wrap content-center  place-content-center text-7xl">
        <Link href="/about">
          <FiChevronDown className="cursor-pointer animate-pulse" />
        </Link>
      </div>
    </>
  );
};

export default LandingPage;

// todo add component
