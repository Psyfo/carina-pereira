import '@/styles/globals.css';

import ClientProviders from '@/components/ClientProviders';
import Navigation from '@/components/Navigation/Navigation';
import Announcement from '@/components/Announcement/Announcement';

import Footer from '../../components/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Carina Pereira',
              url: 'https://carinapereira.com',
              image: 'https://carinapereira.com/images/landing/hero/hero.png',
              sameAs: [
                'https://www.instagram.com/carinapereirainternational/',
                'https://www.facebook.com/carinapereirainternational/',
              ],
              jobTitle: 'Makeup Artist & Beauty Educator',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '13 Drama Street, Somerset West',
                addressLocality: 'Cape Town',
                addressRegion: 'Western Cape',
                postalCode: '7130',
                addressCountry: 'ZA',
              },
              description:
                'Carina Pereira is a renowned makeup artist offering professional training, workshops, and beauty education through certified courses.',
              knowsAbout: [
                'Makeup Artistry',
                'Makeup Courses',
                'Beauty Training',
                'Makeup Workshops',
                'Cosmetic Techniques',
              ],
              brand: {
                '@type': 'Brand',
                name: 'Carina Pereira International',
                url: 'https://carinapereira.com',
                logo: 'https://carinapereira.com/images/favicon.svg',
              },
            }),
          }}
        />
      </head>
      <body>
        <ClientProviders /> {/* Client-side logic moved here */}
        <Announcement />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
