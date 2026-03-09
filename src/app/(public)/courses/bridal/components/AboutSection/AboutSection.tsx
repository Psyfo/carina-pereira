'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

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
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          turn your passion for makeup into a career in bridal & beauty
        </h1>

        <h4 className='mt-8 font-inclusive text-[20px] leading-[1.5]'>
          Master the art of creating flawless, long-lasting bridal and event
          makeup while gaining the skills needed to confidently begin working as
          a professional makeup artist.
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          This intensive 1-month course is designed for aspiring artists who
          want to specialise in bridal and beauty makeup without committing to a
          longer program.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          You will learn modern bridal techniques, advanced skin preparation,
          colour correction, and camera-ready makeup while gaining hands-on
          experience in a professional training environment.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          By the end of the course, students will have the confidence, skills,
          and knowledge needed to start taking bridal and event bookings.
        </motion.p>

        <motion.p
          variants={fadeInUpVariants}
          className='mt-8 font-inclusive text-[15px] leading-[1.5]'
        >
          Why learn from us? <br />
          This isn't just another makeup course — it's a launchpad into the
          bridal and beauty industry. Your mentor, Carina Pereira, has trained
          with industry-leading brands and built her career working with MAC
          Cosmetics, fashion shows, brand campaigns, weddings, and high-profile
          events. With years of professional experience, Carina brings real
          industry knowledge, insider techniques, and hands-on mentorship to
          help aspiring artists build their confidence and develop
          professional-level makeup skills. Students receive personalized
          guidance and practical training in a supportive learning environment
          designed to help them succeed in the makeup industry.
        </motion.p>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto mt-[84px] lg:mt-0 px-[20px] lg:px-[45px] py-[30px] border border-black rounded-2xl lg:w-[450px] font-inclusive text-[15px] leading-[1.5]'
      >
        <motion.p variants={fadeInUpVariants}>Cost: R9 500</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: 1 month Full time
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Full time course: Tuesday to Friday 10:00am – 13:00pm
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Certificate & qualification: An internationally recognized certificate
          confirming completion of professional training in bridal and beauty
          makeup artistry. Students will gain hands-on experience, expert
          mentorship, and industry techniques to confidently begin working with
          clients in the bridal and beauty industry.
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          What you'll get
        </motion.p>
        <motion.ul variants={fadeInUpVariants} className='pl-[20px] list-disc'>
          <li>A professional-grade makeup training manual</li>
          <li>Hands-on practical training and expert mentorship</li>
          <li>Industry techniques used by professional makeup artists</li>
          <li>Portfolio-building makeup looks</li>
          <li>Guidance on working with bridal clients</li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
