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

export type { MapaUnidades } from './tipos';
