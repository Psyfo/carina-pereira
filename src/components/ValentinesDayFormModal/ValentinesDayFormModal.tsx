'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface ValidationErrors {
  fullName?: string;
  email?: string;
  cellphone?: string;
  address?: string;
}

interface ValentinesDayFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ValentinesDayFormModal({
  isOpen,
  onClose,
}: Readonly<ValentinesDayFormModalProps>) {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {},
  );

  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      case 'cellphone':
        if (!value) return 'Phone number is required';
        if (!/^[0-9]{10}$/.test(value)) return 'Must be 10 digits';
        return '';
      case 'address':
        if (!value.trim()) return 'Address is required';
        if (value.trim().length < 5) return 'Please enter a complete address';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValidationErrors((prev) => ({ ...prev, [name]: error }));
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
      const response = await fetch('/api/valentinesday', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message:
            "Thank you! We can't wait to celebrate Valentine's Day with you! 💝",
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
          className='z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='relative bg-cpMagenta px-6 xs:px-8 md:px-12 py-8 xs:py-10 md:py-12 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-cp-modal'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className='top-4 right-4 absolute text-[28px] text-white hover:text-cpOrange transition-colors'
            >
              &times;
            </button>
            <h2 className='mb-4 xs:mb-6 pb-6 xs:pb-8 border-white/20 border-b font-tan-ashford font-bold text-[20px] text-white xs:text-[24px] md:text-[28px] lowercase'>
              Valentine&apos;s Day Booking
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <label
                htmlFor='fullName'
                className='block ml-2 font-inclusive font-medium text-[13px] text-white xs:text-[14px]'
              >
                Full Name *
              </label>
              <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder='Enter your full name'
                required
                onBlur={handleBlur}
                className={`mt-2 mb-1 px-4 xs:px-5 py-3 xs:py-3.5 border-2 rounded-full w-full font-inclusive text-[13px] xs:text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                  validationErrors.fullName
                    ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
              />
              {validationErrors.fullName && (
                <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'>
                  {validationErrors.fullName}
                </p>
              )}
              {!validationErrors.fullName && <div className='mb-4' />}

              {/* Email */}
              <label
                htmlFor='email'
                className='block ml-2 font-inclusive font-medium text-[13px] text-white xs:text-[14px]'
              >
                Email *
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='your.email@example.com'
                required
                onBlur={handleBlur}
                className={`mt-2 mb-1 px-4 xs:px-5 py-3 xs:py-3.5 border-2 rounded-full w-full font-inclusive text-[13px] xs:text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                  validationErrors.email
                    ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
              />
              {validationErrors.email && (
                <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'>
                  {validationErrors.email}
                </p>
              )}
              {!validationErrors.email && <div className='mb-4' />}

              {/* Phone */}
              <label
                htmlFor='cellphone'
                className='block ml-2 font-inclusive font-medium text-[13px] text-white xs:text-[14px]'
              >
                Cellphone *
              </label>
              <div className='relative mt-2 mb-4'>
                <div className='left-0 absolute inset-y-0 flex items-center pl-4 xs:pl-5 pointer-events-none'>
                  <span className='font-inclusive text-[13px] text-gray-500 xs:text-[14px]'>
                    +27
                  </span>
                </div>
                <input
                  id='cellphone'
                  name='cellphone'
                  type='tel'
                  pattern='[0-9]{10}'
                  inputMode='numeric'
                  maxLength={10}
                  required
                  className='bg-white autofill:bg-white disabled:bg-gray-50 shadow-sm px-4 xs:px-5 py-3 xs:py-3.5 pl-14 xs:pl-16 border-2 border-gray-200 focus:border-cpOrange rounded-full focus:outline-none focus:ring-2 focus:ring-cpOrange/50 w-full font-inclusive text-[13px] text-black autofill:text-black xs:text-[14px] disabled:text-gray-500 placeholder:text-gray-400 transition-all duration-200 disabled:cursor-not-allowed'
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
                <input type='hidden' name='countryCode' value='+27' />
              </div>

              {/* Address */}
              <label
                htmlFor='address'
                className='block ml-2 font-inclusive font-medium text-[13px] text-white xs:text-[14px]'
              >
                Address *
              </label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Street address, city, province'
                required
                onBlur={handleBlur}
                className={`mt-2 mb-1 px-4 xs:px-5 py-3 xs:py-3.5 border-2 rounded-full w-full font-inclusive text-[13px] xs:text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
                  validationErrors.address
                    ? 'border-cpOrange focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                    : 'border-gray-200 focus:border-cpOrange focus:ring-2 focus:ring-cpOrange/50'
                } disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`}
              />
              {validationErrors.address && (
                <p className='inline-block bg-white/90 mt-1 mb-3 ml-2 px-2 py-0.5 rounded font-inclusive font-medium text-[12px] text-cpOrange'>
                  {validationErrors.address}
                </p>
              )}
              {!validationErrors.address && <div className='mb-6' />}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex justify-center items-center bg-cpOrange hover:bg-cpOrange/90 disabled:opacity-50 shadow-lg hover:shadow-xl px-6 xs:px-8 py-3.5 xs:py-4 rounded-full w-full font-tan-ashford font-bold text-[14px] text-white xs:text-[16px] lowercase active:scale-95 disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Submitting...' : 'Book Your Spot'}
              </button>

              {/* Submission Status */}
              {submissionStatus && (
                <div
                  className={`mt-4 p-4 rounded-2xl text-center font-inclusive text-[14px] ${
                    submissionStatus.success
                      ? 'bg-green-100 text-green-800 border-2 border-green-300'
                      : 'bg-cpOrange/10 text-white border-2 border-cpOrange'
                  }`}
                >
                  {submissionStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
