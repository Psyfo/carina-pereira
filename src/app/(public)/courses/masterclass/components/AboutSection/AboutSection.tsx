'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

const AboutSection: React.FC = () => {
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
      className='flex lg:flex-row flex-col md:justify-between md:items-center lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      {/* Left Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='flex flex-col items-start lg:w-[600px]'
      >
        <h1 className='font-tan-ashford font-bold text-[19px] lowercase tracking-wider'>
          valentine&apos;s day makeup masterclass
        </h1>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          Join me for an intimate Valentine&apos;s Day makeup masterclass
          designed to inspire, elevate, and treat you.
        </motion.p>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          Perfect for beauty lovers, makeup artists, or anyone wanting to refine
          their skills.
        </motion.p>

        <h4 className='mt-10 font-inclusive font-bold text-[20px] leading-[1.5]'>
          What&apos;s Included
        </h4>

        <motion.div
          variants={fadeInUpVariants}
          className='space-y-6 mt-6 font-inclusive text-[15px] leading-[1.5]'
        >
          <div>
            <p className='font-bold'>💄 Curated Make-Up Goodie Bags</p>
            <p className='mt-1'>
              Take home a selection of beauty must-haves — including a special
              Silki surprise to continue the experience long after the class.
            </p>
          </div>

          <div>
            <p className='font-bold'>🍰 Sweet Treats &amp; Refreshments</p>
            <p className='mt-1'>
              Enjoy a selection of delicious sweet treats and refreshments to
              indulge in throughout the session.
            </p>
          </div>

          <div>
            <p className='font-bold'>
              🛍 Shop New Designs from The Shopaholic
            </p>
            <p className='mt-1'>
              Be the first to browse and shop exclusive new pieces available on
              the day.
            </p>
          </div>

          <div>
            <p className='font-bold'>
              💬 1:1 Time With Me — Up Close &amp; Personal
            </p>
            <p className='mt-1'>
              Ask questions, get tailored advice, and learn my professional
              techniques in an intimate setting where nothing is off limits.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto mt-[84px] lg:mt-0 px-[20px] lg:px-[45px] py-[30px] border border-black rounded-2xl lg:w-[450px] font-inclusive text-[15px] leading-[1.5]'
      >
        <motion.p variants={fadeInUpVariants}>Cost: R600 pp</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Date: <br />
          Saturday 21st February 2026
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration: <br />
          1pm - 4pm
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Location: <br />
          13 Drama St, Somerset West, Cape Town, 7130
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
