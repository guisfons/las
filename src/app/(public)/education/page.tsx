'use client';

import Footer from '@/components/footer';
import EducationBanner from './_components/education-hero';
import Program from './_components/program';
import Events from './_components/next-events';
import EducationPillar from './_components/education-pillar';
import EducationProgram from './_components/education-program';
import EducationTrails from './_components/education-trails';
import CommercialEducationTrack from './_components/commercial-education-track';

export default function Home() {
  return (
    <>
      <EducationBanner />
      <EducationPillar />
      <EducationProgram />
      <Program />
      <EducationTrails />
      <CommercialEducationTrack />
      <Events />
      <Footer />
    </>
  );
}
