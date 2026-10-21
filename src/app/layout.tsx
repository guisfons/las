import './styles/globals.scss';

import { GoogleTagManager } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/navbar';
import { getPrimaryMenu } from '@/lib/api/globals';
import { Exo_2 } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { OG_PADRAO, SITE_URL, urlDoSite } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { organizacao, site } from '@/lib/seo/organizacao';
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

/**
 * Endereço canônico de toda página: o caminho dela no www, sem parâmetros.
 * Sem isso o Google indexava /produtos?brand=MDL como página à parte. Página que
 * declarar o próprio canonical sobrescreve este.
 */
export async function generateMetadata(): Promise<Metadata> {
  const caminho = headers().get('x-pathname') || '/';
  return { ...metadata, alternates: { canonical: urlDoSite(caminho) } };
}

const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'LAS FOR LIFE | Saúde para a vida',
    template: '%s | LAS FOR LIFE',
  },
  description: 'LAS FOR LIFE – Saúde para a vida.',
  openGraph: {
    siteName: 'LAS FOR LIFE',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: OG_PADRAO, width: 1200, height: 630 }],
  },
  verification: {
    google: 'gOdDm5gusQ5L0ct9RtMDyCaeKwi6F_10ytEGyudd8_c',
  },
};

export default async function LocaleLayout({ children }: Props) {
  const primaryMenu = await getPrimaryMenu();

  return (
    // O site é em português. O next-intl veio do modelo com inglês como padrão,
    // e o lang dele escrevia "en" em todas as páginas.
    <html lang="pt-BR">
      <body className={`${exo2.variable} antialiased`}>
        <JsonLd dados={[organizacao, site]} />
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
