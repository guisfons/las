'use client';

import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import {
  MapPin,
  Clock,
  ExternalLink,
  Navigation,
  Hotel,
  Package,
} from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';

interface OndeEncontrarFeiraProps {
  eventos: WPEventoNode[];
}

function FeiraCard({ evento }: { evento: WPEventoNode }) {
  const acf = evento.eventoacf;
  const specialidades = evento.eventoCategorias?.nodes || [];
  const pageUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/eventos#${evento.slug}`
      : `https://lasforlife.com.br/eventos#${evento.slug}`;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">
      {/* Header com imagem */}
      {acf?.img?.node?.sourceUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={acf.img.node.sourceUrl}
            alt={evento.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <h3 className="font-exo2 font-bold text-white text-xl leading-tight">
              {evento.title}
            </h3>
            {acf?.boothNumber && (
              <div className="bg-[#7EE000] text-black font-exo2 font-bold text-sm px-3 py-1.5 rounded-xl whitespace-nowrap">
                Estande {acf.boothNumber}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col gap-6">
        {/* Sem imagem: title + badge */}
        {!acf?.img?.node?.sourceUrl && (
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-exo2 font-bold text-xl">{evento.title}</h3>
            {acf?.boothNumber && (
              <div className="bg-[#7EE000] text-black font-exo2 font-bold text-sm px-3 py-1.5 rounded-xl whitespace-nowrap shrink-0">
                Estande {acf.boothNumber}
              </div>
            )}
          </div>
        )}

        {/* Tags especialidade */}
        <div className="flex flex-wrap gap-2">
          {specialidades.map((sp) => (
            <span
              key={sp.slug}
              className="font-exo2 text-xs px-3 py-1 rounded-full bg-[#7EE000]/10 text-[#5aac00] border border-[#7EE000]/20"
            >
              {sp.name}
            </span>
          ))}
        </div>

        {/* Grid de infos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Localização e data */}
          <div className="flex flex-col gap-3">
            {acf?.local && (
              <div className="flex items-start gap-2.5">
                <div className="size-7 rounded-lg bg-[#31A1FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="size-3.5 text-[#31A1FF]" />
                </div>
                <div>
                  <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wide">
                    Localização
                  </p>
                  <p className="font-exo2 text-sm font-medium text-gray-800">
                    {acf.local}
                  </p>
                </div>
              </div>
            )}
            {acf?.dateNumber && acf?.month && (
              <div className="flex items-start gap-2.5">
                <div className="size-7 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="size-3.5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wide">
                    Data
                  </p>
                  <p className="font-exo2 text-sm font-medium text-gray-800">
                    {acf.dateNumber} de {acf.month}
                    {acf.year ? ` de ${acf.year}` : ''}
                  </p>
                  {acf?.boothHours && (
                    <p className="font-exo2 text-xs text-gray-500 mt-0.5">
                      Estande: {acf.boothHours}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <QRCodeSVG
              value={pageUrl}
              size={100}
              bgColor="transparent"
              fgColor="#1a2a5e"
              level="M"
            />
            <p className="font-exo2 text-xs text-gray-400 text-center">
              Escaneie para ver detalhes
            </p>
          </div>
        </div>

        {/* O que terá no estande */}
        {acf?.boothHighlights && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Package className="size-4 text-[#7EE000]" />
              <span className="font-exo2 font-semibold text-sm text-gray-800">
                O que terá no estande
              </span>
            </div>
            <p className="font-exo2 text-sm text-gray-600 whitespace-pre-line">
              {acf.boothHighlights}
            </p>
          </div>
        )}

        {/* Mapa do pavilhão */}
        {acf?.boothMapUrl && (
          <Link
            href={acf.boothMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-exo2 text-sm text-[#31A1FF] hover:underline"
          >
            <Navigation className="size-4" />
            Ver mapa do pavilhão
          </Link>
        )}

        {/* Google Maps embed */}
        {acf?.mapEmbedUrl && (
          <div className="rounded-2xl overflow-hidden h-48 border border-gray-100">
            <iframe
              src={acf.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização: ${evento.title}`}
            />
          </div>
        )}

        {/* Como chegar */}
        {acf?.howToGet && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Navigation className="size-4 text-[#FF6B35]" />
              <span className="font-exo2 font-semibold text-sm text-gray-800">
                Como chegar
              </span>
            </div>
            <p className="font-exo2 text-sm text-gray-600 whitespace-pre-line">
              {acf.howToGet}
            </p>
          </div>
        )}

        {/* Hotéis parceiros */}
        {acf?.partnerHotels && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Hotel className="size-4 text-purple-500" />
              <span className="font-exo2 font-semibold text-sm text-gray-800">
                Hotéis parceiros
              </span>
            </div>
            <p className="font-exo2 text-sm text-gray-600 whitespace-pre-line">
              {acf.partnerHotels}
            </p>
          </div>
        )}

        {/* Patrocinadores */}
        {acf?.sponsors && acf.sponsors.length > 0 && (
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <p className="font-exo2 text-xs text-gray-400 uppercase tracking-wider">
              Marcas presentes
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {acf.sponsors.map((s, idx) =>
                s.logo?.node?.sourceUrl ? (
                  <div key={idx} className="relative h-8 w-20">
                    <Image
                      src={s.logo.node.sourceUrl}
                      alt={s.name || ''}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <span
                    key={idx}
                    className="font-exo2 text-xs text-gray-500 border border-gray-200 rounded px-2 py-1"
                  >
                    {s.name}
                  </span>
                ),
              )}
            </div>
          </div>
        )}

        {/* CTA Visitar estande */}
        {acf?.subscribe && (
          <Link
            href={acf.subscribe}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-exo2 font-bold text-base rounded-full px-8 py-3 bg-[#7EE000] text-black hover:bg-[#6bcc00] transition-all"
          >
            Agende uma visita ao estande
            <ExternalLink className="size-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function OndeEncontrarFeira({
  eventos,
}: OndeEncontrarFeiraProps) {
  const currentYear = new Date().getFullYear();

  const feiras = eventos.filter((e) => {
    const isFeira = e.eventoacf?.eventType === 'feira';
    const yr = Number(e.eventoacf?.year);
    const isUpcoming = yr >= currentYear;
    return isFeira && isUpcoming;
  });

  if (feiras.length === 0) return null;

  return (
    <section
      id="onde-nos-encontrar"
      className="w-full py-20 bg-gradient-to-b from-[#f8fdf4] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-exo2 font-bold text-2xl md:text-4xl">
            Onde nos Encontrar
          </h2>
          <p className="font-exo2 text-gray-500 text-base">
            Venha visitar nosso estande nas principais feiras e eventos da área
            médica
          </p>
        </div>

        <div
          className={cn(
            'grid gap-6',
            feiras.length === 1 ? 'max-w-xl' : 'sm:grid-cols-2',
          )}
        >
          {feiras.map((evento) => (
            <FeiraCard key={evento.id} evento={evento} />
          ))}
        </div>
      </div>
    </section>
  );
}
