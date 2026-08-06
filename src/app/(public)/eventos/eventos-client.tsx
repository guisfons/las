'use client';

import Footer from '@/components/footer';
import EventsPast from './_components/past-events';
import Events from './_components/next-events';
import { WPEventoNode } from '@/lib/types/events';

interface EventosClientProps {
  eventos: WPEventoNode[];
}

export default function Home({ eventos }: EventosClientProps) {
  return (
    <>
      <Events eventos={eventos} />
      <EventsPast eventos={eventos} />
      <Footer />
    </>
  );
}
