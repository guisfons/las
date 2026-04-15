'use client';

import Footer from '@/components/footer';
import TechnicalHero from './_components/technical-hero';
import TechnicalForm from './_components/technical-form';
import WhatAreTechnicalForms from './_components/what-are-technical';
import { WPPageNode } from '@/lib/types/pages';

interface ServicosTecnicosClientProps {
  pageData: WPPageNode | null;
}

export default function ServicosTecnicosClient({
  pageData,
}: ServicosTecnicosClientProps) {
  const acfData = pageData?.pageTechnical;

  return (
    <>
      <TechnicalHero acfData={acfData?.hero} />
      <WhatAreTechnicalForms acfData={acfData?.whatIs} />
      <TechnicalForm acfData={acfData?.form} />
      <Footer />
    </>
  );
}
