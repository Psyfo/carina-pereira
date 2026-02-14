import { Metadata } from 'next';
import NotFoundClient from './components/NotFoundClient';

export const metadata: Metadata = {
  title: 'Page Not Found | Carina Pereira International',
  description:
    "The page you're looking for doesn't exist. Explore our makeup courses, services, and more.",
  icons: '/images/favicon.svg',
};

export default function NotFound() {
  return <NotFoundClient />;
}
