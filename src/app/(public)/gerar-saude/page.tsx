import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import GerarSaudeClient from './gerar-saude-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('generate-health');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Gerar Saúde | LAS For Life',
    description:
      'Transformar saúde em algo que acontece todo dia, não só no consultório.',
  });
}

export default async function GerarSaudePage() {
  const pageData = await getPageBySlug('generate-health');
  return <GerarSaudeClient pageData={pageData} />;
}
