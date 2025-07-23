'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OfferingsSection: React.FC = () => {
  return (
    <section className='py-[75px] flex flex-col items-center border-b-2 border-black'>
      <motion.h1
        className='font-tan-ashford font-bold text-[19px] lowercase mb-[100px]'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
      >
        what we offer
      </motion.h1>

      <motion.div
        className='lg:w-full flex flex-col lg:flex-row gap-[60px] lg:justify-around'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% is in view
      >
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center gap-[20px]'
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% is in view
          >
            <div className='flex items-center justify-center w-[150px] lg:h-[150px]'>
              <Image
                src={`/images/landing/offerings/offering${index + 1}.png`}
                alt={`Offering ${index + 1}`}
                width={150}
                height={150}
                className='h-auto w-full'
              />
            </div>
            <p className='flex items-center justify-center font-tan-ashford font-bold text-[16px] text-center tracking-wider lowercase'>
              {index === 0 && (
                <>
                  make-up kit
                  <br /> to use during
                  <br /> the course
                </>
              )}
              {index === 1 && (
                <>
                  your own
                  <br /> professional
                  <br /> brush set
                </>
              )}
              {index === 2 && (
                <>
                  professional
                  <br /> photoshoot
                </>
              )}
              {index === 3 && (
                <>
                  flexible payment
                  <br /> plans
                </>
              )}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OfferingsSection;
