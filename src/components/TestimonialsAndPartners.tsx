import React from "react";
import Image from "next/image";

const TestimonialsAndPartners = () => {
  return (
    <section className="w-full bg-white py-16 relative">
      <div className="absolute top-0 left-0 w-full h-2/3 bg-[#f3f3f3] z-0 hidden md:block"></div>
      <div className="max-w-[80rem] mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 w-full justify-between">
          <div className="flex-1 flex flex-col items-center justify-center z-10">
            <p className="text-[#e4bb7d] text-base md:text-lg font-medium uppercase mb-8 tracking-wide self-center xl:self-start">
              OUR TESTIMONIAL
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight text-center xl:self-start whitespace-nowrap">
              WHAT OUR CLIENT SAY ?
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 max-w-xl self-center xl:self-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>

            <div className="bg-white shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-6 max-w-2xl">
              <div className="flex-1">
                <p className="text-gray-700 text-base mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo."
                </p>
                <div className="h-0.5 w-12 bg-[#e4bb7d] mb-4" />
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">CEO, Company Name</div>
              </div>
              <div className="w-64 h-64 bg-gray-300 flex-shrink-0"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-start z-10">
            <div className="bg-white shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-6 max-w-2xl">
              <div className="flex-1">
                <p className="text-gray-700 text-base mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo."
                </p>
                <div className="h-0.5 w-12 bg-[#e4bb7d] mb-4" />
                <div className="font-semibold text-gray-900">Jane Smith</div>
                <div className="text-sm text-gray-500">
                  Designer, Studio Name
                </div>
              </div>
              <div className="w-64 h-64 bg-gray-300 flex-shrink-0"></div>
            </div>
            <div className="bg-white w-full p-6 mt-10 self-end">
              <h3 className="font-semibold text-gray-900 text-lg mb-8">
                OUR PARTNER
              </h3>
              <div className="flex items-center gap-8 mb-8 flex-wrap justify-between">
                <Image
                  width={120}
                  height={60}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png"
                  alt="Partner 1"
                  className="h-24 w-auto"
                />
                <Image
                  width={120}
                  height={60}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png"
                  alt="Partner 2"
                  className="h-24 w-auto"
                />
                <Image
                  width={120}
                  height={60}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png"
                  alt="Partner 3"
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndPartners;
