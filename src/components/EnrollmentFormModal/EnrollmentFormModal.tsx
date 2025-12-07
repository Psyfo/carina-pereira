'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const programs = [
  'Pro Makeup Course - R15 000',
  'Express Makeup Course - R5 500',
  'Hairstyling Course - R3 000',
  'Online Express Makeup Course - R4 800',
];

const paymentMethods = [
  'Full Amount Upfront',
  '3-Months Installments',
  '6-Months Installments',
];

interface ValidationErrors {
  fullName?: string;
  email?: string;
  cellphone?: string;
  address?: string;
}

interface EnrollmentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentFormModal({
  isOpen,
  onClose,
}: Readonly<EnrollmentFormModalProps>) {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
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
      program: formData.get('program'),
      paymentMethod: formData.get('paymentMethod'),
    };

    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message:
            "Thank you for submitting, we can't wait to have you join us!",
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
            className='relative bg-cpMagenta px-8 md:px-12 py-10 md:py-12 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-cp-modal'
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
            <h2 className='mb-6 pb-8 border-white/20 border-b font-tan-ashford font-bold text-[24px] text-white md:text-[28px] lowercase'>
              Enrollment Form
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
                onBlur={handleBlur}
                className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-full w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
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
                onBlur={handleBlur}
                className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-full w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
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
              <div className='flex gap-2'>
                <div className='w-1/3'>
                  <label
                    htmlFor='countryCode'
                    className='block ml-[10px] font-inclusive text-[12px] text-white'
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
                    className='bg-white disabled:bg-gray-50 shadow-sm mt-[7px] mb-[18px] px-4 py-2 border-2 border-gray-200 focus:border-cpOrange rounded-l-[30.42px] focus:outline-none focus:ring-2 focus:ring-cpOrange/50 w-full font-inclusive text-[10px] text-black disabled:text-gray-500 transition-all duration-200 disabled:cursor-not-allowed'
                  />
                </div>
                <div className='w-2/3'>
                  <label
                    htmlFor='cellphone'
                    className='block ml-[10px] font-inclusive text-[12px] text-white'
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
                    className='bg-white autofill:bg-white disabled:bg-gray-50 shadow-sm mt-[7px] mb-[18px] px-4 py-2 border-2 border-gray-200 focus:border-cpOrange rounded-r-[30.42px] focus:outline-none focus:ring-2 focus:ring-cpOrange/50 w-full font-inclusive text-[10px] text-black autofill:text-black disabled:text-gray-500 placeholder:text-gray-400 transition-all duration-200 disabled:cursor-not-allowed'
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
                className='block ml-2 font-inclusive font-medium text-[14px] text-white'
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
                className={`mt-2 mb-1 px-5 py-3.5 border-2 rounded-full w-full font-inclusive text-[14px] text-black bg-white placeholder:text-gray-400 shadow-sm focus:outline-none transition-all duration-200 ${
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
              {!validationErrors.address && <div className='mb-4' />}

              {/* Program Dropdown */}
              <label
                htmlFor='program'
                className='block ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                Which program are you enrolling in? *
              </label>
              <div className='relative mt-2 mb-4'>
                <Listbox value={selectedProgram} onChange={setSelectedProgram}>
                  <ListboxButton className='flex justify-between items-center bg-white shadow-sm px-5 py-3.5 border-2 border-gray-200 hover:border-cpPink rounded-full w-full font-inclusive text-[14px] text-black transition-all duration-200'>
                    {selectedProgram}
                    <ChevronUpDownIcon className='ml-2 w-5 h-5 text-gray-500' />
                  </ListboxButton>
                  <ListboxOptions className='z-10 absolute bg-white shadow-xl mt-2 border border-gray-200 rounded-2xl w-full max-h-60 overflow-auto font-inclusive text-[14px] text-black scrollbar-cp-modal'>
                    {programs.map((program) => (
                      <ListboxOption
                        key={program}
                        value={program}
                        className={({ active }) =>
                          `cursor-pointer select-none px-5 py-3 transition-colors ${
                            active ? 'bg-cpPink text-white' : 'text-black'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className='flex justify-between items-center'>
                            <span
                              className={selected ? 'font-bold' : 'font-normal'}
                            >
                              {program}
                            </span>
                            {selected && (
                              <CheckIcon className='w-5 h-5 text-cpPink' />
                            )}
                          </div>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
                <input type='hidden' name='program' value={selectedProgram} />
              </div>

              {/* Payment Dropdown */}
              <label
                htmlFor='paymentMethod'
                className='block ml-2 font-inclusive font-medium text-[14px] text-white'
              >
                How would you like to make payment? *
              </label>
              <div className='relative mt-2 mb-6'>
                <Listbox value={selectedPayment} onChange={setSelectedPayment}>
                  <ListboxButton className='flex justify-between items-center bg-white shadow-sm px-5 py-3.5 border-2 border-gray-200 hover:border-cpPink rounded-full w-full font-inclusive text-[14px] text-black transition-all duration-200'>
                    {selectedPayment}
                    <ChevronUpDownIcon className='ml-2 w-5 h-5 text-gray-500' />
                  </ListboxButton>
                  <ListboxOptions className='z-10 absolute bg-white shadow-xl mt-2 border border-gray-200 rounded-2xl w-full max-h-60 overflow-auto font-inclusive text-[14px] text-black scrollbar-cp-modal'>
                    {paymentMethods.map((method) => (
                      <ListboxOption
                        key={method}
                        value={method}
                        className={({ active }) =>
                          `cursor-pointer select-none px-5 py-3 transition-colors ${
                            active ? 'bg-cpPink text-white' : 'text-black'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className='flex justify-between items-center'>
                            <span
                              className={selected ? 'font-bold' : 'font-normal'}
                            >
                              {method}
                            </span>
                            {selected && (
                              <CheckIcon className='w-5 h-5 text-cpPink' />
                            )}
                          </div>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
                <input
                  type='hidden'
                  name='paymentMethod'
                  value={selectedPayment}
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex justify-center items-center bg-cpOrange hover:bg-cpOrange/90 disabled:opacity-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-full w-full font-tan-ashford font-bold text-[16px] text-white lowercase active:scale-95 disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
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
