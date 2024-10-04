"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }}
      />
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-red-500 rounded-full"
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }}
      />
    </>
  );
};

export default AnimatedBackground;
