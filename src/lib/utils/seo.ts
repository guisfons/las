import { Metadata } from 'next';
import { WPSeo } from '@/lib/types/pages';
import { OG_PADRAO } from '@/lib/site';

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
  const tituloBruto = grafiaDosProgramas(
    seo?.title || defaults.title || 'LAS FOR LIFE',
  );
  const title = semMarca(tituloBruto);
  const description = marcaEmMaiusculas(
    seo?.metaDesc ||
      defaults.description ||
      'LAS FOR LIFE – Saúde para a vida.',
  );
  // O WPGraphQL entrega a imagem do Yoast como { sourceUrl }, sem "node"; ler
  // só .node.sourceUrl fazia o site inteiro cair no padrão. Lê as duas formas.
  const ogImage =
    imagemDoYoast(seo?.opengraphImage) || defaults.image || OG_PADRAO;
  const twitterImage = imagemDoYoast(seo?.twitterImage) || ogImage;

  return {
    // Sem nada que sobre depois de tirar a marca, vale o título padrão do layout.
    ...(title ? { title } : {}),
    description,
    // O canonical vem do layout raiz, sempre no www. O do Yoast ficava vazio ou
    // apontaria para o endereço do WordPress na Hostinger.
    openGraph: {
      title: comMarca(grafiaDosProgramas(seo?.opengraphTitle || tituloBruto)),
      description: marcaEmMaiusculas(seo?.opengraphDescription || description),
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: comMarca(
        grafiaDosProgramas(
          seo?.twitterTitle || seo?.opengraphTitle || tituloBruto,
        ),
      ),
      description: marcaEmMaiusculas(seo?.twitterDescription || description),
      images: [twitterImage],
    },
  };
}

/**
 * Tira a marca do fim do título, porque o layout raiz já a acrescenta
 * (`template: '%s | LAS FOR LIFE'`).
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
 * Agora é um só: "Título | LAS FOR LIFE", igual ao da aba — a marca em
 * maiúsculas, que é a grafia da marca na aba (Bruno, 14/10/2026).
 */
export function comMarca(titulo?: string | null): string {
  const t = semMarca(titulo || '');
  return t ? `${t} | LAS FOR LIFE` : 'LAS FOR LIFE';
}

/**
 * A marca em maiúsculas nas descrições (Bruno, 14/10/2026), venham elas do
 * código ou do WordPress — Yoast, resumo de post, resumo de evento. Sem isto,
 * bastaria alguém preencher uma descrição no painel para "LAS For Life" voltar.
 */
export function marcaEmMaiusculas(texto: string): string;
export function marcaEmMaiusculas(texto?: string | null): string | undefined;
export function marcaEmMaiusculas(texto?: string | null) {
  return texto?.replace(/\bLAS\s+for\s+life\b/gi, 'LAS FOR LIFE') ?? undefined;
}

function imagemDoYoast(img: unknown): string | undefined {
  const i = img as { sourceUrl?: string; node?: { sourceUrl?: string } } | null;
  return i?.sourceUrl || i?.node?.sourceUrl || undefined;
}

/**
 * Grafia oficial dos programas: LAStalks, LASclubs, LASxperts, LASxperience,
 * LASacademy, LASsocial e LASsports, com LAS colado ao nome em minúsculo. O Yoast e os títulos de
 * reserva escreviam "LAS Xperts - LAS", e nome inconsistente enfraquece a marca
 * como entidade para o Google e para as IAs.
 */
export function grafiaDosProgramas(texto: string): string {
  return texto.replace(
    /\bLAS\s*(talks|clubs|xperts|xperience|academy|social|sports)\b/gi,
    (_m, programa: string) => `LAS${programa.toLowerCase()}`,
  );
}
