import { Metadata } from 'next';
import HomeClient from './home-client';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('home');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS For Life | Home',
    description: 'LAS For Life – Saúde para a vida.',
  });
}

export default async function Home() {
  // Fetch ACF data from WordPress using the 'home' slug
  const pageData = await getPageBySlug('home');

  return <HomeClient pageData={pageData} />;
}
