import React from "react";

const ProjectHero = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
      {/* Top Section */}
      <div className="max-w-3xl w-full flex flex-col items-center mb-12">
        <div className="text-[#E6B17A] text-sm font-semibold mb-2 text-center">
          OUR PROJECT
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#222] mb-4 text-center">
          OUR LATEST PROJECT
        </h1>
        <p className="text-xs md:text-sm text-[#444] text-center max-w-2xl">
          Cras sagittis justo enim, eu sagittis purus molestie vitae. Vestibulum
          porttitor in massa feugiat blandit. Nunc ac viverra magna. Etiam
          dictum pellentesque libero a porttitor. Vestibulum dapibus, metus a
          molestie tincidunt, tortor nisl mollis mi, vitae commodo lorem mi
          auctor tellus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
      </div>
      {/* Gallery Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Row */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-500 w-full aspect-square" />
          <div className="bg-gray-500 w-full aspect-[2/1]" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-500 w-full aspect-[2/1]" />
          <div className="bg-gray-500 w-full aspect-square" />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
