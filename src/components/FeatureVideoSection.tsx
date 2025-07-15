'use client';

import { PlayCircle } from 'lucide-react';
import { useState, useRef } from 'react';

const FeatureVideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
      <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
        <div className="bg-[#f3f3f3] absolute top-0 left-0 h-full w-2/3 sm:w-2/5 z-0"></div>

        <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] shadow-xl  overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              <source
                src="https://videos.pexels.com/video-files/3773488/3773488-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="absolute bottom-4 left-4 flex items-center gap-2 sm:gap-3 bg-[#e4bb7d] hover:bg-[#d4a66d] text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">WATCH VIDEO</span>
                </button>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg z-10">
            <p className="text-base md:text-lg font-medium text-[#e4bb7d] uppercase mb-2 sm:mb-3 tracking-wide">
              We gave the best
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              INNOVATIVE IDEAS
              <br />
              <span className="block">STYLISH DESIGNS</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              Aenean erat ipsum, euismod auctor augue ac, hendrerit lacinia
              lorem. Ut nec leo id justo luctus accumsan sed id dolor. Sed ac
              rhoncus diam, sit amet tempor ligula. Cras maximus magna quis
              vestibulum lobortis.
            </p>
            <button className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-gray-800 transition-colors duration-300 w-fit mx-auto lg:mx-0 shadow-lg tracking-wide">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    );
};

export default FeatureVideoSection;