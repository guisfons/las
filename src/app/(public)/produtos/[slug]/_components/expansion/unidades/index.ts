import type { MapaUnidades } from './tipos';
import { SPINEMED } from './spinemed';
import { DUROLANE } from './durolane';

/** Mapa de unidades por slug do produto. Produto novo: um arquivo e uma linha aqui. */
const MAPAS: Record<string, MapaUnidades> = {
  spinemed: SPINEMED,
  durolane: DUROLANE,
};

/** Devolve o mapa só se ele tiver pelo menos um estado com clínica. */
export function mapaDoProduto(slug?: string): MapaUnidades | null {
  const mapa = slug ? MAPAS[slug] : undefined;
  if (!mapa) return null;
  const temClinica = Object.values(mapa.estados).some(
    (e) => e.clinics.length > 0,
  );
  return temClinica ? mapa : null;
}

/** Rótulo do botão do topo da página que leva ao mapa (#unidades), igual ao dos banners da home. */
const BOTAO_MAPA: Record<string, string> = {
  spinemed: 'Encontre uma unidade',
  durolane: 'Encontre um médico ou clínica',
};

/** Devolve o rótulo do botão só quando a página tem mapa com clínica. */
export function botaoDoMapa(slug?: string): string | null {
  if (!slug || !mapaDoProduto(slug)) return null;
  return BOTAO_MAPA[slug] ?? 'Ver no mapa';
}

export type { MapaUnidades } from './tipos';
