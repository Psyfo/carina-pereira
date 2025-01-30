import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row md:items-center md:justify-between lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'>
      <div className='lg:w-[600px] flex flex-col items-start'>
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          about this course:
        </h1>

        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          Master the basics of make-up for matric dances, bridals, photo shoots
          & many more. This course will teach you all you need to know to start
          off your confidence in the make-up world.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          Comprised of 6 sessions, each designed to cover essential aspects of
          makeup artistry, Each student will be provided with a set of
          Switchbeauty makeup brushes, a detailed, inclusive makeup training
          manual.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          This course provides a comprehensive introduction to makeup artistry,
          covering essential topics.
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
          Certificate & qualification: An internationally recognised certificate
          as well as work experience and assistance in job placements as well as
          the opportunity to assist Carina on brand shoots & weddings to gain
          experience.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
