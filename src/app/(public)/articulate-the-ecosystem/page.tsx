'use client';

import HeroBanner from '../generate-health/_components/hero-banner';
import Footer from '@/components/footer';
import HowWeDoItToday from '../generate-health/_components/how-we-do-it-today';
import GridEvents from './_components/grid-events';
import GridPictures from './_components/grid-pictures';

export default function Home() {
  return (
    <>
      <HeroBanner
        imageLine="/images/articulate-the-ecosystem/line-hero-articulate-ecosystem.png"
        title="Articular o Ecossistema"
        description="Unimos diferentes agentes do setor para pensar, cocriar e construir um sistema de saúde mais eficiente, acessível e integrado"
        label="Faça Parte"
        classNameTitle="text-white"
        classNameDescription="text-white"
        classNameBanner="bg-articulateEcosystemBanner sm:bg-articulateEcosystemBanner"
        classNameBotton="bg-[#00b5c8] text-[#ffffff]"
      />

      <HowWeDoItToday
        banner="/images/articulate-the-ecosystem/card-articulate-the-ecosystem.png"
        title="Conexões que constroem o futuro da saúde"
        classNameTitle="text-[#00B5C8] "
        description={[
          'Aqui é onde conectamos os pontos de vista do sistema de saúde.  Idealizamos iniciativas para co-criarmos e encontrarmos juntos melhores soluções para a Indústria da Saúde. Queremos facilitar conversas entre diferentes agentes para criarmos parcerias que beneficiam o sistema todo.',
          'Estamos desenvolvendo iniciativas que conectem diferentes Atores do nosso Ecossistema e também participamos de eventos, mesas redondas, palestras podcasts de parceiros para falar sobre o Movimento LAS e os paradigmas do nosso setor hoje.',
        ]}
        reverse={true}
      />

      <GridEvents />

      <GridPictures
        title="Dia do Médico e Dia da Secretária"
        pictures={[
          '/images/articulate-the-ecosystem/grid-day-doctor-1.png',
          '/images/articulate-the-ecosystem/grid-day-doctor-2.png',
          '/images/articulate-the-ecosystem/grid-day-doctor-3.png',
          '/images/articulate-the-ecosystem/grid-day-doctor-4.png',
        ]}
      />

      <Footer />
    </>
  );
}
