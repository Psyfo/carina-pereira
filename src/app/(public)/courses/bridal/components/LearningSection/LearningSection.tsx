'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const LearningSection: React.FC = () => {
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      className='px-[25px] lg:px-[10%] py-[33px] lg:pb-[90px]'
    >
      {/* Heading */}
      <motion.h1
        variants={fadeInUpVariants}
        className='font-tan-ashford font-bold text-[19px] tracking-wider'
      >
        what you'll learn
      </motion.h1>

      {/* Content Grid */}
      <motion.div
        variants={fadeInUpVariants}
        className='flex lg:flex-row flex-col justify-center items-center gap-[30px] mt-[30px]'
      >
        {/* Left Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='flex flex-col gap-[30px] w-full'
        >
          {/* Skincare & Skin Preparation Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='bg-cpPink px-[20px] py-[30px] border border-black rounded-2xl h-[290px] font-inclusive text-[15px] leading-[1.5]'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              skincare & skin preparation
            </h1>
            <p className='mt-[40px]'>Identifying different skin types</p>
            <p>Professional skincare preparation</p>
            <p>Correct product and primer selection</p>
            <p>Guide to makeup brushes and tools</p>
          </motion.div>

          {/* Bridal & Beauty Techniques Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='bg-cpOrange px-[20px] py-[30px] border border-black rounded-2xl h-[290px] font-inclusive text-[15px] leading-[1.5]'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              bridal & beauty techniques
            </h1>
            <p className='mt-[40px]'>
              Application of blush, bronzer, highlight and contour
            </p>
            <p>Professional brow shaping</p>
            <p>Understanding eye shapes and colour theory</p>
            <p>Perfecting eyeliner techniques</p>
          </motion.div>

          {/* Makeup Looks Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='bg-cpPink px-[20px] py-[30px] border border-black rounded-2xl h-[290px] font-inclusive text-[15px] leading-[1.5]'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              makeup looks
            </h1>
            <p className='mt-[40px]'>Bridal makeup</p>
            <p>Bridesmaid makeup</p>
            <p>Day-to-night glam</p>
            <p>Monochromatic makeup</p>
            <p>Perfecting the red lip</p>
            <p>Mature skin makeup</p>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='flex flex-col gap-[30px] w-full'
        >
          {/* Colour Correction & Complexion Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='bg-cpOrange px-[20px] py-[30px] border border-black rounded-2xl h-[290px] font-inclusive text-[15px] leading-[1.5]'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              colour correction & complexion
            </h1>
            <p className='mt-[40px]'>Full colour correcting techniques</p>
            <p>Foundation matching for different skin tones</p>
            <p>Correct concealing and brightening</p>
            <p>Understanding face shapes and enhancing features</p>
          </motion.div>

          {/* Eye Techniques Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='bg-cpPink px-[20px] py-[30px] border border-black rounded-2xl h-[290px] font-inclusive text-[15px] leading-[1.5]'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              eye techniques
            </h1>
            <p className='mt-[40px]'>Bronzed smokey eye</p>
            <p>Halo eye</p>
            <p>Soft glam bridal eye</p>
            <p>Cut crease techniques</p>
            <p>Half cut crease</p>
            <p>Winged eyeshadow techniques</p>
          </motion.div>

          {/* What Makes This Course Different Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='bg-cpOrange px-[20px] py-[30px] border border-black rounded-2xl h-[290px] font-inclusive text-[15px] leading-[1.5]'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              what makes this course different
            </h1>
            <p className='mt-[40px]'>
              Limited course intake, offered only a few times per year
            </p>
            <p>Small class sizes for personalised mentorship</p>
            <p>Hands-on practical learning throughout</p>
            <p>Industry insights from Carina Pereira</p>
            <p>Portfolio-ready looks to help start your career</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LearningSection;
