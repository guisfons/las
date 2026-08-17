'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ExternalLink, Share2, Calendar } from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';

interface GridProximosEventosProps {
  eventos: WPEventoNode[];
  filter: string;
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
    bg: 'bg-[#FF6B35]/20',
    text: 'text-[#FF6B35]',
    border: 'border-[#FF6B35]/40',
  },
  coluna: {
    bg: 'bg-[#7EE000]/20',
    text: 'text-[#7EE000]',
    border: 'border-[#7EE000]/40',
  },
  'cabeça e pescoço': {
    bg: 'bg-purple-500/20',
    text: 'text-purple-600',
    border: 'border-purple-500/40',
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
  hidden: { opacity: 0, scale: 0.93, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.93,
    y: -16,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

// ─── Card Quadrado ──────────────────────────────────────────────────────────
function CardQuadrado({ evento }: { evento: WPEventoNode }) {
  const acf = evento.eventoacf;
  const specialidades = evento.eventoCategorias?.nodes || [];
  const isFeira = acf?.eventType === 'feira';
  const ctaLabel = SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'];
  const formatLabel = EVENT_FORMAT_LABELS[acf?.eventFormat || ''] || 'Evento';
  const whatsappText = encodeURIComponent(
    `🩺 ${evento.title} — ${acf?.dateNumber} de ${acf?.month}\n📍 ${acf?.local || ''}\n\nSaiba mais: ${typeof window !== 'undefined' ? window.location.href : ''}`,
  );

  return (
    <motion.figure
      key={evento.id}
      className="flex flex-col gap-4 group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* Imagem quadrada */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
        {acf?.img?.node?.sourceUrl ? (
          <Image
            src={acf.img.node.sourceUrl}
            alt={evento.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#31A1FF]/30 to-[#1a2a5e]" />
        )}
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Data flutuante */}
        <div className="absolute top-4 left-4 flex flex-col">
          <span className="font-exo2 text-white font-bold text-4xl lg:text-5xl leading-none">
            {acf?.dateNumber}
          </span>
          <span className="font-exo2 text-white/80 text-sm uppercase tracking-widest">
            {acf?.month}
          </span>
        </div>

        {/* Tag de formato */}
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              'font-exo2 text-xs font-semibold px-3 py-1 rounded-full',
              isFeira ? 'bg-[#7EE000] text-black' : 'bg-[#FF6B35] text-white',
            )}
          >
            {formatLabel}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 px-1">
        {/* Tags especialidade */}
        <div className="flex flex-wrap gap-1.5">
          {specialidades.map((sp) => {
            const color = getSpecialtyColor(sp.name);
            return (
              <span
                key={sp.slug}
                className={cn(
                  'font-exo2 text-xs px-2.5 py-0.5 rounded-full border',
                  color.bg,
                  color.text,
                  color.border,
                )}
              >
                {sp.name}
              </span>
            );
          })}
        </div>

        <h3 className="font-exo2 font-bold text-xl leading-snug">
          {evento.title}
        </h3>

        {acf?.local && (
          <p className="flex items-center gap-1.5 font-exo2 text-sm text-gray-500">
            <MapPin className="size-3.5 text-[#31A1FF] shrink-0" />
            {acf.local}
          </p>
        )}
        {acf?.hours && (
          <p className="flex items-center gap-1.5 font-exo2 text-sm text-gray-500">
            <Clock className="size-3.5 text-[#31A1FF] shrink-0" />
            {acf.hours}
          </p>
        )}
        {acf?.speaker && (
          <p className="font-exo2 text-sm text-gray-600">
            <span className="font-semibold">Palestrante:</span> {acf.speaker}
          </p>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 mt-1">
          {acf?.subscribe ? (
            <Link
              href={acf.subscribe}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 font-exo2 font-semibold text-sm rounded-full px-5 py-2 transition-all duration-200',
                isFeira
                  ? 'bg-[#7EE000]/10 text-[#5aac00] border border-[#7EE000]/30 hover:bg-[#7EE000]/20'
                  : 'bg-[#31A1FF]/10 text-[#31A1FF] border border-[#31A1FF]/30 hover:bg-[#31A1FF]/20',
              )}
            >
              {ctaLabel} <ExternalLink className="size-3" />
            </Link>
          ) : null}
          <Link
            href={`https://wa.me/?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
            aria-label="Compartilhar no WhatsApp"
          >
            <Share2 className="size-3.5" />
          </Link>
          {acf?.fullDate && (
            <Link
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evento.title)}&dates=${new Date(acf.fullDate).toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${new Date(new Date(acf.fullDate).getTime() + 2 * 3600000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z&location=${encodeURIComponent(acf?.local || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
              aria-label="Adicionar ao Google Calendar"
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
  const isFeira = acf?.eventType === 'feira';
  const ctaLabel = SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'];
  const formatLabel = EVENT_FORMAT_LABELS[acf?.eventFormat || ''] || 'Evento';

  return (
    <motion.figure
      key={evento.id}
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
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a5e] to-[#0d1b3e]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          <div className="flex flex-wrap gap-2">
            <span
              className={cn(
                'font-exo2 text-xs font-semibold px-3 py-1 rounded-full',
                isFeira ? 'bg-[#7EE000] text-black' : 'bg-[#FF6B35] text-white',
              )}
            >
              {formatLabel}
            </span>
            {specialidades.map((sp) => {
              const color = getSpecialtyColor(sp.name);
              return (
                <span
                  key={sp.slug}
                  className={cn(
                    'font-exo2 text-xs px-2.5 py-1 rounded-full border',
                    color.bg,
                    color.text,
                    color.border,
                  )}
                >
                  {sp.name}
                </span>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-3">
                <span className="font-exo2 text-white font-bold text-5xl">
                  {acf?.dateNumber}
                </span>
                <span className="font-exo2 text-white/70 text-lg uppercase">
                  {acf?.month}
                </span>
              </div>
              <h3 className="font-exo2 font-bold text-2xl md:text-3xl text-white">
                {evento.title}
              </h3>
              {acf?.local && (
                <p className="flex items-center gap-1.5 font-exo2 text-white/70 text-sm">
                  <MapPin className="size-3.5" /> {acf.local}
                </p>
              )}
            </div>

            {acf?.subscribe && (
              <Link
                href={acf.subscribe}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 font-exo2 font-bold text-sm rounded-full px-6 py-3 transition-all duration-200 shrink-0',
                  isFeira
                    ? 'bg-[#7EE000] text-black hover:bg-[#6bcc00]'
                    : 'bg-[#FF6B35] text-white hover:bg-[#e5602e]',
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

// ─── Card Ícone (Redondo) ───────────────────────────────────────────────────
function CardIcon({ evento }: { evento: WPEventoNode }) {
  const acf = evento.eventoacf;
  const specialidades = evento.eventoCategorias?.nodes || [];
  const isFeira = acf?.eventType === 'feira';
  const ctaLabel = SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'];
  const firstSpecialty = specialidades[0];
  const color = firstSpecialty
    ? getSpecialtyColor(firstSpecialty.name)
    : {
        bg: 'bg-[#31A1FF]/10',
        text: 'text-[#31A1FF]',
        border: 'border-[#31A1FF]/20',
      };

  return (
    <motion.figure
      key={evento.id}
      className="flex flex-col items-center gap-4 text-center group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* Círculo com imagem */}
      <div
        className={cn(
          'relative size-40 md:size-48 rounded-full overflow-hidden border-4 shrink-0 transition-transform duration-300 group-hover:scale-105',
          isFeira ? 'border-[#7EE000]/40' : 'border-[#31A1FF]/30',
        )}
      >
        {acf?.img?.node?.sourceUrl ? (
          <Image
            src={acf.img.node.sourceUrl}
            alt={evento.title}
            fill
            className="object-cover"
            sizes="200px"
          />
        ) : (
          <div className={cn('absolute inset-0', color.bg)} />
        )}
      </div>

      {/* Tags especialidade */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {specialidades.map((sp) => {
          const c = getSpecialtyColor(sp.name);
          return (
            <span
              key={sp.slug}
              className={cn(
                'font-exo2 text-xs px-2.5 py-0.5 rounded-full border',
                c.bg,
                c.text,
                c.border,
              )}
            >
              {sp.name}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-exo2 text-gray-500 text-sm">
          {acf?.dateNumber} de {acf?.month}
        </span>
        <h3 className="font-exo2 font-bold text-lg">{evento.title}</h3>
        {acf?.local && (
          <p className="font-exo2 text-sm text-gray-500 flex items-center justify-center gap-1">
            <MapPin className="size-3" /> {acf.local}
          </p>
        )}
      </div>

      {acf?.subscribe && (
        <Link
          href={acf.subscribe}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 font-exo2 font-semibold text-xs rounded-full px-5 py-2 transition-all duration-200',
            isFeira
              ? 'bg-[#7EE000]/10 text-[#5aac00] border border-[#7EE000]/30 hover:bg-[#7EE000]/20'
              : 'bg-[#31A1FF]/10 text-[#31A1FF] border border-[#31A1FF]/30 hover:bg-[#31A1FF]/20',
          )}
        >
          {ctaLabel}
        </Link>
      )}
    </motion.figure>
  );
}

// ─── Componente principal ───────────────────────────────────────────────────
export default function GridProximosEventos({
  eventos,
  filter,
}: GridProximosEventosProps) {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  const filteredEventos = eventos.filter((e) => {
    const yr = Number(e.eventoacf?.year);
    const isUpcoming = yr === currentYear || yr === nextYear;
    const matchFilter =
      filter === 'Todos' ||
      (e.eventoCategorias?.nodes || []).some((n) => n.name === filter);
    return isUpcoming && matchFilter;
  });

  if (filteredEventos.length === 0) {
    return (
      <div className="w-full max-w-7xl px-6 mx-auto py-12 text-center">
        <p className="font-exo2 text-gray-400 text-lg">
          Nenhum próximo evento encontrado para esse filtro.
        </p>
      </div>
    );
  }

  return (
    <div
      id="grid_events"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
    >
      <AnimatePresence mode="popLayout">
        {filteredEventos.map((evento) => {
          const imageType = evento.eventoacf?.imageType || 'quadrada';
          if (imageType === 'banner')
            return <CardBanner key={evento.id} evento={evento} />;
          if (imageType === 'icon')
            return <CardIcon key={evento.id} evento={evento} />;
          return <CardQuadrado key={evento.id} evento={evento} />;
        })}
      </AnimatePresence>
    </div>
  );
}
