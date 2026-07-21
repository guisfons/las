import { fetchWPGraphQL } from '../wp';

export interface WPMedia {
  slug: string;
  title: string;
  mediaacf?: {
    fileUrl?: string;
    description?: string;
  };
}

interface WPMediaConnection {
  nodes: WPMedia[];
}

const MEDIA_FIELDS = `
  id
  slug
  title
  mediaacf {
    fileUrl
    description
  }
`;

/**
 * Busca todas as mídias cadastradas no CPT "Mídia" do WordPress.
 * Cada mídia tem um slug amigável (usado na URL /midias/[slug])
 * e uma URL de arquivo que pode ser do WP ou de qualquer outro host.
 */
export async function getAllMediaItems(): Promise<WPMedia[]> {
  const query = `
    query GetAllMediaItems {
      midias(first: 200) {
        nodes {
          ${MEDIA_FIELDS}
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ midias: WPMediaConnection }>(query);
    return data?.midias?.nodes || [];
  } catch (error) {
    console.error('Failed to fetch media items from WP:', error);
    return [];
  }
}

export async function getMediaBySlug(slug: string): Promise<WPMedia | null> {
  const query = `
    query GetMediaBySlug($id: ID!) {
      midia(id: $id, idType: SLUG) {
        ${MEDIA_FIELDS}
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ midia: WPMedia }>(query, { id: slug });
    return data?.midia || null;
  } catch (error) {
    console.error(`Failed to fetch media ${slug} from WP:`, error);
    return null;
  }
}
