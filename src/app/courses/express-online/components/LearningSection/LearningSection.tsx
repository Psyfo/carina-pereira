import React from 'react';
import { Variants, motion } from 'framer-motion';

/* eslint-disable react/no-unescaped-entities */

const LearningSection: React.FC = () => {
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
            staggerChildren: 0.3, // Stagger the children animations
          },
        },
      }}
      className='px-[25px] lg:px-[10%] py-[33px] lg:pb-[90px]'
    >
      {/* Heading */}
      <motion.h1
        variants={fadeInUpVariants}
        className='font-tan-ashford font-bold text-[19px] tracking-wider'
      >
        what you'll learn
      </motion.h1>

      {/* Content Grid */}
      <motion.div
        variants={fadeInUpVariants}
        className='flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[30px]'
      >
        {/* Left Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='w-full flex flex-col gap-[30px]'
        >
          {[
            {
              title: 'Introduction of make-up artistry',
              details: ['Guide to make-up brushes', 'Correct product choice'],
              bgColor: 'bg-cpPink',
            },
            {
              title: 'Understanding skin types, skin care and primers',
              details: [
                'Colour correcting',
                'Brow shaping',
                'Correct concealing',
                'Foundation matching',
              ],
              bgColor: 'bg-cpOrange',
            },
            {
              title: 'Basic full make-up application',
              details: [
                'Bronzing - Brows',
                'Blush application',
                'Highlight placement',
                'Dewy make-up, flawless skin and bronzed glowy eye',
              ],
              bgColor: 'bg-cpPink',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className={`h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] ${item.bgColor}`}
            >
              <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
                {item.title}
              </h1>
              <div className='mt-[40px]'>
                {item.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={fadeInUpVariants}
          className='w-full flex flex-col gap-[30px]'
        >
          {[
            {
              title: 'Make-up transition from day wear to evening',
              details: [
                'Carbon smokey eye',
                'Fuller lips application',
                'Glam make-up, full contour, strong highlight with light shading',
                'False lash application',
              ],
              bgColor: 'bg-cpOrange',
            },
            {
              title: 'Advanced make-up techniques',
              details: [
                'Ethnic skin make-up',
                'False eyelash application',
                'Male grooming',
                'Creative (art) make-up',
                'SFX make-up',
                'Current make-up trends',
              ],
              bgColor: 'bg-cpPink',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className={`h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] ${item.bgColor}`}
            >
              <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
                {item.title}
              </h1>
              <div className='mt-[40px]'>
                {item.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LearningSection;
