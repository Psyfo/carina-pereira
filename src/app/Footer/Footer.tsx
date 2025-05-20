'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmissionMessage('Thank you for subscribing!');
        setFormData({ fullName: '', email: '' });
      } else {
        setSubmissionMessage(result.message ?? 'Failed to subscribe.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionMessage('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className='bg-cpPink'>
      <div className='flex flex-col md:flex-row h-full md:border-t border-black'>
        {/* Section 1 - Contact */}
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

        {/* Section 2 - Social */}
        <div className='flex-1 border-b md:border-r md:border-b-0 border-black pt-[50px] pl-[60px] pb-12'>
          <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider lowercase'>
            social
          </h1>

          <div className='flex items-center mt-4'>
            <Image
              src='/images/footer/facebook.png'
              alt='Facebook'
              width={22}
              height={22}
              className='mr-[9px]'
            />
            <Link
              href='https://www.facebook.com/carinapereirainternational/'
              target='_blank'
              className='font-inclusive text-[15px] underline'
            >
              Carina Pereira
            </Link>
          </div>

          <div className='flex items-center mt-[15px]'>
            <Image
              src='/images/footer/instagram.png'
              alt='Instagram'
              width={22}
              height={22}
              className='mr-[9px]'
            />
            <Link
              href='https://www.instagram.com/carinapereirainternational/'
              target='_blank'
              className='font-inclusive text-[15px] underline'
            >
              @carinapereirainternational
            </Link>
          </div>

          <div className='flex items-center mt-[15px]'>
            <Image
              src='/images/footer/linkedin.png'
              alt='LinkedIn'
              width={22}
              height={22}
              className='mr-[9px]'
            />
            <Link
              href='https://www.facebook.com/carinapereirainternational/'
              target='_blank'
              className='font-inclusive text-[15px] underline'
            >
              Carina Pereira
            </Link>
          </div>
        </div>

        {/* Section 3 - Mailing List */}
        <div className='flex-1 py-[32px] md:py-[55px] px-[32px]'>
          <h1 className='max-w-[356px] font-tan-ashford font-bold text-[19px] tracking-[0.04em] leading-normal lowercase'>
            sign up to our newsletter & get 10% off
          </h1>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col md:flex-row md:items-end gap-4 md:gap-2 mt-4'
          >
            <div className='flex-1'>
              <label
                htmlFor='fullName'
                className='text-white font-inclusive text-[12px] ml-[10px]'
              >
                Full Name
              </label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder='Full Name'
                className='w-full border px-4 py-4 mt-[7px] rounded-[30.42px] font-inclusive text-[12px] text-black placeholder:text-[#C5C5C5] outline-cpPink'
              />
            </div>
            <div className='flex-1'>
              <label
                htmlFor='email'
                className='text-white font-inclusive text-[12px] ml-[10px]'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Email'
                className='w-full border px-4 py-4 mt-[7px] rounded-[30.42px] font-inclusive text-[12px] text-black placeholder:text-[#C5C5C5] outline-cpPink'
              />
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='flex items-center justify-center bg-cpOrange text-white font-tan-ashford text-[13px] px-[28px] py-4 mt-4 rounded-full hover:bg-opacity-80'
            >
              {isSubmitting ? 'Signing up...' : 'sign up'}
            </button>
          </form>

          {submissionMessage && (
            <p className='mt-2 text-white font-inclusive text-[12px]'>
              {submissionMessage}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
