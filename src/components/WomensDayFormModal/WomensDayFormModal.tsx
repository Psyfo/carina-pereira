'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function WomensDayFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      countryCode: formData.get('countryCode'),
      cellphone: formData.get('cellphone'),
      address: formData.get('address'),
    };

    try {
      const response = await fetch('/api/womensday', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message:
            "Thank you! We can't wait to celebrate Women’s Day with you! 🌸",
        });
        form.reset();
      } else {
        setSubmissionStatus({ success: false, message: result.message });
      }
    } catch {
      setSubmissionStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='bg-cpMagenta w-full max-w-lg rounded-[23.12px] px-[28px] py-[36px] relative'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className='absolute top-[1rem] right-[1rem] text-white text-[24px]'
            >
              &times;
            </button>
            <h2 className='text-[18px] text-white font-tan-ashford font-bold mb-4 lowercase pb-[30px]'>
              Women’s Day Booking
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <label
                htmlFor='fullName'
                className='block font-inclusive text-[12px] text-white ml-[10px]'
              >
                Full Name
              </label>
              <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder='Full Name'
                required
                className='w-full border px-4 py-2 mt-[7px] mb-[18px] rounded-[30.42px] font-inclusive text-[10px] text-black outline-cpPink placeholder:text-[#C5C5C5]'
              />

              {/* Email */}
              <label
                htmlFor='email'
                className='block font-inclusive text-[12px] text-white ml-[10px]'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                required
                className='w-full border px-4 py-2 mt-[7px] mb-[18px] rounded-[30.42px] font-inclusive text-[10px] text-black outline-cpPink placeholder:text-[#C5C5C5]'
              />

              {/* Phone */}
              <div className='flex gap-2'>
                <div className='w-1/3'>
                  <label
                    htmlFor='countryCode'
                    className='block font-inclusive text-[12px] text-white ml-[10px]'
                  >
                    Country Code
                  </label>
                  <input
                    id='countryCode'
                    name='countryCode'
                    type='text'
                    value='+27'
                    readOnly
                    required
                    className='w-full border px-4 py-2 mt-[7px] mb-[18px] rounded-l-[30.42px] font-inclusive text-[10px] text-black outline-cpPink'
                  />
                </div>
                <div className='w-2/3'>
                  <label
                    htmlFor='cellphone'
                    className='block font-inclusive text-[12px] text-white ml-[10px]'
                  >
                    Cellphone
                  </label>
                  <input
                    id='cellphone'
                    name='cellphone'
                    type='tel'
                    pattern='[0-9]{10}'
                    inputMode='numeric'
                    maxLength={10}
                    required
                    className='w-full border px-4 py-2 mt-[7px] mb-[18px] rounded-r-[30.42px] font-inclusive text-[10px] text-black outline-cpPink'
                    placeholder='Enter 10-digit number'
                    onKeyDown={(e) => {
                      if (
                        !/\d/.test(e.key) &&
                        e.key !== 'Backspace' &&
                        e.key !== 'Tab' &&
                        e.key !== 'ArrowLeft' &&
                        e.key !== 'ArrowRight'
                      ) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, '');
                    }}
                  />
                </div>
              </div>

              {/* Address */}
              <label
                htmlFor='address'
                className='block font-inclusive text-[12px] text-white ml-[10px]'
              >
                Address
              </label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Address'
                required
                className='w-full border px-4 py-2 mt-[7px] mb-[18px] rounded-[30.42px] font-inclusive text-[10px] text-black outline-cpPink placeholder:text-[#C5C5C5]'
              />

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex items-center justify-center bg-cpPink font-tan-ashford font-bold text-[10.44px] text-white lowercase leading-[100%] px-[38px] py-[12px] rounded-[30.42px] hover:bg-opacity-80'
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {/* Submission Status */}
              {submissionStatus && (
                <p
                  className={`text-sm mt-2 ${
                    submissionStatus.success ? 'text-white' : 'text-cpPink'
                  }`}
                >
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
