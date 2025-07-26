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
      className='relative hero-section w-full h-[85vh] md:h-[100vh] bg-[url("/images/landing/hero/hero.png")] md:bg-[url("/images/landing/hero/hero-md.png")] bg-cover bg-no-repeat bg-center'
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
            className='w-[190px] lg:w-[284px] absolute top-[3rem] left-[1.5rem]'
          />
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and move up to original position
        transition={{ duration: 1, delay: 1 }} // Animation duration with a delay
        className='absolute left-[40px] bottom-[70px] font-tan-ashford text-[25px] md:text-[47px] text-white tracking-wider lowercase'
      >
        <p>
          women&apos;s day <br /> make-up masterclass
        </p>
        <motion.button
          onClick={() => (window.location.href = '/courses/masterclass')}
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and move up to original position
          transition={{ duration: 1, delay: 1 }} // Animation duration with a delay
          className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mb-[80px] border border-black rounded-full mt-4 text-black'
        >
          Book Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
