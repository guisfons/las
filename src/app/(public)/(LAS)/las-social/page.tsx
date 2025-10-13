'use client';

import Footer from '@/components/footer';
import BannerLas from '../../generate-health/_components/banner-las';
import HowWeDoItToday from '../../generate-health/_components/how-we-do-it-today';

export default function Home() {
  return (
    <>
      <HowWeDoItToday
        banner="/images/las-screen/card-social-friends.png"
        logo="/las-social-black.png"
        description={[
          'A LAS acredita que tem como dever contribuir para o desenvolvimento do ambiente no qual está inserida. Em 2019 nasceu a LASsocial, um programa que ajuda e apoia programas sociais e educacionais com parte do nosso lucro, que é separado mensalmente e destinado para estas ações.',
        ]}
        reverse={true}
        link="https://las.com.br/las-social/"
      />

      <BannerLas
        title="Projeto Bemtevi"
        description={[
          'A Bemtevi é uma organização que atua no fortalecimento de negócios sociais no Brasil, oferecendo capacitação, acesso a recursos financeiros e assistência técnica para empreendedores que buscam gerar impacto positivo na sociedade.',
          'Nosso apoio à Bemtevi está alinhado com o propósito da LASsocial de fomentar iniciativas que promovam inclusão social e saúde, contribuindo para a construção de uma sociedade mais justa e equitativa.',
        ]}
        imageBanner="/images/las-screen/card-las-social.png"
        link="https://www.bemtevi.org.br/"
        labelLink="Conheça o Projeto"
      />

      <Footer />
    </>
  );
}
