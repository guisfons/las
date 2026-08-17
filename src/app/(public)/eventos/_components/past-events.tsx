'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Users,
  ExternalLink,
  Instagram,
  Linkedin,
  MapPin,
} from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';
import { getEventDate } from '../eventos-client';

interface EventosAnterioresProps {
  eventos: WPEventoNode[];
}

const SPECIALTY_COLORS: Record<string, { bg: string; text: string }> = {
  ortopedia: { bg: 'bg-[#31A1FF]/10', text: 'text-[#31A1FF]' },
  ginecologia: { bg: 'bg-[#7EE000]/10', text: 'text-[#5aac00]' },
  coluna: { bg: 'bg-[#31A1FF]/10', text: 'text-[#31A1FF]' },
  'cabeça e pescoço': { bg: 'bg-[#1a2a5e]/10', text: 'text-[#1a2a5e]' },
};

function getColor(name: string) {
  return (
    SPECIALTY_COLORS[name.toLowerCase()] || {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
    }
  );
}

function PhotoCarousel({
  photos,
}: {
  photos: { sourceUrl: string; altText?: string }[];
}) {
  const [active, setActive] = useState(0);

  if (photos.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      {/* Foto principal */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={photos[active].sourceUrl}
              alt={photos[active].altText || ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={cn(
                'relative size-14 rounded-xl overflow-hidden border-2 transition-all',
                active === idx
                  ? 'border-[#31A1FF]'
                  : 'border-transparent opacity-60 hover:opacity-80',
              )}
            >
              <Image
                src={photo.sourceUrl}
                alt={photo.altText || ''}
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CardEventoPassado({ evento }: { evento: WPEventoNode }) {
  const [open, setOpen] = useState(false);
  const acf = evento.eventoacf;
  const specialidades = evento.eventoCategorias?.nodes || [];
  const photos = acf?.gallery?.nodes || [];
  const hasPhotos = photos.length > 0;

  const recapIsInstagram = acf?.recapLink?.includes('instagram');
  const recapIsLinkedin = acf?.recapLink?.includes('linkedin');

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Header — sempre visível */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        {/* Indicador visual: thumbnail ou gradiente */}
        <div className="relative size-16 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-gray-200 to-gray-100">
          {hasPhotos && (
            <Image
              src={photos[0].sourceUrl}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          )}
          {!hasPhotos && acf?.img?.node?.sourceUrl && (
            <Image
              src={acf.img.node.sourceUrl}
              alt=""
              fill
              className="object-cover grayscale"
              sizes="64px"
            />
          )}
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-0">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {specialidades.map((sp) => {
              const c = getColor(sp.name);
              return (
                <span
                  key={sp.slug}
                  className={cn(
                    'font-exo2 text-xs px-2 py-0.5 rounded-full',
                    c.bg,
                    c.text,
                  )}
                >
                  {sp.name}
                </span>
              );
            })}
          </div>
          <p className="font-exo2 font-bold text-gray-900 text-base leading-tight truncate">
            {evento.title}
          </p>
          <div className="flex items-center gap-3 text-gray-400 flex-wrap">
            <span className="font-exo2 text-xs">
              {acf?.dateNumber} de {acf?.month} de {acf?.year}
            </span>
            {acf?.local && (
              <span className="flex items-center gap-1 font-exo2 text-xs">
                <MapPin className="size-3" /> {acf.local}
              </span>
            )}
          </div>
        </div>

        {/* Número de impacto */}
        {acf?.impactNumber && (
          <div className="hidden md:flex items-center gap-2 shrink-0 bg-[#31A1FF]/5 border border-[#31A1FF]/15 rounded-xl px-4 py-2">
            <Users className="size-4 text-[#31A1FF]" />
            <span className="font-exo2 font-semibold text-sm text-[#1a2a5e] whitespace-nowrap">
              {acf.impactNumber}
            </span>
          </div>
        )}

        <ChevronDown
          className={cn(
            'size-5 text-gray-400 shrink-0 transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>

      {/* Conteúdo expandido */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-6 p-5 border-t border-gray-100 bg-gray-50/30">
              {/* Galeria */}
              {hasPhotos && (
                <div className="md:w-1/2">
                  <PhotoCarousel photos={photos} />
                </div>
              )}

              {/* Info & CTAs */}
              <div className="flex flex-col gap-5 flex-1">
                {/* Número de impacto mobile */}
                {acf?.impactNumber && (
                  <div className="md:hidden flex items-center gap-2 bg-[#31A1FF]/5 border border-[#31A1FF]/15 rounded-xl px-4 py-3">
                    <Users className="size-5 text-[#31A1FF]" />
                    <span className="font-exo2 font-bold text-base text-[#1a2a5e]">
                      {acf.impactNumber}
                    </span>
                  </div>
                )}

                {/* Speaker & Moderator */}
                {(acf?.speaker || acf?.moderator) && (
                  <div className="flex flex-col gap-1.5">
                    {acf?.speaker && (
                      <p className="font-exo2 text-sm text-gray-700">
                        <span className="font-semibold">Palestrante:</span>{' '}
                        {acf.speaker}
                      </p>
                    )}
                    {acf?.moderator && (
                      <p className="font-exo2 text-sm text-gray-700">
                        <span className="font-semibold">Moderador:</span>{' '}
                        {acf.moderator}
                      </p>
                    )}
                  </div>
                )}

                {/* Patrocinadores */}
                {acf?.sponsors && acf.sponsors.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
                      Parceiros do evento
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      {acf.sponsors.map((sponsor, idx) =>
                        sponsor.logo?.node?.sourceUrl ? (
                          <div key={idx} className="relative h-8 w-20">
                            <Image
                              src={sponsor.logo.node.sourceUrl}
                              alt={sponsor.name || ''}
                              fill
                              className="object-contain grayscale opacity-60"
                              sizes="80px"
                            />
                          </div>
                        ) : (
                          <span
                            key={idx}
                            className="font-exo2 text-xs text-gray-500 border border-gray-200 rounded px-2 py-1"
                          >
                            {sponsor.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Recap link */}
                {acf?.recapLink && (
                  <Link
                    href={acf.recapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-exo2 font-semibold text-sm rounded-full px-5 py-2.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white w-fit hover:opacity-90 transition-opacity"
                  >
                    {recapIsInstagram && <Instagram className="size-4" />}
                    {recapIsLinkedin && <Linkedin className="size-4" />}
                    {!recapIsInstagram && !recapIsLinkedin && (
                      <ExternalLink className="size-4" />
                    )}
                    Ver recap do evento
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EventosAnteriores({ eventos }: EventosAnterioresProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Eventos passados: data anterior a hoje
  const eventosPast = eventos.filter((e) => {
    const d = getEventDate(e);
    if (!d) return false;
    return d < today;
  });

  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? eventosPast : eventosPast.slice(0, 5);

  if (eventosPast.length === 0) return null;

  return (
    <section id="eventos-anteriores" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="font-exo2 font-bold text-2xl md:text-4xl">
            Eventos Realizados
          </h2>
          <p className="font-exo2 text-gray-500 text-base">
            Conheça a história dos nossos eventos e o impacto gerado
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {visible.map((evento) => (
            <CardEventoPassado key={evento.id} evento={evento} />
          ))}
        </div>

        {/* Ver mais */}
        {eventosPast.length > 5 && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="self-center font-exo2 text-sm text-gray-500 border border-gray-200 rounded-full px-6 py-2 hover:border-gray-300 hover:text-gray-700 transition-all"
          >
            {showAll
              ? 'Mostrar menos'
              : `Ver mais ${eventosPast.length - 5} eventos`}
          </button>
        )}
      </div>
    </section>
  );
}
