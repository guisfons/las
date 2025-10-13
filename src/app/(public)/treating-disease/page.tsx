'use client';

import Footer from '@/components/footer';
import HeroBanner from '../generate-health/_components/hero-banner';
import Carroussel from '../_components/carroussel';
import GridContent from './_components/grid-content';
import HowWeDoItToday from '../generate-health/_components/how-we-do-it-today';
import BannerTreatingDisease from './_components/banner-treating-disease';
import Segmentations from './_components/segmentations';

export default function Home() {
  return (
    <>
      <HeroBanner
        imageLine="/images/treating-disease/line-hero-treating-disease.png"
        title="Tratar a Doença"
        description="Cuidamos de pessoas, não apenas de diagnósticos. Cada solução que oferecemos é pensada para aliviar, recuperar e transformar histórias com empatia e precisão."
        label="Faça Parte"
        classNameTitle="text-white"
        classNameDescription="text-white"
        classNameBanner="bg-treatingDiseaseBanner sm:bg-treatingDiseaseBanner"
        classNameBotton="bg-[#7ee000] text-[#000]"
      />

      <HowWeDoItToday
        banner="/images/treating-disease/card-treating-disease.png"
        title="Soluções que tratam e transformam"
        classNameTitle="text-[#70C700] "
        description={[
          'Buscamos as melhores soluções e equipamentos médicos do mundo para trazer para o Brasil. Oferecemos produtos que realmente fazem diferença - do material cirúrgico mais preciso aos dispositivos de medicina regenerativa que estão mudando vidas. ',
          'Nosso papel é garantir que médicos brasileiros tenham acesso ao que há de melhor para tratar seus pacientes com resultados comprovados e recuperação mais rápida.',
        ]}
      />

      <Carroussel more={false} />

      <GridContent />

      <BannerTreatingDisease />

      <Segmentations />

      <Footer />
    </>
  );
}
