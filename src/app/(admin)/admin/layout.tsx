import '../../globals.css';

export const metadata = {
  title: 'Admin Panel',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen flex flex-col bg-gray-50'>
          <header className='bg-white shadow px-6 py-4 flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-gray-800'>Admin Panel</h1>
          </header>
          <div className='flex flex-1'>
            <nav className='w-64 bg-gray-100 border-r px-4 py-6'>
              <ul className='space-y-4'>
                <li>
                  <a
                    href='/admin'
                    className='text-gray-700 hover:text-blue-600 font-medium'
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/users'
                    className='text-gray-700 hover:text-blue-600 font-medium'
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/settings'
                    className='text-gray-700 hover:text-blue-600 font-medium'
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
            <main className='flex-1 p-8'>{children}</main>
          </div>
          <footer className='bg-white border-t px-6 py-4 text-center text-gray-500'>
            &copy; {new Date().getFullYear()} Carina Pereira
          </footer>
        </div>
      </body>
    </html>
  );
}
