'use client';

import Footer from '@/components/footer';
import BannerLas from '../../gerar-saude/_components/banner-las';
import HowWeDoItToday from '../../gerar-saude/_components/how-we-do-it-today';
import { WPPageNode } from '@/lib/types/pages';

interface LasSocialClientProps {
  pageData: WPPageNode | null;
}

export default function LasSocialClient({ pageData }: LasSocialClientProps) {
  const acfData = pageData?.pageLasSocial;

  return (
    <>
      <HowWeDoItToday
        banner={
          acfData?.howWeDoItToday?.banner?.node?.sourceUrl ||
          '/images/las-screen/card-social-friends.png'
        }
        logo={
          acfData?.howWeDoItToday?.logo?.node?.sourceUrl ||
          '/las-social-black.png'
        }
        description={
          acfData?.howWeDoItToday?.description?.map((d) => d.text || '') || [
            'A LAS acredita que tem como dever contribuir para o desenvolvimento do ambiente no qual está inserida. Em 2019 nasceu a LASsocial, um programa que ajuda e apoia programas sociais e educacionais com parte do nosso lucro, que é separado mensalmente e destinado para estas ações.',
          ]
        }
        reverse={true}
        link={acfData?.howWeDoItToday?.link || 'https://https://www.lasforlife.com.br//las-social/'}
      />

      <BannerLas
        title={acfData?.bannerLas?.title || 'Projeto Bemtevi'}
        description={
          acfData?.bannerLas?.description?.map((d) => d.text || '') || [
            'A Bemtevi é uma organização que atua no fortalecimento de negócios sociais no Brasil, oferecendo capacitação, acesso a recursos financeiros e assistência técnica para empreendedores que buscam gerar impacto positivo na sociedade.',
            'Nosso apoio à Bemtevi está alinhado com o propósito da LASsocial de fomentar iniciativas que promovam inclusão social e saúde, contribuindo para a construção de uma sociedade mais justa e equitativa.',
          ]
        }
        imageBanner={
          acfData?.bannerLas?.imageBanner?.node?.sourceUrl ||
          '/images/las-screen/card-las-social.png'
        }
        link={acfData?.bannerLas?.link || 'https://www.bemtevi.org.br/'}
        labelLink={acfData?.bannerLas?.labelLink || 'Conheça o Projeto'}
      />

      <Footer />
    </>
  );
}
