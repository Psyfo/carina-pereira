import Link from 'next/link';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const ServicesSection: React.FC = () => {
  return (
    <section className='px-[38px] py-[45px]'>
      <h1 className='font-tan-ashford font-bold text-[19px]'>
        carina's services
      </h1>

      <div className='flex flex-col md:flex-row flex-wrap gap-[40px] md:gap-4 mt-[30px] lg:w-[900px]'>
        <div className='text-center font-inclusive text-[17.75px] leading-[1.5] px-[15px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
          Bridal and bridal party make-up
        </div>
        <div className='text-center font-inclusive text-[17.75px] leading-[1.5] px-[15px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
          One-one-One make-up lessons
        </div>
        <div className='text-center font-inclusive text-[17.75px] leading-[1.5] px-[15px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
          Occasional make-up
        </div>
        <div className='text-center font-inclusive text-[17.75px] leading-[1.5] px-[15px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
          Make-up workshops for parties
        </div>
        <div className='text-center font-inclusive text-[17.75px] leading-[1.5] px-[15px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
          Photoshoots/Editorial make-up
        </div>
        <Link href='#'>
          <button className='w-full bg-cpPink font-inclusive text-[17.75px] leading-[1.5] px-[35px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
            book carina
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
