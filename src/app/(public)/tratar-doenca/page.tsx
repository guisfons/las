import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import TratarDoencaClient from './tratar-doenca-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('treating-disease');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Tratar a Doença | LAS For Life',
    description:
      'Cuidamos de pessoas, não apenas de diagnósticos. Soluções médicas precisas para quem precisa.',
  });
}

export default async function TratarDoencaPage() {
  const pageData = await getPageBySlug('treating-disease');
  return <TratarDoencaClient pageData={pageData} />;
}
