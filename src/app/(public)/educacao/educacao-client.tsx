'use client';

import Footer from '@/components/footer';
import EducationBanner from './_components/education-hero';
import Program from './_components/program';
import EducationPillar from './_components/education-pillar';
import EducationProgram from './_components/education-program';
import EducationTrails from './_components/education-trails';
import CommercialEducationTrack from './_components/commercial-education-track';

export default function EducacaoClient() {
  return (
    <>
      <EducationBanner />
      <EducationPillar />
      <EducationProgram />
      <Program />
      <EducationTrails />
      <CommercialEducationTrack />
      <Footer />
    </>
  );
}
