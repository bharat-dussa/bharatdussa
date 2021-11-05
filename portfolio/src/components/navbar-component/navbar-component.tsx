import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import NavButton from "../nav-button/nav-button";

export const Navbar = () => {
  const [mounted, setMounted] = useState<Boolean>(false);
  useEffect(() => setMounted(true), []);

  const { theme, setTheme } = useTheme();

  const navButton = [
    {
      label: "Portfolio",
      path: "/",
    },
    {
      label: "Projects",
      path: "projects",
    },
    {
      label: "About Me",
      path: "about",
    },
  ];

  return (
    <>
      {mounted && (
        <div className="container max-w-4xl mx-auto">
          <nav className=" z-10 flex items-center justify-between mt-8 mb-2 md:mb-4 lg:mb-6">
            <Link href="/">Bharat Dussa </Link>

            <div className="flex flex-row items-center" id="nav-content">
              {navButton.map((button) => {
                console.log("button.path", button.path);
                return (
                  <NavButton
                    key={button.path}
                    path={button.path}
                    label={button.label}
                  />
                );
              })}
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 h-10 p-3 ml-4 bg-gray-100 rounded-lg dark:bg-gray-50"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-black"
                  >
                    {theme === "dark" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    )}
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
