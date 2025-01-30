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
          If you have always been interested in pursuing the amazing art of
          make-up artistry, but just never found the time, this is the perfect
          opportunity for you. Learn from home on your own time, and Master the
          art of Make-up. This course will instill in you the confidence to take
          on the make-up world with ease. This course consists of 6 modules,
          This course is comprised of 6 modules, each designed to cover
          essential aspects of makeup artistry, Each student will be provided
          with a set of Switchbeauty makeup brushes, a detailed, inclusive
          makeup training manual. This course provides a comprehensive
          introduction to makeup artistry, covering essential topics such as
          selecting the right makeup brushes and products for your needs. You’ll
          learn key techniques for colour correction, concealing imperfections,
          and achieving a flawless foundation match. We’ll explore the
          importance of understanding different skin types, skincare basics, and
          the role of primers in creating a smooth canvas. The course will guide
          you through a full makeup application, including bronzing, brow
          shaping, blush application, and highlighter techniques. You’ll also
          discover how to transition your makeup from a natural daytime look to
          a more dramatic evening style, with a focus on creating a carbon
          smokey eye and fuller lips. As you progress, you’ll master advanced
          glam makeup techniques such as full contouring, sculpting with strong
          highlights and subtle shading, and applying false eyelashes. We’ll
          also cover how to achieve a dewy glow for flawless skin and stunning,
          bronzed eyes. Whether you're a beginner or someone looking to refine
          your skills, this course offers a solid foundation to help you build
          confidence and expertise in makeup artistry.
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
