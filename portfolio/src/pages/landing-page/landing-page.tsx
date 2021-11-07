// import Link from "next/link";
import React, { FunctionComponent } from "react";
import "tailwindcss/tailwind.css";
import { FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const LandingPage: FunctionComponent = () => {
  return (
    <div>
      <div className="flex flex-col place-items-center md:place-items-start">
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
        <button className="flex text-black border dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-gray-300 hover:border-gray-800 justify-between py-2 px-4 font-semibold rounded-lg shadow-md  ">
          <Link href="https://in.linkedin.com/in/bharat-dussa">
            <div className="flex items-center">
              <FaLinkedin />
              <div>Follow me on Linked in</div>
            </div>
          </Link>
        </button>
      </div>
      <div className="flex flex-wrap content-center  place-content-center text-7xl">
        <Link href="/about">
          <FiChevronDown className="cursor-pointer animate-pulse" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

// todo add component
