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
      className='relative bg-[url("/images/courses/bridal/hero.jpg")] md:bg-[url("/images/courses/bridal/hero-md.jpg")] bg-cover bg-no-repeat bg-center w-full h-[80vh] md:h-[100vh] hero-section'
    >
      <Link href='/'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src='/images/courses/hero/logo.svg'
            alt='Carina Pereira Logo'
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
        className='bottom-[70px] left-[40px] absolute font-tan-ashford text-[25px] text-white md:text-[47px] lowercase tracking-wider'
      >
        bridal & beauty <br /> artistry course
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
