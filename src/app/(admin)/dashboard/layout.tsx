import '@/styles/globals.css';

import { AdminFooter } from './components/AdminFooter';
import { AdminHeader } from './components/AdminHeader';
import { AdminSidebar } from './components/AdminSidebar';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
