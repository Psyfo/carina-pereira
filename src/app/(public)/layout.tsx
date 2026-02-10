import Navigation from '@/components/Navigation/Navigation';
import Announcement from '@/components/Announcement/Announcement';
import Footer from '@/components/Footer/Footer';

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Announcement />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
