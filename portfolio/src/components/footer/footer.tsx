import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          {router.pathname !== "/about" && (
            <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
              <Link href="/about">About</Link>
            </p>
          )}
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
            <Link href="/about">Contact me</Link>
          </p>
        </div>
        <div className="flex items-center gap-x-8 mt-6">
          <div className="cursor-pointer">
            <Link href={"https://in.linkedin.com/in/bharat-dussa"}>
              <FaLinkedin className="font-4xl" />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://github.com/bharat-dussa">
              <AiFillGithub />
            </Link>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-base leading-4 text-gray-800">
            2021 <span className="font-semibold">Bharat Dussa</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
