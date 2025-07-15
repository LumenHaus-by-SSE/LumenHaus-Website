import React from "react";

const PricingHero = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 bg-white">
      <div className="max-w-[80rem] w-full flex flex-col md:flex-row items-center md:items-start gap-8 p-6 xl:p-0 justify-evenly">
        
        <div className="flex-1 w-full flex justify-center items-center">
          <div
            className="w-full h-48 md:h-64 lg:h-72 xl:h-88 bg-gray-500"
          ></div>
        </div>
        
        <div className="flex-1 mt-8 md:mt-0">
          <div className="text-[#E6B17A] text-base font-semibold mb-8">
            IMPROVING YOUR LIFE
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mb-8 leading-tight">
            MAKE YOUR LIVING
            <br />
            SPACE
          </h1>
          <p className="text-[#444] text-sm md:text-base mb-8">
            Vivamus vehicula nulla elit, ut gravida nunc accumsan nec. Aenean
            leo orci, posuere quis rhoncus ut, semper sit amet tortor. Mauris
            eget augue vel dui vehicula finibus. Sed posuere commodo odio sit
            amet facilisis. Vestibulum tristique diam at imperdiet blandit.
          </p>
          <p className="text-[#444] text-sm md:text-base">
            Nulla feugiat aliquam blandit. Etiam id ultricies erat. Suspendisse
            malesuada, neque et auctor efficitur, sem nisl ullamcorper nisl,
            quis tincidunt nisi libero ut sapien. Mauris a vulputate mi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
