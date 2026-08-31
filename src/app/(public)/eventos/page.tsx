import { Metadata } from 'next';
import EventosClient from './eventos-client';
import { getAllEventos } from '@/lib/api/events';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('eventos');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Eventos | LAS For Life',
    description: 'Confira os eventos promovidos pela LAS For Life.',
  });
}

export default async function EventosPage({
  searchParams,
}: {
  searchParams?: { categoria?: string; especialidade?: string };
}) {
  const eventos = await getAllEventos();
  const initialCategory =
    searchParams?.categoria || searchParams?.especialidade;
  return <EventosClient eventos={eventos} initialCategory={initialCategory} />;
}
