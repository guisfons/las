'use client';

import HowWeDoItToday from '../../gerar-saude/_components/how-we-do-it-today';
import BannerLas from '../../gerar-saude/_components/banner-las';
import Footer from '@/components/footer';
import Sponsorship from './_components/sponsorship';
import { WPPageNode } from '@/lib/types/pages';

interface LasSportsClientProps {
  pageData: WPPageNode | null;
}

export default function LasSportsClient({ pageData }: LasSportsClientProps) {
  const acfData = pageData?.pageLasSports;

  return (
    <>
      <HowWeDoItToday
        banner={
          acfData?.howWeDoItToday?.banner?.node?.sourceUrl ||
          '/images/las-screen/card-sport-bicycle.png'
        }
        logo={
          acfData?.howWeDoItToday?.logo?.node?.sourceUrl ||
          '/las-sports-black.png'
        }
        description={
          acfData?.howWeDoItToday?.description?.map((d) => d.text || '') || [
            'A LAS acredita no esporte como um importante papel na formação de uma sociedade melhor: ensinando valores como a cooperação e o respeito, trazendo atenção para melhorias com a saúde, gerando empregos, contribuindo para a inclusão social e crescimento da economia como um todo!',
          ]
        }
        reverse={true}
        link={acfData?.howWeDoItToday?.link || 'https://https://www.lasforlife.com.br//las-sports/'}
      />

      <BannerLas
        title={acfData?.bannerLas?.title || 'Energy Morning'}
        description={
          acfData?.bannerLas?.description?.map((d) => d.text || '') || [
            'Incentivamos nossos colaboradores a praticarem uma hora de exercício por dia por meio do programa Energy Morning. Quem participa pode começar o expediente uma hora mais tarde, uma forma de promover saúde, bem-estar e qualidade de vida no dia a dia.',
          ]
        }
        imageBanner={
          acfData?.bannerLas?.imageBanner?.node?.sourceUrl ||
          '/images/las-screen/card-las-sports.png'
        }
      />

      <Sponsorship acfData={acfData?.sponsorship} />

      <Footer />
    </>
  );
}
