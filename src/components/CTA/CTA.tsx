import { motion, Variants } from 'framer-motion';
import React from 'react';

import EnrollmentButton from '../EnrollmentButton/EnrollmentButton';

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface CTAProps {
  link?: string;
  heading?: string;
  text?: string;
  buttonLabel?: string;
}

const CTA: React.FC<CTAProps> = ({
  heading = 'ready to take the first step?',
  text = 'Your dream career as a professional makeup artist starts here...',
  buttonLabel,
}) => {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial='hidden'
      animate='visible'
      className='flex flex-col justify-center items-center gap-8 bg-cpPink px-4 py-[60px] lg:py-[70px] rounded-[35px]'
    >
      <h2 className='font-tan-ashford font-bold text-4'>{heading}</h2>
      <p className='w-full max-w-[666px] font-inclusive text-[15px] text-center leading-[1.5]'>
        {text}
      </p>
      <EnrollmentButton label={buttonLabel} />
    </motion.div>
  );
};

export default CTA;
