'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { isProMakeupPromotionActive } from '@/lib/promotions';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Programs list with pricing - dynamically updated with promotion
const getPrograms = () => {
  const showPromotion = isProMakeupPromotionActive();
  return [
    showPromotion
      ? 'Pro Makeup Course - R7 500 (50% OFF)'
      : 'Pro Makeup Course - R15 000',
    'Express Makeup Course - R5 500',
    'Hairstyling Course - R3 000',
    'Online Express Makeup Course - R4 800',
  ];
};

const paymentMethods = [
  'Full Amount Upfront',
  '3-Months Installments',
  '6-Months Installments',
];

export default function EnrollmentFormModal({
  isOpen,
  onClose,
}: Readonly<{
  isOpen: boolean;
  onClose: () => void;
}>) {
  const programs = getPrograms();
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);

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
            className='relative bg-cpMagenta px-[28px] py-[36px] rounded-[23.12px] w-full max-w-lg'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className='top-[1rem] right-[1rem] absolute text-[24px] text-white'
            >
              &times;
            </button>
            <h2 className='mb-4 pb-[30px] font-tan-ashford font-bold text-[18px] text-white lowercase'>
              Enrollment Form
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <label
                htmlFor='fullName'
                className='block ml-[10px] font-inclusive text-[12px] text-white'
              >
                Full Name
              </label>
              <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder='Full Name'
                required
                className='mt-[7px] mb-[18px] px-4 py-2 border rounded-[30.42px] outline-cpPink w-full font-inclusive text-[10px] text-black placeholder:text-[#C5C5C5]'
              />

              {/* Email */}
              <label
                htmlFor='email'
                className='block ml-[10px] font-inclusive text-[12px] text-white'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                required
                className='mt-[7px] mb-[18px] px-4 py-2 border rounded-[30.42px] outline-cpPink w-full font-inclusive text-[10px] text-black placeholder:text-[#C5C5C5]'
              />

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
                    className='mt-[7px] mb-[18px] px-4 py-2 border rounded-l-[30.42px] outline-cpPink w-full font-inclusive text-[10px] text-black'
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
                    className='mt-[7px] mb-[18px] px-4 py-2 border rounded-r-[30.42px] outline-cpPink w-full font-inclusive text-[10px] text-black'
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
                className='block ml-[10px] font-inclusive text-[12px] text-white'
              >
                Address
              </label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Address'
                required
                className='mt-[7px] mb-[18px] px-4 py-2 border rounded-[30.42px] outline-cpPink w-full font-inclusive text-[10px] text-black placeholder:text-[#C5C5C5]'
              />

              {/* Program Dropdown */}
              <label
                htmlFor='program'
                className='block ml-[10px] font-inclusive text-[12px] text-white'
              >
                Which program are you enrolling in?
              </label>
              <div className='relative mt-[7px] mb-[18px]'>
                <Listbox value={selectedProgram} onChange={setSelectedProgram}>
                  <ListboxButton className='flex justify-between items-center bg-white px-4 py-2 rounded-[30.42px] w-full font-inclusive text-[10px] text-black'>
                    {selectedProgram}
                    <ChevronUpDownIcon className='ml-2 w-4 h-4' />
                  </ListboxButton>
                  <ListboxOptions className='z-10 absolute bg-white shadow-lg mt-2 rounded-[20px] w-full max-h-60 overflow-auto font-inclusive text-[10px] text-black'>
                    {programs.map((program) => (
                      <ListboxOption
                        key={program}
                        value={program}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2 ${
                            active ? 'bg-cpPink text-white' : ''
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className='flex justify-between'>
                            <span className={selected ? 'font-bold' : ''}>
                              {program}
                            </span>
                            {selected && (
                              <CheckIcon className='w-4 h-4 text-cpPink' />
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
                className='block ml-[10px] font-inclusive text-[12px] text-white'
              >
                How would you like to make payment?
              </label>
              <div className='relative mt-[7px] mb-[18px]'>
                <Listbox value={selectedPayment} onChange={setSelectedPayment}>
                  <ListboxButton className='flex justify-between items-center bg-white px-4 py-2 rounded-[30.42px] outline-cpPink w-full font-inclusive text-[10px] text-black'>
                    {selectedPayment}
                    <ChevronUpDownIcon className='ml-2 w-4 h-4' />
                  </ListboxButton>
                  <ListboxOptions className='z-10 absolute bg-white shadow-lg mt-2 rounded-[20px] w-full max-h-60 overflow-auto font-inclusive text-[10px] text-black'>
                    {paymentMethods.map((method) => (
                      <ListboxOption
                        key={method}
                        value={method}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2 ${
                            active ? 'bg-cpPink text-white' : ''
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className='flex justify-between'>
                            <span className={selected ? 'font-bold' : ''}>
                              {method}
                            </span>
                            {selected && (
                              <CheckIcon className='w-4 h-4 text-cpPink' />
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
                className='flex justify-center items-center bg-cpPink hover:bg-opacity-80 px-[38px] py-[12px] rounded-[30.42px] font-tan-ashford font-bold text-[10.44px] text-white lowercase leading-[100%]'
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
