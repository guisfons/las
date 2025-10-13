'use client';

import Footer from '@/components/footer';
import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articulate-the-ecosystem/_components/grid-pictures';

export default function Home() {
  return (
    <>
      <HeaderLas
        logo="/las-xperience.png"
        description={[
          'A LASxperience é uma jornada imersiva em que levamos os médicos participantes para visitarem as fábricas das Marcas parceiras do nosso Movimento. Eles têm aula in loco com especialistas e discussões de caso – que dão a oportunidade deles verem na prática como os equipamentos são produzidos, têm contato com especialistas para explicar os diferenciais e informações originais dos produtos.',
        ]}
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
