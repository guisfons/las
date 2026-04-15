import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import LasSportsClient from './las-sports-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('las-sports');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS Sports | LAS For Life',
    description:
      'O LASsports acredita no esporte como papel fundamental na formação de uma sociedade melhor.',
  });
}

export default async function LasSportsPage() {
  const pageData = await getPageBySlug('las-sports');
  return <LasSportsClient pageData={pageData} />;
}
