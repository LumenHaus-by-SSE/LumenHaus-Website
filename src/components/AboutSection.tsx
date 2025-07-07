'use client';

import Image from 'next/image';

const AboutSection = () => {
    return (
      <section className="w-full min-h-screen bg-white flex items-center justify-center py-16 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-8 order-1">
            <div>
              <p className="text-base md:text-lg font-medium text-[#e4bb7d] uppercase tracking-wide">
                WELCOME TO LUMENHAUS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
                INTERIOR DESIGN
              </h2>
              <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
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
                  Nulla a interdum ipsum. Proin orci nunc, efficitur quis
                  vehicula ac, iaculis et massa. Etiam interdum, justo finibus
                  hendrerit vulputate, augue massa porta tellus, eget imperdiet
                  nisl libero at risus.
                </p>
              </div>

              <div>
                <h3 className="text-[#e4bb7d] text-sm sm:text-lg uppercase tracking-wide">
                  Creative
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                  Nulla in eros sit amet sapien viverra pretium. Ut luctus
                  libero ipsum, eget varius nibh dapibus vitae. Sed non enim
                  felis. Quisque eget tincidunt ligula. Quisque odio odio.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] order-2">
            <div className="absolute top-0 right-0 sm:right-8 lg:right-10 space-y-4 sm:space-y-6">
              <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] lg:w-[240px] lg:h-[280px] shadow-md rounded-sm overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
                  alt="Interior design showcase 1"
                  width={240}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] lg:w-[240px] lg:h-[280px] shadow-md rounded-sm overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg"
                  alt="Interior design showcase 2"
                  width={240}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 sm:left-8 lg:left-10 space-y-4 sm:space-y-6">
              <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] lg:w-[240px] lg:h-[280px] shadow-md rounded-sm overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4993081/pexels-photo-4993081.jpeg"
                  alt="Interior design showcase 3"
                  width={240}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] lg:w-[240px] lg:h-[280px] shadow-md rounded-sm overflow-hidden">
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