import React from "react";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const features = [
  {
    title: "Quality Service",
    desc: "We provide the best quality service to our clients.",
    icon: <CheckCircle className="w-6 h-6 text-[#e4bb7d]" />,
    shadow: true,
  },
  {
    title: "Fast Delivery",
    desc: "Quick and efficient delivery of our services.",
    icon: <Clock className="w-6 h-6 text-[#e4bb7d]" />,
    shadow: false,
  },
  {
    title: "Expert Team",
    desc: "Our team consists of experienced professionals.",
    icon: <Users className="w-6 h-6 text-[#e4bb7d]" />,
    shadow: true,
  },
  {
    title: "Best Awards",
    desc: "We have won multiple awards for our excellence.",
    icon: <Award className="w-6 h-6 text-[#e4bb7d]" />,
    shadow: false,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row gap-8 p-6 lg:p-0 items-center justify-between">
        <div className="flex-1 flex flex-col items-start justify-center">
          <p className="text-[#e4bb7d] text-base font-semibold mb-8 uppercase tracking-wide">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
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
        <div className="flex-1 flex items-center justify-end w-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-8 w-full max-w-xl">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`bg-white p-6 flex flex-col items-start ${
                  feature.shadow ? "shadow-md" : ""
                }`}
              >
                <div className="mb-4">{feature.icon}</div>
                <div className="font-bold text-black mb-4">{feature.title}</div>
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
