import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row md:items-center md:justify-between lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'>
      <div className='lg:w-[600px] flex flex-col items-start'>
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          about this course:
        </h1>

        <p className='font-inclusive text-[15px] leading-[1.5] mt-8'>
          A comprehensive course giving you the inside tips of industry relevant
          hairstyling techniques so you can be an all in one artist who can
          offer hairstyling as well.
        </p>

        <ul className='font-inclusive text-[15px] leading-[1.5] mt-[100px]'>
          <li className="relative pl-[10px] before:content-['-'] before:absolute before:left-0">
            hair texture identification
          </li>
          <li className="relative pl-[10px] before:content-['-'] before:absolute before:left-0">
            basic styling and setting
          </li>
          <li className="relative pl-[10px] before:content-['-'] before:absolute before:left-0">
            intermediate curling / waving techniques
          </li>
          <li className="relative pl-[10px] before:content-['-'] before:absolute before:left-0">
            basic and intermediate up-styling techniques
          </li>
          <li className="relative pl-[10px] before:content-['-'] before:absolute before:left-0">
            styling product tips and tricks
          </li>
          <li className="relative pl-[10px] before:content-['-'] before:absolute before:left-0">
            aftercare instruction techniques
          </li>
        </ul>
      </div>

      <div className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] mt-[84px] lg:mt-0'>
        <p className=''>Cost: R3 000</p>
        <p className=' mt-8'>
          Duration of this course: <br /> 4 modules once a week
        </p>
        <p className=' mt-8'>
          A comprehensive course giving you the inside tips of industry relevant
          hairstyling techniques so you can be an all in one artist who can
          offer hairstyling as well.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
