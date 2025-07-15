"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const imgPlaceholder = "/images/img-placeholder.svg";

const otherPages = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Term Of Service",
    href: "/term-of-service",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
  {
    name: "Credit",
    href: "/credit",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f5]">
      <div className="max-w-[80rem] mx-auto py-16 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start md:items-center">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="mb-8">
            <Image
              src="/images/Logo_white.png"
              alt="logo"
              width={60}
              height={60}
              className="invert"
            />
          </Link>
          <p className="text-gray-500">
            Nunc a purus sit amet nulla porttitor auctor vitae eu purus.
            Suspendisse non bibendum lectus. Mauris ut dignissim arcu, vel
            euismod mi. Pellentesque ut velit dictum, dignissim dui non,
            pulvinar lectus. Etiam non mi vestibulum, aliquam lacus mattis.
          </p>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 w-full mt-8 md:mt-0">
          <div className="self-start p-6">
            <p className="text-[#e4bb7d] text-base font-semibold mb-8">
              OTHER PAGES
            </p>
            <ul className="text-gray-700 text-sm mb-8 space-y-4">
              {otherPages.map((page) => (
                <li key={page.name} className="flex items-center gap-4">
                  <Link href={page.href} className="text-lg">
                    <span className="text-lg">+</span> {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center w-full max-w-xs md:max-w-sm">
            <div className="flex flex-row justify-center gap-4 w-full mb-4">
              {[0, 1].map((i) => (
                <div key={i} className="flex-1 min-w-0">
                  <div className="w-full aspect-[4/3] bg-gray-300 rounded overflow-hidden relative">
                    <Image
                      src={imgPlaceholder}
                      alt="Placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center gap-4 w-full">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 min-w-0">
                  <div className="w-full aspect-[4/3] bg-gray-300 rounded overflow-hidden relative">
                    <Image
                      src={imgPlaceholder}
                      alt="Placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#222] py-16 px-4 sm:px-6 md:px-8 lg:px-12 items-center justify-center">
        <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            <p className="text-white text-sm mb-2 md:mb-0">
              Copyright 2025 © LumenHaus by SSE
            </p>
            <div className="flex items-center gap-8">
              <div className="flex gap-8 text-[#e4bb7d] text-sm">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
                <Link href="#" className="hover:underline">
                  Pinterest
                </Link>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="p-2 rounded-full bg-[#222] border-none hover:bg-[#333] transition fixed bottom-13 right-5 z-100"
              >
                <ArrowUp className="text-white" size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
