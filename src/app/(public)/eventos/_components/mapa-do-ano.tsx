'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';

interface MapaDoAnoProps {
  eventos: WPEventoNode[];
}

const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const MONTH_SHORT = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

const EVENT_FORMAT_LABELS: Record<string, string> = {
  jantar_cientifico: 'Jantar Científico',
  curso: 'Curso',
  congresso: 'Congresso',
  feira: 'Feira',
  simposio: 'Simpósio',
  workshop: 'Workshop',
  outro: 'Evento',
};

const SPECIALTY_COLORS: Record<
  string,
  { dot: string; badge: string; badgeText: string }
> = {
  ortopedia: {
    dot: 'bg-[#31A1FF]',
    badge: 'bg-[#31A1FF]/10 border-[#31A1FF]/30',
    badgeText: 'text-[#31A1FF]',
  },
  ginecologia: {
    dot: 'bg-[#7EE000]',
    badge: 'bg-[#7EE000]/10 border-[#7EE000]/30',
    badgeText: 'text-[#7EE000]',
  },
  coluna: {
    dot: 'bg-[#31A1FF]',
    badge: 'bg-[#31A1FF]/10 border-[#31A1FF]/30',
    badgeText: 'text-[#31A1FF]',
  },
  'cabeça e pescoço': {
    dot: 'bg-[#1a2a5e]',
    badge: 'bg-[#1a2a5e]/10 border-[#1a2a5e]/30',
    badgeText: 'text-[#1a2a5e]',
  },
};

function getColor(name: string) {
  return (
    SPECIALTY_COLORS[name.toLowerCase()] || {
      dot: 'bg-gray-400',
      badge: 'bg-gray-100 border-gray-200',
      badgeText: 'text-gray-600',
    }
  );
}

function parseMonthIndex(monthStr: string): number {
  const normalized = monthStr.toLowerCase().trim();
  const map: Record<string, number> = {
    janeiro: 0,
    fevereiro: 1,
    março: 2,
    marco: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11,
    jan: 0,
    fev: 1,
    mar: 2,
    abr: 3,
    mai: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    set: 8,
    out: 9,
    nov: 10,
    dez: 11,
  };
  return map[normalized] ?? -1;
}

interface EventoComMes extends WPEventoNode {
  _monthIndex: number;
  _year: number;
}

export default function MapaDoAno({ eventos }: MapaDoAnoProps) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [filter, setFilter] = useState('Todos');

  // ─── Anos disponíveis ───────────────────────────────────────────
  const availableYears = useMemo(() => {
    const yrs = new Set<number>();
    eventos.forEach((e) => {
      const y = Number(e.eventoacf?.year);
      if (!isNaN(y)) yrs.add(y);
    });
    return Array.from(yrs).sort();
  }, [eventos]);

  const availableSpecialties = useMemo(() => {
    const sps = new Set<string>();
    eventos
      .filter((e) => Number(e.eventoacf?.year) === selectedYear)
      .forEach((e) =>
        e.eventoCategorias?.nodes?.forEach((n) => {
          if (n.name && n.name.trim().toLowerCase() !== 'todos') {
            sps.add(n.name);
          }
        }),
      );
    return ['Todos', ...Array.from(sps)];
  }, [eventos, selectedYear]);

  // ─── Eventos enriquecidos com índice de mês ─────────────────────
  const enrichedEventos: EventoComMes[] = useMemo(() => {
    return eventos
      .filter((e) => {
        const yr = Number(e.eventoacf?.year);
        const matchYear = yr === selectedYear;
        const matchFilter =
          filter === 'Todos' ||
          (e.eventoCategorias?.nodes || []).some((n) => n.name === filter);
        return matchYear && matchFilter;
      })
      .map((e) => ({
        ...e,
        _monthIndex: parseMonthIndex(e.eventoacf?.month || ''),
        _year: Number(e.eventoacf?.year),
      }))
      .sort((a, b) => a._monthIndex - b._monthIndex);
  }, [eventos, selectedYear, filter]);

  // ─── Agrupar por mês ────────────────────────────────────────────
  const byMonth = useMemo(() => {
    const map = new Map<number, EventoComMes[]>();
    enrichedEventos.forEach((e) => {
      const idx = e._monthIndex;
      if (!map.has(idx)) map.set(idx, []);
      map.get(idx)!.push(e);
    });
    return map;
  }, [enrichedEventos]);

  // Meses com eventos
  const monthsWithEvents = Array.from(byMonth.keys()).sort((a, b) => a - b);

  if (availableYears.length === 0) return null;

  return (
    <section
      id="mapa-do-ano"
      className="w-full py-20 bg-gradient-to-b from-[#f8f9ff] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-exo2 font-bold text-2xl md:text-4xl">
              Mapa do Ano
            </h2>
            <p className="font-exo2 text-gray-500 text-base mt-2">
              Veja todos os eventos programados ao longo do ano
            </p>
          </div>

          {/* Seletor de ano */}
          {availableYears.length > 1 && (
            <div className="flex gap-2">
              {availableYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={cn(
                    'font-exo2 font-semibold text-sm px-5 py-2 rounded-full transition-all',
                    selectedYear === yr
                      ? 'bg-[#1a2a5e] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                  )}
                >
                  {yr}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filtro de especialidades */}
        <div className="flex gap-2 flex-wrap">
          {availableSpecialties.map((sp) => (
            <button
              key={sp}
              onClick={() => setFilter(sp)}
              className={cn(
                'font-exo2 text-sm px-4 py-1.5 rounded-full border transition-all',
                filter === sp
                  ? 'bg-[#31A1FF] text-white border-[#31A1FF]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300',
              )}
            >
              {sp}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {monthsWithEvents.length === 0 ? (
          <p className="font-exo2 text-gray-400 text-center py-12">
            Nenhum evento encontrado para esse período.
          </p>
        ) : (
          <div className="relative flex flex-col gap-0">
            {/* Linha vertical */}
            <div className="absolute left-[88px] md:left-[112px] top-0 bottom-0 w-px bg-gradient-to-b from-[#31A1FF]/30 via-[#31A1FF]/60 to-[#31A1FF]/10" />

            {monthsWithEvents.map((monthIdx, i) => {
              const monthEventos = byMonth.get(monthIdx)!;
              const isPast =
                selectedYear < currentYear ||
                (selectedYear === currentYear && monthIdx < currentMonth);
              const isCurrent =
                selectedYear === currentYear && monthIdx === currentMonth;

              return (
                <motion.div
                  key={monthIdx}
                  className="flex gap-6 md:gap-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {/* Mês label */}
                  <div className="relative flex flex-col items-end w-20 md:w-28 pt-6 shrink-0">
                    <span
                      className={cn(
                        'font-exo2 font-bold text-sm md:text-base text-right uppercase tracking-wide leading-none',
                        isCurrent
                          ? 'text-[#31A1FF]'
                          : isPast
                            ? 'text-gray-300'
                            : 'text-gray-800',
                      )}
                    >
                      {MONTH_SHORT[monthIdx]}
                    </span>
                    <span
                      className={cn(
                        'font-exo2 text-xs text-right mt-0.5',
                        isPast ? 'text-gray-200' : 'text-gray-400',
                      )}
                    >
                      {selectedYear}
                    </span>

                    {/* Dot */}
                    <div
                      className={cn(
                        'absolute right-[-21px] md:right-[-27px] top-7 size-3 rounded-full border-2 border-white z-10',
                        isCurrent
                          ? 'bg-[#31A1FF] shadow-[0_0_0_4px_rgba(49,161,255,0.2)]'
                          : isPast
                            ? 'bg-gray-200'
                            : 'bg-[#31A1FF]/60',
                      )}
                    />
                  </div>

                  {/* Eventos do mês */}
                  <div className="flex flex-col gap-3 py-4 flex-1 min-w-0">
                    {monthEventos.map((evento) => {
                      const acf = evento.eventoacf;
                      const specialidades =
                        evento.eventoCategorias?.nodes || [];
                      const isFeira = acf?.eventType === 'feira';
                      const formatLabel =
                        EVENT_FORMAT_LABELS[acf?.eventFormat || ''] || 'Evento';
                      const firstSp = specialidades[0];
                      const color = firstSp
                        ? getColor(firstSp.name)
                        : getColor('');

                      return (
                        <div
                          key={evento.id}
                          className={cn(
                            'flex items-start gap-3 p-4 rounded-2xl border transition-all hover:shadow-md',
                            isPast
                              ? 'bg-gray-50 border-gray-100 opacity-60'
                              : 'bg-white border-gray-100 hover:border-[#31A1FF]/30',
                          )}
                        >
                          {/* Dot de especialidade */}
                          <div
                            className={cn(
                              'size-2.5 rounded-full mt-1.5 shrink-0',
                              color.dot,
                            )}
                          />

                          <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={cn(
                                  'font-exo2 text-xs font-semibold px-2 py-0.5 rounded-full',
                                  isFeira
                                    ? 'bg-[#7EE000]/10 text-[#5aac00]'
                                    : 'bg-[#31A1FF]/10 text-[#31A1FF]',
                                )}
                              >
                                {formatLabel}
                              </span>
                              {specialidades.map((sp) => {
                                const c = getColor(sp.name);
                                return (
                                  <span
                                    key={sp.slug}
                                    className={cn(
                                      'font-exo2 text-xs px-2 py-0.5 rounded-full border',
                                      c.badge,
                                      c.badgeText,
                                    )}
                                  >
                                    {sp.name}
                                  </span>
                                );
                              })}
                            </div>

                            <p className="font-exo2 font-semibold text-sm text-gray-900 truncate">
                              {evento.title}
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-gray-500">
                              {acf?.dateNumber && (
                                <span className="font-exo2 text-xs">
                                  {acf.dateNumber} de {MONTH_NAMES[monthIdx]}
                                </span>
                              )}
                              {acf?.local && (
                                <span className="flex items-center gap-1 font-exo2 text-xs">
                                  <MapPin className="size-3" /> {acf.local}
                                </span>
                              )}
                              {acf?.hours && (
                                <span className="flex items-center gap-1 font-exo2 text-xs">
                                  <Clock className="size-3" /> {acf.hours}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA rápida */}
                          {acf?.subscribe && !isPast && (
                            <a
                              href={acf.subscribe}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 p-2 rounded-full bg-[#31A1FF]/10 text-[#31A1FF] hover:bg-[#31A1FF]/20 transition-colors"
                              aria-label="Inscrever-se"
                            >
                              <ExternalLink className="size-3.5" />
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
