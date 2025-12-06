'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Fade in and move up to original position
      transition={{ duration: 1.5 }} // Animation duration
      className='relative hero-section w-full h-[80vh] md:h-[100vh] bg-[url("/images/services/hero/hero.png")] md:bg-[url("/images/services/hero/hero-md.png")] bg-cover bg-no-repeat bg-center'
    >
      <Link href='/'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start slightly smaller and invisible
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
          transition={{ duration: 1, delay: 0.5 }} // Animation duration with a slight delay
        >
          <Image
            src='/images/courses/hero/logo.png'
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
        services
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
