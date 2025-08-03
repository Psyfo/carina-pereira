/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

import { LearningSectionData } from '@/types/CourseData';

interface Props extends LearningSectionData {}

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LearningSection: React.FC<Props> = ({ block }) => {
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
        what you&apos;ll learn
      </motion.h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[30px]'>
        <div className='w-full flex flex-col gap-[30px]'>
          {block.slice(0, 3).map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUpVariants}
              className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px]'
              style={{ backgroundColor: item.bgColour }}
            >
              <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
                {item.heading}
              </h1>
              <div className='mt-[40px]'>
                {item.items.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className='w-full flex flex-col gap-[30px]'>
          {block.slice(3, 6).map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUpVariants}
              className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px]'
              style={{ backgroundColor: item.bgColour }}
            >
              <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
                {item.heading}
              </h1>
              <div className='mt-[40px]'>
                {item.items.map((point, i) => (
                  <p key={i}>{point}</p>
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
