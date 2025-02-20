import React from "react";
import { FaBuilding, FaHome, FaCity } from "react-icons/fa";

const services = [
  {
    title: "GOVERNMENT",
    description:
      "Empowering cities with sustainable solar energy solutions. Our efficient solar grids reduce costs and carbon footprint, making clean energy accessible for public services and infrastructure.",
    icon: FaCity,
  },
  {
    title: "RESIDENTIAL",
    description:
      "Harness the power of the sun for your home. Our advanced solar panels provide clean, renewable energy, reducing electricity bills and increasing energy independence.",
    icon: FaHome,
  },
  {
    title: "COMMERCIAL",
    description:
      "Helping businesses transition to cost-effective solar energy. Our tailored solar solutions optimize energy efficiency, reduce operational costs, and support sustainable business practices.",
    icon: FaBuilding,
  },
];

const ServiceTypes = () => {
  return (
    <section className="bg-white text-center">
      {/* Heading Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-heading">We Provide Energy</h2>
        <p className="text-black mt-2 text-lg">
          Powering governments, homes, and businesses with sustainable solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="relative group bg-white shadow-md border border-gray-200 
              rounded-xl p-6 text-center transition-transform transform duration-200 
              hover:scale-105 hover:shadow-lg"
            >
              {/* Service Icon */}
              <IconComponent className="text-4xl text-primary mx-auto mb-4" />

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-black">{service.title}</h3>
              <div className="w-10 h-1 bg-primary mx-auto mt-3"></div>
              <p className="text-black mt-4">{service.description}</p>

              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#a4988b] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceTypes;
