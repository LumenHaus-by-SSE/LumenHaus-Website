import React from 'react'
import {Layout, Lamp, Armchair, LampDesk} from 'lucide-react';

const Services = () => {
    return (
      <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden flex items-center justify-center">
        <div className="bg-[#f3f3f3] absolute top-0 right-0 h-full w-4/5 sm:w-3/5 md:w-2/3 hidden md:block"></div>

        <div className="max-w-7xl flex flex-col items-center justify-center xl:flex-row gap-8 sm:gap-10 lg:gap-12 p-4 sm:p-6 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 z-10 order-2 xl:order-1">
            <ServiceCard
              title="Interior Design"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={<LampDesk className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
              active
            />
            <ServiceCard
              title="Office Redesign"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={
                <Armchair className="w-5 h-5 sm:w-6 sm:h-6 text-[#e4bb7d]" />
              }
            />
            <ServiceCard
              title="Interior Decoration"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={<Lamp className="w-5 h-5 sm:w-6 sm:h-6 text-[#e4bb7d]" />}
            />
            <ServiceCard
              title="Furniture Production"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={<Layout className="w-5 h-5 sm:w-6 sm:h-6 text-[#e4bb7d]" />}
            />
          </div>

          <div className="flex flex-col justify-center z-10 order-1 xl:order-2 text-center lg:text-left">
            <p className="text-base md:text-lg font-medium text-[#e4bb7d] uppercase mb-2 sm:mb-3 tracking-wide">
              Our Service
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              WE DESIGN MODERN
              <br />
              <span className="block">AND ELEGANT</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Aenean erat ipsum, euismod auctor augue ac, hendrerit lacinia
              lorem. Ut nec leo id justo luctus accumsan sed id dolor. Sed ac
              rhoncus diam, sit amet tempor ligula.
            </p>
            <button className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-gray-800 transition-colors duration-300 w-fit mx-auto lg:mx-0 shadow-lg tracking-wide">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    );
}
export default Services

type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    active?: boolean;
};

const ServiceCard = ({ title, description, icon, active = false }: ServiceCardProps) => {
    return (
        <div
            className={`w-[250px] h-[250px] p-5 flex flex-col gap-4 shadow-sm items-center justify-center ${
                active
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-800 border border-gray-100'
            }`}
        >
            <div>{icon}</div>
            <h3 className="text-lg font-semibold uppercase whitespace-nowrap">{title}</h3>
            <p className="text-sm text-center p-2">{description}</p>
        </div>
    );
};
