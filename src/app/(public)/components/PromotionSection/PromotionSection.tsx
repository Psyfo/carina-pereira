'use client';

import Link from 'next/link';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const PromotionSection: React.FC = () => {
  return (
    <section className='h-[150vh] lg:h-[100vh] lg:flex'>
      <div className='h-[50%] lg:h-[100%] lg:w-[50%] bg-[url("/images/landing/promotion/promo.png")] lg:bg-[url("/images/landing/promotion/promo-md.png")] bg-center bg-cover'></div>
      <div className='h-[50%] lg:h-[100%] lg:w-[50%] bg-cpOrange px-[30px] lg:px-[100px] py-[75px] lg:py-[155px] lg:border-l-2 border-black'>
        <div className='font-tan-ashford font-bold text-[19px] lg:text-[19px] tracking-wider mt-auto'>
          why enrol at Carina's International Makeup Academy?
        </div>

        <div className='font-inclusive text-[15px] md:text-[15px] leading-[150%] mt-8'>
          <ul className='list-disc pl-8'>
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
          <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mb-[80px] border border-black rounded-full mt-12'>
            enroll now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PromotionSection;
