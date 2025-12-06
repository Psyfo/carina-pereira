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
      className='px-[30px] md:px-[60px] py-[50px] lg:flex'
    >
      <div className='lg:w-[50%]'>
        <h1 className='font-tan-ashford font-bold text-[19px]'>get in touch</h1>
      </div>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        className='lg:w-[50%]'
        onSubmit={handleSubmit}
      >
        <div className='lg:w-full lg:flex gap-8'>
          <div className='form-group flex mt-8 lg:mt-0 flex-col flex-grow'>
            <label className='font-inclusive text-[1rem]' htmlFor='firstName'>
              First Name:
            </label>
            <input
              className='border border-black rounded-full mt-4 px-4 py-2 bg-transparent'
              type='text'
              id='firstName'
              name='firstName'
              required
            />
          </div>
          <div className='form-group flex flex-col mt-8 lg:mt-0 flex-grow'>
            <label className='font-inclusive text-[1rem]' htmlFor='lastName'>
              Last Name:
            </label>
            <input
              className='border border-black rounded-full mt-4 px-4 py-2 bg-transparent'
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
            className='border border-black rounded-full mt-4 px-4 py-2 bg-transparent'
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
            className='h-[12rem] border border-black rounded-md mt-4 px-4 py-2 bg-transparent'
            id='message'
            name='message'
            required
          ></textarea>
        </div>
        <motion.button
          type='submit'
          className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mb-[80px] border border-black rounded-full mt-12'
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
