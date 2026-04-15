import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import LasXperienceClient from './las-xperience-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('las-xperience');
  return generateSeoMetadata(pageData?.seo, {
    title: 'LAS Xperience | LAS For Life',
    description:
      'A LASxperience é uma jornada imersiva levando médicos para conhecer as fábricas das marcas parceiras.',
  });
}

export default async function LasXperiencePage() {
  const pageData = await getPageBySlug('las-xperience');
  return <LasXperienceClient pageData={pageData} />;
}
