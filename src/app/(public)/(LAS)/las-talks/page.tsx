'use client';

import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articulate-the-ecosystem/_components/grid-pictures';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <HeaderLas
        logo="/las-talks.png"
        description={[
          'O LAStalks é um evento exclusivo em que enviamos um KOL (Key Opinion Leader) para ministrar uma aula a um grupo de médicos convidados.  O encontro acontece em formato de jantar, promovendo atualização científica e networking em um ambiente intimista.',
        ]}
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
