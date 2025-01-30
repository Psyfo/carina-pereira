import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const AboutSection: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row md:items-center md:justify-between lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'>
      <div className='lg:w-[600px] flex flex-col items-start'>
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          about this course:
        </h1>

        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          This course is the gold-standard if becoming a professional make-up
          artist is the end goal. All techniques and insider secrets are exposed
          and taught in detail.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          Each student will be provided with a set of Swiitchbeauty makeup
          brushes, a customized tote bag, a notebook, and a detailed, inclusive
          makeup training manual.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          This course offers a comprehensive introduction to makeup artistry,
          covering everything from makeup brushes to selecting the right
          products. You'll explore every aspect of the makeup world.
          Additionally, the course offers guidance on branding yourself as a
          professional makeup artist, with insights into leveraging social
          media, invoicing clients, and managing your time for wedding bookings.
        </p>
      </div>

      <div className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] mt-[84px] lg:mt-0'>
        <p className=''>Cost: R15 000</p>
        <p className=' mt-8'>
          Duration of this course: 2 months Full time & 4 months Part time
        </p>
        <p className=' mt-8'>
          Full time course: Tuesday to Friday 10:00am - 13:00pm
        </p>
        <p className=''>Part time course: Tuesday evenings 18:00pm - 21:00pm</p>
        <p className=' mt-8'>
          Certificate & qualification: An internationally recognized certificate
          as well as work experience and assistance in job placements as well as
          the opportunity to assist Carina on brand shoots & weddings to gain
          experience.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
