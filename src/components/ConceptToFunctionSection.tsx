import React from "react";

const ConceptToFunctionSection = () => {
  return (
    <section className="w-full bg-gray-500 py-24 flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-4">
        <p className="text-[#e4bb7d] text-base font-semibold mb-4 uppercase tracking-wide text-center">
          MAKING A FUNCTIONAL HOME
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          FORM CONCEPT TO FUNCTION
        </h2>
        <p className="text-white text-sm md:text-base mb-8 max-w-2xl text-center">
          Praesent fringilla egestas justo. Proin auctor dapibus urna,
          condimentum ullamcorper enim cursus vel. Ut eget leo finibus,
          condimentum sapien cursus, dictum nunc. Morbi sit amet nunc mauris.
          Vestibulum malesuada nisl quis tellus bibendum pulvinar.
        </p>
        <button className="bg-[#e4bb7d] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#d1a760] transition text-xs tracking-wider">
          CONTACT NOW
        </button>
      </div>
    </section>
  );
};

export default ConceptToFunctionSection;
