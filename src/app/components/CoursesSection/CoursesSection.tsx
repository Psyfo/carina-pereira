import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const CoursesSection: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row bg-cpCream border-b-2 border-black'>
      {/* Course Video */}
      <div className='w-full h-[734px] bg-[#C4C4C4] lg:hidden'></div>

      {/* Course List */}
      <div className='lg:w-3/5'>
        <div className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px] border-b-2 border-black'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase'>
            pro makeup
          </h1>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'>
            course
          </h1>

          <p className='font-inclusive text-[15px] leading-[1.5]'>
            Why choose this course?
          </p>
          <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
            why choose this course?Gain an internationally-recognized
            certificate, hands-on work experience, and job placement assistance.
            You'll also have the chance to assist Carina on brand shoots and
            weddings.
          </p>

          <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
            explore
          </button>
        </div>

        <div className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px] border-b-2 border-black'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase'>
            express makeup
          </h1>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'>
            course
          </h1>

          <p className='font-inclusive text-[15px] leading-[1.5]'>
            earn an internationally recognized certificate and master the basics
            of makeup artistry.
          </p>
          <p className='font-inclusive text-[15px] leading-[1.5]'>
            why choose this course?
          </p>
          <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
            perfect for beginners or those short on time, this course covers
            essential techniques for matric dances, bridal looks, photo shoots,
            and more. Gain confidence in makeup application with expert
            guidance.
          </p>

          <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
            explore
          </button>
        </div>

        <div className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px]'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase'>
            pro makeup
          </h1>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'>
            course
          </h1>

          <p className='font-inclusive text-[15px] leading-[1.5]'>
            Why choose this course?
          </p>
          <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
            why choose this course?Gain an internationally-recognized
            certificate, hands-on work experience, and job placement assistance.
            You'll also have the chance to assist Carina on brand shoots and
            weddings.
          </p>

          <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
            explore
          </button>
        </div>
      </div>

      {/* Course Video */}
      <div className='w-2/5 bg-[#C4C4C4] hidden lg:block border-l-2 border-black'></div>
    </section>
  );
};

export default CoursesSection;
