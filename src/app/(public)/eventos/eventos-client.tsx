'use client';

import Footer from '@/components/footer';
import EducationBanner from './_components/education-hero';
import Program from './_components/program';
import EventsPast from './_components/past-events';
import Events from './_components/next-events';
import EducationPillar from './_components/education-pillar';
import EducationProgram from './_components/education-program';
import EducationTrails from './_components/education-trails';
import CommercialEducationTrack from './_components/commercial-education-track';
import { WPEventoNode } from '@/lib/types/events';

interface EventosClientProps {
  eventos: WPEventoNode[];
}

export default function Home({ eventos }: EventosClientProps) {
  return (
    <>
      <EducationBanner />
      <EducationPillar />
      <EducationProgram />
      <Program />
      <EducationTrails />
      <CommercialEducationTrack />
      <Events eventos={eventos} />
      <EventsPast eventos={eventos} />
      <Footer />
    </>
  );
}
