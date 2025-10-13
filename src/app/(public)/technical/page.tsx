'use client';

import Footer from '@/components/footer';
import TechnicalHero from './_components/technical-hero';
import TechnicalForm from './_components/technical-form';
import WhatAreTechnicalForms from './_components/what-are-technical';

export default function Home() {
  return (
    <>
      <TechnicalHero></TechnicalHero>
      <WhatAreTechnicalForms></WhatAreTechnicalForms>
      <TechnicalForm></TechnicalForm>
      <Footer></Footer>
    </>
  );
}
