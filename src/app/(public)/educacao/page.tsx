import { Metadata } from 'next';
import EducacaoClient from './educacao-client';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('educacao');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Educação | LAS FOR LIFE',
    description:
      'Promovemos educação médica continuada e trilhas de conhecimento para transformar o mercado da saúde.',
  });
}

export default function EducacaoPage() {
  return <EducacaoClient />;
}
