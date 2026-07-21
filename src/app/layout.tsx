import './styles/globals.scss';

import { GoogleTagManager } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/navbar';
import { getPrimaryMenu } from '@/lib/api/globals';
import { getLocale } from 'next-intl/server';
import { Exo_2 } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

import QueryProvider from './query-provider';

// import SmoothScrollProvider from '@/components/smooth-scroll-provider';

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://lasforlife.com.br',
  ),
  title: {
    default: 'LAS For Life | Saúde para a vida',
    template: '%s | LAS For Life',
  },
  description: 'LAS For Life – Saúde para a vida.',
  verification: {
    google: 'gOdDm5gusQ5L0ct9RtMDyCaeKwi6F_10ytEGyudd8_c',
  },
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  const primaryMenu = await getPrimaryMenu();

  return (
    <html lang={locale}>
      <body className={`${exo2.variable} antialiased`}>
        <QueryProvider>
          <NextIntlClientProvider>
            <Navbar wpMenu={primaryMenu} />
            {/* <SmoothScrollProvider> */}
            {children}
            {/* </SmoothScrollProvider> */}
            <Toaster />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
      <GoogleTagManager gtmId="GTM-K38Z8QDS" />
    </html>
  );
}
