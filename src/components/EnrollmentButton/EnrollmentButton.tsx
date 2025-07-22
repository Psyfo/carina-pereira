'use client';
import EnrollmentFormModal from '@/components/EnrollmentFormModal/EnrollmentFormModal';
import WomensDayFormModal from '../WomensDayFormModal/WomensDayFormModal';
import { useState } from 'react';

interface EnrollmentButtonProps {
  label?: string;
  formType?: 'regular' | 'womensDay';
}

export default function EnrollmentButton({
  label = 'enroll now',
  formType = 'regular',
}: EnrollmentButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'
      >
        {label}
      </button>
      {formType === 'regular' ? (
        <EnrollmentFormModal isOpen={open} onClose={() => setOpen(false)} />
      ) : (
        <WomensDayFormModal isOpen={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
