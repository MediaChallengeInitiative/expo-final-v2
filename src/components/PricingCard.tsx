import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  ctaText: string;
  href: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  ctaText,
  href
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative w-full max-w-sm p-4 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 overflow-hidden group"
    >
      <div className="absolute inset-0 border-[5px] border-gray-300 rounded-lg transition-all duration-300 group-hover:border-orange-500"></div>
      <div className="absolute inset-[5px] bg-white dark:bg-gray-800 rounded-lg z-10"></div>
      <div className="relative z-20">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">UGX</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {price.toLocaleString()}
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-orange-700 dark:text-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Link href={href}>
          <button
            type="button"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-200 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition-colors duration-300"
          >
            {ctaText}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
