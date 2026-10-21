import { SITE_URL } from '@/lib/site';

/**
 * Quem é a LAS, no formato que buscadores e IAs leem (schema.org). Os nomes
 * alternativos são os que as pessoas digitam no Google: "las brasil" e "las do
 * brasil" aparecem entre as consultas do Search Console.
 */
export const ORGANIZACAO_ID = `${SITE_URL}/#organizacao`;
export const SITE_ID = `${SITE_URL}/#site`;

export const organizacao = {
  '@type': 'Organization',
  '@id': ORGANIZACAO_ID,
  name: 'LAS FOR LIFE',
  alternateName: ['LAS Brasil', 'LAS do Brasil', 'LAS'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo-las-512.png`,
    width: 512,
    height: 512,
  },
  description:
    'A LAS FOR LIFE é um Movimento que leva tecnologia médica, educação e conexão ao ecossistema da saúde no Brasil, com produtos para ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço.',
  slogan: 'Saúde para a vida',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua das Rosas, 762, Mirandópolis',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '04048-001',
    addressCountry: 'BR',
  },
  telephone: '+55-11-3569-4106',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+55-11-97177-2946',
      email: 'cotacao@lasforlife.com.br',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  ],
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsAbout: [
    'Ortopedia',
    'Cirurgia de coluna',
    'Ginecologia',
    'Uroginecologia',
    'Cirurgia de cabeça e pescoço',
    'Dispositivos médicos',
    'Educação médica continuada',
  ],
  sameAs: [
    'https://www.instagram.com/las.forlife/',
    'https://www.linkedin.com/company/lasforlife/',
    'https://www.youtube.com/@lasforlife',
    'https://www.facebook.com/lasforlife/',
  ],
};

export const site = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE_URL,
  name: 'LAS FOR LIFE',
  inLanguage: 'pt-BR',
  publisher: { '@id': ORGANIZACAO_ID },
};

/** Trilha de navegação: [['Início','/'], ['Produtos','/produtos'], ...]. */
export function trilha(itens: [string, string][]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: itens.map(([nome, caminho], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: nome,
      item: caminho.startsWith('http')
        ? caminho
        : `${SITE_URL}${caminho === '/' ? '' : caminho}`,
    })),
  };
}
