import '@/styles/globals.css';

import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/auth/auth';

import { AdminFooter } from './dashboard/components/AdminFooter';
import { AdminHeader } from './dashboard/components/AdminHeader';
import { AdminSidebar } from './dashboard/components/AdminSidebar';

export const metadata = {
  title: 'Admin Dashboard',
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <AdminHeader />
      <div className='flex flex-1'>
        <AdminSidebar />
        <main className='flex-1 bg-gray-50 p-6'>{children}</main>
      </div>
      <AdminFooter />
    </div>
  );
}
