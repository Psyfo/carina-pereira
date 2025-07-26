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
      className='flex flex-col lg:flex-row md:items-center md:justify-between lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      {/* Left Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='lg:w-[600px] flex flex-col items-start'
      >
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          master make-up from home{' '}
        </h1>

        <h4 className='font-inclusive text-[20px] leading-[1.5] mt-8'>
          Learn makeup in your own time and start booking clients on the side
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          You love makeup and want to master it—but life is busy, and finding
          time for an in-person course just isn’t realistic. That’s why we
          designed the Online Express Makeup Course: a flexible, comprehensive
          program that lets you learn on your own schedule, from anywhere in the
          world. Whether you're a beginner or looking to refine your skills,
          this course gives you everything you need to feel confident and
          capable in makeup artistry.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          In just 6 expertly structured modules, we cut through the overwhelm
          and focus on what really matters. No fluff, no guesswork—just
          practical, easy-to-follow lessons that teach you the fundamentals of
          professional makeup application. By the end of this course, you'll
          have the knowledge, technique, and confidence to create flawless,
          high-quality looks for any occasion.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
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
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Who is this course for?
        </motion.p>
        <motion.ul variants={fadeInUpVariants} className='list-disc pl-[20px]'>
          {' '}
          <li>
            Busy individuals who want a flexible, structured way to learn makeup
          </li>
          <li>Beginners looking to build confidence in their skills</li>
          <li>
            Anyone eager to master professional-quality makeup for personal or
            career growth
          </li>{' '}
        </motion.ul>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] lg:px-[45px] py-[30px] mt-[84px] lg:mt-0'
      >
        <motion.p variants={fadeInUpVariants}>Cost: R4800</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: 2 months Full time & 4 months Part time
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Modules are completed at students' own leisure, and add-on at own
          discretion.
        </motion.p>

        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Certificate & qualification: An internationally recognised certificate
          as well as work experience and assistance in job placements as well as
          the opportunity to assist Carina on brand shoots & weddings to gain
          experience.
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          What you'll get
        </motion.p>
        <motion.ul variants={fadeInUpVariants} className='list-disc pl-[20px]'>
          {' '}
          <li>A premium set of Swiitchbeauty makeup brushes</li>
          <li>A detailed, inclusive makeup training manual</li>
          <li>Hands-on learning with expert mentorship</li>
          <li>Practical techniques you can use immediately</li>{' '}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
