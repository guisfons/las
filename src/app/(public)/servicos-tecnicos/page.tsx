import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import ServicosTecnicosClient from './servicos-tecnicos-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('servicos-tecnicos');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Serviços Técnicos | LAS For Life',
    description: 'Serviços técnicos especializados da LAS For Life.',
  });
}

export default async function ServicosTecnicosPage() {
  const pageData = await getPageBySlug('servicos-tecnicos');
  return <ServicosTecnicosClient pageData={pageData} />;
}
