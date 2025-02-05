import Link from "next/link";
import React from "react";
import { Variants, motion } from "framer-motion";

// Animation variants for fading in upwards
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface CTAProps {
  link: string;
}

const CTA: React.FC<CTAProps> = ({ link }) => {
  return (
    <motion.div
      variants={fadeInUpVariants}
      className='flex flex-col gap-8 items-center justify-center bg-cpPink rounded-[35px] px-4 py-[60px] lg:py-[70px]'
    >
      <h2 className='font-tan-ashford font-bold text-4'>
        ready to take the first step?
      </h2>
      <p className='font-inclusive text-[15px] text-center leading-[1.5] w-full max-w-[666px]'>
        Your dream career as a professional makeup artist starts here. Enroll
        now and gain the skills, confidence, and industry connections to thrive
        in this exciting field.
      </p>
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
          enroll now
        </button>
      </Link>
    </motion.div>
  );
};

export default CTA;
