'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface ValidationErrors {
  fullName?: string;
  email?: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2)
          return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValidationErrors((prev) => ({ ...prev, [name]: error }));
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
      <div className='flex md:flex-row flex-col border-black md:border-t h-full'>
        {/* Section 1 - Contact */}
        <div className='flex-1 pt-[50px] pb-12 pl-[60px] border-black md:border-r border-b md:border-b-0'>
          <h1 className='font-tan-ashford font-bold text-[19px] lowercase tracking-wider'>
            contact us
          </h1>
          <p className='mt-4 font-inclusive text-[15px] leading-[1.5]'>
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
            <button className='inline-block bg-cpPink mt-4 px-[35px] py-[8px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'>
              get directions
            </button>
          </a>
        </div>

        {/* Section 2 - Social */}
        <div className='flex-1 pt-[50px] pb-12 pl-[60px] border-black md:border-r border-b md:border-b-0'>
          <h1 className='font-tan-ashford font-bold text-[19px] lowercase tracking-wider'>
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
        <div className='flex-1 px-8 md:px-10 py-10 md:py-14'>
          <h1 className='mb-6 max-w-md font-tan-ashford font-bold text-[22px] md:text-[24px] lowercase leading-normal tracking-[0.04em]'>
            sign up to our newsletter & get 10% off
          </h1>

          <form
            onSubmit={handleSubmit}
            noValidate
            className='flex flex-col gap-4'
          >
            <div className='flex-1'>
              <label
                htmlFor='fullName'
                className='block mb-1 ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                Full Name *
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder='Enter your full name'
                className={`w-full border-2 px-5 py-3.5 rounded-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                  validationErrors.fullName
                    ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    : 'border-gray-200 focus:border-white focus:ring-2 focus:ring-white/50'
                } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
              />
              {validationErrors.fullName && (
                <p className='inline-block bg-white/90 mt-1 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'>
                  {validationErrors.fullName}
                </p>
              )}
            </div>
            <div className='flex-1'>
              <label
                htmlFor='email'
                className='block mb-1 ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder='your.email@example.com'
                className={`w-full border-2 px-5 py-3.5 rounded-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                  validationErrors.email
                    ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    : 'border-gray-200 focus:border-white focus:ring-2 focus:ring-white/50'
                } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
              />
              {validationErrors.email && (
                <p className='inline-block bg-white/90 mt-1 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'>
                  {validationErrors.email}
                </p>
              )}
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='flex justify-center items-center bg-cpOrange hover:bg-cpOrange/90 disabled:opacity-50 shadow-lg hover:shadow-xl px-8 py-3.5 rounded-full w-full font-tan-ashford font-bold text-[16px] text-white lowercase active:scale-95 disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Signing up...' : 'Sign up for 10% off'}
            </button>
          </form>

          {submissionMessage && (
            <div
              className={`mt-4 p-3 rounded-xl text-center font-inclusive text-[13px] ${
                submissionMessage.includes('Thank you')
                  ? 'bg-green-100 text-green-800 border-2 border-green-300'
                  : 'bg-cpOrange/10 text-white border-2 border-cpOrange'
              }`}
            >
              {submissionMessage}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
