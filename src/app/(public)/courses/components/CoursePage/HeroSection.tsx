/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { HeroSectionData } from '@/types/CoursePageProps';

interface Props extends HeroSectionData {}

const HeroSection: React.FC<Props> = ({
  title,
  subtitle,
  imageUrl,
  imageUrlMobile,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className={`relative hero-section w-full h-[80vh] md:h-[100vh] bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage: `
          url('${imageUrlMobile ?? imageUrl}'),
          url('${imageUrl ?? ''}')
        `,
      }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute left-[40px] bottom-[70px] font-tan-ashford text-[25px] md:text-[47px] text-white tracking-wider lowercase'
      >
        {title}
        {subtitle && (
          <>
            <br />
            <span className='text-lg md:text-2xl'>{subtitle}</span>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
