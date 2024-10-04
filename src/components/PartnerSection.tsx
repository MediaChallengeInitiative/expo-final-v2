"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
    { name: 'Sasai Family Foundation', logo: '/images/partner1.png' },
    { name: 'DW Akademie', logo: '/images/partner2.png' },
    { name: 'The Elevate Prize', logo: '/images/partner3.png' },
    { name: 'Africa No Filter', logo: '/images/partner4.png' },
    { name: 'UNESCO IPDC', logo: '/images/partner5.png' },
    { name: 'Ambassade de France en Ouganda', logo: '/images/partner6.png' },
];

const PartnerSection: React.FC = () => {
  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center pb-6 text-black font-bold mb-4">
            <span className="text-orange-500">Expo</span> Partners
          </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          className="partner-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={`${partner.name}-${index}`} className="w-auto">
              <div className="partner-logo-wrapper h-24 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={96}
                  className="max-h-full w-auto object-contain partner-logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection;