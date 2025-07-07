import React from 'react'
import Image from 'next/image';

const Cta = () => {
    return (
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
          alt="Call to action background"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full">
          <div className="text-left text-white max-w-md space-y-4">
            <p className="text-base md:text-lg font-medium text-[#e8bd7a] uppercase">
              Getting it Right
            </p>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase whitespace-nowrap">
              Relentless Pursuit
              <br />
              of Perfection
            </h2>
            <button className="bg-[#e4bb7d] text-white px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-[#d1a760] transition-colors duration-300 w-fit mx-auto lg:mx-0 tracking-wide">
              CONTACT US
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/30 z-0" />
      </section>
    );
}
export default Cta
