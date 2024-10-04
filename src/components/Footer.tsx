import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      {/*========== FOOTER STYLE START ==========*/}
      <div className="bg-black py-3 text-white">
        <div className="max-w-[1570px] mx-auto px-3">
          <div className="border-t border-white border-opacity-10">
            <div className="flex md:justify-between flex-wrap text-dark-5 lg:text-base text-sm gap-2 pt-6 text-center lg:text-start justify-center">
              <p className="order-2 lg:order-1">
                © 2023, Media Challenge Initiative.
              </p>
              <div className="flex flex-wrap items-center order-1 lg:order-2">
                <div className="ml-[15px]">
                  <ul>
                    <li className="mt-5 first:mt-0 flex items-center text-stock-1 hover:text-primary-1 duration-200">
                      <div className="text-primary-1 shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.5917C12.5999 7.15576 11.4358 5.9917 9.9999 5.9917C8.56396 5.9917 7.3999 7.15576 7.3999 8.5917C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z"
                            stroke="#0ea5e9"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <Link
                        href="#"
                        className="leading-1.5 px-4 pl-[10px] lg:text-base text-sm"
                      >
                        4th Floor - Tirupati Mazima Mall Kabalagala,
                        Kampala-Uganda | +256-785-195228 | info@mciug.org
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========== FOOTER STYLE END ==========*/}
    </>
  );
}
