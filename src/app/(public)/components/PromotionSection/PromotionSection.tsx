'use client';

import Link from 'next/link';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const PromotionSection: React.FC = () => {
  return (
    <section className='lg:flex h-[150vh] lg:h-[100vh]'>
      <div className='bg-[url("/images/landing/promotion/promo.png")] lg:bg-[url("/images/landing/promotion/promo-md.png")] bg-cover bg-center lg:w-[50%] h-[50%] lg:h-[100%]'></div>
      <div className='bg-cpOrange px-[30px] lg:px-[100px] py-[75px] lg:py-[155px] border-black lg:border-l-2 lg:w-[50%] h-[50%] lg:h-[100%]'>
        <div className='mt-auto font-tan-ashford font-bold text-[19px] lg:text-[19px] tracking-wider'>
          why enrol at Carina's International Makeup Academy?
        </div>

        <div className='mt-8 font-inclusive text-[15px] md:text-[15px] leading-[150%]'>
          <ul className='pl-8 list-disc'>
            <li>
              Flexible Learning: Full-time, part-time, or self-paced options to
              suit your schedule.
            </li>
            <li>
              Professional Certification: Earn an internationally recognized
              qualification.
            </li>
            <li>
              Hands-On Experience: Real-world practice through photoshoots and
              live projects.
            </li>
            <li>
              Exclusive Career Opportunities: Access job placements with Carina
              Pereira’s Pro Makeup Artist Agency.{' '}
            </li>
            <li>
              Premium Tools & Support: Receive top-quality brushes, manuals, and
              personalized kit consultations.
            </li>
          </ul>
        </div>

        <Link href='/courses'>
          <button className='inline-block bg-cpPink hover:bg-cpPink/90 active:bg-cpPink/80 shadow-md hover:shadow-lg active:shadow-sm mt-12 mb-[80px] px-[35px] py-[8px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpPink/30 font-inclusive text-[16.5px] leading-[1.5] hover:scale-105 active:scale-95 transition-all duration-200 ease-out cursor-pointer'>
            enroll now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PromotionSection;
