'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='bottom-[100px] md:bottom-[120px] left-[40px] absolute'
      >
        <div className='mb-[20px] font-tan-ashford text-[25px] text-white md:text-[47px] lowercase tracking-wider'>
          valentine&apos;s day <br /> makeup masterclass
        </div>
        <Link href='/courses/masterclass'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-cpPink hover:bg-cpPink/90 shadow-md hover:shadow-lg px-[35px] py-[10px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'
          >
            Book Now
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
