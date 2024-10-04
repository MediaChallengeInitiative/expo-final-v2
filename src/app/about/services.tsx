"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import {
  FaGraduationCap,
  FaLeaf,
  FaBullhorn,
  FaPlane,
  FaVenusMars
} from "react-icons/fa";

interface ExpoTheme {
  title: string;
  icon: React.ReactElement;
}

const expoThemes: ExpoTheme[] = [
  {
    title: "Building Next Generation of Journalists",
    icon: <FaGraduationCap className="w-12 h-12" />
  },
  {
    title:
      "Powering Sustainable Development Goals through local collaborative journalism",
    icon: <FaLeaf className="w-12 h-12" />
  },
  {
    title: "Transforming Narratives",
    icon: <FaBullhorn className="w-12 h-12" />
  },
  {
    title: "Boosting Safe Migration",
    icon: <FaPlane className="w-12 h-12" />
  },
  {
    title:
      "Transforming Gender Equality Norms and unlocking access to public services for women and girls",
    icon: <FaVenusMars className="w-12 h-12" />
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative pt-16 px-4 sm:px-6 lg:px-8 mt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-gray-100"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full h-4 bg-orange-200 transform -rotate-3">
          <div className="w-full h-full bg-orange-400 animate-flow"></div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow-sm mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            <span className="text-gray-700 font-medium text-sm">
              OUR THEMES
            </span>
            <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
          </div>
          <h2 className="text-4xl text-black font-bold mb-4">
            <span className="text-orange-500">EXPO</span> THEMES
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {expoThemes.map((theme, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
              <ServiceCard
                icon={theme.icon}
                title={theme.title}
                number={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
