import Footer from '@/components/common/Footer';
import SearchOverlay from '@/components/common/SearchOverlay';
import Header from '@/components/common/Header';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mannheimer Swartling - högkvalitativ affärsjuridisk rådgivning',
  description: 'Mannheimer Swartling - högkvalitativ affärsjuridisk rådgivning'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <link
          rel='alternate'
          href='https://www.mannheimerswartling.se/'
          hrefLang='sv'
        />
        <link
          rel='alternate'
          href='https://www.mannheimerswartling.se/en/'
          hrefLang='en'
        />
        <meta
          name='description'
          content='På Mannheimer Swartling möter du ett team med ett tydligt mål – att leverera den mest högkvalitativa affärsjuridiska rådgivningen.'
        />
        <meta property='og:locale' content='sv_SE' />
        <meta property='og:locale:alternate' content='en_GB' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Mannheimer Swartling - högkvalitativ affärsjuridisk rådgivning'
        />
        <meta
          property='og:description'
          content='På Mannheimer Swartling möter du ett team med ett tydligt mål – att leverera den mest högkvalitativa affärsjuridiska rådgivningen.'
        />
        <meta property='og:url' content='https://www.mannheimerswartling.se/' />
        <meta property='og:site_name' content='Mannheimer Swartling' />
        <meta
          property='article:publisher'
          content='https://www.facebook.com/mannheimerswartling'
        />
        <meta
          property='article:modified_time'
          content='2024-08-21T07:33:59+00:00'
        />
        <meta
          property='og:image'
          content='https://www.mannheimerswartling.se/app/uploads/2021/05/mannheimer-swartling-entrance-logotype.jpeg'
        />
        <meta property='og:image:width' />
        <meta property='og:image:height' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
      </head>
      <body>
        <SearchOverlay />
        <Header />
        {children}
        <Footer />

        <Script
          id='ma_scripts-js-extra'
          dangerouslySetInnerHTML={{
            __html: `
            var siteData = {
                "home": "https://www.mannheimerswartling.se/",
                "restUrl": "https://www.mannheimerswartling.se/wp-json/",
                "themeUrl": "https://www.mannheimerswartling.se/app/themes/mannheimerswartling-theme",
                "newsUrl": "https://www.mannheimerswartling.se/nyheter/",
                "langCode": "sv",
                "translations": {
                    "showMediaButton": "Ladda fler bilder",
                    "nextPageButton": "Nästa sida",
                    "prevPageButton": "Föregående sida",
                    "categoryLabel": "Kategori",
                    "industryLabel": "Bransch",
                    "businessGroupLabel": "Verksamhetsområde",
                    "yearLabel": "År",
                    "positionLabel": "Position/Avdelning",
                    "officeLabel": "Kontor",
                    "searchPlaceholderNews": "Sök efter nyheter",
                    "searchPlaceholderCoworkers": "Sök efter medarbetare",
                    "resetFiltersText": "Rensa filter",
                    "noResultsTitle": "Hittade inga inlägg som matchar dina sökkriterier",
                    "showCoworkerBtnToggle": "Visa profiltext",
                    "hideCoworkerBtnToggle": "Göm profiltext"
                }
            };
          `
          }}
          strategy='afterInteractive'
        />
        <Script
          src='https://www.mannheimerswartling.se/app/themes/mannheimerswartling-theme/assets/js/dist/main.production.js?ver=0.11.7.7'
          id='ma_scripts-js'
        />
      </body>
    </html>
  );
}
