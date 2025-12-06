'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ValidationErrors {
  fullName?: string;
  email?: string;
}

export default function MailingListModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenMailingListModal');
    if (!hasSeenModal) {
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenMailingListModal', 'true');
      }, 1000);
    }
  }, []);

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

  const handleBlur = (field: string, value: string) => {
    const error = validateField(field, value);
    setValidationErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Successfully subscribed!');
        setTimeout(() => {
          setIsOpen(false);
        }, 1000);
      } else {
        setMessage(data.message ?? 'Failed to subscribe.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className='z-50 fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='relative bg-cpMagenta shadow-2xl mx-4 md:mx-0 px-8 md:px-16 py-12 md:py-16 rounded-3xl w-full max-w-3xl'
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className='top-4 right-4 absolute text-[32px] text-white hover:text-cpOrange transition-colors'
          >
            &times;
          </button>

          <h2 className='mb-6 pb-4 border-white/20 border-b font-tan-ashford font-bold text-[36px] text-white md:text-[48px] text-center lowercase leading-tight'>
            Get 10% off any course
          </h2>
          <p className='mb-8 font-inclusive text-[20px] text-white md:text-[24px] text-center leading-[150%]'>
            If you sign-up to our mailing list
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor='fullName'
              className='block ml-2 font-inclusive font-medium text-[16px] text-white'
            >
              Full Name *
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='Enter your full name'
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={(e) => handleBlur('fullName', e.target.value)}
              className={`w-full border-2 px-6 py-4 mt-2 mb-1 rounded-full font-inclusive text-[16px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                validationErrors.fullName
                  ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                  : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
              } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
            />
            {validationErrors.fullName && (
              <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[13px] text-cpOrange'>
                {validationErrors.fullName}
              </p>
            )}
            {!validationErrors.fullName && <div className='mb-5' />}

            <label
              htmlFor='email'
              className='block ml-2 font-inclusive font-medium text-[16px] text-white'
            >
              Email *
            </label>
            <input
              id='email'
              type='email'
              placeholder='your.email@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => handleBlur('email', e.target.value)}
              className={`w-full border-2 px-6 py-4 mt-2 mb-1 rounded-full font-inclusive text-[16px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                validationErrors.email
                  ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                  : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
              } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
            />
            {validationErrors.email && (
              <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[13px] text-cpOrange'>
                {validationErrors.email}
              </p>
            )}
            {!validationErrors.email && <div className='mb-6' />}

            <button
              type='submit'
              disabled={isSubmitting}
              className='flex justify-center bg-cpOrange hover:bg-cpOrange/90 disabled:opacity-50 shadow-lg hover:shadow-xl px-10 py-4 rounded-full w-full font-tan-ashford font-bold text-[18px] text-white lowercase active:scale-95 disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Signing up...' : 'Sign up for 10% off'}
            </button>
          </form>

          {message && (
            <div
              className={`mt-5 p-4 rounded-2xl text-center font-inclusive text-[15px] ${
                message.includes('Success')
                  ? 'bg-green-100 text-green-800 border-2 border-green-300'
                  : 'bg-cpOrange/10 text-white border-2 border-cpOrange'
              }`}
            >
              {message}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
