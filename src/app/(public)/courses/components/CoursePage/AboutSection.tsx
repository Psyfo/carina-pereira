/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

import { AboutSectionData } from '@/types/CoursePageProps';

interface Props extends AboutSectionData {}

const AboutSection: React.FC<Props> = ({
  heading,
  subheading,
  description,
  targets,
  cost,
  details,
  perks,
}) => {
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
      className='flex flex-col lg:flex-row md:items-center md:justify-between lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      {/* Left Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='lg:w-[600px] flex flex-col items-start'
      >
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider lowercase'>
          {heading}
        </h1>

        {subheading && (
          <h4 className='font-inclusive text-[20px] leading-[1.5] mt-8'>
            {subheading}
          </h4>
        )}

        {description &&
          description.map((desc, idx) => (
            <motion.p
              key={idx}
              variants={fadeInUpVariants}
              className='font-inclusive text-[15px] leading-[1.5] mt-8'
            >
              {desc}
            </motion.p>
          ))}

        {targets && targets.length > 0 && (
          <motion.ul
            variants={fadeInUpVariants}
            className='list-disc pl-[20px] mt-8'
          >
            {targets.map((target, idx) => (
              <li key={idx}>{target}</li>
            ))}
          </motion.ul>
        )}
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] mt-[84px] lg:mt-0'
      >
        <motion.p variants={fadeInUpVariants}>Cost: {cost}</motion.p>
        {details &&
          details.map((detail, idx) => (
            <motion.p key={idx} variants={fadeInUpVariants} className='mt-8'>
              {detail}
            </motion.p>
          ))}
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          What you&apos;ll get
        </motion.p>
        <motion.ul variants={fadeInUpVariants} className='list-disc pl-[20px]'>
          {perks.map((perk, idx) => (
            <li key={idx}>{perk}</li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
