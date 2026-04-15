'use client';

import Footer from '@/components/footer';
import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articular-o-ecossistema/_components/grid-pictures';
import { WPPageNode } from '@/lib/types/pages';

interface LasXperienceClientProps {
  pageData: WPPageNode | null;
}

export default function LasXperienceClient({
  pageData,
}: LasXperienceClientProps) {
  const acfData = pageData?.pageLasXperience;

  return (
    <>
      <HeaderLas
        logo={
          acfData?.howWeDoItToday?.logo?.node?.sourceUrl || '/las-xperience.png'
        }
        description={
          acfData?.howWeDoItToday?.description?.map((d) => d.text || '') || [
            'A LASxperience é uma jornada imersiva em que levamos os médicos participantes para visitarem as fábricas das Marcas parceiras do nosso Movimento. Eles têm aula in loco com especialistas e discussões de caso – que dão a oportunidade deles verem na prática como os equipamentos são produzidos, têm contato com especialistas para explicar os diferenciais e informações originais dos produtos.',
          ]
        }
      ></HeaderLas>

      <GridPictures
        pictures={[
          '/images/las-screen/grid-las-xperience-1.png',
          '/images/las-screen/grid-las-xperience-2.png',
          '/images/las-screen/grid-las-xperience-3.png',
          '/images/las-screen/grid-las-xperience-4.png',
        ]}
      />

      <Footer />
    </>
  );
}
