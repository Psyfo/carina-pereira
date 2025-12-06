'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MailingListModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenMailingListModal');
    if (!hasSeenModal) {
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenMailingListModal', 'true');
      }, 1000);
    }
  }, []);

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
        className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='bg-cpMagenta w-full max-w-[863px] rounded-[23.12px] px-[35px] md:px-[67px] py-[70px] md:py-[90px] mx-[12px] md:mx-0 relative'
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-[1rem] right-[1rem] text-white text-[24px]'
          >
            &times;
          </button>

          <h2 className='text-[32px] md:text-[43px] leading-0 text-white font-tan-ashford font-bold lowercase pb-[10px] text-center'>
            Get 10% off any course
          </h2>
          <p className='text-white text-center text-[18px] md:text-[28px] leading-[150%] font-inclusive mb-[24px]'>
            If you sign-up to our mailing list
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor='fullName'
              className='block font-inclusive text-[14px] text-white ml-[10px]'
            >
              Full Name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='Full Name'
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='w-full border px-4 py-4 mt-[7px] mb-[18px] rounded-[30.42px] font-inclusive text-[16px] text-black outline-cpPink placeholder:text-[#C5C5C5]'
            />

            <label
              htmlFor='email'
              className='block font-inclusive text-[14px] text-white ml-[10px]'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border px-4 py-4 mt-[7px] mb-[24px] rounded-[30.42px] font-inclusive text-[16px] text-black outline-cpPink placeholder:text-[#C5C5C5]'
            />

            <button
              type='submit'
              disabled={isSubmitting}
              className='flex justify-center bg-cpPink font-tan-ashford font-bold text-[10.44px] text-white lowercase px-[38px] py-[12px] rounded-[30.42px] hover:bg-opacity-80 transition'
            >
              {isSubmitting ? 'Submitting...' : 'Sign up'}
            </button>
          </form>

          {message && (
            <p className='mt-4 text-white text-center font-inclusive text-[14px]'>
              {message}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
