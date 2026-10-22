import createNextIntlPlugin from 'next-intl/plugin';
import siteAntigo from './redirects-site-antigo.mjs';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Endereços de versões anteriores do site que o Google ainda rastreia e que
  // davam 404 (Search Console, 21/10/2026). Redirecionamento permanente para a
  // página equivalente de hoje.
  async redirects() {
    const antigos = [
      ['/generate-health', '/gerar-saude'],
      ['/treating-disease', '/tratar-doenca'],
      ['/technical', '/servicos-tecnicos'],
      ['/sobre-nos', '/'],
      ['/products/13', '/produtos'],
      ['/produtos/oxiplexap', '/produtos/oxiplex-ap'],
      ['/produtos/oxiplexiu', '/produtos/oxiplex-iu'],
      ['/produtos/motor-acf', '/produtos/motor-cirurgico-acf-sign'],
      ['/produtos/rfa---ablacao-por-radiofrequencia', '/produtos/rfa-ablacao-por-radiofrequencia'],
      ['/produtos/rfa%E2%80%94ablacao-por-radiofrequencia', '/produtos/rfa-ablacao-por-radiofrequencia'],
    ];
    return [...antigos, ...siteAntigo].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async rewrites() {
    return [
      {
        source: '/wp-content/:path*',
        destination:
          'https://mediumblue-swallow-341910.hostingersite.com/wp-content/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
