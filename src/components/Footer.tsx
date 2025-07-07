import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const logo = "/images/logo-placeholder.svg"; // Place your logo in public/images
const imgPlaceholder = "/images/img-placeholder.svg"; // Place a placeholder image in public/images

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start md:items-center">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={logo}
            alt="LumenHaus Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="text-gray-500">
            Nunc a purus sit amet nulla porttitor auctor vitae eu purus.
            Suspendisse non bibendum lectus. Mauris ut dignissim arcu, vel
            euismod mi. Pellentesque ut velit dictum, dignissim dui non,
            pulvinar lectus. Etiam non mi vestibulum, aliquam lacus mattis.
          </p>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 w-full mt-8 md:mt-0">
          <div>
            <p className="text-[#e4bb7d] text-base font-semibold mb-2">
              OTHER PAGES
            </p>
            <ul className="text-gray-700 text-sm mb-6 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-lg">+</span> Privacy Policy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">+</span> Term Of Service
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">+</span> Disclaimer
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">+</span> Credit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">+</span> FAQ
              </li>
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

      <div className="w-full bg-[#222] py-6 px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center justify-between gap-4 lg:w-3/5">
          <p className="text-white text-sm mb-2 md:mb-0">
            Copyright 2025 © LumenHaus by SSE
          </p>
          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-[#e4bb7d] text-sm">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Pinterest
              </a>
            </div>
            <button className="ml-6 p-2 rounded-full bg-transparent border-none hover:bg-[#333] transition">
              <ArrowUp className="text-white" size={22} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
