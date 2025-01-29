import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-cpPink'>
      <div className='flex flex-col md:flex-row h-full'>
        {/* Section 1 */}
        <div className='flex-1 border-b md:border-r md:border-b-0 border-black pt-[50px] pl-[60px] pb-12'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider lowercase'>
            contact us
          </h1>
          <p className='font-inclusive text-[15px] leading-[1.5] mt-4'>
            13 Drama St, Somerset West,
          </p>
          <p className='font-inclusive text-[15px] leading-[1.5]'>
            Cape Town, 7130
          </p>
          <a
            href='https://maps.app.goo.gl/2CSgyAV1HdmiwECL9'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full mt-4'>
              get directions
            </button>
          </a>
        </div>

        {/* Section 2 */}
        <div className='flex-1 border-b md:border-r md:border-b-0 border-black pt-[50px] pl-[60px] pb-12'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider lowercase'>
            social
          </h1>

          <div className='flex items-center mt-4'>
            <Image
              src='/images/footer/facebook.png'
              alt='Social Media'
              width={22}
              height={22}
              className='w-[22px] h-[22px] mr-[9px]'
            />
            <Link
              href='https://www.facebook.com/carinapereirainternational/'
              className='font-inclusive text-[15px] underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Carina Pereira
            </Link>
          </div>
          <div className='flex items-center mt-[15px]'>
            <Image
              src='/images/footer/instagram.png'
              alt='Social Media'
              width={22}
              height={22}
              className='w-[22px] h-[22px] mr-[9px]'
            />
            <Link
              href='https://www.instagram.com/carinapereirainternational/'
              className='font-inclusive text-[15px] underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              @carinapereirainternational
            </Link>
          </div>
          <div className='flex items-center mt-[15px]'>
            <Image
              src='/images/footer/linkedin.png'
              alt='Social Media'
              width={22}
              height={22}
              className='w-[22px] h-[22px] mr-[9px]'
            />
            <Link
              href='https://www.facebook.com/carinapereirainternational/'
              className='font-inclusive text-[15px] underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Carina Pereira
            </Link>
          </div>
        </div>

        {/* Section 3 */}
        <div className='flex-1 flex flex-col pt-[50px] pl-[60px] pb-12'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider lowercase'>
            directory
          </h1>

          <Link
            href='https://www.facebook.com/carinapereirainternational/'
            className='font-inclusive text-[15px] underline lowercase mt-4'
          >
            courses
          </Link>
          <Link
            href='https://www.facebook.com/carinapereirainternational/'
            className='font-inclusive text-[15px] underline lowercase'
          >
            services
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
