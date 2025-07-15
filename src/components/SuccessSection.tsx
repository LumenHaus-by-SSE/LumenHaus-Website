import React from "react";

const SuccessSection = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-white">
      <div className="max-w-[80rem] w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-evenly p-6 xl:p-0">
        <div className="flex flex-col items-start">
          
            <span className="text-[#e4bb7d] text-sm mb-8 font-bold">2020</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
              SUCCESS
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          
        </div>

        <div className="flex flex-col gap-8 flex-1 col-span-2">
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            aliquam reiciendis culpa tenetur perferendis deleniti magni sunt
            fugit assumenda sint quod at pariatur non, ut, amet consequuntur
            inventore ea ex saepe magnam itaque?
          </p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            aliquam reiciendis culpa tenetur perferendis deleniti magni sunt
            fugit assumenda sint quod at pariatur non, ut, amet consequuntur
            inventore ea ex saepe magnam itaque?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1 flex flex-col items-start">
              <div className="w-full aspect-[4/3] bg-gray-300 mb-2" />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in iure dolores, nobis saepe et facere odio, sint numquam nulla perferendis suscipit labore quisquam! Praesentium esse, similique dignissimos deleniti facere ipsam obcaecati incidunt corporis qui error, alias nemo nobis asperiores accusantium, rerum inventore doloribus possimus deserunt voluptate labore est dolores!</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in iure dolores, nobis saepe et facere odio, sint numquam nulla perferendis suscipit labore quisquam! </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
