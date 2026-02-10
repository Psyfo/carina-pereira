'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const AboutSection: React.FC = () => {
  // Animation variants for fading in upwards
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
      className='flex lg:flex-row flex-col md:justify-between md:items-center lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      {/* Left Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='flex flex-col items-start lg:w-[600px]'
      >
        <h1 className='font-tan-ashford font-bold text-[19px] lowercase tracking-wider'>
          make-up made easy with Carina
        </h1>

        <h4 className='mt-8 font-inclusive text-[20px] leading-[1.5]'>
          Your All-In-One Masterclass
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          Ready to level up your makeup game once and for all? Whether you're a
          beginner or beauty-obsessed, this is the masterclass you’ve been
          waiting for. Join Carina this Women’s Day for an immersive makeup
          masterclass designed to teach you the essentials.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          From colour correcting to the perfect winged liner, natural day looks,
          sultry night glam, contour and blush, brush basics, and finding your
          flawless foundation match—you’ll walk away with skills you’ll use
          every single day.
        </motion.p>

        <h4 className='mt-8 font-inclusive text-[20px] leading-[1.5]'>
          What You’ll Get with Your Ticket
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          This isn’t just a masterclass—it’s a full beauty experience. Here’s
          what’s included:
        </motion.p>
        <motion.ul
          variants={fadeInUpVariants}
          className='pl-[20px] font-inclusive text-[15px] leading-[1.7] list-disc'
        >
          <li>Tooth gems applied on the day by Gemini Lux</li>
          <li>A Swiitch Beauty goodie bag (trust us, it’s cute)</li>
          <li>Delicious handcrafted pastries from Weirddough</li>
          <li>A voucher from The Piercery to jewel out your ear stack</li>
          <li>A room full of fellow makeup lovers to connect and vibe with</li>
          <li>
            1:1 time with Carina — ask questions, get personal advice, and learn
            her techniques up close
          </li>
        </motion.ul>
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
