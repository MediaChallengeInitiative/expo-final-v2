import Link from "next/link";
import React from "react";

export default function Jumbotron() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <Link
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-orange-700 bg-orange-100 rounded-full dark:bg-orange-900 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800"
          >
            <span className="text-xs bg-orange-600 rounded-full text-white px-4 py-1.5 me-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              One-on-One Mentorship & Trainings with Industry Experts
            </span>
            <svg
              className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Personalized Pathways to Success
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Transform Your Passion into Mastery! Join our exclusive online
            one-on-one trainings and mentorship programs at Africa Media &
            Creatives Expo 2024. Your personal gateway to industry excellence
            awaits!
          </p>
          <form className="w-full max-w-md mx-auto">
            <label
              htmlFor="default-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                placeholder="Enter your email here..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-b from-orange-50 to-transparent dark:from-orange-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
    </div>
  );
}
