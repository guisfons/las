'use client';

import { useMemo, useState } from 'react';
import Footer from '@/components/footer';
import { WPEventoNode } from '@/lib/types/events';

import HeroProximoEvento from './_components/hero-proximo-evento';
import FiltroEmailEspecialidade from './_components/filtro-email-especialidade';
import GridProximosEventos from './_components/grid-proximos-eventos';
import MapaDoAno from './_components/mapa-do-ano';
import OndeEncontrarFeira from './_components/onde-encontrar-feira';
import EventosAnteriores from './_components/past-events';

interface EventosClientProps {
  eventos: WPEventoNode[];
}

export default function EventosClient({ eventos }: EventosClientProps) {
  const [filter, setFilter] = useState('Todos');

  // ─── Próximo evento (primeiro evento futuro, ou o mais próximo) ──
  const proximoEvento = useMemo<WPEventoNode | null>(() => {
    const now = new Date();
    const futuros = eventos.filter((e) => {
      if (e.eventoacf?.fullDate) {
        return new Date(e.eventoacf.fullDate) > now;
      }
      const yr = Number(e.eventoacf?.year);
      return yr >= now.getFullYear();
    });
    return futuros.length > 0 ? futuros[0] : null;
  }, [eventos]);

  // ─── Especialidades disponíveis (da API WP — dinâmico) ──────────
  const especialidades = useMemo(() => {
    const sp = new Set<string>();
    eventos.forEach((e) =>
      e.eventoCategorias?.nodes?.forEach((n) => sp.add(n.name)),
    );
    return Array.from(sp).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [eventos]);

  return (
    <>
      {/* 1. Banner hero do próximo evento com countdown */}
      <HeroProximoEvento evento={proximoEvento} />

      {/* 2. Filtro + captura de e-mail por especialidade + grid de próximos eventos */}
      <section className="w-full max-w-7xl px-6 mx-auto flex flex-col gap-10 pt-20 pb-12">
        <FiltroEmailEspecialidade
          especialidades={especialidades}
          filter={filter}
          onFilterChange={setFilter}
        />
        <GridProximosEventos eventos={eventos} filter={filter} />
      </section>

      {/* 3. Onde nos encontrar (só aparece se houver feiras futuras) */}
      <OndeEncontrarFeira eventos={eventos} />

      {/* 4. Mapa do Ano — timeline visual */}
      <MapaDoAno eventos={eventos} />

      {/* 5. Eventos anteriores como prova social */}
      <EventosAnteriores eventos={eventos} />

      <Footer />
    </>
  );
}
