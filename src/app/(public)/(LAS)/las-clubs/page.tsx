import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import LasClubsClient from './las-clubs-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('las-clubs');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS Clubs | LAS For Life',
    description:
      'O LASclubs conecta os principais médicos especialistas do Brasil através de eventos focados em ciência e troca de experiências.',
  });
}

export default async function LasClubsPage() {
  const pageData = await getPageBySlug('las-clubs');
  return <LasClubsClient pageData={pageData} />;
}
