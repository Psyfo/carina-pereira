'use client';
import EnrollmentFormModal from '@/components/EnrollmentFormModal/EnrollmentFormModal';
import { useState } from 'react';

// EnrollmentButton.tsx

interface EnrollmentButtonProps {
  label?: string;
}

export default function EnrollmentButton({
  label = 'enroll now',
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
      <EnrollmentFormModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
