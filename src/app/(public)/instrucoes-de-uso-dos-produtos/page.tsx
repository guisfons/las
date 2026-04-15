import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import InstrucoesClient from './instrucoes-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('instrucoes-de-uso-dos-produtos');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Instruções de Uso dos Produtos | LAS For Life',
    description:
      'Baixe as instruções de uso dos produtos LAS For Life: Neurosign, EasyCore, CellColt, Fziomed e mais.',
  });
}

export default async function InstrucoesPage() {
  const pageData = await getPageBySlug('instrucoes-de-uso-dos-produtos');
  return <InstrucoesClient pageData={pageData} />;
}
