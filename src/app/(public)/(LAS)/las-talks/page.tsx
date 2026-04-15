import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import LasTalksClient from './las-talks-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('las-talks');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS Talks | LAS For Life',
    description:
      'O LAStalks é um evento exclusivo com KOLs ministrando aulas a médicos convidados em formato de jantar científico.',
  });
}

export default async function LasTalksPage() {
  const pageData = await getPageBySlug('las-talks');
  return <LasTalksClient pageData={pageData} />;
}
