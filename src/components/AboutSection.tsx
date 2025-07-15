"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center py-16">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="space-y-8 order-1">
          <div>
            <p className="text-base md:text-lg font-medium text-[#e4bb7d] uppercase tracking-wide mb-8">
              WELCOME TO LUMENHAUS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              INTERIOR DESIGN
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-[#e4bb7d] text-sm sm:text-lg uppercase tracking-wide">
                Innovative
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                Nulla a interdum ipsum. Proin orci nunc, efficitur quis vehicula
                ac, iaculis et massa. Etiam interdum, justo finibus hendrerit
                vulputate, augue massa porta tellus, eget imperdiet nisl libero
                at risus.
              </p>
            </div>

            <div>
              <h3 className="text-[#e4bb7d] text-sm sm:text-lg uppercase tracking-wide">
                Creative
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                Nulla in eros sit amet sapien viverra pretium. Ut luctus libero
                ipsum, eget varius nibh dapibus vitae. Sed non enim felis.
                Quisque eget tincidunt ligula. Quisque odio odio.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] order-2">
          <div className="absolute top-0 right-7 md:right-35 lg:right-5 space-y-4 sm:space-y-6">
            <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[180px] md:h-[220px] xl:w-[240px] xl:h-[280px] shadow-md rounded-sm overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
                alt="Interior design showcase 1"
                width={240}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[180px] md:h-[220px] xl:w-[240px] xl:h-[280px] shadow-md rounded-sm overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg"
                alt="Interior design showcase 2"
                width={240}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-10 left-7 md:left-35 lg:left-5 space-y-4 sm:space-y-6">
            <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[180px] md:h-[220px] xl:w-[240px] xl:h-[280px] shadow-md rounded-sm overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4993081/pexels-photo-4993081.jpeg"
                alt="Interior design showcase 3"
                width={240}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[180px] md:h-[220px] xl:w-[240px] xl:h-[280px] shadow-md rounded-sm overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg"
                alt="Interior design showcase 4"
                width={240}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
