'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  Share2,
  ChevronLeft,
  Users,
  Instagram,
  Linkedin,
  Hotel,
  Navigation,
} from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';
import {
  especialidadesDoEvento,
  segmentoDoEvento,
} from '@/lib/eventos/taxonomia';
import { eventoFuturo, linkWhatsApp } from '@/lib/eventos/agenda';
import { varCorEvento } from '../_components/cores-segmento';
import { BotaoCalendario, BotaoWhatsApp } from '../_components/acoes-evento';
import Footer from '@/components/footer';
import CardProduct, { Product } from '../../produtos/_components/card-product';

interface Props {
  evento: WPEventoNode;
  outrosEventos: WPEventoNode[];
  produtos?: Product[];
}

const SUBSCRIBE_TYPE_LABELS: Record<string, string> = {
  participar: 'Quero Participar',
  visitar_estande: 'Agende Visita ao Estande',
  saber_mais: 'Saiba Mais',
  gratuito: 'Participar Gratuitamente',
  convite: 'Solicitar Convite',
  vagas_limitadas: 'Garantir Minha Vaga',
};

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDate: string | undefined): Countdown | null {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    if (!targetDate) return;
    const target = new Date(targetDate).getTime();
    const tick = () => {
      const diff = target - Date.now();
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
      <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 min-w-[72px] text-center">
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

function PhotoGallery({
  photos,
}: {
  photos: { sourceUrl: string; altText?: string }[];
}) {
  const [active, setActive] = useState(0);
  if (photos.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={photos[active].sourceUrl}
          alt={photos[active].altText || ''}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
      {photos.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={cn(
                'relative size-16 rounded-xl overflow-hidden border-2 transition-all',
                active === idx
                  ? 'border-[rgb(var(--cor-evento))]'
                  : 'border-transparent opacity-60 hover:opacity-80',
              )}
            >
              <Image
                src={photo.sourceUrl}
                alt={photo.altText || ''}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MiniCard({ evento }: { evento: WPEventoNode }) {
  const acf = evento.eventoacf;
  return (
    <Link
      href={`/eventos/${evento.slug}`}
      style={varCorEvento(evento)}
      className="group flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[rgb(var(--cor-evento)/0.3)] hover:bg-[rgb(var(--cor-evento)/0.05)] transition-all"
    >
      <div className="relative aspect-[324/222] w-28 rounded-xl overflow-hidden shrink-0 bg-gray-100">
        {acf?.img?.node?.sourceUrl ? (
          <Image
            src={acf.img.node.sourceUrl}
            alt={evento.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="112px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--cor-evento)/0.3)] to-[#1a2a5e]" />
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="font-exo2 text-xs text-[rgb(var(--cor-evento))] font-semibold">
          {acf?.dateNumber} de {acf?.month}
          {acf?.year ? ` / ${acf.year}` : ''}
        </span>
        <h4 className="font-exo2 font-bold text-sm text-gray-900 leading-snug line-clamp-2 group-hover:text-[rgb(var(--cor-evento))] transition-colors">
          {evento.title}
        </h4>
        {acf?.local && (
          <p className="font-exo2 text-xs text-gray-400 flex items-center gap-1">
            <MapPin className="size-3 shrink-0" /> {acf.local}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function EventoPageClient({
  evento,
  outrosEventos,
  produtos = [],
}: Props) {
  const acf = evento.eventoacf;
  const countdown = useCountdown(acf?.fullDate);
  // O bloco "Nosso Estande" é de evento patrocinado. Antes a condição
  // procurava "feira" nos segmentos do WordPress, que estão vazios.
  const isFeira = segmentoDoEvento(evento) === 'Patrocinado';
  const isFuture = acf?.fullDate ? new Date(acf.fullDate) > new Date() : false;
  const ctaLabel =
    SUBSCRIBE_TYPE_LABELS[acf?.subscribeType || 'participar'] ||
    'Quero Participar';
  // Nomes canônicos: Ablação aparece como Cabeça e Pescoço, aqui e na
  // listagem. Ver src/lib/eventos/taxonomia.ts.
  const specialidades = especialidadesDoEvento(evento);
  const photos = acf?.gallery?.nodes || [];
  const hasPhotos = photos.length > 0;

  const recapIsInstagram = acf?.recapLink?.includes('instagram');
  const recapIsLinkedin = acf?.recapLink?.includes('linkedin');

  const relatedEvents = [...outrosEventos]
    .filter((e) => {
      const hasSameSpecialty = especialidadesDoEvento(e).some((c) =>
        specialidades.includes(c),
      );
      return hasSameSpecialty;
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'))
    .slice(0, 4);

  const relatedProducts = [...produtos]
    .filter((p) => {
      const hasSameSpecialty = p.specialities.some((ps) =>
        specialidades.some((es) => es.toLowerCase() === ps.toLowerCase()),
      );
      const hasSameName = p.name
        .toLowerCase()
        .includes(evento.title.toLowerCase());
      return hasSameSpecialty || hasSameName;
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
    .slice(0, 4);

  return (
    // `contents` não cria caixa: só declara a cor para tudo o que vem dentro.
    <div className="contents" style={varCorEvento(evento)}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--cor-evento)/0.15)] via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 pt-36 flex flex-col gap-5">
          {/* Breadcrumb */}
          <Link
            href="/eventos"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-exo2 text-sm transition-colors w-fit"
          >
            <ChevronLeft className="size-4" /> Todos os Eventos
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {specialidades.map((sp) => (
              <span
                key={sp}
                className="inline-flex items-center bg-white/15 backdrop-blur-sm border border-white/20 text-white font-exo2 text-xs px-3 py-1.5 rounded-full"
              >
                {sp}
              </span>
            ))}
          </div>

          {/* Título */}
          <h1 className="font-exo2 font-bold text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight">
            {evento.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-white/80">
            {acf?.dateNumber && acf?.month && (
              <span className="flex items-center gap-2 font-exo2 text-base">
                <Calendar className="size-4 text-[rgb(var(--cor-evento))] shrink-0" />
                {acf.dateNumber} de {acf.month}
                {acf?.year ? ` de ${acf.year}` : ''}
              </span>
            )}
            {acf?.local && (
              <span className="flex items-center gap-2 font-exo2 text-base">
                <MapPin className="size-4 text-[rgb(var(--cor-evento))] shrink-0" />
                {acf.local}
              </span>
            )}
            {acf?.hours && (
              <span className="flex items-center gap-2 font-exo2 text-base">
                <Clock className="size-4 text-[rgb(var(--cor-evento))] shrink-0" />
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
          <div className="flex flex-wrap items-center gap-3 mt-1">
            {acf?.subscribe && (
              <Link
                href={acf.subscribe}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 font-exo2 font-bold text-base rounded-full px-8 py-3 transition-all duration-200',
                  'bg-[rgb(var(--cor-evento))] text-white hover:brightness-110',
                )}
              >
                {ctaLabel} <ExternalLink className="size-4" />
              </Link>
            )}

            {/* Calendário só para o que ainda vai acontecer; compartilhar, sempre. */}
            {eventoFuturo(evento) && (
              <BotaoCalendario evento={evento} variante="escuro" />
            )}
            <BotaoWhatsApp evento={evento} variante="escuro" />
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO PRINCIPAL ───────────────────────────────── */}
      <main className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Coluna principal */}
        <div className="flex-1 min-w-0 flex flex-col gap-12">
          {/* Sobre o evento */}
          {(evento.content || evento.excerpt) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-exo2 font-bold text-2xl md:text-3xl mb-5">
                Sobre o Evento
              </h2>
              <div
                className="font-exo2 text-gray-600 text-base leading-relaxed prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{
                  __html: evento.content || evento.excerpt || '',
                }}
              />
            </motion.section>
          )}

          {/* Palestrantes */}
          {(acf?.speaker || acf?.moderator) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-exo2 font-bold text-2xl md:text-3xl mb-5">
                Palestrantes
              </h2>
              <div className="flex flex-col gap-3">
                {acf?.speaker && (
                  <div className="flex items-start gap-3 p-4 bg-[rgb(var(--cor-evento)/0.06)] rounded-2xl border border-[rgb(var(--cor-evento)/0.15)]">
                    <div className="size-10 rounded-full bg-[rgb(var(--cor-evento)/0.2)] flex items-center justify-center shrink-0">
                      <Users className="size-5 text-[rgb(var(--cor-evento))]" />
                    </div>
                    <div>
                      <p className="font-exo2 text-xs text-[rgb(var(--cor-evento))] font-semibold uppercase tracking-wider mb-0.5">
                        Palestrante
                      </p>
                      <p className="font-exo2 font-bold text-gray-900">
                        {acf.speaker}
                      </p>
                    </div>
                  </div>
                )}
                {acf?.moderator && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <Users className="size-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-exo2 text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                        Moderador
                      </p>
                      <p className="font-exo2 font-bold text-gray-900">
                        {acf.moderator}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Informações de Feira / Estande */}
          {isFeira &&
            (acf?.boothNumber || acf?.boothHighlights || acf?.boothHours) && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-gradient-to-br from-[rgb(var(--cor-evento)/0.05)] to-[rgb(var(--cor-evento)/0.05)] border border-[rgb(var(--cor-evento)/0.2)] rounded-3xl p-6 md:p-8"
              >
                <h2 className="font-exo2 font-bold text-2xl md:text-3xl mb-5">
                  Nosso Estande
                </h2>
                <div className="flex flex-col gap-4">
                  {acf?.boothNumber && (
                    <div>
                      <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Localização
                      </p>
                      <p className="font-exo2 font-bold text-2xl text-[#1a2a5e]">
                        {acf.boothNumber}
                      </p>
                    </div>
                  )}
                  {acf?.boothHours && (
                    <div>
                      <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Horário de Funcionamento
                      </p>
                      <p className="font-exo2 text-gray-700">
                        {acf.boothHours}
                      </p>
                    </div>
                  )}
                  {acf?.boothHighlights && (
                    <div>
                      <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider mb-1">
                        O que terá no estande
                      </p>
                      <p className="font-exo2 text-gray-700 whitespace-pre-line">
                        {acf.boothHighlights}
                      </p>
                    </div>
                  )}
                  {acf?.boothMapUrl && (
                    <Link
                      href={acf.boothMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-exo2 font-semibold text-sm text-[rgb(var(--cor-evento))] hover:underline"
                    >
                      <Navigation className="size-4" /> Ver mapa do pavilhão
                    </Link>
                  )}
                </div>
              </motion.section>
            )}

          {/* Galeria */}
          {hasPhotos && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-exo2 font-bold text-2xl md:text-3xl mb-5">
                Galeria
              </h2>
              <PhotoGallery photos={photos} />
            </motion.section>
          )}

          {/* Número de Impacto */}
          {acf?.impactNumber && (
            <div className="flex items-center gap-4 p-6 bg-[rgb(var(--cor-evento)/0.05)] border border-[rgb(var(--cor-evento)/0.15)] rounded-2xl">
              <Users className="size-8 text-[rgb(var(--cor-evento))] shrink-0" />
              <div>
                <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
                  Impacto gerado
                </p>
                <p className="font-exo2 font-bold text-xl text-[#1a2a5e]">
                  {acf.impactNumber}
                </p>
              </div>
            </div>
          )}

          {/* Recap */}
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

          {/* Patrocinadores */}
          {acf?.sponsors && acf.sponsors.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="font-exo2 font-bold text-xl mb-4">
                Patrocinadores & Parceiros
              </h2>
              <div className="flex flex-wrap gap-4 items-center">
                {acf.sponsors.map((sponsor, idx) =>
                  sponsor.logo?.node?.sourceUrl ? (
                    <div key={idx} className="relative h-10 w-28">
                      <Image
                        src={sponsor.logo.node.sourceUrl}
                        alt={sponsor.name || ''}
                        fill
                        className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                        sizes="112px"
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
            </motion.section>
          )}
        </div>

        {/* ── SIDEBAR ─────────────────────────────────────────── */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
          {/* Card resumo */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 flex flex-col gap-4 sticky top-24">
            <h3 className="font-exo2 font-bold text-lg text-[#1a2a5e]">
              Informações do Evento
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              {acf?.dateNumber && acf?.month && (
                <div className="flex items-start gap-3">
                  <Calendar className="size-4 text-[rgb(var(--cor-evento))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
                      Data
                    </p>
                    <p className="font-exo2 font-semibold text-gray-800">
                      {acf.dateNumber} de {acf.month}
                      {acf?.year ? ` de ${acf.year}` : ''}
                    </p>
                  </div>
                </div>
              )}
              {acf?.hours && (
                <div className="flex items-start gap-3">
                  <Clock className="size-4 text-[rgb(var(--cor-evento))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
                      Horário
                    </p>
                    <p className="font-exo2 font-semibold text-gray-800">
                      {acf.hours}
                    </p>
                  </div>
                </div>
              )}
              {acf?.local && !acf?.addressStreet && (
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[rgb(var(--cor-evento))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
                      Local
                    </p>
                    <p className="font-exo2 font-semibold text-gray-800">
                      {acf.local}
                    </p>
                  </div>
                </div>
              )}
              {acf?.addressStreet && (
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[rgb(var(--cor-evento))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
                      Onde nos encontrar
                    </p>
                    <p className="font-exo2 font-semibold text-gray-800 flex flex-col gap-0.5">
                      <span>
                        {acf.addressStreet}
                        {acf.addressNumber ? `, ${acf.addressNumber}` : ''}
                      </span>
                      {(acf.addressCity || acf.addressState) && (
                        <span className="text-gray-600 text-xs">
                          {[acf.addressCity, acf.addressState]
                            .filter(Boolean)
                            .join(' - ')}
                        </span>
                      )}
                      {acf.boothPavilion && (
                        <span className="text-gray-500 text-xs mt-1">
                          Pavilhão: {acf.boothPavilion}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {acf?.subscribe && (
              <Link
                href={acf.subscribe}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 font-exo2 font-bold text-base rounded-full px-6 py-3 transition-all duration-200 w-full mt-2',
                  'bg-[rgb(var(--cor-evento))] text-white hover:brightness-110',
                )}
              >
                {ctaLabel} <ExternalLink className="size-4" />
              </Link>
            )}

            {/* Compartilhar */}
            <Link
              href={linkWhatsApp(evento)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-exo2 font-semibold text-sm rounded-full px-6 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all"
            >
              <Share2 className="size-4" /> Compartilhar no WhatsApp
            </Link>
          </div>

          {/* Mapa */}
          {acf?.mapEmbedUrl && (
            <div className="flex flex-col gap-3">
              <h3 className="font-exo2 font-bold text-lg">Localização</h3>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src={acf.mapEmbedUrl}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do evento"
                />
              </div>
            </div>
          )}

          {/* Como chegar */}
          {acf?.howToGet && (
            <div className="flex flex-col gap-2 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2">
                <Navigation className="size-4 text-[rgb(var(--cor-evento))]" />
                <h3 className="font-exo2 font-bold text-sm">Como Chegar</h3>
              </div>
              <p className="font-exo2 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                {acf.howToGet}
              </p>
            </div>
          )}

          {/* Hotéis parceiros */}
          {acf?.partnerHotels && (
            <div className="flex flex-col gap-2 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2">
                <Hotel className="size-4 text-[rgb(var(--cor-evento))]" />
                <h3 className="font-exo2 font-bold text-sm">
                  Hotéis Parceiros
                </h3>
              </div>
              <p className="font-exo2 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                {acf.partnerHotels}
              </p>
            </div>
          )}
        </aside>
      </main>

      {/* ── OUTROS EVENTOS RELACIONADOS ───────────────────────────────────── */}
      {relatedEvents.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-6 pb-20">
          <h2 className="font-exo2 font-bold text-2xl md:text-3xl mb-6">
            Eventos Relacionados
          </h2>
          <div className="flex flex-col gap-3">
            {relatedEvents.map((e) => (
              <MiniCard key={e.id} evento={e} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 font-exo2 font-semibold text-sm text-[rgb(var(--cor-evento))] border border-[rgb(var(--cor-evento)/0.3)] rounded-full px-6 py-2.5 hover:bg-[rgb(var(--cor-evento)/0.05)] transition-all"
            >
              Ver todos os eventos
            </Link>
          </div>
        </section>
      )}

      {/* ── PRODUTOS RELACIONADOS ───────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-6 pb-20">
          <h2 className="font-exo2 font-bold text-2xl md:text-3xl mb-6">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id}>
                <CardProduct product={p} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:text-left">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 font-exo2 font-semibold text-sm text-[rgb(var(--cor-evento))] border border-[rgb(var(--cor-evento)/0.3)] rounded-full px-6 py-2.5 hover:bg-[rgb(var(--cor-evento)/0.05)] transition-all"
            >
              Ver todos os produtos
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
