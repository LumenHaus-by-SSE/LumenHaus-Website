import React from "react";

const people = [
  { name: "DYAS KARDINAL", role: "Designer" },
  { name: "ELSA VERINA", role: "Designer" },
  { name: "KEAN BERLIN", role: "Designer" },
  { name: "KUMTO WARMING", role: "Designer" },
  { name: "DEKAS", role: "Designer" },
  { name: "HUMS KARDIGAN", role: "Designer" },
];

const OurProfessionalSection = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center bg-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <div className="text-[#e4bb7d] text-base font-semibold mb-2">
          MEET OUR DESIGNER
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          OUR PROFESSIONAL
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Praesent eget ligula pharetra, condimentum odio in, tincidunt turpis.
          Cras dapibus tortor quis odio gravida pretium. Nullam diam tortor,
          pharetra vitae ipsum non, scelerisque dapibus odio.
        </p>
      </div>
      {/* People Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        {people.map((person, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] bg-gray-400" />
            <div className="-mt-6 w-4/5 bg-white shadow-md rounded text-center py-3">
              <div className="font-bold text-black text-base mb-1">
                {person.name}
              </div>
              <div className="text-gray-500 text-sm">{person.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProfessionalSection;
