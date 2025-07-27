import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carina Pereira | Admin Dashboard',
  description: 'Welcome to the admin page.',
};

console.log('Admin route hit!');

export default function AdminPage() {
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin page.</p>
    </main>
  );
}
