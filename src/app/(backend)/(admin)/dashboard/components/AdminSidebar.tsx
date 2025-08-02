import Link from 'next/link';

export function AdminSidebar() {
  return (
    <aside className='w-64 bg-gray-100 border-r px-6 py-8'>
      <nav className='space-y-4'>
        <Link
          href='/dashboard'
          className='block text-gray-700 hover:text-blue-600 font-medium'
        >
          Dashboard
        </Link>
        <Link
          href='/dashboard/users'
          className='block text-gray-700 hover:text-blue-600 font-medium'
        >
          Users
        </Link>
        <Link
          href='/dashboard/courses'
          className='block text-gray-700 hover:text-blue-600 font-medium'
        >
          Courses
        </Link>
        <Link
          href='/dashboard/special'
          className='block text-gray-700 hover:text-blue-600 font-medium'
        >
          Special
        </Link>
      </nav>
    </aside>
  );
}
