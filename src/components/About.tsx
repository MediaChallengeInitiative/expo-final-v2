"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";

export const About: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  return (
    <section className="py-16 bg-[#f1f1f2] relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/about1.jpg"
        alt="Freedom of Expression"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-1"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-2/5 hidden lg:block">&nbsp;</div>
          <motion.div
            className="w-full lg:w-3/5 bg-white p-8 lg:p-12 rounded-lg shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.strong
              className="text-lg lg:text-xl text-black block mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join The Event
            </motion.strong>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl uppercase font-extrabold text-black mt-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Everything Media:
              <span className="bg-[#ff4c19] text-white px-2">
                The Future of Work
              </span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-black mt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              This year, we&apos;re excited to expand our reach with the 1st Africa
              Media and Creatives Career Expo 2024. This 4-day event, themed
              &quot;Everything Media: The Future of Work&quot;, will explore media trends
              and career opportunities across journalism, art, design, fashion,
              film, and entertainment. Join us as we build a thriving media
              landscape for East Africa!{" "}
            </motion.p>
            <motion.a
              href="#"
              className="mt-8 inline-block bg-[##ff4c19] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LinkButton link={"/register/standard"} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};