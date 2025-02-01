import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className='hero-section w-full h-[85vh] md:h-[100vh] bg-[url("/images/landing/hero/hero.png")] md:bg-[url("/images/landing/hero/hero-md.png")] bg-cover bg-no-repeat bg-center'
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
    </motion.div>
  );
};

export default HeroSection;
