import { Metadata } from 'next';
import HomeClient from './home-client';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';

const DESCRICAO_HOME =
  'A LAS FOR LIFE leva tecnologia médica, educação e conexão à saúde: dispositivos para ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço, e os programas LAStalks, LASclubs e LASxperts.';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('home');
  const base = generateSeoMetadata(pageData?.seo, {
    title: 'Home',
    description: DESCRICAO_HOME,
  });
  // A home é a página que mais aparece no Google (57% dos cliques em 90 dias),
  // e o título dela era "Home | LAS FOR LIFE", vindo do Yoast. Aqui ela diz o
  // que a LAS é, com a marca na frente.
  const titulo = 'LAS FOR LIFE | Tecnologia médica e educação para a saúde';
  return {
    ...base,
    title: { absolute: titulo },
    description: DESCRICAO_HOME,
    openGraph: {
      ...base.openGraph,
      title: titulo,
      description: DESCRICAO_HOME,
    },
    twitter: { ...base.twitter, title: titulo, description: DESCRICAO_HOME },
  };
}

export default async function Home() {
  // Fetch ACF data from WordPress using the 'home' slug
  const pageData = await getPageBySlug('home');

  return <HomeClient pageData={pageData} />;
}
