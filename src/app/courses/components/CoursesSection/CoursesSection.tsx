import Image from 'next/image';
import React from 'react';

const CoursesSection: React.FC = () => {
  return (
    <div className='px-[36px] md:px-[132px] py-[25px] md:py-[142px] md:border-b border-black'>
      <h2 className='font-tan-ashford text-[19px] tracking-wider mb-4'>
        courses
      </h2>
      {/* Course Cards */}
      <div className='grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(323px,1fr))] gap-[25px]'>
        {/* Course Card 1 */}
        <div className='bg-white rounded-2xl p-[14px] border border-black'>
          <Image
            src='/images/courses/courses/courses_pro-makeup.png'
            alt='Course Image'
            width={500}
            height={300}
            unoptimized
            className='rounded-lg'
          />

          <h1 className='font-tan-ashford text-[21px] tracking-wider mt-4 mb-12 h-16'>
            pro makeup course
          </h1>

          <h5 className='font-inclusive text-[20px] leading-[1.5] mx-4'>
            R15000
          </h5>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            2 months full-time
          </p>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            4 months part-time
          </p>

          <a href='#' target='_blank' rel='noopener noreferrer'>
            <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mx-4 border border-black rounded-full mt-4'>
              explore
            </button>
          </a>
        </div>

        {/* Course Card 2 */}
        <div className='bg-white rounded-2xl p-[14px] border border-black'>
          <Image
            src='/images/courses/courses/courses_express-makeup.png'
            alt='Course Image'
            width={500}
            height={300}
            unoptimized
            className='rounded-lg'
          />

          <h1 className='font-tan-ashford text-[21px] tracking-wider mt-4 mb-12 h-16'>
            express makeup course
          </h1>

          <h5 className='font-inclusive text-[20px] leading-[1.5] mx-4'>
            R5500
          </h5>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            6 modules
          </p>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            in-person
          </p>

          <a href='#' target='_blank' rel='noopener noreferrer'>
            <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mx-4 border border-black rounded-full mt-4'>
              explore
            </button>
          </a>
        </div>

        {/* Course Card 3 */}
        <div className='bg-white rounded-2xl p-[14px] border border-black'>
          <Image
            src='/images/courses/courses/courses_express-makeup-online.png'
            alt='Course Image'
            width={500}
            height={300}
            unoptimized
            className='rounded-lg'
          />

          <h1 className='font-tan-ashford text-[21px] tracking-wider mt-4 mb-12 h-16'>
            online express makeup course
          </h1>

          <h5 className='font-inclusive text-[20px] leading-[1.5] mx-4'>
            R4800
          </h5>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            at your own pace
          </p>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            online
          </p>

          <a href='#' target='_blank' rel='noopener noreferrer'>
            <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mx-4 border border-black rounded-full mt-4'>
              explore
            </button>
          </a>
        </div>

        {/* Course Card 4 */}
        <div className='bg-white rounded-2xl p-[14px] border border-black'>
          <Image
            src='/images/courses/courses/courses_hairstyling.png'
            alt='Course Image'
            width={500}
            height={300}
            unoptimized
            className='rounded-lg'
          />

          <h1 className='font-tan-ashford text-[21px] tracking-wider mt-4 mb-12 h-16'>
            hairstyling course
          </h1>

          <h5 className='font-inclusive text-[20px] leading-[1.5] mx-4'>
            R3000
          </h5>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            4 modules once a week
          </p>
          <p className='font-inclusive text-[16px] leading-[1.5] mx-4'>
            in-person
          </p>

          <a href='#' target='_blank' rel='noopener noreferrer'>
            <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mx-4 border border-black rounded-full mt-4'>
              explore
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
