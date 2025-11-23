'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { isProMakeupPromotionActive } from '@/lib/promotions';

const HeroSection: React.FC = () => {
  const showPromotion = isProMakeupPromotionActive();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className='relative bg-[url("/images/landing/hero/hero.png")] md:bg-[url("/images/landing/hero/hero-md.png")] bg-cover bg-no-repeat bg-center w-full h-[85vh] md:h-[100vh] hero-section'
    >
      <Link href='/'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src='/images/courses/hero/logo.svg'
            alt='Hero Image'
            width={100}
            height={100}
            unoptimized
            className='top-[3rem] left-[1.5rem] absolute w-[190px] lg:w-[284px]'
          />
        </motion.div>
      </Link>

      {showPromotion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='bottom-[70px] left-[40px] absolute drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] font-tan-ashford text-[25px] text-white md:text-[47px] lowercase tracking-wider'
        >
          <div className='inline-block bg-cpMagenta mb-[15px] px-[20px] py-[10px] border-2 border-white rounded-[15px]'>
            <p className='font-inter font-bold text-[14px] md:text-[16px] uppercase tracking-wide'>
              🎉 LIMITED TIME OFFER
            </p>
          </div>
          <p>
            pro make-up course <br />
            <span className='opacity-80 text-[20px] md:text-[35px] line-through uppercase'>
              R 15 000
            </span>{' '}
            <span className='font-bold text-cpPink uppercase'>R 7 500</span>
          </p>
          <p className='mt-[10px] font-inclusive text-[14px] md:text-[18px] normal-case'>
            Save 50% • Until November 30th
          </p>
          <Link href='/courses/pro-makeup'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-cpPink hover:bg-opacity-90 mt-4 mb-[80px] px-[35px] py-[8px] border-2 border-black rounded-full font-inclusive text-[16.5px] text-black leading-[1.5] transition-opacity'
            >
              Enroll Now
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeroSection;
