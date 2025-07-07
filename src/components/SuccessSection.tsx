import React from "react";

const SuccessSection = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex justify-center bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <span className="text-[#e4bb7d] text-sm mb-2 font-bold">2020</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
            SUCCESS
          </h2>
          <p className="text-gray-500 text-sm md:max-w-xs">
            Cras sagittis justo enim, eu sagittis purus molestie vitae.
            Vestibulum porttitor in massa feugiat blandit. Nunc ac viverra
            magna. Etiam dictum pellentesque libero a porttitor.
          </p>
        </div>
        {/* Center Column */}
        <div className="flex flex-col gap-4 flex-1 col-span-2">
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
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3 mx-auto">
              <div className="w-[350px] aspect-[4/3] bg-gray-400" />
            </div>
            <div className="flex flex-col gap-4 items-end">
              <p className="text-gray-500 text-sm">
                Cras sagittis justo enim, eu sagittis purus molestie vitae.
                Vestibulum porttitor in massa feugiat blandit. Nunc ac viverra
                magna. Etiam dictum pellentesque libero a porttitor. Vestibulum
                dapibus, metus a molestie tincidunt, tortor nisl mollis mi,
                vitae commodo lorem mi auctor tellus. Interdum et malesuada
                fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            In hac habitasse platea dictumst. Aliquam fringilla est ut vulputate
            sollicitudin. Fusce fringilla feugiat ipsum, nec rhoncus sapien
            dictum sed. Phasellus quis libero elit. Proin eget elit sed felis
            finibus lobortis nec nec ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
