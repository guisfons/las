import { fetchWPGraphQL } from '../wp';
import { WPEventoNode, WPEventosConnection } from '../types/events';
import { eventoTemDetalhes } from '../eventos/agenda';

const EVENTO_FIELDS = `
  id
  slug
  title
  date
  eventoacf {
    img {
      node {
        sourceUrl
        altText
      }
    }
    imageType
    eventFormat
    fullDate
    dateNumber
    month
    year
    hours
    speaker
    moderator
    local
    addressStreet
    addressNumber
    addressCity
    addressState
    mapEmbedUrl
    howToGet
    partnerHotels
    subscribe
    subscribeType
    boothPavilion
    boothNumber
    boothMapUrl
    boothHours
    boothHighlights
    gallery {
      nodes {
        sourceUrl
        altText
      }
    }
    impactNumber
    recapLink
    sponsors {
      name
      logo {
        node {
          sourceUrl
          altText
        }
      }
    }
    calendarTitle
    whatsappShareText
  }
  eventoCategorias {
    nodes {
      name
      slug
    }
  }
  eventoSegmentos {
    nodes {
      name
      slug
    }
  }
`;

export async function getAllEventos(): Promise<WPEventoNode[]> {
  const query = `
    query GetAllEventos {
      eventos(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          ${EVENTO_FIELDS}
          content
          excerpt
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ eventos: WPEventosConnection }>(query);
    // O texto só serve para decidir se o evento tem página interna. Ele não
    // segue para o navegador: são 87 eventos, e a listagem não o exibe.
    return (data?.eventos?.nodes || []).map(
      ({ content, excerpt, ...evento }) => ({
        ...evento,
        temDetalhes: eventoTemDetalhes({ ...evento, content, excerpt }),
      }),
    );
  } catch (error) {
    console.error('Failed to fetch eventos from WP:', error);
    return [];
  }
}

export async function getEventoBySlug(
  slug: string,
): Promise<WPEventoNode | null> {
  const query = `
    query GetEventoBySlug($id: ID!) {
      evento(id: $id, idType: SLUG) {
        ${EVENTO_FIELDS}
        content
        excerpt
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ evento: WPEventoNode }>(query, {
      id: slug,
    });
    return data?.evento || null;
  } catch (error) {
    console.error(`Failed to fetch evento ${slug} from WP.`, error);
    return null;
  }
}
