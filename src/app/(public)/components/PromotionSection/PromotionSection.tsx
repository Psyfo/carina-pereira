'use client';

import Link from 'next/link';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const PromotionSection: React.FC = () => {
  return (
    <section className='lg:flex h-[150vh] lg:h-[100vh] promotion-section'>
      <div className='bg-[url("/images/landing/promotion/promo.png")] lg:bg-[url("/images/landing/promotion/promo-md.png")] bg-cover bg-center lg:w-[50%] h-[50%] lg:h-[100%]'></div>
      <div className='bg-cpOrange px-[30px] lg:px-[100px] py-[75px] lg:py-[155px] border-black lg:border-l-2 lg:w-[50%] h-[50%] lg:h-[100%]'>
        <div className='mt-auto font-tan-ashford font-bold text-[19px] lg:text-[25px] lowercase tracking-wider'>
          celebrate valentine's day with Carina 💝
        </div>

        <div className='mt-8 font-inclusive text-[15px] md:text-[15px] leading-[150%]'>
          <p className='mb-4'>
            Join us for an intimate makeup masterclass on Saturday, 21st
            February 2026. Limited seats available!
          </p>
          <ul className='pl-8 list-disc'>
            <li>💄 Curated Make-Up Goodie Bags featuring Silki products</li>
            <li>🍰 Sweet Treats & Refreshments to indulge in</li>
            <li>🛍 Exclusive access to new designs from The Shopaholic</li>
            <li>💬 Personalized 1:1 time with Carina</li>
            <li>
              ✨ Learn professional makeup techniques in a beautiful setting
            </li>
          </ul>
          <p className='mt-4 font-bold'>
            Only R600 per person. Book your spot now!
          </p>
        </div>

        <Link href='/courses/masterclass'>
          <button className='inline-block bg-cpPink hover:bg-cpPink/90 active:bg-cpPink/80 shadow-md hover:shadow-lg active:shadow-sm mt-12 mb-[80px] px-[35px] py-[8px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpPink/30 font-inclusive text-[16.5px] leading-[1.5] hover:scale-105 active:scale-95 transition-all duration-200 ease-out cursor-pointer'>
            book now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PromotionSection;
