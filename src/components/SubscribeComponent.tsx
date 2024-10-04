"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { IoSendSharp } from 'react-icons/io5';
import { LuSend, LuSendToBack } from 'react-icons/lu';

const SubscribeSection: React.FC = () => {
    const handleSubscription = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle subscription logic here
    }

    return (
        <section className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
            <div className='container mx-auto px-4'>
                <motion.div
                    className="flex flex-col lg:flex-row justify-center items-center gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="text-center lg:text-left lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className="inline-flex items-center shadow-lg bg-white rounded-full px-4 py-2 mb-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 font-medium text-sm">SUBSCRIBE</span>
                            <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                        </motion.div>

                        <h2 className="text-3xl text-black sm:text-4xl lg:text-5xl font-bold mb-4">
                            <span className="text-[#ff4c19]">Subscribe</span> To Get Latest Update From Us
                        </h2>
                    </motion.div>
                    <motion.form
                        method="POST"
                        onSubmit={handleSubscription}
                        className="flex flex-col items-center lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-gray-500 mb-4 text-center lg:text-left">
                            Unlock exclusive insights and stay ahead with our latest updates delivered straight to your inbox. Join our community and be the first to know!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Your Email*"
                                className="border border-gray-300 rounded-full px-4 sm:py-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-gray-500 outline-none w-full sm:w-[50rem]"
                            />
                            <motion.button
                                type='submit'
                                className="bg-[#ff4c19] uppercase flex flex-row place-content-center items-center text-center text-white rounded-full px-4 sm:py-4 py-3 w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LuSend className='text-center text-2xl' />
                            </motion.button>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default SubscribeSection;