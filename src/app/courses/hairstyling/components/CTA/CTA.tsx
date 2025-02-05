import Link from "next/link";
import React from "react";
import { Variants, motion } from "framer-motion";

// Animation variants for fading in upwards
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const CTA: React.FC = () => {
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
      className='px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      <motion.div
        variants={fadeInUpVariants}
        className='flex flex-col gap-8 items-center justify-center bg-cpPink rounded-[35px] px-4 py-[60px] lg:py-[70px]'
      >
        <h2 className='font-tan-ashford font-bold text-4]'>
          ready to take the first step?
        </h2>
        <p className='font-inclusive text-[15px] text-center leading-[1.5] w-full max-w-[666px]'>
          Your dream career as a professional makeup artist starts here. Enrol
          now and gain the skills, confidence, and industry connections to
          thrive in this exciting field.
        </p>
        <Link
          href='https://academy.carinapereira.com/product/hairstyling-course/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
            enroll now
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
