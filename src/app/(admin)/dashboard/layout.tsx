import '@/styles/globals.css';

import { redirect } from 'next/navigation';

import SessionGuard from '@/components/session-guard';
import { getAuthSession } from '@/lib/auth/auth';

import { AdminFooter } from './components/AdminFooter';
import { AdminHeader } from './components/AdminHeader';
import { AdminSidebar } from './components/AdminSidebar';

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
    <SessionGuard>
      <html lang='en'>
        <body>
          <div className='min-h-screen flex flex-col'>
            <AdminHeader />
            <div className='flex flex-1'>
              <AdminSidebar />
              <main className='flex-1 bg-gray-50 p-6'>{children}</main>
            </div>
            <AdminFooter />
          </div>
        </body>
      </html>
    </SessionGuard>
  );
}
