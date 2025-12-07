/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import { motion } from 'framer-motion';
import React from 'react';

import CTA from '@/components/CTA/CTA';
import { CTASectionData } from '@/types/CoursePageProps';

interface Props extends CTASectionData {}

const CTASection: React.FC<Props> = ({ link, heading, text, buttonLabel }) => {
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
      className='px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      <CTA
        link={link ?? '#'}
        heading={heading}
        text={text}
        buttonLabel={buttonLabel}
      />
    </motion.section>
  );
};

export default CTASection;
