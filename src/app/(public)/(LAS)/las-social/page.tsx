import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import LasSocialClient from './las-social-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('las-social');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS Social | LAS For Life',
    description:
      'A LASsocial apoia programas sociais e educacionais com parte do lucro mensal da LAS For Life.',
  });
}

export default async function LasSocialPage() {
  const pageData = await getPageBySlug('las-social');
  return <LasSocialClient pageData={pageData} />;
}
