'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock, ExternalLink, Share2 } from 'lucide-react';

interface HeroProximoEventoProps {
  evento: WPEventoNode | null;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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
  visitar_estande: 'Agende Visita ao Estande',
  saber_mais: 'Saiba Mais',
  gratuito: 'Participar Gratuitamente',
  convite: 'Solicitar Convite',
  vagas_limitadas: 'Garantir Minha Vaga',
};

function useCountdown(targetDate: string | undefined): Countdown | null {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    if (!targetDate) return;

    const target = new Date(targetDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 min-w-[64px] text-center">
        <span className="font-exo2 font-bold text-3xl md:text-4xl text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-exo2 text-xs text-white/70 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function buildCalendarLinks(evento: WPEventoNode) {
  const acf = evento.eventoacf;
  const title = encodeURIComponent(
    acf?.calendarTitle || evento.title || 'Evento LAS For Life',
  );
  const location = encodeURIComponent(acf?.local || '');
  const details = encodeURIComponent(`Evento LAS For Life — ${evento.title}`);

  if (!acf?.fullDate) return null;

  const start = new Date(acf.fullDate);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2h

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  return {
    google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}&location=${location}`,
    outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${start.toISOString()}&enddt=${end.toISOString()}&location=${location}&body=${details}`,
    apple: `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${fmt(start)}%0ADTEND:${fmt(end)}%0ASUMMARY:${title}%0ALOCATION:${location}%0AEND:VEVENT%0AEND:VCALENDAR`,
  };
}

export default function HeroProximoEvento({ evento }: HeroProximoEventoProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const countdown = useCountdown(evento?.eventoacf?.fullDate);

  if (!evento) return null;

  const acf = evento.eventoacf;
  const isFeira = acf?.eventType === 'feira';
  const formatLabel = EVENT_FORMAT_LABELS[acf?.eventFormat || ''] || 'Evento';
  const ctaLabel =
    SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'] ||
    'Quero Participar';
  const specialidades =
    evento.eventoCategorias?.nodes?.map((n) => n.name) || [];
  const calendarLinks = buildCalendarLinks(evento);

  const whatsappText = encodeURIComponent(
    acf?.whatsappShareText ||
      `🩺 Evento LAS For Life: *${evento.title}*\n📅 ${acf?.dateNumber} de ${acf?.month} de ${acf?.year}\n📍 ${acf?.local || ''}\n\nVeja mais em: ${typeof window !== 'undefined' ? window.location.href : ''}`,
  );

  const isFuture = acf?.fullDate ? new Date(acf.fullDate) > new Date() : false;

  return (
    <section
      id="hero-proximo-evento"
      className="relative w-full min-h-[85vh] flex items-end overflow-hidden"
    >
      {/* Background */}
      {acf?.img?.node?.sourceUrl ? (
        <Image
          src={acf.img.node.sourceUrl}
          alt={evento.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#1a2a5e] to-[#0d1b3e]" />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

      {/* Accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#31A1FF]/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14 pt-32 flex flex-col gap-6">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 bg-[#31A1FF] text-white font-exo2 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
            {formatLabel}
          </span>
          {specialidades.map((sp) => (
            <span
              key={sp}
              className="inline-flex items-center bg-white/15 backdrop-blur-sm border border-white/20 text-white font-exo2 text-xs px-3 py-1.5 rounded-full"
            >
              {sp}
            </span>
          ))}
          {isFeira && (
            <span className="inline-flex items-center gap-1.5 bg-[#7EE000]/20 border border-[#7EE000]/40 text-[#7EE000] font-exo2 text-xs font-semibold px-3 py-1.5 rounded-full">
              Estande {acf?.boothNumber && `#${acf.boothNumber}`}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-exo2 font-bold text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight">
          {evento.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-5 text-white/80">
          {acf?.local && (
            <span className="flex items-center gap-2 font-exo2 text-base">
              <MapPin className="size-4 text-[#31A1FF] shrink-0" />
              {acf.local}
            </span>
          )}
          {acf?.dateNumber && acf?.month && (
            <span className="flex items-center gap-2 font-exo2 text-base">
              <Calendar className="size-4 text-[#31A1FF] shrink-0" />
              {acf.dateNumber} de {acf.month}
              {acf.year ? ` de ${acf.year}` : ''}
            </span>
          )}
          {acf?.hours && (
            <span className="flex items-center gap-2 font-exo2 text-base">
              <Clock className="size-4 text-[#31A1FF] shrink-0" />
              {acf.hours}
            </span>
          )}
        </div>

        {/* Countdown */}
        {isFuture && countdown && (
          <div className="flex flex-col gap-3">
            <span className="font-exo2 text-sm text-white/60 uppercase tracking-widest">
              Faltam
            </span>
            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <CountdownUnit value={countdown.days} label="dias" />
              <span className="font-exo2 text-2xl text-white/40 font-bold mb-5">
                :
              </span>
              <CountdownUnit value={countdown.hours} label="horas" />
              <span className="font-exo2 text-2xl text-white/40 font-bold mb-5">
                :
              </span>
              <CountdownUnit value={countdown.minutes} label="min" />
              <span className="font-exo2 text-2xl text-white/40 font-bold mb-5">
                :
              </span>
              <CountdownUnit value={countdown.seconds} label="seg" />
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {/* Ver detalhes do evento */}
          <Link
            href={`/eventos/${evento.slug}`}
            className="inline-flex items-center gap-2 font-exo2 font-bold text-base rounded-full px-8 py-3 bg-white text-[#1a2a5e] hover:bg-white/90 transition-all duration-200"
          >
            Ver detalhes
          </Link>

          {/* CTA principal */}
          {acf?.subscribe && (
            <Link
              href={acf.subscribe}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 font-exo2 font-bold text-base rounded-full px-8 py-3 transition-all duration-200',
                isFeira
                  ? 'bg-[#7EE000] text-black hover:bg-[#6bcc00]'
                  : 'bg-[#31A1FF] text-white hover:bg-[#258de6]',
              )}
            >
              {ctaLabel}
              <ExternalLink className="size-4" />
            </Link>
          )}

          {/* Adicionar ao calendário */}
          {calendarLinks && (
            <div className="relative">
              <button
                onClick={() => setCalendarOpen((v) => !v)}
                className="inline-flex items-center gap-2 font-exo2 font-medium text-sm rounded-full px-5 py-3 bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 transition-all"
              >
                <Calendar className="size-4" />
                Adicionar ao Calendário
              </button>
              {calendarOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white rounded-xl shadow-2xl overflow-hidden z-50 min-w-[180px]">
                  <Link
                    href={calendarLinks.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 font-exo2 text-sm text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    📅 Google Calendar
                  </Link>
                  <Link
                    href={calendarLinks.outlook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 font-exo2 text-sm text-gray-800 hover:bg-gray-50 transition-colors border-t border-gray-100"
                  >
                    📧 Outlook
                  </Link>
                  <Link
                    href={calendarLinks.apple}
                    download={`${evento.slug}.ics`}
                    className="flex items-center gap-2 px-4 py-3 font-exo2 text-sm text-gray-800 hover:bg-gray-50 transition-colors border-t border-gray-100"
                  >
                    🍎 Apple Calendar
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Compartilhar WhatsApp */}
          {acf?.subscribe && (
            <Link
              href={`https://wa.me/?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-exo2 font-medium text-sm rounded-full px-5 py-3 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-all"
            >
              <Share2 className="size-4" />
              WhatsApp
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
