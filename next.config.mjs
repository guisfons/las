import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/wp-content/:path*',
        destination: 'https://mediumblue-swallow-341910.hostingersite.com/wp-content/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
