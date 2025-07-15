import React from 'react'
import {Layout, Lamp, Armchair, LampDesk} from 'lucide-react';

const Services = () => {
    return (
      <section className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white relative overflow-hidden flex items-center justify-center">
        <div className="bg-[#f3f3f3] absolute top-0 right-0 h-full w-4/5 sm:w-3/5 md:w-2/3 hidden"></div>

        <div className="max-w-[80rem] flex flex-col items-center justify-center lg:flex-row gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 order-2 lg:order-1">
            <ServiceCard
              title="Interior Design"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={<LampDesk className="w-7 h-7 sm:w-6 sm:h-6 text-white" />}
              active
            />
            <ServiceCard
              title="Office Redesign"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={
                <Armchair className="w-7 h-7 sm:w-6 sm:h-6 text-[#e4bb7d]" />
              }
            />
            <ServiceCard
              title="Interior Decoration"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={<Lamp className="w-7 h-7 sm:w-6 sm:h-6 text-[#e4bb7d]" />}
            />
            <ServiceCard
              title="Furniture Production"
              description="Fusce eleifend lorem et placerat eleifend."
              icon={<Layout className="w-7 h-7 sm:w-6 sm:h-6 text-[#e4bb7d]" />}
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center lg:items-start z-10 order-1 lg:order-2">
            <p className="text-base md:text-lg font-medium text-[#e4bb7d] uppercase mb-8 tracking-wide">
              Our Service
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              WE DESIGN MODERN
              <br />
              <span className="block">AND ELEGANT</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-8 mx-auto lg:mx-0 leading-relaxed">
              Aenean erat ipsum, euismod auctor augue ac, hendrerit lacinia
              lorem. Ut nec leo id justo luctus accumsan sed id dolor. Sed ac
              rhoncus diam, sit amet tempor ligula.
            </p>
            <button className="bg-black text-white px-8 py-3 text-xs sm:text-sm font-bold hover:bg-gray-800 transition-colors duration-300 w-fit mx-auto lg:mx-0 shadow-lg tracking-wide">
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
            className={`w-[300px] h-[300px] p-5 flex flex-col gap-4 shadow-sm items-center justify-center ${
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
