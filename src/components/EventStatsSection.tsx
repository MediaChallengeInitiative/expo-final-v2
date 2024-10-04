import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <motion.div 
    className="text-center p-6 bg-white rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.span 
      className="block text-4xl font-bold text-orange-500 mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {number}
    </motion.span>
    <motion.span 
      className="text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {label}
    </motion.span>
  </motion.div>
);

const EventStatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-100 to-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Event Highlights</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem number="43" label="Visionary Speakers" />
          <StatItem number="62" label="International Sponsors" />
          <StatItem number="28" label="Workshops We Offer" />
          <StatItem number="950" label="Event Participants" />
        </div>
      </div>
      <svg className="w-full h-24 mt-12" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 74L60 67.9041C120 61.8082 240 49.6164 360 43.5205C480 37.4247 600 37.4247 720 40.4726C840 43.5205 960 49.6164 1080 52.6644C1200 55.7123 1320 55.7123 1380 55.7123H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V74Z" fill="#FFF7ED"/>
      </svg>
    </section>
  );
};

export default EventStatsSection;