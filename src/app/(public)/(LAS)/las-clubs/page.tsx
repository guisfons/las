'use client';

import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articulate-the-ecosystem/_components/grid-pictures';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <HeaderLas
        logo="/las-clubs-black.png"
        description={[
          'O LASclubs é uma iniciativa que conecta os principais médicos especialistas do Brasil através de eventos semanais focados em ciência, práticas e troca de experiências. Cada Club é dedicado a uma especialidade específica - Trauma e Alongamento Ósseo, Mão, Quadril, Cabeça e Pescoço, e Ginecologia - garantindo discussões altamente profundas e direcionadas. ',
          'Com KOLs (Key Opinion Leaders) liderando cada especialidade, mais de 300 médicos são beneficiados por uma metodologia completa que combina aula técnica, discussão de casos reais e atividades hands-on. É um ambiente perfeito para insights valiosos e networking estratégico que impulsiona tanto a prática clínica quanto a pesquisa dos participantes. O resultado? Conhecimento aplicado que se transforma em melhores desfechos para os pacientes, conectando os melhores especialistas do país em prol da excelência médica brasileira.',
        ]}
      ></HeaderLas>

      <GridPictures
        pictures={[
          '/images/las-screen/grid-las-clubs-1.png',
          '/images/las-screen/grid-las-clubs-2.png',
          '/images/las-screen/grid-las-clubs-3.png',
          '/images/las-screen/grid-las-clubs-4.png',
        ]}
      />

      <Footer />
    </>
  );
}
