"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Molly Jensen",
    role: "CEO, AFRIPODS",
    image: "/images/speakers/speakers1.jpg"
  },
  {
    name: "Joram Muzira",
    role: "CEO, Joram Modal Management",
    image: "/images/speakers/speakers2.jpg"
  },
  {
    name: "Mpindi Abaas",
    role: "CEO, Media Challenge Initiative",
    image: "/images/speakers/speakers3.jpg"
  },
  {
    name: "NAMIIRO HABIIBAH",
    role: "General Manager",
    image: "/images/speaker1.jpg"
  },
  { name: "CAROS HERBERT", role: "IT Director", image: "/images/speaker1.jpg" },
  {
    name: "MULIKATETE ANGELLA",
    role: "Head Of Programs",
    image: "/images/speaker1.jpg"
  }
];

const TeamGrid: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  useEffect(() => {
    // if (inView) {
    controls.start("visible");
    // }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <>
      <div className="text-center">
      <div className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow-sm mb-4">
        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
        <span className="text-gray-700 font-medium text-sm">OUR SPEAKERS</span>
        <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
      </div>
      <h2 className="text-4xl text-black font-bold mb-4">
        <span className="text-orange-500">Expo</span> SPEAKERS
      </h2>
      </div>
      <motion.div
        className="container mx-auto px-2 my-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div key={member.name} variants={itemVariants}>
              <TeamMemberCard
                name={member.name}
                position={member.role}
                imageUrl={member.image}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default TeamGrid;
