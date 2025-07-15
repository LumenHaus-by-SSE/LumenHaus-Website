import React from "react";

const InteriorDesignHero = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 bg-white">
      <div className="max-w-[80rem] w-full flex flex-col md:flex-row items-center gap-8 p-6 xl:p-0 justify-evenly">
        <div className="flex-1 max-w-xl">
          <div className="text-[#E6B17A] text-sm font-semibold mb-8">
            CHANGE YOUR LIVING SPACE
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mb-8 leading-tight">
            LET'S TALK INTERIOR
            <br />
            DESIGN
          </h1>
          <p className="text-[#444] text-sm md:text-base mb-8">
            Nullam quis ipsum mauris. Suspendisse vestibulum mi lacus, ut
            sagittis augue placerat aliquam. Maecenas velit ex, posuere ut
            ullamcorper vel, pharetra eu felis. Quisque tellus dolor, vestibulum
            at erat gravida, aliquam ultrices dui. Cras finibus rhoncus risus in
            dictum.
          </p>
          <button className="bg-black text-white px-8 py-3 text-xs font-semibold rounded-none shadow-none hover:bg-[#222] transition">
            OUR PROJECT
          </button>
        </div>
        <div className="flex-1 w-full flex justify-center items-center lg:justify-end">
          <div
            className="w-full h-48 md:h-64 lg:h-72 xl:h-80 bg-gray-500"
            style={{ maxWidth: "480px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignHero;
