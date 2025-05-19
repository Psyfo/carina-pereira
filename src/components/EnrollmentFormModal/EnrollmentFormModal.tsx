"use client";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';

const programs = [
  'Pro Makeup Course',
  'Express Makeup Course',
  'Hairstyling Course',
  'Online Express Makeup Course',
];

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
              Enrollment Form
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

              {/* Program Dropdown */}
              <label
                htmlFor='program'
                className='block font-inclusive text-[12px] text-white ml-[10px]'
              >
                Which program are you enrolling in?
              </label>
              <div className='relative mt-[7px] mb-[18px]'>
                <Listbox value={selectedProgram} onChange={setSelectedProgram}>
                  <ListboxButton className='w-full bg-white text-black rounded-[30.42px] py-2 px-4 text-[10px] font-inclusive flex justify-between items-center'>
                    {selectedProgram}
                    <ChevronUpDownIcon className='h-4 w-4 ml-2' />
                  </ListboxButton>
                  <ListboxOptions className='absolute z-10 mt-2 w-full bg-white text-black rounded-[20px] shadow-lg max-h-60 overflow-auto text-[10px] font-inclusive'>
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
                              <CheckIcon className='h-4 w-4 text-cpPink' />
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
                className='block font-inclusive text-[12px] text-white ml-[10px]'
              >
                How would you like to make payment?
              </label>
              <div className='relative mt-[7px] mb-[18px]'>
                <Listbox value={selectedPayment} onChange={setSelectedPayment}>
                  <ListboxButton className='w-full bg-white text-black rounded-[30.42px] py-2 px-4 text-[10px] font-inclusive flex justify-between items-center outline-cpPink'>
                    {selectedPayment}
                    <ChevronUpDownIcon className='h-4 w-4 ml-2' />
                  </ListboxButton>
                  <ListboxOptions className='absolute z-10 mt-2 w-full bg-white text-black rounded-[20px] shadow-lg max-h-60 overflow-auto text-[10px] font-inclusive'>
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
                              <CheckIcon className='h-4 w-4 text-cpPink' />
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
