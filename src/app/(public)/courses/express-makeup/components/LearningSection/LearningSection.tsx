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
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className='px-[25px] lg:px-[10%] py-[33px] lg:pb-[353px]'
    >
      <motion.h1
        variants={fadeInUpVariants}
        className='font-tan-ashford font-bold text-[19px] tracking-wider'
      >
        what you'll learn
      </motion.h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[30px]'>
        <div className='w-full flex flex-col gap-[30px]'>
          {[
            {
              title: 'Introduction of make-up artistry',
              bg: 'bg-cpPink',
              points: ['Guide to make-up brushes', 'Correct product choice'],
            },
            {
              title: 'understanding skin types, skin care and primers',
              bg: 'bg-cpOrange',
              points: [
                'Colour correcting',
                'Brow shaping',
                'Correct concealing',
                'Foundation matching',
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className={`h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] ${item.bg}`}
            >
              <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
                {item.title}
              </h1>
              <div className='mt-[40px]'>
                {item.points.map((point, idx) => (
                  <p key={idx}>{point}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className='w-full flex flex-col gap-[30px]'>
          {[
            {
              title: 'basic full make-up application',
              bg: 'bg-cpPink lg:bg-cpOrange',
              points: [
                'Bronzing - Brows',
                'Blush application',
                'Highlight placement',
                'Dewy make-up, flawless skin and bronzed glowy eye',
              ],
            },
            {
              title: 'make-up transition from day wear to evening',
              bg: 'bg-cpOrange lg:bg-cpPink',
              points: [
                'Carbon smokey eye',
                'Fuller lips application',
                'Glam make-up, full contour, strong highlight with light shading',
                'False lash application',
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className={`h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] ${item.bg}`}
            >
              <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
                {item.title}
              </h1>
              <div className='mt-[40px]'>
                {item.points.map((point, idx) => (
                  <p key={idx}>{point}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LearningSection;
