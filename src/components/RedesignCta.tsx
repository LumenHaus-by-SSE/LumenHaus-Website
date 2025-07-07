import React from "react";

const RedesignCta = () => {
  return (
    <section className="w-full bg-[#222] py-8 px-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-start gap-4 md:gap-8">
        <div className="flex-1">
          <h2 className="text-white text-2xl md:text-2xl font-bold uppercase leading-tight">
            NEED TO REDESIGN YOUR LIVING SPACE ?<br />
            HIRE US NOW
          </h2>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-[#E6C287] text-white font-semibold text-xs px-8 py-4 min-w-[140px] rounded-none shadow-none hover:bg-[#d1a05e] transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default RedesignCta;
