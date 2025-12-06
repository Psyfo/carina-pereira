'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Validation schema
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [inView, controls]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message:
            result.message ||
            'Thank you for contacting us! We will get back to you soon.',
        });
        reset();
      } else {
        setSubmissionStatus({
          success: false,
          message:
            result.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmissionStatus({
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    }
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
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className='lg:flex gap-8 lg:w-full'>
          {/* First Name */}
          <div className='form-group flex flex-col mt-8 lg:mt-0 grow'>
            <label
              className='ml-2 font-inclusive font-medium text-[14px]'
              htmlFor='firstName'
            >
              First Name *
            </label>
            <input
              id='firstName'
              type='text'
              placeholder='Enter your first name'
              aria-describedby={
                errors.firstName ? 'firstName-error' : undefined
              }
              {...register('firstName')}
              className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-full w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                errors.firstName
                  ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                  : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
              } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
            />
            {errors.firstName && (
              <p
                id='firstName-error'
                role='alert'
                className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'
              >
                {errors.firstName.message}
              </p>
            )}
            {!errors.firstName && <div className='mb-4' />}
          </div>

          {/* Last Name */}
          <div className='form-group flex flex-col mt-8 lg:mt-0 grow'>
            <label
              className='ml-2 font-inclusive font-medium text-[14px]'
              htmlFor='lastName'
            >
              Last Name *
            </label>
            <input
              id='lastName'
              type='text'
              placeholder='Enter your last name'
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              {...register('lastName')}
              className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-full w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                errors.lastName
                  ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                  : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
              } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
            />
            {errors.lastName && (
              <p
                id='lastName-error'
                role='alert'
                className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'
              >
                {errors.lastName.message}
              </p>
            )}
            {!errors.lastName && <div className='mb-4' />}
          </div>
        </div>

        {/* Email */}
        <div className='form-group flex flex-col mt-8'>
          <label
            className='ml-2 font-inclusive font-medium text-[14px]'
            htmlFor='email'
          >
            Email *
          </label>
          <input
            id='email'
            type='email'
            placeholder='your.email@example.com'
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
            className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-full w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
              errors.email
                ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
            } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
          />
          {errors.email && (
            <p
              id='email-error'
              role='alert'
              className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'
            >
              {errors.email.message}
            </p>
          )}
          {!errors.email && <div className='mb-4' />}
        </div>

        {/* Message */}
        <div className='form-group flex flex-col mt-8'>
          <label
            className='ml-2 font-inclusive font-medium text-[14px]'
            htmlFor='message'
          >
            Message *
          </label>
          <textarea
            id='message'
            placeholder='Tell us how we can help you...'
            rows={6}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
            className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-2xl w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 resize-none ${
              errors.message
                ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
            } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
          />
          {errors.message && (
            <p
              id='message-error'
              role='alert'
              className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'
            >
              {errors.message.message}
            </p>
          )}
          {!errors.message && <div className='mb-6' />}
        </div>

        {/* Validation Message */}
        {Object.keys(errors).length > 0 && (
          <div className='bg-cpOrange/10 mt-4 p-4 border-2 border-cpOrange rounded-2xl font-inclusive text-[14px] text-cpOrange text-center'>
            Please validate all fields
          </div>
        )}

        {/* Submit Button */}
        <motion.button
          type='submit'
          disabled={isSubmitting}
          className='flex justify-center bg-cpOrange hover:bg-cpOrange/90 disabled:opacity-50 shadow-lg hover:shadow-xl mt-4 mb-8 px-10 py-4 rounded-full w-full lg:w-auto font-tan-ashford font-bold text-[16px] text-white lowercase active:scale-95 disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed'
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Submission Status */}
        {submissionStatus && (
          <div
            className={`mt-4 p-4 rounded-2xl text-center font-inclusive text-[14px] ${
              submissionStatus.success
                ? 'bg-green-100 text-green-800 border-2 border-green-300'
                : 'bg-cpOrange/10 text-cpOrange border-2 border-cpOrange'
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
