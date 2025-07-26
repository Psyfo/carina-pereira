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
            staggerChildren: 0.3, // Stagger the children animations
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
        className='flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[30px]'
      >
        {/* Left Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='w-full flex flex-col gap-[30px]'
        >
          {/* Skincare Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpPink'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              skincare
            </h1>
            <p className='mt-[40px]'>Identifying skin types</p>
            <p className=''>Skincare and skincare steps</p>
            <p className=''>Correct product choice and primers</p>
            <p className=''>Guide to make-up brushes</p>
          </motion.div>

          {/* Back to Basics Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpOrange'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              back to basics
            </h1>
            <p className='mt-[40px]'>
              Application of blush, highlighter, bronzer and contour
            </p>
            <p className=''>Brow shaping</p>
            <p className=''>
              Eye chart and understanding eye colouring and shapes
            </p>
            <p className=''>Winged eyeliner</p>
          </motion.div>

          {/* Make-up Looks Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpPink'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              make-up looks
            </h1>
            <p className='mt-[40px]'>Bridal make-up</p>
            <p className=''>Bridesmaid make-up</p>
            <p className=''>Day wear make-up</p>
            <p className=''>Monochromatic</p>
            <p className=''>Perfect the red lip</p>
            <p className=''>Mature skin make-up</p>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='w-full flex flex-col gap-[30px]'
        >
          {/* Colour Correction Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpOrange'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              colour correction
            </h1>
            <p className='mt-[40px]'>
              Full colour correcting and colour theory
            </p>
            <p className=''>Foundation matching and correct concealing</p>
            <p className=''>Face shapes and how to enhance them</p>
          </motion.div>

          {/* Eye Looks Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpPink'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              eye looks
            </h1>
            <p className='mt-[40px]'>Carbon smokey eye</p>
            <p className=''>Bronzed smokey</p>
            <p className=''>Halo eye</p>
            <p className=''>Cut crease</p>
            <p className=''>Half cut crease</p>
            <p className=''>Winged shaped shadow</p>
          </motion.div>

          {/* Advanced Make-up Card */}
          <motion.div
            variants={fadeInUpVariants}
            className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] bg-cpOrange'
          >
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              advanced make-up
            </h1>
            <p className='mt-[40px]'>Ethnic skin make-up</p>
            <p className=''>False eyelash application</p>
            <p className=''>Male grooming</p>
            <p className=''>Creative (art) make-up</p>
            <p className=''>SFX make-up</p>
            <p className=''>Current make-up trend</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LearningSection;
