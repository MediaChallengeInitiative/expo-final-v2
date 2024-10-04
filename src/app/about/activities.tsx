"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProcessStep: React.FC<{
  number: string;
  title: string;
  description: string;
}> = ({ number, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // if (inView) {
    controls.start("visible");
    // }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        <div
          style={{}}
          className="w-64 before:bg-white before:rounded-full before:w-72 before:h-72 before:absolute before:-z-10 h-64 rounded-full border-[5px] bg-white border-gray-300 group-hover:border-orange-500 transition-colors duration-300 flex flex-col items-center justify-center p-6"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-2">
            {title}
          </h3>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
        <div className="absolute top-1 right-10 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          {number}
        </div>
      </div>
    </motion.div>
  );
};

const Arrow: React.FC = () => (
  <svg
    className="hidden lg:block absolute top-1/2 left-0 w-full"
    height="40"
    viewBox="0 0 1000 40"
    preserveAspectRatio="none"
  >
    <path
      d="M0,20 Q250,40 500,20 T1000,20"
      fill="none"
      stroke="#E5E7EB"
      strokeWidth="2"
      strokeDasharray="8,8"
    />
  </svg>
);

const ProcessSteps: React.FC = () => {
  return (
    <div className="py-16 my-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow-sm mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            <span className="text-gray-700 font-medium text-sm">
              OUR PROCESS
            </span>
            <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
          </div>
          <h2 className="text-4xl text-black font-bold mb-4">
            <span className="text-orange-500">Expo</span> Structure
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
                        As COTE we follow a systematic approach we follow when developing our client's solutions.
                    </p> */}
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
          {/* <Arrow /> */}
          <ProcessStep
            number="01"
            title="Pannel Sessions"
            description="Experts + Journalists in conversations about the future og journalists."
          />
          <ProcessStep
            number="02"
            title="Skills Building Sessions"
            description="Practice Skills sessions targeting young journalists. 20 per session. Signing up."
          />
          <ProcessStep
            number="03"
            title="Newsroom Contest"
            description="Young Journalists compete to find the best journalists 2023."
          />
          <ProcessStep
            number="04"
            title="Evening Events + Performances"
            description="A fusion of fun activities, performances and show-casing short films."
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
