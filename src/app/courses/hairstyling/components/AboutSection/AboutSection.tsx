import React from "react";
import { Variants, motion } from "framer-motion";

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
          learn to style like a pro in a few weeks
        </h1>

        <h4 className='font-inclusive text-[20px] leading-[1.5] mt-8'>
          No More YouTube Fails. Just Real, Usable Techniques.
        </h4>

        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          Struggling to curl your hair without looking like you got caught in a
          wind tunnel? Frustrated that your updos never last past the first
          hour? We get it—hairstyling can feel like a magic trick only
          professionals know how to pull off. But here’s the secret: it’s all
          about technique, and we’re here to teach you every step of the way.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          This course is designed for anyone who wants to take the guesswork out
          of hairstyling. Whether you're a total beginner tired of
          trial-and-error or a makeup artist looking to add hairstyling to your
          skillset, these lessons will give you the confidence to create
          polished, professional styles with ease. We strip away the complicated
          techniques and break hairstyling down into practical, repeatable steps
          that actually work.
        </motion.p>

        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Who is this course for?
        </motion.p>
        <motion.ul variants={fadeInUpVariants} className='list-disc pl-[20px]'>
          {' '}
          <li>Beginners who want to style hair with confidence</li>
          <li>Makeup artists looking to offer hairstyling services</li>
          <li>
            Anyone tired of struggling with bad hair days and YouTube tutorials
            that don’t work
          </li>{' '}
        </motion.ul>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] lg:px-[45px] py-[30px] mt-[84px] lg:mt-0'
      >
        <motion.p variants={fadeInUpVariants}>Cost: R3000</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: <br />4 Modules once a week
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          A comprehensive course giving you the inside tips of industry relevant
          hairstyling techniques so you can be an all-in-one artist who can
          offer hairstyling as well.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
