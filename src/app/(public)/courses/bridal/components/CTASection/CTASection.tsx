'use client';

import { motion } from 'framer-motion';
import React from 'react';

import CTA from '@/components/CTA/CTA';

const CTASection: React.FC = () => {
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
      <CTA text='Your dream career as a professional makeup artist starts here. Learn the skills needed to confidently begin working in the bridal and beauty industry.' />
    </motion.section>
  );
};

export default CTASection;
