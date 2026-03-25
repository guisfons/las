import { fetchWPGraphQL } from '../wp';
import { WPEventoNode, WPEventosConnection } from '../types/events';

const EVENTO_FIELDS = `
  id
  slug
  title
  date
  eventoacf {
    img {
      node {
        sourceUrl
      }
    }
    imageType
    dateNumber
    month
    year
    hours
    speaker
    moderator
    local
    subscribe
  }
  eventoCategorias {
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
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ eventos: WPEventosConnection }>(query);
    return data?.eventos?.nodes || [];
  } catch (error) {
    console.error('Failed to fetch eventos from WP:', error);
    return [];
  }
}
