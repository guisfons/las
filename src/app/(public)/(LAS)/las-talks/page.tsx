'use client';

import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articular-o-ecossistema/_components/grid-pictures';
import Footer from '@/components/footer';
import { getPageBySlug } from '@/lib/api/pages';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', 'las-talks'],
    queryFn: () => getPageBySlug('las-talks'),
  });
  const acfData = pageData?.pageLasTalks;

  if (isLoading) return null;
  return (
    <>
      <HeaderLas
        logo={
          acfData?.howWeDoItToday?.logo?.node?.sourceUrl || '/las-talks.png'
        }
        description={
          acfData?.howWeDoItToday?.description?.map((d) => d.text || '') || [
            'O LAStalks é um evento exclusivo em que enviamos um KOL (Key Opinion Leader) para ministrar uma aula a um grupo de médicos convidados.  O encontro acontece em formato de jantar, promovendo atualização científica e networking em um ambiente intimista.',
          ]
        }
      ></HeaderLas>

      <GridPictures
        pictures={[
          '/images/las-screen/grid-las-talks-1.png',
          '/images/las-screen/grid-las-talks-2.png',
          '/images/las-screen/grid-las-talks-3.png',
          '/images/las-screen/grid-las-talks-4.png',
        ]}
      />

      <Footer />
    </>
  );
}
