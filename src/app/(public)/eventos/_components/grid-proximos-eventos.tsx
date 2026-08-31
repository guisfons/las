'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ExternalLink, Share2, Calendar } from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';
import { getEventDate } from '../eventos-client';

interface GridProximosEventosProps {
  eventos: WPEventoNode[];
  filter: string | null;
  segment: string;
}

// ─── Cores por especialidade ────────────────────────────────────────────────
const SPECIALTY_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  ortopedia: {
    bg: 'bg-[#31A1FF]/20',
    text: 'text-[#31A1FF]',
    border: 'border-[#31A1FF]/40',
  },
  ginecologia: {
    bg: 'bg-[#7EE000]/20',
    text: 'text-[#7EE000]',
    border: 'border-[#7EE000]/40',
  },
  coluna: {
    bg: 'bg-[#31A1FF]/20',
    text: 'text-[#31A1FF]',
    border: 'border-[#31A1FF]/40',
  },
  'cabeça e pescoço': {
    bg: 'bg-[#1a2a5e]/10',
    text: 'text-[#1a2a5e]',
    border: 'border-[#1a2a5e]/30',
  },
};

function getSpecialtyColor(name: string) {
  return (
    SPECIALTY_COLORS[name.toLowerCase()] || {
      bg: 'bg-gray-200',
      text: 'text-gray-700',
      border: 'border-gray-300',
    }
  );
}

const EVENT_FORMAT_LABELS: Record<string, string> = {
  jantar_cientifico: 'Jantar Científico',
  curso: 'Curso',
  congresso: 'Congresso',
  feira: 'Feira',
  simposio: 'Simpósio',
  workshop: 'Workshop',
  outro: 'Evento',
};

const SUBSCRIBE_TYPE_LABELS: Record<string, string> = {
  participar: 'Quero Participar',
  visitar_estande: 'Visitar Estande',
  saber_mais: 'Saiba Mais',
  gratuito: 'Participar Grátis',
  convite: 'Solicitar Convite',
  vagas_limitadas: 'Garantir Vaga',
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -16,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

function getEventStyle(evento: WPEventoNode) {
  const acf = evento.eventoacf;
  const date = getEventDate(evento);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPast = date ? date < today : false;

  if (isPast) {
    return {
      bg: 'bg-gray-500',
      tag: 'bg-gray-500 text-white',
      border: 'border-gray-300',
      text: 'text-gray-600',
      gradient: 'from-gray-500/30 to-gray-800',
      isPast: true,
    };
  }

  if (acf?.eventType === 'feira') {
    return {
      bg: 'bg-[#7EE000]',
      tag: 'bg-[#7EE000] text-black',
      border: 'border-[#7EE000]/30',
      text: 'text-[#5aac00]',
      gradient: 'from-[#7EE000]/30 to-[#1a2a5e]',
      isPast: false,
    };
  }

  if (acf?.eventType === 'educacional') {
    return {
      bg: 'bg-[#1a2a5e]',
      tag: 'bg-[#1a2a5e] text-white',
      border: 'border-[#1a2a5e]/30',
      text: 'text-[#1a2a5e]',
      gradient: 'from-[#1a2a5e]/50 to-[#0a1433]',
      isPast: false,
    };
  }

  // Default: Autoral
  return {
    bg: 'bg-[#31A1FF]',
    tag: 'bg-[#31A1FF] text-white',
    border: 'border-[#31A1FF]/30',
    text: 'text-[#31A1FF]',
    gradient: 'from-[#31A1FF]/30 to-[#1a2a5e]',
    isPast: false,
  };
}

// ─── Card Quadrado ──────────────────────────────────────────────────────────
function CardQuadrado({ evento }: { evento: WPEventoNode }) {
  const acf = evento.eventoacf;
  const specialidades = evento.eventoCategorias?.nodes || [];
  const ctaLabel = SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'] || 'Saiba Mais';
  const formatLabel = EVENT_FORMAT_LABELS[acf?.eventFormat || ''] || 'Evento';
  const style = getEventStyle(evento);

  const whatsappText = encodeURIComponent(
    `🩺 ${evento.title} — ${acf?.dateNumber} de ${acf?.month}\n📍 ${acf?.local || ''}\n\nSaiba mais: ${typeof window !== 'undefined' ? window.location.href : ''}`,
  );

  return (
    <motion.figure
      className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-4 group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <Link
        href={`/eventos/${evento.slug}`}
        className="block relative aspect-video rounded-3xl overflow-hidden bg-gray-100"
      >
        {acf?.img?.node?.sourceUrl ? (
          <Image
            src={acf.img.node.sourceUrl}
            alt={evento.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              style.isPast && "grayscale opacity-80 group-hover:grayscale-0"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", style.gradient)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {acf?.dateNumber && (
          <div className="absolute top-4 left-4 flex flex-col">
            <span className="font-exo2 text-white font-bold text-3xl lg:text-4xl leading-none shadow-sm">
              {acf?.dateNumber}
            </span>
            <span className="font-exo2 text-white/90 text-[10px] lg:text-xs uppercase tracking-widest font-semibold drop-shadow-md">
              {acf?.month}
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className={cn('font-exo2 text-[10px] lg:text-xs font-semibold px-3 py-1 rounded-full shadow-lg', style.tag)}>
            {formatLabel}
          </span>
        </div>
      </Link>

      <div className="flex flex-col gap-2 px-1">
        <div className="flex flex-wrap gap-1.5">
          {specialidades.map((sp) => {
            const color = getSpecialtyColor(sp.name);
            return (
              <span
                key={sp.slug}
                className={cn(
                  'font-exo2 text-[10px] px-2 py-0.5 rounded-full border font-medium',
                  color.bg, color.text, color.border,
                )}
              >
                {sp.name}
              </span>
            );
          })}
        </div>

        <Link href={`/eventos/${evento.slug}`}>
          <h3 className={cn("font-exo2 font-bold text-lg leading-snug transition-colors", style.isPast ? "text-gray-600 hover:text-gray-900" : "hover:text-[#31A1FF]")}>
            {evento.title}
          </h3>
        </Link>

        {acf?.local && (
          <p className="flex items-center gap-1.5 font-exo2 text-xs text-gray-500">
            <MapPin className={cn("size-3.5 shrink-0", style.text)} />
            {acf.local}
          </p>
        )}
        {acf?.hours && (
          <p className="flex items-center gap-1.5 font-exo2 text-xs text-gray-500">
            <Clock className={cn("size-3.5 shrink-0", style.text)} />
            {acf.hours}
          </p>
        )}

        <div className="flex items-center gap-2 mt-2">
          {acf?.subscribe && !style.isPast ? (
            <>
              <Link
                href={acf.subscribe}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-1.5 font-exo2 font-semibold text-xs rounded-full px-4 py-2 transition-all duration-200 border',
                  `bg-${style.text.replace('text-', '')}/10`,
                  style.text,
                  style.border,
                  `hover:bg-${style.text.replace('text-', '')}/20`
                )}
              >
                {ctaLabel} <ExternalLink className="size-3" />
              </Link>
              <Link
                href={`https://wa.me/?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
              >
                <Share2 className="size-3.5" />
              </Link>
            </>
          ) : (
            <Link
                href={`/eventos/${evento.slug}`}
                className="inline-flex items-center gap-1.5 font-exo2 font-semibold text-xs rounded-full px-4 py-2 transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Ver Detalhes
            </Link>
          )}
          {acf?.fullDate && !style.isPast && (
            <Link
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evento.title)}&dates=${new Date(acf.fullDate).toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${new Date(new Date(acf.fullDate).getTime() + 2 * 3600000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z&location=${encodeURIComponent(acf?.local || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <Calendar className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.figure>
  );
}

// ─── Card Banner (Retangular) ───────────────────────────────────────────────
function CardBanner({ evento }: { evento: WPEventoNode }) {
  const acf = evento.eventoacf;
  const specialidades = evento.eventoCategorias?.nodes || [];
  const ctaLabel = SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'];
  const formatLabel = EVENT_FORMAT_LABELS[acf?.eventFormat || ''] || 'Evento';
  const style = getEventStyle(evento);

  return (
    <motion.figure
      className="col-span-full group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <div className="relative h-56 md:h-72 rounded-3xl overflow-hidden bg-gray-100">
        {acf?.img?.node?.sourceUrl ? (
          <Image
            src={acf.img.node.sourceUrl}
            alt={evento.title}
            fill
            className={cn("object-cover transition-transform duration-500 group-hover:scale-105", style.isPast && "grayscale")}
            sizes="100vw"
          />
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", style.gradient)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          <div className="flex flex-wrap gap-2">
            <span className={cn('font-exo2 text-xs font-semibold px-3 py-1 rounded-full shadow-md', style.tag)}>
              {formatLabel}
            </span>
            {specialidades.map((sp) => {
              const color = getSpecialtyColor(sp.name);
              return (
                <span
                  key={sp.slug}
                  className={cn(
                    'font-exo2 text-xs px-2.5 py-1 rounded-full border',
                    color.bg, color.text, color.border,
                  )}
                >
                  {sp.name}
                </span>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              {acf?.dateNumber && (
                <div className="flex items-baseline gap-3">
                  <span className="font-exo2 text-white font-bold text-4xl md:text-5xl">
                    {acf?.dateNumber}
                  </span>
                  <span className="font-exo2 text-white/80 text-sm md:text-lg uppercase">
                    {acf?.month}
                  </span>
                </div>
              )}
              <h3 className="font-exo2 font-bold text-2xl md:text-3xl text-white drop-shadow-md">
                {evento.title}
              </h3>
              {acf?.local && (
                <p className="flex items-center gap-1.5 font-exo2 text-white/80 text-sm drop-shadow-sm">
                  <MapPin className="size-3.5" /> {acf.local}
                </p>
              )}
            </div>

            {acf?.subscribe && !style.isPast && (
              <Link
                href={acf.subscribe}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 font-exo2 font-bold text-sm rounded-full px-6 py-3 transition-all duration-200 shrink-0 border border-transparent hover:border-white/20',
                  style.bg, style.bg === 'bg-[#7EE000]' ? 'text-black hover:bg-[#6bcc00]' : 'text-white hover:brightness-110'
                )}
              >
                {ctaLabel} <ExternalLink className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.figure>
  );
}

// ─── Componente principal ───────────────────────────────────────────────────
export default function GridProximosEventos({
  eventos,
  filter,
  segment,
}: GridProximosEventosProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredEventos = eventos.filter((e) => {
    // Especialidade filter
    const matchEspecialidade =
      !filter ||
      (e.eventoCategorias?.nodes || []).some((n) => n.name === filter);
    
    if (!matchEspecialidade) return false;

    // Segmento filter
    const date = getEventDate(e);
    const isPast = date ? date < today : false;
    const isFuture = date ? date >= today : true;
    const type = e.eventoacf?.eventType;

    if (segment === 'Passados') return isPast;
    if (segment === 'Patrocinado') return isFuture && type === 'feira';
    if (segment === 'Educacional') return isFuture && type === 'educacional';
    
    // Autoral matches 'autoral' or fallback for future events without specific type
    return isFuture && (!type || type === 'autoral');
  });

  // Sort chronological
  filteredEventos.sort((a, b) => {
    const da = getEventDate(a)?.getTime() || 0;
    const db = getEventDate(b)?.getTime() || 0;
    return segment === 'Passados' ? db - da : da - db; // Passados: newest first. Future: soonest first.
  });

  // Group by month
  const grouped = filteredEventos.reduce((acc, evento) => {
    const m = evento.eventoacf?.month || 'Sem Mês';
    const y = evento.eventoacf?.year || '';
    const key = `${m} ${y}`.trim();
    if (!acc[key]) acc[key] = [];
    acc[key].push(evento);
    return acc;
  }, {} as Record<string, WPEventoNode[]>);

  if (filteredEventos.length === 0) {
    return (
      <div className="w-full max-w-7xl px-6 mx-auto py-12 text-center">
        <p className="font-exo2 text-gray-400 text-lg">
          Nenhum evento encontrado para os filtros selecionados.
        </p>
      </div>
    );
  }

  return (
    <div id="grid_events" className="flex flex-col gap-16 w-full">
      {Object.entries(grouped).map(([monthYear, evs]) => (
        <div key={monthYear} className="flex flex-col gap-6 w-full">
          {monthYear !== 'Sem Mês' && (
            <div className="flex items-center gap-4">
              <h3 className="font-exo2 font-bold text-2xl text-[#1a2a5e] uppercase tracking-wide">
                {monthYear}
              </h3>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 w-full">
            <AnimatePresence mode="popLayout">
              {evs.map((evento) => {
                const imageType = evento.eventoacf?.imageType || 'quadrada';
                if (imageType === 'banner')
                  return <CardBanner key={evento.id} evento={evento} />;
                return <CardQuadrado key={evento.id} evento={evento} />;
              })}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}

