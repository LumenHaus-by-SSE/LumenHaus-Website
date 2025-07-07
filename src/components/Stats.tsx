import React from 'react'
import Image from 'next/image'

const Stats = () => {
    return (
        <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                {/* Content Section */}
                <div className="space-y-4 sm:space-y-6 order-1">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e4bb7d] uppercase tracking-wide">
                        OUR STATISTIC
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase leading-tight">
                        Make Your<br />
                        <span className="block">Statement in Style</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
                        Sed vel feugiat sapien. Nulla rhoncus dapibus urna id mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Mauris mattis.
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                        <ProgressBar label="Project Analysis" value={75} />
                        <ProgressBar label="Project Design" value={80} />
                        <ProgressBar label="Production & Building" value={85} />
                    </div>
                </div>

                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-xl mx-auto order-2">
                    <div className="w-full h-full shadow-lg overflow-hidden">
                        <Image
                            src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
                            alt="Interior design showcase"
                            width={1000}
                            height={1000}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-5 right-0 bg-white shadow-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex justify-center items-center w-[105%] gap-4 sm:gap-6 md:gap-8">
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e4bb7d]">12</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Years of Experience</p>
                        </div>
                        <div className="w-px h-8 sm:h-10 bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e4bb7d]">871</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
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