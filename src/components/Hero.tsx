import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div
                className="h-24 lg:h-48 w-full relative"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            ></div>
            <section className="relative w-full h-screen flex items-center justify-center text-center">
                <Image
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#e4bb7d]">
                        INNOVATIVE IDEAS
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mt-2">
                        FOR YOUR STYLE
                    </h2>

                    <div className="mt-6 flex gap-4 flex-col md:flex-row items-center justify-center">
                        <button className="py-4 px-6 border border-white text-white text-sm font-semibold uppercase hover:bg-white hover:text-black transition">
                            Our Project
                        </button>
                        <button className="py-4 px-6 border border-[#e4bb7d] text-[#e4bb7d] text-sm font-semibold uppercase hover:bg-[#e4bb7d] hover:text-black transition">
                            Our Pricing
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
