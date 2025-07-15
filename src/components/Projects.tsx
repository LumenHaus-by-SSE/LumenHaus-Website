"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const imageSources: string[] = [
  "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg",
  "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
  "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
  "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg",
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-[80rem] mx-auto">
        <div className="mb-8">
          <p className="text-base md:text-lg font-medium text-[#e4bb7d] uppercase mb-8">
            Our Project
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 uppercase leading-tight">
            Our Latest Project
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8">
            Cras sagittis justo enim, eu sagittis purus molestie vitae.
            Vestibulum porttitor in massa feugiat blandit. Nunc ac viverra
            magna. Etiam dictum pellentesque libero a porttitor. Vestibulum
            dapibus, metus a molestie tincidunt, tortor nisl mollis mi, vitae
            commodo lorem mi auctor tellus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </div>

        <div className="block sm:hidden space-y-4">
          {imageSources.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-300 cursor-pointer overflow-hidden shadow-sm ${
                activeIndex === index
                  ? "h-64 ring-2 ring-[#e4bb7d]"
                  : "h-40 opacity-80"
              }`}
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-8">
          {imageSources.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden shadow-sm ${
                activeIndex === index
                  ? "flex-grow-[2] h-[400px] lg:h-[500px] xl:h-[550px]"
                  : "flex-grow h-[400px] lg:h-[500px] xl:h-[550px] opacity-70 hover:opacity-90"
              }`}
              style={{
                flexBasis:
                  activeIndex === index
                    ? windowWidth >= 1024
                      ? "45%"
                      : "40%"
                    : windowWidth >= 1024
                    ? "15%"
                    : "20%",
              }}
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover"
              />

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  activeIndex === index
                    ? "opacity-0"
                    : "opacity-20 hover:opacity-10"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
