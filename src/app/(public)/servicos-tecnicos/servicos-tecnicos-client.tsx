'use client';

import Footer from '@/components/footer';
import TechnicalHero from './_components/technical-hero';
import TechnicalForm from './_components/technical-form';
import WhatAreTechnicalForms from './_components/what-are-technical';
import { getPageBySlug } from '@/lib/api/pages';
import { useQuery } from '@tanstack/react-query';

export default function ServicosTecnicosClient() {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', 'servicos-tecnicos'],
    queryFn: () => getPageBySlug('servicos-tecnicos'),
  });

  const acfData = pageData?.pageTechnical;

  if (isLoading) return null;

  return (
    <>
      <TechnicalHero acfData={acfData?.hero} />
      <WhatAreTechnicalForms acfData={acfData?.whatIs} />
      <TechnicalForm acfData={acfData?.form} />
      <Footer />
    </>
  );
}
