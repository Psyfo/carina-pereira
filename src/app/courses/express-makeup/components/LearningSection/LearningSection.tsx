import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const LearningSection: React.FC = () => {
  return (
    <section className='px-[25px] lg:px-[10%] py-[33px] lg:pb-[353px]'>
      <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
        what you'll learn
      </h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[30px]'>
        <div className='w-full  flex flex-col gap-[30px]'>
          <div className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20] py-[30] bg-cpPink'>
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              Introduction of make-up artistry
            </h1>

            <p className='mt-[40px]'></p>
            <p className=''>Guide to make-up brushes</p>
            <p className=''>Correct product choice</p>
          </div>

          <div className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20] py-[30] bg-cpOrange'>
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              understanding skin types, skin care and primers
            </h1>

            <p className='mt-[40px]'>Colour correcting</p>
            <p className=''>Brow shaping</p>
            <p className=''>Correct concealing</p>
            <p className=''>Foundation matching</p>
          </div>
        </div>

        <div className='w-full  flex flex-col gap-[30px]'>
          <div className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20] py-[30] bg-cpPink lg:bg-cpOrange'>
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              basic full make-up application
            </h1>

            <p className='mt-[40px]'>Bronzing - Brows</p>
            <p className=''>Blush application</p>
            <p className=''>Highlight placement</p>
            <p className=''>
              Dewy make-up, flawless skin and bronzed glowy eye
            </p>
          </div>

          <div className='h-[290px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20] py-[30] bg-cpOrange lg:bg-cpPink'>
            <h1 className='font-tan-ashford font-bold text-[15px] tracking-wider'>
              make-up transition from day wear to evening
            </h1>

            <p className='mt-[40px]'>Carbon smokey eye</p>
            <p className=''>Fuller lips application</p>
            <p className=''>
              Glam make-up, full contour, strong highlight with light shading
            </p>
            <p className=''>False lash application</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
