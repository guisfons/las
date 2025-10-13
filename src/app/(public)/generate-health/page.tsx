'use client';

import Footer from '@/components/footer';
import CardLas from '../education/_components/card-las';
import BannerLas from './_components/banner-las';
import HowWeDoItToday from './_components/how-we-do-it-today';
import HeroBanner from './_components/hero-banner';

export default function Home() {
  const grid = [
    {
      logo: '/las-social.png',
      picture: '/banner-las-social.png',
      description: `Acreditamos que temos como dever contribuir para o desenvolvimento do ambiente no qual estamos inseridos. O programa LASsocial ajuda e apoia programas sociais e educacionais com parte de seu lucro mensal.`,
      link: '/las-social',
    },
    {
      logo: '/las-sports.png',
      picture: '/banner-las-sports.png',
      description: `Acreditamos no esporte como um importante papel na formação de uma sociedade melhor. O LASsports  tem como propósito promover a melhora da qualidade de vida de todos em nosso entorno através da prática de esportes`,
      link: '/las-sports',
    },
  ];

  return (
    <>
      <HeroBanner
        imageLine="/images/generate-health/line-hero-generate-health.png"
        title="Gerar Saúde"
        description="Saúde é o que nos permite viver com energia, realizar nossos sonhos e estar presente para quem amamos. Nossa missão aqui é transformar saúde em algo que acontece todo dia, não só no consultório."
        label="Faça Parte"
        classNameTitle="text-black"
        classNameDescription="text-black"
        classNameBanner="bg-generateHealthBanner sm:bg-generateHealthBanner"
        classNameBotton="bg-[#F9D229] text-[#000000]"
      />

      <HowWeDoItToday
        banner="/images/generate-health/card-how-we-do-it-today.png"
        title="Como Fazemos Hoje"
        classNameTitle="text-[#E7C221] "
        description={[
          'Começamos por nós: nossos colaboradores podem usar a primeira hora do expediente para se exercitar.',
          'Também incentivamos nossos colaboradores a participarem de eventos como a corrida contra o câncer e cobrimos os custos de inscrição, porque apoiar essa causa também faz parte do nosso propósito.',
        ]}
      />
      <CardLas
        title="Iniciativas de Educação que Transformam"
        grid={grid}
        description="Criamos espaços de aprendizado, troca e evolução — conectando profissionais à inovação e ao futuro da saúde."
      />
      <BannerLas
        title="Movimento que começa em casa"
        description={[
          'Acreditamos que cuidar da saúde começa por quem está com a gente todos os dias. Por isso, nossos colaboradores podem iniciar o expediente uma hora mais tarde para se dedicarem à prática de exercícios. Uma rotina com mais energia, equilíbrio e bem-estar é o primeiro passo para gerar saúde de verdade.',
        ]}
        link="https://las.com.br/sobre-nos/#nossa-cultura"
        imageBanner="/images/generate-health/banner-walking.png"
      />
      <Footer />
    </>
  );
}
