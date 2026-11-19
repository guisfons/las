/**
 * Medição dos banners da home pelo dataLayer do GTM (GTM-K38Z8QDS).
 *
 * Por que evento e não UTM: o banner é link interno, e UTM em link interno
 * abre uma sessão nova no GA4 com origem "banner", apagando a origem real da
 * visita (Google, Instagram, anúncio). Evento mede o clique sem estragar isso.
 *
 *   banner_visualizacao  uma vez por banner por carregamento de página
 *   banner_clique        a cada clique num botão ou na área clicável
 *
 * Parâmetros: banner_id, banner_botao, banner_url, banner_posicao (1 = primeiro slide).
 * Medição nunca impede o link: qualquer erro é engolido.
 */
type Evento = 'banner_visualizacao' | 'banner_clique';

const vistos = new Set<string>();

export function registrarBanner(
  evento: Evento,
  dados: { id: string; posicao: number; botao?: string; url?: string },
) {
  try {
    if (evento === 'banner_visualizacao') {
      if (vistos.has(dados.id)) return;
      vistos.add(dados.id);
    }
    // O primeiro slide é visto antes de o GTM carregar: cria a fila, que o
    // GTM processa ao chegar (é o padrão dele).
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = Array.isArray(w.dataLayer) ? w.dataLayer : [];
    w.dataLayer.push({
      event: evento,
      banner_id: dados.id,
      banner_posicao: dados.posicao,
      ...(dados.botao ? { banner_botao: dados.botao } : {}),
      ...(dados.url ? { banner_url: dados.url } : {}),
    });
  } catch {
    // dataLayer indisponível: segue sem medir.
  }
}
