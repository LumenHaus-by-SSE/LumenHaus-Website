import React from "react";
import Image from "next/image";

const imgPlaceholder = "/images/img-placeholder.svg"; // Place a placeholder image in public/images

const progressCards = [
  { percent: 40, label: "DESIGN", sub: "SPENT PER PROJECT" },
  { percent: 40, label: "DEVELOPMENT", sub: "SPENT PER PROJECT" },
];

const steps = [
  {
    title: "CONCEPT",
    desc: "Mauris dapibus consectetur enim a dictum. Ut in rhoncus sem.",
  },
  {
    title: "DESIGN",
    desc: "Maecenas finibus placerat mi, ornare tempus purus eleifend vitae.",
  },
  {
    title: "DEVELOPMENT",
    desc: "Curabitur a orci vel diam interdum hendrerit commodo in mi. Nunc consequat felis.",
  },
];

const HowWeDoSection = () => {
  return (
    <section className="w-full py-16 relative bg-white">
      <div className="bg-[#f3f3f3] absolute top-0 left-0 h-full w-2/3 sm:w-2/5 z-0 hidden"></div>
      <div className="max-w-[80rem] mx-auto flex flex-col justify-between lg:flex-row gap-8 p-6 xl:p-0">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-2xl aspect-[5/3] bg-gray-400 mx-auto relative overflow-hidden">
            <Image
              src={imgPlaceholder}
              alt="How We Do"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-6 mt-[-48px] z-10 relative w-full justify-center">
            {progressCards.map((card, i) => (
              <div
                key={i}
                className="bg-white shadow-md px-8 py-6 flex flex-col items-center min-w-[180px] max-w-[220px]"
              >
                <div className="relative w-16 h-16 mb-2">
                  <svg
                    className="w-full h-full rotate-[-90deg]"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="4"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#222"
                      strokeWidth="4"
                      strokeDasharray={`${card.percent}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[#e4bb7d] font-bold text-xl">
                    {card.percent}%
                  </span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mt-2 text-black">
                    {card.label}
                  </div>
                  <div className="text-xs text-gray-400 tracking-wide">
                    {card.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center z-10">
          <p className="text-[#e4bb7d] text-base font-semibold mb-2 uppercase tracking-wide">
            HOW WE DO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            MAKE YOUR
            <br />
            STATEMENT IN STYLE
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-xl">
            Fusce at tellus nec erat pretium maximus eu et eros. Mauris ligula
            ex, egestas non condimentum ut, rutrum eget massa. Aliquam erat
            volutpat. Praesent fringilla egestas justo.
          </p>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-[#e4bb7d] font-bold text-3xl md:text-4xl min-w-[40px]">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {step.title}
                  </div>
                  <div className="text-gray-500 text-sm md:text-base">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoSection;
