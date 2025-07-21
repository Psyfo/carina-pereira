import EnrollmentButton from '../EnrollmentButton/EnrollmentButton';
import React from 'react';
import { Variants, motion } from 'framer-motion';

// CTA.tsx

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface CTAProps {
  link?: string;
  heading?: string;
  text?: string;
  buttonLabel?: string; // ← New optional prop
}

const CTA: React.FC<CTAProps> = ({
  heading = 'ready to take the first step?',
  text = 'Your dream career as a professional makeup artist starts here...',
  buttonLabel, // ← Accept it
}) => {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial='hidden'
      animate='visible'
      className='flex flex-col gap-8 items-center justify-center bg-cpPink rounded-[35px] px-4 py-[60px] lg:py-[70px]'
    >
      <h2 className='font-tan-ashford font-bold text-4'>{heading}</h2>
      <p className='font-inclusive text-[15px] text-center leading-[1.5] w-full max-w-[666px]'>
        {text}
      </p>
      <EnrollmentButton label={buttonLabel} /> {/* ← Pass to button */}
    </motion.div>
  );
};

export default CTA;
