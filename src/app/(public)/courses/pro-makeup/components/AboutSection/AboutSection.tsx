'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';
import PromotionalPrice from '@/components/PromotionalPrice/PromotionalPrice';

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
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          turn your passion into a thriving make-up career
        </h1>

        <h4 className='mt-8 font-inclusive text-[20px] leading-[1.5]'>
          From Beginner to Fully-Booked: The Path to Becoming a Recognised
          Makeup Artist
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          You have the talent and the passion for makeup, but you don’t know
          where to start. You dream of seeing your name recognized in the
          industry, of building a client base that keeps you fully booked, but
          without the right training, credentials, and connections, it feels
          overwhelming. That’s where this course comes in.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          We provide the skills, mentorship, and hands-on experience you need to
          transform your passion into a profitable career. Whether you want to
          master bridal makeup, fashion editorials, or celebrity styling, this
          is the gold-standard course to get you there. With an internationally
          recognised certification, real-world industry exposure, and expert-led
          training, you’ll be fully equipped to make your mark in the world of
          professional makeup artistry.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          Why learn from us? <br />
          This isn’t just another makeup course—it’s a launchpad for your
          career. Your mentor, Carina Pereira, has trained with industry-leading
          brands and built a name for herself at MAC Cosmetics, working on
          fashion weeks, music videos, and high-profile celebrity shoots. As an
          elite artist on MAC’s events team, she honed not only her makeup
          skills but also her ability to teach and shape the next generation of
          makeup professionals. Her passion for education led her to establish
          this course, ensuring aspiring artists like you receive top-tier
          training, insider techniques, and hands-on experience in real industry
          settings.
        </motion.p>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto mt-[84px] lg:mt-0 px-[20px] lg:px-[45px] py-[30px] border border-black rounded-2xl lg:w-[450px] font-inclusive text-[15px] leading-[1.5]'
      >
        <motion.p variants={fadeInUpVariants}>
          <PromotionalPrice priceSize='text-[15px]' />
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: 2 months Full time & 4 months Part time
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Full time course: Tuesday to Friday 10:00am - 13:00pm
        </motion.p>
        <motion.p variants={fadeInUpVariants}>
          Part time course: Tuesday evenings 18:00pm - 21:00pm
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Certificate & qualification: An internationally recognized certificate
          as well as work experience and assistance in job placements as well as
          the opportunity to assist Carina on brand shoots & weddings to gain
          experience.
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          What you'll get
        </motion.p>
        <motion.ul variants={fadeInUpVariants} className='pl-[20px] list-disc'>
          {' '}
          <li>A premium set of Swiitchbeauty makeup brushes</li>
          <li>A customized tote bag</li>
          <li>A professional-grade make-up training manual</li>
          <li>
            A detailed, hands-on learning experience with expert mentorship
          </li>
          <li>The opportunity to assist Carina on brand shoots and weddings</li>{' '}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
