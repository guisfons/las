import { WPImage } from './wordpress';

export type WPEventoSponsor = {
  name?: string;
  logo?: WPImage;
};

export type WPEventoAcf = {
  // ─── Destaque & Imagem & Formato ───────────────────────────────
  isFeatured?: boolean;
  img?: WPImage;
  imageType?: 'quadrada' | 'banner' | 'icon';
  eventType?: 'autoral' | 'educacional' | 'feira';
  eventFormat?:
    | 'jantar_cientifico'
    | 'curso'
    | 'congresso'
    | 'feira'
    | 'simposio'
    | 'workshop'
    | 'outro';

  // ─── Data & Hora ────────────────────────────────────────────────
  fullDate?: string; // ISO 8601 — ex: "2025-10-15 19:00:00" (para countdown)
  dateNumber?: string; // Ex: "09" ou "29-31"
  month?: string; // Ex: "OUTUBRO"
  year?: string; // Ex: "2025"
  hours?: string; // Ex: "14h às 18h"

  // ─── Palestrantes ───────────────────────────────────────────────
  speaker?: string;
  moderator?: string;

  // ─── Localização ────────────────────────────────────────────────
  local?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressCity?: string;
  addressState?: string;
  mapEmbedUrl?: string;
  howToGet?: string;
  partnerHotels?: string;

  // ─── Inscrição ──────────────────────────────────────────────────
  subscribe?: string;
  subscribeType?:
    | 'participar'
    | 'visitar_estande'
    | 'saber_mais'
    | 'gratuito'
    | 'convite'
    | 'vagas_limitadas';

  // ─── Feira ──────────────────────────────────────────────────────
  boothPavilion?: string;
  boothNumber?: string;
  boothMapUrl?: string;
  boothHours?: string;
  boothHighlights?: string;

  // ─── Prova Social (Eventos Passados) ────────────────────────────
  gallery?: {
    nodes: {
      sourceUrl: string;
      altText?: string;
    }[];
  };
  impactNumber?: string;
  recapLink?: string;

  // ─── Patrocinadores ─────────────────────────────────────────────
  sponsors?: WPEventoSponsor[];

  // ─── Compartilhamento & Calendário ──────────────────────────────
  calendarTitle?: string;
  whatsappShareText?: string;
};

export type WPEventoNode = {
  id: string;
  slug: string;
  title: string;
  date: string;
  content?: string;
  excerpt?: string;
  eventoacf?: WPEventoAcf;
  eventoCategorias?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
};

export type WPEventosConnection = {
  nodes: WPEventoNode[];
};
