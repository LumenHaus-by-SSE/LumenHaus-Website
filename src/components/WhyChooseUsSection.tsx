import React from "react";
import { Calculator, Clock, Lightbulb, Handshake } from "lucide-react";

const features = [
  {
    icon: <Calculator size={32} className="text-[#e4bb7d]" />,
    title: "CAREFULLY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shadow: true,
  },
  {
    icon: <Clock size={32} className="text-[#e4bb7d]" />,
    title: "FAST PROJECT",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shadow: false,
  },
  {
    icon: <Lightbulb size={32} className="text-[#e4bb7d]" />,
    title: "SMARTLY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shadow: false,
  },
  {
    icon: <Handshake size={32} className="text-[#e4bb7d]" />,
    title: "PERFECT",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shadow: true,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-4 md:px-8 items-center justify-between">
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg">
          <p className="text-[#e4bb7d] text-base font-semibold mb-2 uppercase tracking-wide">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            WE GAVE BETTER
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md">
            Fusce at tellus nec erat pretium maximus eu et eros. Mauris ligula
            ex, egestas non condimentum ut, rutrum eget massa. Aliquam erat
            volutpat. Praesent fringilla egestas justo.
          </p>
          <button className="bg-black text-white font-semibold px-8 py-3 rounded shadow hover:bg-gray-900 transition text-xs tracking-wider">
            OUR PROJECT
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-xl">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`bg-white rounded p-6 flex flex-col items-start ${
                  feature.shadow ? "shadow-md" : ""
                }`}
              >
                <div className="mb-2">{feature.icon}</div>
                <div className="font-bold text-black mb-1">{feature.title}</div>
                <div className="text-gray-500 text-sm">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
