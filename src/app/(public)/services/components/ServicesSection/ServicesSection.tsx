import Link from 'next/link';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* eslint-disable react/no-unescaped-entities */

const ServicesSection: React.FC = () => {
  // Intersection observer hook
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  // Animation variants
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className='px-[38px] py-[45px]'>
      {/* Animated Heading */}
      <motion.h1
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        className='font-tan-ashford font-bold text-[19px]'
      >
        carina's services
      </motion.h1>

      {/* Animated Service Items */}
      <motion.div
        className='flex md:flex-row flex-col flex-wrap gap-[40px] md:gap-4 mt-[30px] lg:w-[900px]'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Stagger the children animations
            },
          },
        }}
      >
        {/* Service Items */}
        {[
          'Bridal and bridal party make-up',
          'One-on-One make-up lessons',
          'Occasional make-up',
          'Make-up workshops for parties',
          'Photoshoots/Editorial make-up',
        ].map((service) => (
          <motion.div
            key={service}
            variants={fadeInVariants}
            className='mt-4 md:mt-2 px-[15px] py-[12px] border border-black rounded-full font-inclusive text-[17.75px] text-center leading-[1.5]'
          >
            {service}
          </motion.div>
        ))}

        {/* Animated Button */}
        <motion.div variants={fadeInVariants}>
          <Link href='/#contact'>
            <button className='bg-cpPink hover:bg-cpPink/90 active:bg-cpPink/80 shadow-md hover:shadow-lg active:shadow-sm mt-4 md:mt-2 px-[35px] py-[12px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpPink/30 w-full font-inclusive text-[17.75px] leading-[1.5] hover:scale-105 active:scale-95 transition-all duration-200 ease-out cursor-pointer'>
              book carina
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
