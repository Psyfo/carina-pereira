'use client';
import Image from 'next/image';
import React from 'react';
import TestimonialBanner from './components/TestimonialBanner';

/* eslint-disable react/no-unescaped-entities */

const TestimonialSection: React.FC = () => {
  return (
    <section className='relative flex flex-col items-center justify-center py-[64px] px-[25px] lg:px-[80px] overflow-hidden'>
      <TestimonialBanner />

      <div className='flex flex-col bg-white items-center justify-center lg:justify-around mx-[25px] w-full px-[2rem] py-[180px] md:pt-8 md:pb-[100px] border border-black'>
        <div className='w-[101px]'>
          <Image
            src='/images/testimonials/clover.png'
            alt='Achievement Image'
            width={500}
            height={300}
            className='w-full'
          />
        </div>

        <div className='flex flex-col items-center mt-4'>
          <p className='font-inclusive text-[15px] text-center'>
            Ashleigh Noble
          </p>
        </div>

        <div className='flex flex-col items-center mt-4'>
          <p className='w-[304px] md:w-[627px] font-inclusive text-[15px] text-center'>
            I attended one of their workshops and absolutely loved every minute
            of it. It's such a beautiful and intimate space and makes you feel
            right at home. I learnt so much in a matter of hours and it really
            helped me. I would definitely recommend !! easily one of the best
            workshops I've attended
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
