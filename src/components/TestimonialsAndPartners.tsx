import React from "react";
import Image from "next/image";

const TestimonialsAndPartners = () => {
  return (
    <section className="w-full bg-white py-25 relative">
      <div className="absolute top-0 left-0 w-full h-2/3 bg-[#f3f3f3] z-0"></div>
      <div className="max-w-[82rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full">
          <div className="flex-1 flex flex-col items-center justify-center z-10">
            <p className="text-[#e4bb7d] text-base md:text-lg font-medium uppercase mb-2 tracking-wide self-center lg:self-start">
              OUR TESTIMONIAL
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight text-center">
              WHAT OUR CLIENT SAY ?
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
            <div className="bg-white rounded shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-6 max-w-lg">
              <div className="flex-1">
                <p className="text-gray-700 text-base mb-4">
                  " Curabitur a orci vel diam interdum hendrerit commodo in mi "
                </p>
                <div className="h-0.5 w-12 bg-[#e4bb7d] mb-4" />
                <div>
                  <p className="font-semibold text-gray-800">ELSA VERINA</p>
                  <p className="text-gray-500 text-sm">Designation</p>
                </div>
              </div>
              <div className="w-36 h-36 md:w-40 md:h-40 relative">
                <div className="absolute inset-0 rounded bg-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
                    alt="Testimonial person"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start lg:pl-12 z-10">
            <div className="bg-white rounded shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-6 max-w-lg">
              <div className="flex-1">
                <p className="text-gray-700 text-base mb-4">
                  " Curabitur a orci vel diam interdum hendrerit commodo in mi "
                </p>
                <div className="h-0.5 w-12 bg-[#e4bb7d] mb-4" />
                <div>
                  <p className="font-semibold text-gray-800">TYAS WIDAGDO</p>
                  <p className="text-gray-500 text-sm">Designation</p>
                </div>
              </div>
              <div className="w-36 h-36 md:w-40 md:h-40 relative">
                <div className="absolute inset-0 rounded bg-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
                    alt="Testimonial person"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 self-center">
              <h3 className="font-semibold text-gray-900 text-lg mb-4 mt-4">
                OUR PARTNER
              </h3>
              <div className="flex items-center gap-8 mb-4 flex-wrap">
                <div className="w-32 h-32 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png"
                    alt="Partner logo"
                    width={100}
                    height={100}
                    className="object-contain"  
                  />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png"
                    alt="Partner logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png"
                    alt="Partner logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-sm max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndPartners;
