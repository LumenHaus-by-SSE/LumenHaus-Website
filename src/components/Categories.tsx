import React from "react";
import Image from "next/image";

interface CategoryCard {
  title: string;
  description: string;
  size: "small" | "medium" | "large";
  position: string;
  image: string;
}

interface ConceptCard {
  number: number;
  title: string;
  description: string;
}

const categories: CategoryCard[] = [
  {
    title: "RESIDENTIAL",
    description: "Fusce at tellus nec erat pretium maximus eu et eros.",
    size: "large",
    position: "col-span-1 row-span-1",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    title: "RESTAURANT",
    description: "Vestibulum porttitor in massa feugiat blandit.",
    size: "large",
    position: "col-span-1 row-span-1",
    image: "https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg",
  },
  {
    title: "CORPORATE",
    description: "Etiam dictum pellentesque libero a porttitor.",
    size: "large",
    position: "col-span-1 row-span-1",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
  },
  {
    title: "COMMERCIAL",
    description: "Proin eget elit sed felis finibus lobortis nec ipsum.",
    size: "large",
    position: "col-span-1 row-span-1",
    image:
      "https://images.pexels.com/photos/15153910/pexels-photo-15153910.jpeg",
  },
];

const conceptCards: ConceptCard[] = [
  {
    number: 1,
    title: "CONCEPT",
    description: "Mauris dapibus consectetur enim a dictum. Ut in rhoncus sem.",
  },
  {
    number: 2,
    title: "DESIGN",
    description:
      "Maecenas finibus placerat mi, ornare tempus purus eleifend vitae.",
  },
  {
    number: 3,
    title: "DEVELOPMENT",
    description:
      "Curabitur a orci vel diam interdum hendrerit commodo in mi. Nunc consequat felis.",
  },
];

const Categories = () => {
  const getCardHeight = (size: string) => {
    switch (size) {
      case "small":
        return "h-32";
      case "medium":
        return "h-40";
      case "large":
        return "h-48";
      default:
        return "h-40";
    }
  };

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1 w-full mb-8 lg:mb-0">
          <div className="mb-8">
            <p className="text-[#e4bb7d] text-base md:text-lg font-medium tracking-wider uppercase mb-4">
              HOW DO WE WORK ?
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              WE DESIGN FOR YOUR
              <br />
              SATISFACTION
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              In hac habitasse platea dictumst. Aliquam fringilla est ut
              vulputate sollicitudin. Fusce fringilla feugiat ipsum, nec rhoncus
              sapien dictum sed. Phasellus quis libero elit.
            </p>
          </div>

          <div className="space-y-8">
            {conceptCards.map((card) => (
              <div className="flex gap-4 sm:gap-6" key={card.number}>
                <div className="text-[#e4bb7d] font-bold text-3xl sm:text-4xl md:text-5xl self-center">
                  {card.number.toString().padStart(2, "0")}
                </div>
                <div className="flex flex-col justify-center gap-2 sm:gap-3">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className={`flex flex-col items-center ${
                  idx % 2 === 0 ? "mt-6 sm:mt-10" : ""
                }`}
              >
                <div className="w-full aspect-square relative">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="w-full bg-white rounded-lg shadow-xl -mt-2 flex flex-col items-center p-3 sm:p-4">
                  <h3 className="font-bold text-[#e4bb7d] text-base sm:text-lg uppercase mb-1 text-center">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Categories;
