import React from "react";

const iconClass = "w-6 h-6 text-[#E6B17A] inline-block align-middle mr-2";

const ProjectDetailsHero = () => {
  return (
    <section className="w-full flex flex-col items-center py-40 px-4 bg-white">
      {/* Top Images Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left: Two stacked images */}
        <div className="grid grid-rows-2 gap-8 col-span-1">
          <div className="bg-gray-500 w-full aspect-[5/3]" />
          <div className="bg-gray-500 w-full aspect-[5/3]" />
        </div>
        {/* Right: One large image */}
        <div className="col-span-1 flex flex-col justify-between">
          <div className="bg-gray-500 w-full h-full aspect-[1/1]" />
        </div>
      </div>
      {/* Bottom Info Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
        {/* Left: Project Description */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2 text-[#222]">
            RESIDENTIAL DESIGN
          </h2>
          <p className="text-xs md:text-sm text-[#444] mb-4">
            Curabitur in malesuada erat. Pellentesque volutpat suscipit leo, et
            efficitur ipsum tincidunt eu. Maecenas egestas vehicula est a
            luctus. Mauris molestie mattis iaculis. Etiam ultrices nisi id erat
            efficitur ultrices. Nullam sem orci, posuere vitae malesuada sed,
            convallis a est. Nam tempus ac nunc id volutpat. Maecenas id lacinia
            elit, a efficitur urna.
          </p>
          <ul className="list-disc list-inside text-xs md:text-sm text-[#444] mb-4 pl-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </li>
            <li>
              Fusce purus neque, maximus id pretium ac, feugiat sed lectus.
              Mauris eget dui nulla.
            </li>
          </ul>
          <p className="text-xs md:text-sm text-[#444]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        {/* Right: Project Info */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2 text-[#222]">
            PROJECT INFO
          </h2>
          <p className="text-xs md:text-sm text-[#444] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {/* Client */}
            <div className="flex items-center">
              <svg
                className={iconClass}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
              </svg>
              <div>
                <div className="text-xs text-[#E6B17A] font-semibold">
                  CLIENT
                </div>
                <div className="text-xs text-[#222]">Mahapuri</div>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center">
              <svg
                className={iconClass}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              <div>
                <div className="text-xs text-[#E6B17A] font-semibold">
                  LOCATION
                </div>
                <div className="text-xs text-[#222]">Pekanbaru, Riau.</div>
              </div>
            </div>
            {/* Price Value */}
            <div className="flex items-center">
              <svg
                className={iconClass}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#E6B17A"
                >
                  $
                </text>
              </svg>
              <div>
                <div className="text-xs text-[#E6B17A] font-semibold">
                  PRICE VALUE
                </div>
                <div className="text-xs text-[#222]">$1500</div>
              </div>
            </div>
            {/* Project Head */}
            <div className="flex items-center">
              <svg
                className={iconClass}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
                <path d="M12 11v4" />
                <path d="M9 17h6" />
              </svg>
              <div>
                <div className="text-xs text-[#E6B17A] font-semibold">
                  PROJECT HEAD
                </div>
                <div className="text-xs text-[#222]">Dyas Kardinal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsHero;
