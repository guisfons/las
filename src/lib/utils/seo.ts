import { Metadata } from 'next';
import { WPSeo } from '@/lib/types/pages';

/**
 * Converts Yoast SEO data from WPGraphQL SEO plugin into a Next.js Metadata object.
 * Falls back to provided defaults when WP data is not available.
 */
export function generateSeoMetadata(
  seo: WPSeo | undefined | null,
  defaults: {
    title?: string;
    description?: string;
    image?: string;
  } = {},
): Metadata {
  const title = seo?.title || defaults.title || 'LAS For Life';
  const description =
    seo?.metaDesc || defaults.description || 'LAS For Life – Saúde para a vida.';
  const ogImage = seo?.opengraphImage?.node?.sourceUrl || defaults.image;
  const twitterImage = seo?.twitterImage?.node?.sourceUrl || ogImage;

  return {
    title,
    description,
    ...(seo?.canonical ? { alternates: { canonical: seo.canonical } } : {}),
    openGraph: {
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      ...(twitterImage ? { images: [twitterImage] } : {}),
    },
  };
}
