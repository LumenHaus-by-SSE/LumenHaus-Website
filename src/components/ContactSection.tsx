import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const mapPlaceholder = "/images/map-placeholder.png";

const ContactSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-white py-25">
      <div className="flex-1 flex justify-end">
        <div className="bg-white flex flex-col justify-center px-4 sm:px-8 py-12">
          <p className="text-[#e4bb7d]  text-base md:text-lg font-medium mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            HAVE A QUESTION ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Phone size={28} className="text-[#e4bb7d]" />
              <span className="text-gray-500 text-base font-medium">
                000 123 456 789
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={28} className="text-[#e4bb7d]" />
              <span className="text-gray-500 text-base font-medium">
                INFO@EMAIL.COM
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-base mb-6 max-w-xl">
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

      <div className="flex-1 bg-[#1a1a1a] flex flex-col items-start justify-center px-4 sm:px-8 py-12">
        <form className="max-w-lg w-full space-y-6">
          <div>
            <label
              className="block text-xs font-semibold text-white mb-2"
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
              className="block text-xs font-semibold text-white mb-2"
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
              className="block text-xs font-semibold text-white mb-2"
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
              className="block text-xs font-semibold text-white mb-2"
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
            className="bg-[#e4bb7d] text-white px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-[#d1a760] transition-colors duration-300 w-fit mx-auto lg:mx-0 tracking-wide"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
