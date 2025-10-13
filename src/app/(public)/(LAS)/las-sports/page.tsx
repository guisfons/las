'use client';

import HowWeDoItToday from '../../generate-health/_components/how-we-do-it-today';
import BannerLas from '../../generate-health/_components/banner-las';
import Footer from '@/components/footer';
import Sponsorship from './_components/sponsorship';

export default function Home() {
  return (
    <>
      <HowWeDoItToday
        banner="/images/las-screen/card-sport-bicycle.png"
        logo="/las-sports-black.png"
        description={[
          'A LAS acredita no esporte como um importante papel na formação de uma sociedade melhor: ensinando valores como a cooperação e o respeito, trazendo atenção para melhorias com a saúde, gerando empregos, contribuindo para a inclusão social e crescimento da economia como um todo!',
        ]}
        reverse={true}
        link="https://las.com.br/las-sports/"
      />

      <BannerLas
        title="Energy Morning"
        description={[
          'Incentivamos nossos colaboradores a praticarem uma hora de exercício por dia por meio do programa Energy Morning. Quem participa pode começar o expediente uma hora mais tarde, uma forma de promover saúde, bem-estar e qualidade de vida no dia a dia.',
        ]}
        imageBanner="/images/las-screen/card-las-sports.png"
      />

      <Sponsorship />

      <Footer />
    </>
  );
}
