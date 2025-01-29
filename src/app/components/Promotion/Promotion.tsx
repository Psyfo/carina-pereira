import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const Promotion: React.FC = () => {
  return (
    <section className='h-[150vh] md:h-[100vh] md:flex'>
      <div className='h-[50%] md:h-[100%] md:w-[50%] bg-[url("/images/promotion/promo.png")] md:bg-[url("/images/promotion/promo-md.png")] bg-center bg-cover'></div>
      <div className='h-[50%] md:h-[100%] md:w-[50%] bg-cpOrange px-[30px] md:px-[100px] py-[75px] md:py-[155px] md:border-l-2 border-black'>
        <div className='font-tan-ashford font-bold text-[19px] md:text-[35px] tracking-wider mt-auto'>
          why enrol at Carina's International Makeup Academy?
        </div>

        <div className='font-inclusive text-[15px] md:text-[20px] leading-[150%] mt-8'>
          <ul className='list-disc pl-8'>
            <li>
              Flexible Learning: Full-time, part-time, or self-paced options to
              suit your schedule.
            </li>
            <li>
              Professional Certification: Earn an internationally recognized
              qualification.
            </li>
            <li>
              Hands-On Experience: Real-world practice through photoshoots and
              live projects.
            </li>
            <li>
              Exclusive Career Opportunities: Access job placements with Carina
              Pereira’s Pro Makeup Artist Agency.{' '}
            </li>
            <li>
              Premium Tools & Support: Receive top-quality brushes, manuals, and
              personalized kit consultations.
            </li>
          </ul>
        </div>

        <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mb-[80px] border border-black rounded-full mt-12'>
          enroll now
        </button>
      </div>
    </section>
  );
};

export default Promotion;
