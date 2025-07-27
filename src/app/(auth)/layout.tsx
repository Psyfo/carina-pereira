import '@/styles/globals.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gray-100 flex items-center justify-center'>
        {children}
      </body>
    </html>
  );
}
