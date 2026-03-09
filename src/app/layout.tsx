import '@/styles/globals.css';

import ClientProviders from '@/components/ClientProviders';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
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
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ClientProviders />
        {children}
      </body>
    </html>
  );
}
