import { WPEventoNode } from '@/lib/types/events';

/**
 * Calendário e compartilhamento de um evento.
 *
 * Existe porque o botão "Adicionar ao calendário" dependia do campo `fullDate`
 * do ACF, e em 02/10/2026 só 1 dos 87 eventos o tinha preenchido — nenhum de
 * outubro. Todos têm dia, mês e ano, que é de onde a página já tira a data para
 * ordenar a grade. O calendário passa a sair do mesmo lugar.
 */

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.lasforlife.com.br';

const MESES: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
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

function normalizar(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

export interface Periodo {
  /** Primeiro dia, à meia-noite local. */
  inicio: Date;
  /** Último dia (inclusivo), à meia-noite local. */
  fim: Date;
  /** Hora de início, quando o evento a declara. Sem ela, o evento é de dia inteiro. */
  hora?: { h: number; min: number };
}

/**
 * O período de um evento: "27", "04-05" ou "29-31" do mês e ano declarados.
 *
 * ⚠️ O `fullDate` só é usado pela parte da DATA. O único preenchido vem como
 * "2026-11-24T00:00:00+00:00" — meia-noite em UTC, que em Brasília é 21h do
 * dia anterior. Ler o instante punha o evento na véspera.
 */
export function periodoDoEvento(evento: WPEventoNode): Periodo | null {
  const acf = evento.eventoacf;
  if (!acf) return null;

  let inicio: Date | null = null;
  let fim: Date | null = null;

  const ano = Number(acf.year);
  const mes = acf.month ? MESES[normalizar(acf.month)] : undefined;
  const dias = (acf.dateNumber || '').match(/\d{1,2}/g)?.map(Number) || [];

  if (!isNaN(ano) && ano > 2000 && mes !== undefined && dias.length) {
    inicio = new Date(ano, mes, dias[0]);
    const ultimo = dias[dias.length - 1];
    // "30-02" atravessaria o mês; sem saber para qual, fica um dia só.
    fim = ultimo >= dias[0] ? new Date(ano, mes, ultimo) : inicio;
  } else if (acf.fullDate) {
    const [a, m, d] = acf.fullDate.slice(0, 10).split('-').map(Number);
    if (a && m && d) inicio = fim = new Date(a, m - 1, d);
  }

  if (!inicio || !fim || isNaN(inicio.getTime())) return null;

  return { inicio, fim, hora: horaDe(acf.hours) };
}

/** "19h", "19h30", "19:30 às 22h" → 19:00 / 19:30. Texto sem hora → undefined. */
function horaDe(texto?: string | null): Periodo['hora'] {
  const m = (texto || '').match(/(\d{1,2})\s*(?:h|:)\s*(\d{2})?/i);
  if (!m) return undefined;
  const h = Number(m[1]);
  const min = Number(m[2] || 0);
  return h < 24 && min < 60 ? { h, min } : undefined;
}

/** O evento ainda não terminou: o último dia é hoje ou depois. */
export function eventoFuturo(evento: WPEventoNode): boolean {
  const p = periodoDoEvento(evento);
  if (!p) return false;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return p.fim >= hoje;
}

/**
 * O evento tem o que mostrar além do card? (Bruno, 02/10/2026)
 *
 * O topo da página interna repete título, data e local, que o card já mostra.
 * O que justifica abrir a página é o que vem depois: o texto do evento,
 * palestrante, estande, galeria, marcas, mapa, como chegar, hotéis, impacto ou
 * recap. Sem nenhum deles, o card não tem "Ver Detalhes" e não é clicável — e
 * no dia em que o WordPress ganhar um desses campos, a página se abre sozinha.
 *
 * Medido em 02/10/2026: **nenhum dos 87 eventos tem texto**, e só 2 (os dois
 * já passados) têm palestrante.
 *
 * A listagem não traz o texto (é pesado para 87 eventos), então ela calcula
 * isto no servidor e manda só o booleano — ver getAllEventos().
 */
export function eventoTemDetalhes(evento: WPEventoNode): boolean {
  if (typeof evento.temDetalhes === 'boolean') return evento.temDetalhes;
  const acf = evento.eventoacf;
  const preenchido = (v?: string | null) =>
    !!(v || '').replace(/<[^>]*>|&nbsp;/g, '').trim();
  return (
    preenchido(evento.content) ||
    preenchido(evento.excerpt) ||
    preenchido(acf?.speaker) ||
    preenchido(acf?.moderator) ||
    preenchido(acf?.boothNumber) ||
    preenchido(acf?.boothHours) ||
    preenchido(acf?.boothHighlights) ||
    preenchido(acf?.boothMapUrl) ||
    preenchido(acf?.mapEmbedUrl) ||
    preenchido(acf?.howToGet) ||
    preenchido(acf?.partnerHotels) ||
    preenchido(acf?.impactNumber) ||
    preenchido(acf?.recapLink) ||
    (acf?.gallery?.nodes?.length ?? 0) > 0 ||
    (acf?.sponsors?.length ?? 0) > 0
  );
}

/**
 * Para onde mandar quem recebe o evento — WhatsApp, QR code, calendário.
 * Evento sem página interna aponta para a agenda: mandar alguém a uma página
 * que só repete o card é pior que mandá-lo à lista.
 */
export function urlDoEvento(evento: WPEventoNode): string {
  return eventoTemDetalhes(evento)
    ? `${SITE}/eventos/${evento.slug}`
    : `${SITE}/eventos`;
}

// ─── Calendário ─────────────────────────────────────────────────────────────

const dois = (n: number) => String(n).padStart(2, '0');
const dia = (d: Date) =>
  `${d.getFullYear()}${dois(d.getMonth() + 1)}${dois(d.getDate())}`;
const diaIso = (d: Date) =>
  `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
const maisDias = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export interface LinksCalendario {
  google: string;
  outlook: string;
  /** Conteúdo do .ics, para Apple Calendar e qualquer outro. */
  ics: string;
}

/**
 * Links para os três calendários.
 *
 * Sem hora declarada o evento entra como **dia inteiro**, cobrindo todos os
 * dias do período — inventar um horário seria pior que não ter. Com hora,
 * entra com duração de 2h no fuso de São Paulo, declarado (e não o do
 * navegador, que pode estar em viagem).
 */
export function linksDeCalendario(
  evento: WPEventoNode,
): LinksCalendario | null {
  const p = periodoDoEvento(evento);
  if (!p) return null;

  const titulo =
    evento.eventoacf?.calendarTitle || evento.title || 'Evento LAS';
  const local = evento.eventoacf?.local || '';
  const url = urlDoEvento(evento);
  const detalhes = `${evento.title}\n\n${url}`;
  const enc = encodeURIComponent;

  let google: string;
  let outlook: string;
  let icsDatas: string;

  if (p.hora) {
    const ini = `${dia(p.inicio)}T${dois(p.hora.h)}${dois(p.hora.min)}00`;
    const fimH = p.hora.h + 2;
    const fimData = fimH >= 24 ? maisDias(p.inicio, 1) : p.inicio;
    const fim = `${dia(fimData)}T${dois(fimH % 24)}${dois(p.hora.min)}00`;
    google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${enc(titulo)}&dates=${ini}/${fim}&ctz=America/Sao_Paulo&details=${enc(detalhes)}&location=${enc(local)}`;
    const isoIni = `${diaIso(p.inicio)}T${dois(p.hora.h)}:${dois(p.hora.min)}:00-03:00`;
    const isoFim = `${diaIso(fimData)}T${dois(fimH % 24)}:${dois(p.hora.min)}:00-03:00`;
    outlook = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${enc(titulo)}&startdt=${enc(isoIni)}&enddt=${enc(isoFim)}&location=${enc(local)}&body=${enc(detalhes)}`;
    icsDatas = `DTSTART;TZID=America/Sao_Paulo:${ini}\r\nDTEND;TZID=America/Sao_Paulo:${fim}`;
  } else {
    // Fim exclusivo, que é a convenção dos três para dia inteiro.
    const depois = maisDias(p.fim, 1);
    google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${enc(titulo)}&dates=${dia(p.inicio)}/${dia(depois)}&details=${enc(detalhes)}&location=${enc(local)}`;
    outlook = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${enc(titulo)}&startdt=${diaIso(p.inicio)}&enddt=${diaIso(depois)}&allday=true&location=${enc(local)}&body=${enc(detalhes)}`;
    icsDatas = `DTSTART;VALUE=DATE:${dia(p.inicio)}\r\nDTEND;VALUE=DATE:${dia(depois)}`;
  }

  const esc = (s: string) =>
    s.replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//LAS For Life//Eventos//PT-BR',
    'BEGIN:VEVENT',
    `UID:${evento.slug}@lasforlife.com.br`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    icsDatas,
    `SUMMARY:${esc(titulo)}`,
    `LOCATION:${esc(local)}`,
    `DESCRIPTION:${esc(detalhes)}`,
    `URL:${url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return { google, outlook, ics };
}

// ─── WhatsApp ───────────────────────────────────────────────────────────────

/**
 * A mensagem de compartilhamento aponta para a página DO EVENTO.
 *
 * O card usava `window.location.href`, que na listagem é /eventos — quem
 * recebia caía na lista inteira, não no evento. E `window` não existe no
 * servidor, então o link renderizado lá saía sem endereço nenhum.
 */
export function linkWhatsApp(evento: WPEventoNode): string {
  const acf = evento.eventoacf;
  const quando = [
    acf?.dateNumber,
    acf?.month && `de ${acf.month.toLowerCase()}`,
    acf?.year && `de ${acf.year}`,
  ]
    .filter(Boolean)
    .join(' ');
  const linhas = [`*${evento.title}*`];
  if (quando) linhas.push(`📅 ${quando}`);
  if (acf?.local) linhas.push(`📍 ${acf.local}`);
  linhas.push('', `Saiba mais: ${urlDoEvento(evento)}`);
  const texto = acf?.whatsappShareText || linhas.join('\n');
  return `https://wa.me/?text=${encodeURIComponent(texto)}`;
}
