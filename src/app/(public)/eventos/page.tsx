import EventosClient from './eventos-client';
import { getAllEventos } from '@/lib/api/events';

export const metadata = {
  title: 'Eventos',
};

export default async function EventosPage() {
  const eventos = await getAllEventos();
  return <EventosClient eventos={eventos} />;
}
