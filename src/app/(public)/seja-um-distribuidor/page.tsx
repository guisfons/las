import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import SejaUmDistribuidorClient from './seja-um-distribuidor-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('seja-um-distribuidor');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Seja um Distribuidor | LAS For Life',
    description:
      'Quer distribuir nossos produtos? Entre em contato com a LAS For Life.',
  });
}

export default async function SejaUmDistribuidorPage() {
  const pageData = await getPageBySlug('seja-um-distribuidor');
  return <SejaUmDistribuidorClient pageData={pageData} />;
}
