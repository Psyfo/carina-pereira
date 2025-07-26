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
          fast-track your make-up career with our express course
        </h1>

        <h4 className='font-inclusive text-[20px] leading-[1.5] mt-8'>
          New to Makeup? Build Your Skills & Confidence in Just 6 Sessions!
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          Everyone starts somewhere—but navigating the world of makeup can feel
          overwhelming. With thousands of products, endless techniques, and
          ever-changing trends, where do you even begin? Whether you’ve
          struggled with blending your foundation, shaping the perfect brow, or
          creating a seamless eye look, this course is here to simplify it all.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          In just 6 carefully structured sessions, we cut through the noise and
          teach you the fundamentals that matter most. No fluff, no unnecessary
          theory—just hands-on, practical training designed to give you
          confidence in your skills. By the end of this course, you won’t just
          know the basics; you’ll have the knowledge and technique to create
          polished, professional-quality makeup looks for any occasion.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          Why Learn From Us <br /> This isn’t just another makeup course—it’s a
          launchpad for your career. Your mentor, Carina Pereira, has trained
          with industry-leading brands and built a name for herself at MAC
          Cosmetics, working on fashion weeks, music videos, and high-profile
          celebrity shoots. As an elite artist on MAC’s events team, she honed
          not only her makeup skills but also her ability to teach and shape the
          next generation of makeup professionals. Her passion for education led
          her to establish this course, ensuring aspiring artists like you
          receive top-tier training, insider techniques, and hands-on experience
          in real industry settings.
        </motion.p>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] mt-[84px] lg:mt-0'
      >
        <motion.p variants={fadeInUpVariants}>Cost: R5500</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: 6 modules, done in-person.
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Available in consecutive sessions or once a week for part time
          learners.
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
