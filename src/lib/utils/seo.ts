import { Metadata } from 'next';
import { WPSeo } from '@/lib/types/pages';

/**
 * Converts Yoast SEO data from WPGraphQL SEO plugin into a Next.js Metadata object.
 * Falls back to provided defaults when WP data is not available.
 */
export function generateSeoMetadata(
  seo: WPSeo | undefined | null,
  defaults: {
    title?: string;
    description?: string;
    image?: string;
  } = {},
): Metadata {
  const tituloBruto = seo?.title || defaults.title || 'LAS For Life';
  const title = semMarca(tituloBruto);
  const description =
    seo?.metaDesc ||
    defaults.description ||
    'LAS For Life – Saúde para a vida.';
  const ogImage = seo?.opengraphImage?.node?.sourceUrl || defaults.image;
  const twitterImage = seo?.twitterImage?.node?.sourceUrl || ogImage;

  return {
    // Sem nada que sobre depois de tirar a marca, vale o título padrão do layout.
    ...(title ? { title } : {}),
    description,
    ...(seo?.canonical ? { alternates: { canonical: seo.canonical } } : {}),
    openGraph: {
      title: comMarca(seo?.opengraphTitle || tituloBruto),
      description: seo?.opengraphDescription || description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: comMarca(seo?.twitterTitle || seo?.opengraphTitle || tituloBruto),
      description: seo?.twitterDescription || description,
      ...(twitterImage ? { images: [twitterImage] } : {}),
    },
  };
}

/**
 * Tira a marca do fim do título, porque o layout raiz já a acrescenta
 * (`template: '%s | LAS For Life'`).
 *
 * Os títulos chegam com a marca de dois jeitos, e os dois duplicavam:
 * - **do código**, como fallback — "Eventos | LAS For Life" virava
 *   "Eventos | LAS For Life | LAS For Life";
 * - **do Yoast**, que usa o nome do site do WordPress — "Home - LAS" virava
 *   "Home - LAS | LAS For Life", com duas marcas diferentes.
 *
 * Tirar aqui, e não em cada página, é o que impede o defeito de voltar quando
 * alguém escrever um fallback novo ou mudar o separador no Yoast.
 */
export function semMarca(titulo: string): string {
  const marca = /\s*[|\-–—]\s*(?:blog\s+)?las(?:\s+for\s+life)?\s*$/i;
  let t = titulo.trim();
  while (marca.test(t)) t = t.replace(marca, '').trim();
  return /^las(\s+for\s+life)?$/i.test(t) ? '' : t;
}

/**
 * O título de compartilhamento — a prévia do link no WhatsApp, LinkedIn e
 * Facebook (Open Graph e Twitter).
 *
 * Ele NÃO passa pelo template do layout, então a marca tem de ser posta aqui.
 * E ele vinha de três jeitos: do Yoast com a marca dele ("LAS Talks - LAS"),
 * com a nossa ("Eventos | LAS For Life") e sem marca nenhuma (eventos e posts).
 * Agora é um só: "Título | LAS For Life", igual ao da aba.
 */
export function comMarca(titulo?: string | null): string {
  const t = semMarca(titulo || '');
  return t ? `${t} | LAS For Life` : 'LAS For Life';
}
