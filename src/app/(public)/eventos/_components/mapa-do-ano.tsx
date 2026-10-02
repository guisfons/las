'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';
import {
  especialidadesComEvento,
  especialidadesDoEvento,
  eventoTemEspecialidade,
} from '@/lib/eventos/taxonomia';
import { coresDoEvento } from './cores-segmento';
import { eventoFuturo, periodoDoEvento } from '@/lib/eventos/agenda';

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

  /**
   * Só o que já aconteceu (Bruno, 02/10/2026): o que está por vir mora na grade
   * de cima. Passado é o evento cujo ÚLTIMO dia já ficou para trás — um
   * congresso em andamento ainda não é retrospectiva.
   */
  const passados = useMemo(
    () => eventos.filter((e) => periodoDoEvento(e) && !eventoFuturo(e)),
    [eventos],
  );

  // ─── Anos disponíveis ───────────────────────────────────────────
  const availableYears = useMemo(() => {
    const yrs = new Set<number>();
    passados.forEach((e) => {
      const y = Number(e.eventoacf?.year);
      if (!isNaN(y)) yrs.add(y);
    });
    return Array.from(yrs).sort();
  }, [passados]);

  // O ano atual, se já teve evento; em janeiro, o último que teve.
  const [selectedYear, setSelectedYear] = useState(() =>
    availableYears.includes(currentYear)
      ? currentYear
      : (availableYears[availableYears.length - 1] ?? currentYear),
  );
  const [filter, setFilter] = useState('Todos');

  /**
   * Filtro por mês (Bruno, 02/10/2026): o ano inteiro numa lista só ficava
   * extenso demais. Abre no mês mais recente que já teve evento. O seletor
   * de ano vive no começo da mesma fileira; a opção de ver o ano inteiro
   * existiu e saiu no mesmo dia, a pedido dele.
   */
  const mesesComEventoNoAno = (ano: number) =>
    Array.from(
      new Set(
        passados
          .filter((e) => Number(e.eventoacf?.year) === ano)
          .map((e) => parseMonthIndex(e.eventoacf?.month || ''))
          .filter((m) => m >= 0),
      ),
    ).sort((a, b) => a - b);

  const mesInicial = (ano: number): number => {
    const meses = mesesComEventoNoAno(ano);
    return meses.length ? meses[meses.length - 1] : 0;
  };

  const [mes, setMes] = useState<number>(() => mesInicial(selectedYear));

  const escolherAno = (ano: number) => {
    setSelectedYear(ano);
    setMes(mesInicial(ano));
  };

  /**
   * As mesmas especialidades do filtro do topo da página: as canônicas que
   * têm pelo menos um evento, independentemente do ano escolhido aqui.
   *
   * Antes a lista era só a do ano, e por isso as duas seções da mesma página
   * ofereciam conjuntos diferentes — trocar de ano fazia um botão aparecer e
   * outro sumir, o que lê como defeito e não como recorte.
   */
  const availableSpecialties = useMemo(
    () => ['Todos', ...especialidadesComEvento(eventos)],
    [eventos],
  );

  // ─── Eventos enriquecidos com índice de mês ─────────────────────
  const enrichedEventos: EventoComMes[] = useMemo(() => {
    return passados
      .filter((e) => {
        const yr = Number(e.eventoacf?.year);
        const matchYear = yr === selectedYear;
        const matchFilter =
          filter === 'Todos' || eventoTemEspecialidade(e, filter);
        return matchYear && matchFilter;
      })
      .map((e) => ({
        ...e,
        _monthIndex: parseMonthIndex(e.eventoacf?.month || ''),
        _year: Number(e.eventoacf?.year),
      }))
      .sort((a, b) => a._monthIndex - b._monthIndex);
  }, [passados, selectedYear, filter]);

  // Os meses que têm evento no ano e na especialidade escolhidos — os demais
  // botões de mês ficam apagados, para nenhum clique dar em lista vazia.
  const mesesDisponiveis = useMemo(
    () => new Set(enrichedEventos.map((e) => e._monthIndex)),
    [enrichedEventos],
  );

  const visiveis = useMemo(
    () => enrichedEventos.filter((e) => e._monthIndex === mes),
    [enrichedEventos, mes],
  );

  // ─── Agrupar por mês ────────────────────────────────────────────
  const byMonth = useMemo(() => {
    const map = new Map<number, EventoComMes[]>();
    visiveis.forEach((e) => {
      const idx = e._monthIndex;
      if (!map.has(idx)) map.set(idx, []);
      map.get(idx)!.push(e);
    });
    return map;
  }, [visiveis]);

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
              Veja todos os eventos que aconteceram ao longo do ano
            </p>
          </div>
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

        {/* Ano e mês, na mesma fileira: o ano escolhe o conjunto, o mês recorta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <div className="flex gap-1.5" role="group" aria-label="Ano">
            {availableYears.map((yr) => (
              <button
                key={yr}
                type="button"
                aria-pressed={selectedYear === yr}
                onClick={() => escolherAno(yr)}
                className={cn(
                  'font-exo2 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all',
                  selectedYear === yr
                    ? 'bg-[#1a2a5e] text-white border-[#1a2a5e]'
                    : 'bg-gray-100 text-gray-600 border-gray-100 hover:bg-gray-200',
                )}
              >
                {yr}
              </button>
            ))}
          </div>

          <span className="h-5 w-px bg-gray-200" aria-hidden="true" />

          <div className="flex gap-1.5 flex-wrap" role="group" aria-label="Mês">
            {MONTH_SHORT.map((rotulo, m) => {
              const ativo = mes === m;
              const vazio = !mesesDisponiveis.has(m);
              return (
                <button
                  key={m}
                  type="button"
                  disabled={vazio}
                  aria-pressed={ativo}
                  onClick={() => setMes(m)}
                  title={MONTH_NAMES[m]}
                  className={cn(
                    'font-exo2 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-lg border transition-all',
                    ativo
                      ? 'bg-[#31A1FF] text-white border-[#31A1FF]'
                      : vazio
                        ? 'bg-transparent text-gray-300 border-transparent cursor-not-allowed'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#31A1FF]/50 hover:text-[#31A1FF]',
                  )}
                >
                  {rotulo}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        {monthsWithEvents.length === 0 ? (
          <p className="font-exo2 text-gray-400 text-center py-12">
            {`Nenhum evento${filter !== 'Todos' ? ` de ${filter}` : ''} em ${MONTH_NAMES[mes].toLowerCase()} de ${selectedYear}.`}
          </p>
        ) : (
          <div className="relative flex flex-col gap-0">
            {/* Linha vertical */}
            <div className="absolute left-[88px] md:left-[112px] top-0 bottom-0 w-px bg-gradient-to-b from-[#31A1FF]/30 via-[#31A1FF]/60 to-[#31A1FF]/10" />

            {monthsWithEvents.map((monthIdx, i) => {
              const monthEventos = byMonth.get(monthIdx)!;
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
                        'text-gray-800',
                      )}
                    >
                      {MONTH_SHORT[monthIdx]}
                    </span>
                    <span
                      className={cn(
                        'font-exo2 text-xs text-right mt-0.5',
                        'text-gray-400',
                      )}
                    >
                      {selectedYear}
                    </span>

                    {/* Dot */}
                    <div
                      className={cn(
                        'absolute right-[-21px] md:right-[-27px] top-7 size-3 rounded-full border-2 border-white z-10',
                        'bg-[#31A1FF]/60',
                      )}
                    />
                  </div>

                  {/* Eventos do mês */}
                  <div className="flex flex-col gap-3 py-4 flex-1 min-w-0">
                    {monthEventos.map((evento) => {
                      const acf = evento.eventoacf;
                      const specialidades = especialidadesDoEvento(evento);
                      // A cor é a do segmento: Autoral no azul de Promover Educação,
                      // Patrocinado no de Articular o Ecossistema.
                      const cor = coresDoEvento(evento);

                      return (
                        <div
                          key={evento.id}
                          className={cn(
                            'flex items-start gap-3 p-4 rounded-2xl border transition-all hover:shadow-md',
                            'bg-white border-gray-100',
                            cor.bordaHover,
                          )}
                        >
                          {/* Dot de especialidade */}
                          <div
                            className={cn(
                              'size-2.5 rounded-full mt-1.5 shrink-0',
                              cor.ponto,
                            )}
                          />

                          <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              {specialidades.map((sp) => (
                                <span
                                  key={sp}
                                  className={cn(
                                    'font-exo2 text-xs px-2 py-0.5 rounded-full border',
                                    cor.suave,
                                  )}
                                >
                                  {sp}
                                </span>
                              ))}
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
