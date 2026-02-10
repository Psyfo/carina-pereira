'use client';

import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';

import ValentinesDayFormModal from '@/components/ValentinesDayFormModal/ValentinesDayFormModal';

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CTASection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <motion.div
          variants={fadeInUpVariants}
          className='flex flex-col justify-center items-center gap-8 bg-cpPink px-4 py-[60px] lg:py-[70px] rounded-[35px]'
        >
          <h2 className='font-tan-ashford font-bold text-4'>
            ready to book your spot?
          </h2>
          <p className='w-full max-w-[666px] font-inclusive text-[15px] text-center leading-[1.5]'>
            Limited seats available. Secure your spot for this Valentine&apos;s
            Day experience.
          </p>
          <button
            onClick={() => setOpen(true)}
            className='inline-block bg-cpPink hover:bg-cpPink/90 active:bg-cpPink/80 shadow-md hover:shadow-lg active:shadow-sm px-[35px] py-[8px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpPink/30 font-inclusive text-[16.5px] leading-[1.5] hover:scale-105 active:scale-95 transition-all duration-200 ease-out cursor-pointer'
          >
            book now
          </button>
        </motion.div>
      </motion.section>
      <ValentinesDayFormModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CTASection;
