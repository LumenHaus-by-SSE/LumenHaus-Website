import React from "react";

const pricing = [
  {
    title: "DESIGN ADVICES",
    price: "$ 800",
    features: [
      "GENERAL LIVING SPACE ADVICES",
      "RENNOVATION ADVICES",
      "INTERIOR DESIGN ADVICES",
      "FURNITURE REORGANIZATION",
    ],
    button: "CONTACT US",
    highlight: false,
  },
  {
    title: "FURNITURE DESIGN",
    price: "$ 900",
    features: [
      "FURNITURE FOR LIVING ROOM",
      "FURNITURE REFURBISHMENT",
      "SOFAS AND AMCHAIRS",
      "TABLES AND CHAIRS",
    ],
    button: "CONTACT US",
    highlight: false,
  },
  {
    title: "COMPLETE INTERIOR DESIGN",
    price: "$ 1200",
    features: [
      "GENERAL LIVING SPACE ADVICES",
      "RENNOVATION ADVICES",
      "INTERIOR DESIGN ADVICES",
      "FURNITURE REORGANIZATION",
      "LARGE PROJECT INCLUDED",
      "COMPLETE HOME REDESIGN",
      "INTERIOR AND EXTERIOR WORKS",
    ],
    button: "CONTACT US",
    highlight: true,
  },
];

const Price = () => {
  return (
    <section className="w-full bg-[#f3f3f3] pb-0">
      {/* Top Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 pt-16 px-4 md:px-0">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <div className="text-[#E6B17A] text-base font-semibold mb-2">
            IMPROVING YOUR LIFE
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mb-4 leading-tight">
            GREAT OFFER
            <br />
            FOR YOU
          </h1>
          <p className="text-[#444] text-sm md:text-base mb-2">
            Integer eleifend at tortor et finibus. Pellentesque nec nisi arcu.
            Ut ante ex, pulvinar eget purus nec, varius rutrum erat. Aliquam
            elementum non sapien pretium faucibus. In convallis maximus turpis.
          </p>
        </div>
        {/* Right Image Placeholder */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-center">
          <div
            className="w-full h-48 md:h-72 lg:h-80 xl:h-[320px] bg-gray-500"
            style={{ maxWidth: "480px" }}
          ></div>
        </div>
      </div>
      {/* Pricing Cards Section */}
      <div className="w-full bg-white pt-0 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 -mt-24 px-4 md:px-0">
          {pricing.map((plan, idx) => (
            <div
              key={plan.title}
              className={`flex flex-col items-center shadow-md px-6 py-8 w-full max-w-xs md:max-w-sm lg:max-w-xs transition-all duration-200
                ${
                  plan.highlight
                    ? "bg-black text-white scale-105 z-10 border-0"
                    : "bg-white text-black border border-gray-100"
                }
                ${plan.highlight ? "md:mt-8" : "md:mt-0"}
              `}
              style={plan.highlight ? { minHeight: 480 } : { minHeight: 420 }}
            >
              <div
                className={`text-base font-semibold mb-2 ${
                  plan.highlight ? "text-white" : "text-[#E6B17A]"
                }`}
              >
                {plan.title}
              </div>
              <div
                className={`text-xs mb-4 text-center ${
                  plan.highlight ? "text-gray-200" : "text-gray-500"
                }`}
              >
                Donec rutrum felis est, at sollicitudin dui auctor vel
              </div>
              {/* Price */}
              <div className={`w-full flex flex-col items-center mb-6`}>
                <div
                  className={`w-full flex items-center justify-center ${
                    plan.highlight
                      ? "bg-[#E6B17A] text-white"
                      : "bg-black text-white"
                  } py-4 text-3xl font-semibold`}
                >
                  <span className="text-base align-top mr-1">$</span>
                  {plan.price.replace(/\$\s?/, "")}
                </div>
              </div>
              {/* Features */}
              <ul className="flex flex-col gap-2 text-xs md:text-sm mb-6 text-center">
                {plan.features.map((f, i) => (
                  <li key={i} className="tracking-wide">
                    {f}
                  </li>
                ))}
              </ul>
              {/* Button */}
              <button
                className={`mt-auto px-6 py-3 text-xs font-semibold rounded-none shadow-none border-none transition
                  ${
                    plan.highlight
                      ? "bg-[#E6B17A] text-white hover:bg-[#d1a05e]"
                      : "bg-black text-white hover:bg-[#222]"
                  }
                `}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
