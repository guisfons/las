'use client';

import { useMemo, useState } from 'react';
import Footer from '@/components/footer';
import { WPEventoNode } from '@/lib/types/events';

import FiltroEmailEspecialidade from './_components/filtro-email-especialidade';
import GridProximosEventos from './_components/grid-proximos-eventos';
import MapaDoAno from './_components/mapa-do-ano';
import OndeEncontrarFeira from './_components/onde-encontrar-feira';

interface EventosClientProps {
  eventos: WPEventoNode[];
  initialCategory?: string;
  initialSegment?: string;
}

function parseMonthIndex(monthStr: string | undefined): number {
  if (!monthStr) return -1;
  const normalized = monthStr.toLowerCase().trim();
  const num = parseInt(normalized, 10);
  if (!isNaN(num) && num >= 1 && num <= 12) return num - 1;

  const map: Record<string, number> = {
    janeiro: 0,
    jan: 0,
    fevereiro: 1,
    fev: 1,
    março: 2,
    marco: 2,
    mar: 2,
    abril: 3,
    abr: 3,
    maio: 4,
    mai: 4,
    junho: 5,
    jun: 5,
    julho: 6,
    jul: 6,
    agosto: 7,
    ago: 7,
    setembro: 8,
    set: 8,
    outubro: 9,
    out: 9,
    novembro: 10,
    nov: 10,
    dezembro: 11,
    dez: 11,
  };
  return map[normalized] ?? -1;
}

export function getEventDate(e: WPEventoNode): Date | null {
  const acf = e.eventoacf;

  if (acf?.fullDate) {
    const parsed = new Date(acf.fullDate.replace(' ', 'T'));
    if (!isNaN(parsed.getTime())) return parsed;
  }

  if (acf?.year && acf?.month) {
    const yr = Number(acf.year);
    const mIdx = parseMonthIndex(acf.month);
    if (!isNaN(yr) && mIdx !== -1) {
      const day = acf.dateNumber
        ? parseInt(acf.dateNumber.split(/[-/]/)[0], 10) || 1
        : 1;
      const d = new Date(yr, mIdx, day);
      if (!isNaN(d.getTime())) return d;
    }
  }

  if (e.date) {
    const parsed = new Date(e.date);
    if (!isNaN(parsed.getTime())) return parsed;
  }

  return null;
}

export default function EventosClient({
  eventos,
  initialCategory,
}: EventosClientProps) {
  const especialidades = useMemo(() => {
    const sp = new Set<string>();
    eventos.forEach((e) =>
      e.eventoCategorias?.nodes?.forEach((n) => {
        if (n.name && n.name.trim().toLowerCase() !== 'todos') {
          sp.add(n.name);
        }
      }),
    );
    return Array.from(sp).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [eventos]);

  const segmentsList = useMemo(() => {
    const sp = new Set<string>();
    eventos.forEach((e) =>
      e.eventoSegmentos?.nodes?.forEach((n) => {
        if (n.name) sp.add(n.name);
      }),
    );
    const arr = Array.from(sp).sort((a, b) => a.localeCompare(b, 'pt-BR'));
    return arr.length > 0 ? arr : ['Autoral', 'Educacional', 'Patrocinado'];
  }, [eventos]);

  // Inicializa o filtro com a categoria passada via URL (se válida)
  const initialFilter = useMemo(() => {
    if (!initialCategory) return 'Todos';
    const match = especialidades.find(
      (sp) => sp.toLowerCase() === initialCategory.toLowerCase(),
    );
    return match || 'Todos';
  }, [initialCategory, especialidades]);

  const [filter, setFilter] = useState<string | null>(
    initialCategory ? initialFilter : null,
  );
  const [segment, setSegment] = useState<string>(segmentsList[0] || 'Autoral');

  // Atualiza o estado e a URL quando o filtro muda
  const handleFilterChange = (newFilter: string | null) => {
    setFilter(newFilter);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (!newFilter) {
        url.searchParams.delete('categoria');
        url.searchParams.delete('especialidade');
      } else {
        url.searchParams.set('categoria', newFilter);
      }
      window.history.pushState(null, '', url.pathname + url.search);
    }
  };

  const handleSegmentChange = (newSegment: string) => {
    setSegment(newSegment);
  };

  return (
    <>
      {/* 2. Filtro + captura de e-mail por especialidade + grid de próximos eventos */}
      <section className="w-full max-w-7xl px-6 mx-auto flex flex-col gap-10 pt-20 pb-12">
        <FiltroEmailEspecialidade
          especialidades={especialidades}
          dynamicSegments={segmentsList}
          filter={filter}
          segment={segment}
          onFilterChange={handleFilterChange}
          onSegmentChange={handleSegmentChange}
        />
        <GridProximosEventos
          eventos={eventos}
          filter={filter}
          segment={segment}
        />
      </section>

      {/* 3. Onde nos encontrar (só aparece se houver feiras futuras) */}
      <OndeEncontrarFeira eventos={eventos} />

      {/* 4. Mapa do Ano — timeline visual */}
      <MapaDoAno eventos={eventos} />

      <Footer />
    </>
  );
}
