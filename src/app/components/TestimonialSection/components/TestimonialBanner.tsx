import React from 'react';
import { motion } from 'framer-motion';

const TestimonialBanner: React.FC = () => {
  return (
    <div className='absolute top-[15%] md:top-auto md:bottom-[15%] -rotate-6 overflow-hidden w-[110vw] h-[56px] bg-cpOrange border-t border-b border-black flex items-center z-10'>
      <motion.div
        className='flex gap-[5rem] font-tan-ashford font-bold text-white text-[19px] tracking-[0.04em] leading-none lowercase whitespace-nowrap'
        animate={{ x: ['0%', '-90%'] }} // Animate from 0% to -100%
        transition={{
          repeat: Infinity,
          duration: 10, // Adjust duration for speed
          ease: 'linear',
        }}
      >
        {/* Duplicate the content to create a seamless loop */}
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
      </motion.div>
    </div>
  );
};

export default TestimonialBanner;
