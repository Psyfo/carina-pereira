'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const LearningSection: React.FC = () => {
  // Animation variants for fading in upwards
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }} // Trigger at 30% visibility
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2, // Stagger the children animations
          },
        },
      }}
      className='px-[25px] lg:px-[10%] py-[33px] lg:pb-[353px]'
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
        className='flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[30px]'
      >
        {/* Left Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='w-full flex flex-col gap-[30px]'
        >
          {/* Introduction of Make-up Artistry Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[100px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpPink'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              hair texture identification
            </h1>
          </motion.div>

          {/* Understanding Skin Types Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='min-h-[100px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpOrange'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              intermediate curling & waving techniques
            </h1>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='w-full flex flex-col gap-[30px]'
        >
          {/* Basic Full Make-up Application Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[100px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpPink lg:bg-cpOrange'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              basic styling and setting
            </h1>
          </motion.div>

          {/* Make-up Transition Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[100px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpOrange lg:bg-cpPink'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              basic & intermediate up-styling techniques
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LearningSection;
