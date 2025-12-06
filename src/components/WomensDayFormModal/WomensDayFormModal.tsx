'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface ValidationErrors {
  fullName?: string;
  email?: string;
  cellphone?: string;
  address?: string;
}

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
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const validateField = (
    fieldName: keyof ValidationErrors,
    value: string
  ): string | undefined => {
    switch (fieldName) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2)
          return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email';
        return undefined;
      case 'cellphone':
        if (!value.trim()) return 'Cellphone is required';
        if (!/^[0-9]{10}$/.test(value)) return 'Must be 10 digits';
        return undefined;
      case 'address':
        if (!value.trim()) return 'Address is required';
        if (value.trim().length < 5)
          return 'Address must be at least 5 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (fieldName: keyof ValidationErrors, value: string) => {
    const error = validateField(fieldName, value);
    setValidationErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

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
          className='z-50 fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='relative bg-cpMagenta shadow-2xl px-8 py-10 rounded-3xl w-full max-w-3xl'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className='top-6 right-6 absolute text-[32px] text-white hover:text-white/80 transition-colors'
            >
              &times;
            </button>
            <h2 className='mb-8 font-tan-ashford font-bold text-[32px] text-white lowercase'>
              Women's Day Booking
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <label
                htmlFor='fullName'
                className='block ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                Full Name *
              </label>
              <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder='Enter your full name'
                required
                onBlur={(e) => handleBlur('fullName', e.target.value)}
                className={`w-full border-2 px-6 py-4 mt-2 mb-1 rounded-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
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
                className='block ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                Email *
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='your.email@example.com'
                required
                onBlur={(e) => handleBlur('email', e.target.value)}
                className={`w-full border-2 px-6 py-4 mt-2 mb-1 rounded-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
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
              {!validationErrors.email && <div className='mb-5' />}

              <div className='flex gap-2'>
                <div className='w-1/3'>
                  <label
                    htmlFor='countryCode'
                    className='block ml-2 font-inclusive font-medium text-[14px] text-white'
                  >
                    Code
                  </label>
                  <input
                    id='countryCode'
                    name='countryCode'
                    type='text'
                    value='+27'
                    readOnly
                    required
                    className='bg-white disabled:bg-gray-100 shadow-sm mt-2 mb-1 px-4 py-4 border-2 border-gray-200 rounded-l-full focus:outline-none w-full font-inclusive text-[14px] text-black disabled:text-gray-500 transition-all duration-200 disabled:cursor-not-allowed'
                  />
                </div>
                <div className='w-2/3'>
                  <label
                    htmlFor='cellphone'
                    className='block ml-2 font-inclusive font-medium text-[14px] text-white'
                  >
                    Cellphone *
                  </label>
                  <input
                    id='cellphone'
                    name='cellphone'
                    type='tel'
                    pattern='[0-9]{10}'
                    inputMode='numeric'
                    maxLength={10}
                    required
                    placeholder='Enter 10-digit number'
                    onBlur={(e) => handleBlur('cellphone', e.target.value)}
                    className={`w-full border-2 px-6 py-4 mt-2 mb-1 rounded-r-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                      validationErrors.cellphone
                        ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                        : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
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
              {validationErrors.cellphone && (
                <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[13px] text-cpOrange'>
                  {validationErrors.cellphone}
                </p>
              )}
              {!validationErrors.cellphone && <div className='mb-5' />}

              <label
                htmlFor='address'
                className='block ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                Address *
              </label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Enter your address'
                required
                onBlur={(e) => handleBlur('address', e.target.value)}
                className={`w-full border-2 px-6 py-4 mt-2 mb-1 rounded-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                  validationErrors.address
                    ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
              />
              {validationErrors.address && (
                <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[13px] text-cpOrange'>
                  {validationErrors.address}
                </p>
              )}
              {!validationErrors.address && <div className='mb-5' />}

              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-cpOrange hover:bg-cpOrange/90 disabled:bg-cpOrange/50 shadow-lg px-8 py-4 rounded-full w-full font-tan-ashford font-bold text-[16px] text-white lowercase transition-all duration-200 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
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
