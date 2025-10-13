'use client';

import Footer from '@/components/footer';
import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articulate-the-ecosystem/_components/grid-pictures';

export default function Home() {
  return (
    <>
      <HeaderLas
        logo="/las-xperts.png"
        description={[
          'Nossos produtos nas mãos dos médicos, em projetos de Medicina Baseada em Evidência. Foram 32 Estudos de Caso publicados em 2024.',
        ]}
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
