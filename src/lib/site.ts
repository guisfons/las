/**
 * Endereço único do site. O www é o que responde; o domínio sem www redireciona
 * para ele. Sitemap, robots, canonical e dados estruturados saem daqui, para
 * nenhum deles voltar a apontar para um endereço que redireciona (até 10/2026
 * as 54 URLs do sitemap eram redirecionamentos para o www).
 */
export const SITE_URL = 'https://www.lasforlife.com.br';

/** URL absoluta no endereço oficial, a partir de um caminho ou de uma URL do próprio site. */
export function urlDoSite(caminho = '/'): string {
  if (/^https?:\/\//.test(caminho)) {
    return caminho.replace(/^https?:\/\/(www\.)?lasforlife\.com\.br/, SITE_URL);
  }
  const limpo = caminho.startsWith('/') ? caminho : `/${caminho}`;
  return limpo === '/' ? SITE_URL : `${SITE_URL}${limpo.replace(/\/$/, '')}`;
}

/** Imagem de compartilhamento padrão (1200x630), para página sem imagem própria. */
export const OG_PADRAO = `${SITE_URL}/og-las-for-life.png`;
