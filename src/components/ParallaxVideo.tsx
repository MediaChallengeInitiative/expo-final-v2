import React from "react";

export default function ParallaxVideo() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="text-center py-8 px-4 lg:py-16">
          <h2 className="text-4xl text-black font-bold mb-4">
            <span className="text-orange-500">WE INVEST IN </span> AFRICA&apos;S
            POTENTIAL
          </h2>
        </div>
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-1">
          <iframe
            className="mx-auto w-full h-96 rounded-lg sm:h-[600px] shadow-xl"
            src="https://www.youtube.com/embed/j4PfKMv_uME?si=ED_zBxp2OZ1DcbCo"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}