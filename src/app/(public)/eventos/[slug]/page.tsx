import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEventoBySlug, getAllEventos } from '@/lib/api/events';
import { getAllProducts } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import EventoPageClient from './page-client';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const eventos = await getAllEventos();
  return eventos.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const evento = await getEventoBySlug(params.slug);
  if (!evento) return { title: 'Evento não encontrado' };

  const acf = evento.eventoacf;
  const description =
    evento.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) ||
    `${evento.title} — ${acf?.dateNumber} de ${acf?.month}${acf?.year ? ` de ${acf.year}` : ''}${acf?.local ? ` | ${acf.local}` : ''}`;

  return {
    title: `${evento.title} | LAS For Life`,
    description,
    openGraph: {
      title: evento.title,
      description,
      images: acf?.img?.node?.sourceUrl
        ? [{ url: acf.img.node.sourceUrl }]
        : [],
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

  return (
    <EventoPageClient
      evento={evento}
      outrosEventos={outrosEventos}
      produtos={products}
    />
  );
}
