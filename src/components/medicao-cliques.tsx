'use client';

import { useEffect } from 'react';
import { ligarMedicaoDeCliques } from '@/lib/medicao/cliques';

/** Liga a medição de botões de ação e formulários (ver src/lib/medicao/cliques.ts). */
export function MedicaoCliques() {
  useEffect(() => {
    ligarMedicaoDeCliques();
  }, []);
  return null;
}
