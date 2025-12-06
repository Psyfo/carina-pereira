'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/* eslint-disable @typescript-eslint/no-unused-vars */

const ContactSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [inView, controls]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Disable the submit button while processing

    const form = event.currentTarget; // Get the form element

    // Gather form data
    const formData = new FormData(form);
    const formValues = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      // Send the form data to the API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({ success: true, message: result.message });
      } else {
        setSubmissionStatus({ success: false, message: result.message });
      }
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }

    // Reset the form after submission
    form.reset();
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      id='contact'
      className='lg:flex px-[30px] md:px-[60px] py-[50px]'
    >
      <div className='lg:w-[50%]'>
        <h1 className='font-tan-ashford font-bold text-[19px]'>get in touch</h1>
      </div>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        className='lg:w-[50%]'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='lg:flex gap-8 lg:w-full'>
          <div className='form-group flex flex-col flex-grow mt-8 lg:mt-0'>
            <label className='font-inclusive text-[1rem]' htmlFor='firstName'>
              First Name:
            </label>
            <input
              className='bg-transparent autofill:bg-white disabled:bg-gray-50 focus:ring-opacity-50 mt-4 px-4 py-2 border border-black focus:border-cpPink disabled:border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cpPink text-black autofill:text-black disabled:text-gray-500 placeholder:text-gray-400 transition-colors duration-200 disabled:cursor-not-allowed'
              type='text'
              id='firstName'
              name='firstName'
              required
            />
          </div>
          <div className='form-group flex flex-col flex-grow mt-8 lg:mt-0'>
            <label className='font-inclusive text-[1rem]' htmlFor='lastName'>
              Last Name:
            </label>
            <input
              className='bg-transparent autofill:bg-white disabled:bg-gray-50 focus:ring-opacity-50 mt-4 px-4 py-2 border border-black focus:border-cpPink disabled:border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cpPink text-black autofill:text-black disabled:text-gray-500 placeholder:text-gray-400 transition-colors duration-200 disabled:cursor-not-allowed'
              type='text'
              id='lastName'
              name='lastName'
              required
            />
          </div>
        </div>
        <div className='form-group flex flex-col mt-8'>
          <label className='font-inclusive text-[1rem]' htmlFor='email'>
            Email:
          </label>
          <input
            className='bg-transparent autofill:bg-white disabled:bg-gray-50 focus:ring-opacity-50 mt-4 px-4 py-2 border border-black focus:border-cpPink disabled:border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cpPink text-black autofill:text-black disabled:text-gray-500 placeholder:text-gray-400 transition-colors duration-200 disabled:cursor-not-allowed'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div className='form-group flex flex-col mt-8'>
          <label className='font-inclusive text-[1rem]' htmlFor='message'>
            Message:
          </label>
          <textarea
            className='bg-transparent disabled:bg-gray-50 focus:ring-opacity-50 mt-4 px-4 py-2 border border-black focus:border-cpPink disabled:border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cpPink h-[12rem] text-black disabled:text-gray-500 placeholder:text-gray-400 transition-colors duration-200 resize-none disabled:cursor-not-allowed'
            id='message'
            name='message'
            required
          ></textarea>
        </div>
        <motion.button
          type='submit'
          className='bg-cpPink mt-12 mb-[80px] px-[35px] py-[8px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </motion.button>

        {/* Display submission message */}
        {submissionStatus && (
          <div
            className={`mt-4 p-4 rounded-md ${
              submissionStatus.success
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {submissionStatus.message}
          </div>
        )}
      </motion.form>
    </motion.section>
  );
};

export default ContactSection;
