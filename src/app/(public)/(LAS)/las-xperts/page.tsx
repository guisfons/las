import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import LasXpertsClient from './las-xperts-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('las-xperts');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS Xperts | LAS For Life',
    description:
      'Nossos produtos nas mãos dos médicos, em projetos de Medicina Baseada em Evidência.',
  });
}

export default async function LasXpertsPage() {
  const pageData = await getPageBySlug('las-xperts');
  return <LasXpertsClient pageData={pageData} />;
}
