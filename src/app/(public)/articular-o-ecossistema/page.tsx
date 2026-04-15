import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import ArticulateClient from './articular-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('articular-o-ecossistema');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Articular o Ecossistema | LAS For Life',
    description:
      'Unimos diferentes agentes do setor para pensar, cocriar e construir um sistema de saúde mais eficiente, acessível e integrado.',
  });
}

export default async function ArticulateEcosystemPage() {
  const pageData = await getPageBySlug('articular-o-ecossistema');
  return <ArticulateClient pageData={pageData} />;
}
