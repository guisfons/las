'use client';

import HeaderLas from '../../_components/header-las';
import GridPictures from '../../articular-o-ecossistema/_components/grid-pictures';
import Footer from '@/components/footer';
import { getPageBySlug } from '@/lib/api/pages';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', 'las-clubs'],
    queryFn: () => getPageBySlug('las-clubs'),
  });
  const acfData = pageData?.pageLasClubs;

  if (isLoading) return null;
  return (
    <>
      <HeaderLas
        logo={
          acfData?.howWeDoItToday?.logo?.node?.sourceUrl ||
          '/las-clubs-black.png'
        }
        description={
          acfData?.howWeDoItToday?.description?.map((d) => d.text || '') || [
            'O LASclubs é uma iniciativa que conecta os principais médicos especialistas do Brasil através de eventos semanais focados em ciência, práticas e troca de experiências. Cada Club é dedicado a uma especialidade específica - Trauma e Alongamento Ósseo, Mão, Quadril, Cabeça e Pescoço, e Ginecologia - garantindo discussões altamente profundas e direcionadas. ',
            'Com KOLs (Key Opinion Leaders) liderando cada especialidade, mais de 300 médicos são beneficiados por uma metodologia completa que combina aula técnica, discussão de casos reais e atividades hands-on. É um ambiente perfeito para insights valiosos e networking estratégico que impulsiona tanto a prática clínica quanto a pesquisa dos participantes. O resultado? Conhecimento aplicado que se transforma em melhores desfechos para os pacientes, conectando os melhores especialistas do país em prol da excelência médica brasileira.',
          ]
        }
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
