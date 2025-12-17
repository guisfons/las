'use client';

import Footer from '@/components/footer';
import TechnicalHero from './_components/technical-hero';
import TechnicalForm from './_components/technical-form';
import WhatAreTechnicalForms from './_components/what-are-technical';

export default function ServicosTecnicosClient() {
  return (
    <>
      <TechnicalHero />
      <WhatAreTechnicalForms />
      <TechnicalForm />
      <Footer />
    </>
  );
}
