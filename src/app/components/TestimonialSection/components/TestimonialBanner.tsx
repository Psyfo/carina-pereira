import React from 'react';
import { motion } from 'framer-motion';

const TestimonialBanner: React.FC = () => {
  return (
    <div className='absolute top-[15%] md:top-auto md:bottom-[15%] -rotate-6 overflow-hidden w-[110vw] h-[56px] bg-cpOrange border-t border-b border-black flex items-center z-10'>
      <motion.div
        className='flex gap-[5rem] font-tan-ashford font-bold text-white text-[19px] tracking-[0.04em] leading-none lowercase whitespace-nowrap'
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 10, // Adjust duration for speed
          ease: 'linear',
        }}
      >
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span>
        <span>testimonials</span> {/* Add more spans if needed */}
      </motion.div>
    </div>
  );
};

export default TestimonialBanner;
