import { WPEventoNode } from '@/lib/types/events';
import {
  eventoFuturo,
  periodoDoEvento,
  urlDoEvento,
} from '@/lib/eventos/agenda';
import { segmentoDoEvento } from '@/lib/eventos/taxonomia';
import { OG_PADRAO } from '@/lib/site';
import { ORGANIZACAO_ID } from '@/lib/seo/organizacao';

const dois = (n: number) => String(n).padStart(2, '0');
const diaIso = (d: Date) =>
  `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;

/**
 * Um evento no formato que o Google usa nos resultados de eventos (data, local,
 * organizador) e que as IAs leem. Devolve null quando falta o mínimo que o
 * Google exige (data e local): marcação incompleta é pior que nenhuma.
 */
export function dadosDoEvento(evento: WPEventoNode) {
  const p = periodoDoEvento(evento);
  if (!p) return null;
  const acf = evento.eventoacf;
  const online = /webinar|online/i.test(evento.title || '');

  const endereco = [acf?.addressStreet, acf?.addressNumber]
    .filter(Boolean)
    .join(', ');
  const cidade = acf?.addressCity || '';
  const nomeDoLocal = acf?.local || cidade;
  if (!online && !nomeDoLocal) return null;

  const hora = p.hora ? `T${dois(p.hora.h)}:${dois(p.hora.min)}:00-03:00` : '';
  const autoral = segmentoDoEvento(evento) === 'Autoral';

  return {
    '@type': 'Event',
    name: evento.title,
    url: urlDoEvento(evento),
    startDate: `${diaIso(p.inicio)}${hora}`,
    endDate: diaIso(p.fim),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: online
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: online
      ? { '@type': 'VirtualLocation', url: urlDoEvento(evento) }
      : {
          '@type': 'Place',
          name: nomeDoLocal,
          address: {
            '@type': 'PostalAddress',
            ...(endereco ? { streetAddress: endereco } : {}),
            ...(cidade ? { addressLocality: cidade } : {}),
            ...(acf?.addressState ? { addressRegion: acf.addressState } : {}),
            addressCountry: 'BR',
          },
        },
    image: acf?.img?.node?.sourceUrl || OG_PADRAO,
    description: `${evento.title}${nomeDoLocal ? `, ${nomeDoLocal}` : ''}. ${
      autoral
        ? 'Evento de educação médica da LAS FOR LIFE.'
        : 'Evento com participação da LAS FOR LIFE.'
    }`,
    // Organizador só quando a LAS organiza. No patrocinado ela participa, e
    // dizer que organiza seria falso.
    ...(autoral
      ? { organizer: { '@id': ORGANIZACAO_ID } }
      : { sponsor: { '@id': ORGANIZACAO_ID } }),
  };
}

/** Os próximos eventos, para a página da agenda. */
export function dadosDosProximosEventos(eventos: WPEventoNode[]) {
  return eventos
    .filter(eventoFuturo)
    .map(dadosDoEvento)
    .filter((e): e is NonNullable<typeof e> => !!e);
}
