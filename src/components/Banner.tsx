import Image from "next/image"
import Link from "next/link";

interface BannerProps {
  title: string;
  subtitle: string;
  image: string;
}

const Banner = ({title, subtitle, image}: BannerProps) => {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src={image}
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-start justify-center flex-col gap-4 w-3/5 left-1/2 -translate-x-1/2 top-0">
        <h1 className="text-white text-5xl font-bold">
          {title}
        </h1>
        <h2 className="text-white">
          <Link href="/" className="text-[#e4bb7d]">HOME</Link> / {subtitle}
        </h2>
      </div>
    </div>
  );
}
export default Banner