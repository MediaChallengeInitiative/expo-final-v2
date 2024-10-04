import React from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-700">
      <div className="absolute inset-0 w-full h-full">
        <Image
          width={300}
          height={300}
          src="/images/hero/hero1.jpg"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 bg-black bg-opacity-60 h-full">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 h-full flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            THE AFRICA MEDIA & CREATIVES CAREER EXPO 2024
          </h1>
          <p className="mb-8 text-lg font-thin text-gray-100 lg:text-5xl sm:px-16 lg:px-40 italic">
            Everything Media: The Future of Work
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <LinkButton link={"/register"} />
            <Link
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
