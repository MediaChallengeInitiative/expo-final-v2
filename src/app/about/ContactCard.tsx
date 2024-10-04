import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallToAction: React.FC = () => {
    return (
        <>
            <div className="max-w-7xl bg-red-500 text-white top-[35rem] right-0 left-0 absolute mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16 rounded-2xl shadow-lg">

                {/* Left Section */}
                <div className="flex items-center space-x-6">
                    <div className="bg-red-600 p-6 rounded-full flex items-center justify-center">
                        <FaPhoneAlt size={32} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">GET A FREE CONSULTATION</h3>
                        <p className="text-4xl font-bold mt-1">987 233 0000</p>
                    </div>
                </div>

                {/* Divider for Mobile */}
                <div className="w-full h-px bg-white opacity-50 my-8 md:hidden"></div>

                {/* Middle Section */}
                <div className="text-center md:text-left md:w-1/2">
                    <p className="text-sm md:text-base">
                        Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse.
                        Aut ab nibh aliqua optio veniet porro viverr.
                    </p>
                </div>

                {/* Right Section */}
                <div className="mt-8 md:mt-0">
                    <button className="bg-white text-red-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
                        MAKE APPOINTMENT
                    </button>
                </div>
            </div>
        </>
    );
};

export default CallToAction;
