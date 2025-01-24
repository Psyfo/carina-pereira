import Image from 'next/image';
import React from 'react';

const ImageFeed: React.FC = () => {
  return (
    <section className='w-[100vw] h-[269px] overflow-x-auto scrollbar-none'>
      <div className='flex items-start w-[2400px]'>
        <Image
          src='/images/imagefeed/imagefeed-long.png'
          alt='Long scrolling image'
          unoptimized
          height={269}
          width={799}
          className='h-full w-[799px] flex items-start'
        />
        <Image
          src='/images/imagefeed/imagefeed-long.png'
          alt='Long scrolling image'
          unoptimized
          height={269}
          width={799}
          className='h-full w-[799px] flex items-start'
        />
        <Image
          src='/images/imagefeed/imagefeed-long.png'
          alt='Long scrolling image'
          unoptimized
          height={269}
          width={799}
          className='h-full w-[799px] flex items-start'
        />
      </div>
    </section>
  );
};

export default ImageFeed;
