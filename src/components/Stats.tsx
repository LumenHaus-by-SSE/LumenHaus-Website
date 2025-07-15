import React from 'react'
import Image from 'next/image'

const Stats = () => {
    return (
        <section className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="space-y-8 order-1">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e4bb7d] uppercase tracking-wide mb-8">
                        OUR STATISTIC
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase leading-tight mb-8">
                        Make Your<br />
                        <span className="block">Statement in Style</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-md leading-relaxed mb-8">
                        Sed vel feugiat sapien. Nulla rhoncus dapibus urna id mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Mauris mattis.
                    </p>

                    <div className="space-y-8">
                        <ProgressBar label="Project Analysis" value={75} />
                        <ProgressBar label="Project Design" value={80} />
                        <ProgressBar label="Production & Building" value={85} />
                    </div>
                </div>

                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-xl order-2">
                    <Image
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                        alt="Statistics"
                        fill
                        className="object-cover"
                    />
                    
                    <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-5 right-0 bg-white shadow-xl px-6 py-4 flex justify-center items-center w-[105%] gap-8">
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e4bb7d]">15+</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Years of Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e4bb7d]">200+</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats

const ProgressBar = ({ label, value }: { label: string; value: number }) => {
    return (
        <div>
            <div className="flex justify-between text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1 sm:mb-2 uppercase">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-1 sm:h-1.5 md:h-2 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#e4bb7d] rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
};