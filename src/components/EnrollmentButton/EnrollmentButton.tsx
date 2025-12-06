'use client';
import { useState } from 'react';

import EnrollmentFormModal from '@/components/EnrollmentFormModal/EnrollmentFormModal';

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
        className='inline-block bg-cpPink hover:bg-cpPink/90 active:bg-cpPink/80 shadow-md hover:shadow-lg active:shadow-sm px-[35px] py-[8px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpPink/30 font-inclusive text-[16.5px] leading-[1.5] hover:scale-105 active:scale-95 transition-all duration-200 ease-out cursor-pointer'
      >
        {label}
      </button>
      <EnrollmentFormModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
