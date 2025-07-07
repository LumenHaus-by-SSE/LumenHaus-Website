import React from "react";

const FoundedSection = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex justify-center bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start justify-evenly">
        <div className="flex flex-col items-start">
          <span className="text-[#e4bb7d] text-sm mb-2 font-bold">2018</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">FOUNDED</h2>
          <p className="text-gray-500 text-sm md:max-w-xs">
            Cras sagittis justo enim, eu sagittis purus molestie vitae.
            Vestibulum porttitor in massa feugiat blandit. Nunc ac viverra
            magna. Etiam dictum pellentesque libero a porttitor.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray-500 text-sm">
            Ut in rhoncus sem. Maecenas finibus placerat mi, ornare tempus purus
            eleifend vitae. Curabitur a orci vel diam interdum hendrerit commodo
            in mi. Nunc consequat felis vitae nulla feugiat, a ultricies ligula
            placerat.
          </p>
          <p className="text-gray-500 text-sm">
            Aliquam nec mauris et purus pretium eleifend in et erat. Sed in
            ullamcorper ex. Sed quis massa quis risus semper porta eget ac
            mauris. Pellentesque vel nisi velit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1 flex flex-col items-start">
              <div className="w-full aspect-[4/3] bg-gray-300 rounded mb-2" />
              <span className="font-bold text-sm text-black">DYAS KARDINAL</span>
              <span className="text-xs text-gray-500">Founder</span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <div className="w-full aspect-[4/3] bg-gray-300 rounded mb-2" />
              <span className="font-bold text-sm text-black">ELSA VERINA</span>
              <span className="text-xs text-gray-500">Co-founder</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="w-32 h-32 bg-gray-300 rounded mb-2 relative">
          </div>
          <span className="font-bold text-sm mb-1 text-black">INTERIOR AWARD</span>
          <span className="text-gray-500 text-sm">Lorem ipsum.</span>
        </div>
      </div>
    </section>
  );
};

export default FoundedSection;
