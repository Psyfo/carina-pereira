import CTA from '@/components/CTA/CTA';
import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
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
      className='px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      <CTA
        link='https://academy.carinapereira.com/product/pro-makeup-course/'
        heading='ready to celebrate women’s day?'
        text='Limited seats available. Get your tickets now.'
        buttonLabel='book now' // Pass the label to the button
      />
    </motion.section>
  );
};

export default CTASection;
