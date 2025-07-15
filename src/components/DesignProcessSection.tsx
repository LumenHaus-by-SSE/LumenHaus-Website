"use client"

import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

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

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="bg-[#f3f3f3] absolute top-0 right-0 h-2/3 w-2/3 sm:w-3/5 z-0 hidden"></div>
      <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row gap-8 p-6 lg:p-0 items-center lg:items-start justify-between">
        <div className="flex-1 flex flex-col items-center justify-center w-full z-10 gap-8">
          <div className="w-full max-w-2xl aspect-[5/2] bg-gray-400 mx-auto relative overflow-hidden">
            <Image
              src={imgPlaceholder}
              alt="Design Process"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full max-w-2xl">
            {progressData.map((item, i) => (
              <div key={item.label} className="mb-8">
                <div className="flex justify-between items-center mb-2">
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
            <p className="text-gray-400 text-sm mt-8 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center z-10">
          <p className="text-[#e4bb7d] text-base font-semibold mb-4 uppercase tracking-wide">
            DESIGN PROCESS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            HOW WE CREATE
            <br />
            YOUR DREAM SPACE
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-xl">
            Fusce at tellus nec erat pretium maximus eu et eros. Mauris ligula
            ex, egestas non condimentum ut, rutrum eget massa. Aliquam erat
            volutpat. Praesent fringilla egestas justo.
          </p>
          <Accordion type="single" collapsible className="space-y-6">
            {accordionData.map((step, i) => (
              <AccordionItem key={i} value={step.label} className="bg-white shadow-md border-none">
                <AccordionTrigger className="px-6 py-6 text-xl font-semibold text-black flex items-center justify-between">
                  {step.label}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600 text-base">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
