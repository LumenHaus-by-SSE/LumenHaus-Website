"use client"

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const imgPlaceholder = "/images/img-placeholder.svg";

const progressData = [
  { label: "PROJECT ANALYSIS", percent: 75 },
  { label: "PROJECT DESIGN", percent: 80 },
  { label: "PRODUCTION & BUILDING", percent: 85 },
];

const accordionData = [
  {
    label: "PROJECT ANALYSIS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    label: "PROJECT DESIGN",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    label: "PRODUCTION AND BUILDING",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const DesignProcessSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="bg-[#f3f3f3] absolute top-0 right-0 h-2/3 w-2/3 sm:w-3/5 z-0"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4 md:px-8 items-center lg:items-start justify-between">
        <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
          <div className="w-full max-w-lg aspect-[5/3] bg-gray-400 mx-auto relative overflow-hidden">
            <Image
              src={imgPlaceholder}
              alt="Design Process"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full max-w-lg mt-8">
            {progressData.map((item, i) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm md:text-base text-black uppercase tracking-tight">
                    {item.label}
                  </span>
                  <span className="font-semibold text-sm md:text-base text-black">
                    {item.percent}%
                  </span>
                </div>
                <div className="w-full h-1 bg-black relative rounded-full">
                  <div
                    className="absolute top-0 left-0 h-1 bg-[#e4bb7d]"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="text-gray-400 text-sm mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center w-full max-w-xl z-10">
          <p className="text-[#e4bb7d] text-base font-semibold mb-2 uppercase tracking-wide">
            HOW DO WE DO IT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            OUR DESIGN
            <br />
            PROCESS
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-xl">
            Curabitur a orci vel diam interdum hendrerit commodo in mi. Nunc
            consequat felis vitae nulla feugiat, a ultricies ligula placerat.
            Aliquam nec mauris et purus pretium eleifend in et erat.
          </p>
          <div className="space-y-4">
            {accordionData.map((item, i) => (
              <div key={item.label} className="bg-white rounded shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 font-semibold text-black text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`ml-2 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm animate-fade-in">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
