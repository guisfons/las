'use client';

import Footer from '@/components/footer';
import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articular-o-ecossistema/_components/grid-pictures';
import { getPageBySlug } from '@/lib/api/pages';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', 'las-xperts'],
    queryFn: () => getPageBySlug('las-xperts'),
  });
  const acfData = pageData?.pageLasXperts;

  if (isLoading) return null;
  return (
    <>
      <HeaderLas
        logo={
          acfData?.howWeDoItToday?.logo?.node?.sourceUrl || '/las-xperts.png'
        }
        description={
          acfData?.howWeDoItToday?.description?.map((d) => d.text || '') || [
            'Nossos produtos nas mãos dos médicos, em projetos de Medicina Baseada em Evidência. Foram 32 Estudos de Caso publicados em 2024.',
          ]
        }
      ></HeaderLas>

      <GridPictures
        pictures={[
          '/images/las-screen/grid-las-xperts-1.png',
          '/images/las-screen/grid-las-xperts-2.png',
          '/images/las-screen/grid-las-xperts-3.png',
          '/images/las-screen/grid-las-xperts-4.png',
        ]}
      />

      <Footer />
    </>
  );
}
