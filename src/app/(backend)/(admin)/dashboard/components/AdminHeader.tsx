'use client';

import { signOut } from 'next-auth/react';

import { useToast } from '@/hooks/use-toast';

export function AdminHeader() {
  const { toast } = useToast();

  const handleLogout = async () => {
    toast({
      title: 'Logging out...',
      description: 'You are being signed out.',
    });
    await signOut();
  };

  return (
    <header className='bg-white border-b px-6 py-4 flex justify-between items-center'>
      <h1 className='text-xl font-bold text-gray-800'>Admin Panel</h1>
      <button
        className='ml-4 px-4 py-2 rounded-md bg-red-500 text-white font-semibold shadow-sm transition
                   hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300'
        type='button'
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}
