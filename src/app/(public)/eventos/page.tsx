import { Metadata } from 'next';
import EventosClient from './eventos-client';
import { getAllEventos } from '@/lib/api/events';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import { JsonLd } from '@/components/json-ld';
import { dadosDosProximosEventos } from '@/lib/seo/evento';
import { trilha } from '@/lib/seo/organizacao';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('eventos');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Eventos | LAS FOR LIFE',
    description:
      'Agenda de eventos da LAS FOR LIFE: LAStalks, LASclubs, LASxperts e os congressos de ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço em que estamos.',
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
  return (
    <>
      <JsonLd
        dados={[
          ...dadosDosProximosEventos(eventos),
          trilha([
            ['Início', '/'],
            ['Eventos', '/eventos'],
          ]),
        ]}
      />
      <EventosClient eventos={eventos} initialCategory={initialCategory} />
    </>
  );
}
