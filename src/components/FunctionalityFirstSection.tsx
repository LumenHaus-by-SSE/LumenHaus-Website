import React from "react";
import Image from "next/image";

const imgPlaceholder = "/images/img-placeholder.svg";

const FunctionalityFirstSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-4 md:px-8 items-center justify-between">
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg">
          <p className="text-[#e4bb7d] text-base font-semibold mb-2 uppercase tracking-wide">
            THE ESSENCE OF INTERIOR DESIGN
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            FUNCTIONALITY FIRST
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac
            habitasse platea dictumst. Aliquam fringilla est et vulputate
            sollicitudin. Fusce fringilla feugiat ipsum, nec rhoncus sapien
            dictum sed.
          </p>
          <button className="bg-black text-white font-semibold px-8 py-3 rounded shadow hover:bg-gray-900 transition text-xs tracking-wider">
            OUR PROJECT
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-col items-center w-full max-w-xs md:max-w-sm gap-4">
            <div className="flex flex-row justify-center gap-4 w-full">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 min-w-0">
                  <div className="w-full aspect-[4/3] bg-gray-300 overflow-hidden relative">
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
              {[0, 1].map((i) => (
                <div key={i} className="flex-1 min-w-0">
                  <div className="w-full aspect-[4/3] bg-gray-300 overflow-hidden relative">
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
    </section>
  );
};

export default FunctionalityFirstSection;
