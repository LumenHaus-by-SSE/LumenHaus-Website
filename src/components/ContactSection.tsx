import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const mapPlaceholder = "/images/map-placeholder.png";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 relative">
      <div className="bg-[#222] absolute bottom-0 lg:top-0  right-0 h-1/2 lg:h-full w-full lg:w-1/2"></div>
      <div className="max-w-[80rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 w-full lg:justify-between justify-center">
          <div className="flex-1 flex items-center justify-center z-100 p-6 md:p-0 lg:p-6">
            <div className="flex flex-col justify-center">
              <p className="text-[#e4bb7d] text-base md:text-lg font-medium mb-8">
                CONTACT US
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                HAVE A QUESTION ?
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <Link href="tel:000123456789" className="flex items-center gap-8">
                  <Phone size={28} className="text-[#e4bb7d]" />
                  <span className="text-gray-500 text-base font-medium">
                    000 123 456 789
                  </span>
                </Link>
                <Link href="mailto:info@email.com" className="flex items-center gap-8">
                  <Mail size={28} className="text-[#e4bb7d]" />
                  <span className="text-gray-500 text-base font-medium">
                    INFO@EMAIL.COM
                  </span>
                </Link>
              </div>
              <p className="text-gray-500 text-base mb-8 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <div className="w-full max-w-lg">
                <div className="w-full aspect-[2/1] bg-gray-200 rounded shadow overflow-hidden relative">
                  <Image
                    src={mapPlaceholder}
                    alt="Map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center z-100 p-6 md:p-0 lg:p-6">
            <form className="max-w-lg w-full space-y-6">
              <div>
                <label
                  className="block text-xs font-semibold text-white mb-4"
                  htmlFor="name"
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white text-black focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-white mb-4"
                  htmlFor="email"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white text-black focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-white mb-4"
                  htmlFor="subject"
                >
                  SUBJECT
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Your Subject"
                  className="w-full px-4 py-2 bg-white text-black focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-white mb-4"
                  htmlFor="message"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white text-black focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e4bb7d] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#d1a760] transition text-xs tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
