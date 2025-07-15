"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const navigations: string[] = [
  "HOME",
  "ABOUT",
  "SERVICE",
  "PAGES",
  "CONTACT",
];

const dropdowns = {
  ABOUT: [
    { label: "ABOUT US", href: "/about" },
    { label: "HISTORY", href: "/history" },
    { label: "OUR TEAM", href: "/team" },
  ],
  SERVICE: [
    { label: "SERVICE", href: "/service" },
    { label: "PRICING", href: "/pricing" },
  ],
  PAGES: [
    { label: "PROJECT", href: "/project" },
    { label: "PROJECT DETAIL", href: "/projectdetails" },
  ],
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navOpen = () => {
    console.log("open nav open");
    setOpenNav((prev) => !prev);
  };

  return (
    <>
      <header className="w-full p-8 bg-[#1d1d1d] text-white flex items-center justify-center lg:mt-1">
        <nav className="lg:w-3/5 flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/images/Logo_white.png"
              alt="logo"
              width={40}
              height={40}
            />
          </Link>
          <div className="flex items-center justify-between gap-8">
            
            <Link href="/" className="text-[#e4bb7d] text-sm hidden lg:inline">
              {navigations[0]}
            </Link>
            {navigations.slice(1, -1).map((item: string, idx: number) => (
              <div
                key={item}
                className="relative hidden lg:inline-block text-left"
                onMouseEnter={() => setOpenDropdown(item)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="text-white text-sm focus:outline-none flex items-start gap-1"
                  type="button"
                >
                  {item}
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === item && (
                  <div className="absolute left-0 w-40 shadow-lg bg-[#222] z-20">
                    <div className="py-1 flex flex-col">
                      {dropdowns[item as keyof typeof dropdowns].map(
                        (sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-6 py-4 text-sm text-white hover:bg-[#333] whitespace-nowrap"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="text-white text-sm hidden lg:inline"
            >
              {navigations[navigations.length - 1]}
            </Link>
            <div className="z-10 lg:hidden">
              <svg
                width="45"
                height="45"
                viewBox="0 0 24 24"
                onClick={navOpen}
                className="cursor-pointer"
              >
                <motion.line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={
                    openNav
                      ? { x1: 4, y1: 4, x2: 20, y2: 20 }
                      : { x1: 3, y1: 6, x2: 21, y2: 6 }
                  }
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ opacity: openNav ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={
                    openNav
                      ? { x1: 4, y1: 20, x2: 20, y2: 4 }
                      : { x1: 3, y1: 18, x2: 21, y2: 18 }
                  }
                  transition={{ duration: 0.5 }}
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <nav
        className={`w-full h-dvh z-1 fixed top-0 lg:hidden ${
          openNav ? "translate-x-0" : "translate-x-[100%]"
        } transform duration-300 ease-out bg-black`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-start justify-center gap-8">
            <Link href="/" className="text-[#e4bb7d] text-2xl">
              {navigations[0]}
            </Link>
            
            {navigations.slice(1, -1).map((item: string, idx: number) => (
              <div
                key={item}
                className="relative text-left"
                onClick={() => setOpenDropdown(item)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="text-white text-2xl focus:outline-none flex items-center gap-1"
                  type="button"
                >
                  {item}
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openDropdown === item && (
                  <div className="absolute left-0 w-40 shadow-lg bg-[#222] z-20">
                    <div className="py-1 flex flex-col">
                      {dropdowns[item as keyof typeof dropdowns].map(
                        (sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setOpenNav(false)}
                            className="block px-6 py-4 text-sm text-white hover:bg-[#333]"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="text-white text-2xl"
            >
              {navigations[navigations.length - 1]}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
