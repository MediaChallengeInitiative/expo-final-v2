import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  number: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, number }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative bg-white border-l-8 border-orange-500 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full"
    >
      <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 p-6">
        <motion.div
          className="text-orange-500 group-hover:text-white mb-6 text-4xl"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{title}</h3>
      </div>
      <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
        <span className="text-white font-bold">{number}</span>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 group-hover:bg-orange-300 transition-colors duration-300 transform rotate-45 translate-x-8 -translate-y-8"></div>
    </motion.div>
  );
};

export default ServiceCard;