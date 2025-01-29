import Image from 'next/image';
import React from 'react';

const OfferingsSection: React.FC = () => {
  return (
    <section className='py-[75px] flex flex-col items-center border-b-2 border-black'>
      <h1 className='font-tan-ashford font-bold text-[19px] lowercase mb-[100px]'>
        what we offer
      </h1>

      <div className='lg:w-full flex flex-col lg:flex-row gap-[60px] lg:justify-around'>
        {/* Offering 1 */}
        <div className='flex flex-col items-center gap-[20px]'>
          <div className='flex items-center justify-center w-[150px] lg:h-[150px]'>
            <Image
              src='/images/offerings/offering1.png'
              alt='Description of image'
              width={150}
              height={150}
              className='h-auto w-full'
            />
          </div>
          <p className='flex items-center justify-center font-tan-ashford font-bold text-[16px] text-center tracking-wider lowercase'>
            make-up kit
            <br /> to use during
            <br /> the course
          </p>
        </div>

        {/* Offering 2 */}
        <div className='flex flex-col items-center gap-[20px]'>
          <div className='flex items-center justify-center w-[150px] lg:h-[150px]'>
            <Image
              src='/images/offerings/offering2.png'
              alt='Description of image'
              width={150}
              height={150}
              className='h-auto w-full'
            />
          </div>
          <div className='flex items-center justify-center font-tan-ashford font-bold text-[16px] text-center tracking-wider lowercase'>
            your own
            <br /> professional
            <br /> brush set
          </div>
        </div>

        {/* Offering 3 */}
        <div className='flex flex-col items-center gap-[20px]'>
          <div className='flex items-center justify-center w-[150px] lg:h-[150px]'>
            <Image
              src='/images/offerings/offering3.png'
              alt='Description of image'
              width={150}
              height={150}
              className='h-auto w-full'
            />
          </div>
          <div className='flex items-center justify-center font-tan-ashford font-bold text-[16px] text-center tracking-wider lowercase'>
            professional
            <br /> photoshoot
          </div>
        </div>

        {/* Offering 4 */}
        <div className='flex flex-col items-center items-center gap-[20px]'>
          <div className='flex items-center justify-center w-[150px] lg:h-[150px]'>
            <Image
              src='/images/offerings/offering4.png'
              alt='Description of image'
              width={150}
              height={150}
              className='h-auto w-full'
            />
          </div>
          <div className='flex items-center justify-center font-tan-ashford font-bold text-[16px] text-center tracking-wider lowercase'>
            flexible payment
            <br /> plans
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
