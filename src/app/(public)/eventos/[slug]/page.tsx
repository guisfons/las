import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEventoBySlug, getAllEventos } from '@/lib/api/events';
import { getAllProducts } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import EventoPageClient from './page-client';
import { comMarca, marcaEmMaiusculas } from '@/lib/utils/seo';
import { JsonLd } from '@/components/json-ld';
import { dadosDoEvento } from '@/lib/seo/evento';
import { trilha } from '@/lib/seo/organizacao';
import { OG_PADRAO } from '@/lib/site';

interface Props {
  params: { slug: string };
}

// Sempre gerada na hora. O layout lê o endereço da requisição (canônico), e
// página pré-gerada no build quebra com DYNAMIC_SERVER_USAGE ao revalidar:
// foi o que derrubou o blog em 22/10/2026, num build em que o WordPress respondeu.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const evento = await getEventoBySlug(params.slug);
  if (!evento) return { title: 'Evento não encontrado' };

  const acf = evento.eventoacf;
  const description = marcaEmMaiusculas(
    evento.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) ||
      `${evento.title}, ${acf?.dateNumber} de ${acf?.month}${acf?.year ? ` de ${acf.year}` : ''}${acf?.local ? ` | ${acf.local}` : ''}`,
  );

  return {
    title: evento.title,
    description,
    openGraph: {
      title: comMarca(evento.title),
      description,
      images: [{ url: acf?.img?.node?.sourceUrl || OG_PADRAO }],
    },
  };
}

export default async function EventoPage({ params }: Props) {
  const [evento, todos, wpProducts] = await Promise.all([
    getEventoBySlug(params.slug),
    getAllEventos(),
    getAllProducts(),
  ]);

  if (!evento) notFound();

  const outrosEventos = todos.filter((e) => e.slug !== params.slug).slice(0, 3);
  const products = wpProducts.map(mapWPProductToProduct);

  const dadosEvento = dadosDoEvento(evento);
  return (
    <>
      <JsonLd
        dados={[
          ...(dadosEvento ? [dadosEvento] : []),
          trilha([
            ['Início', '/'],
            ['Eventos', '/eventos'],
            [evento.title, `/eventos/${evento.slug}`],
          ]),
        ]}
      />
      <EventoPageClient
        evento={evento}
        outrosEventos={outrosEventos}
        produtos={products}
      />
    </>
  );
}
