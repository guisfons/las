import { fetchWPGraphQL } from '../wp';
import { WPSeo } from '../types/pages';

/**
 * CPT "Material" — páginas de material rico no formato link tree.
 *
 * Cada registro é uma página em /materiais/<slug>, com o evento a que o
 * material se refere, uma chamada e uma lista de botões. É o destino que as
 * réguas de comunicação mandam por e-mail e WhatsApp.
 *
 * Os campos vêm do grupo ACF `materialacf`, registrado em
 * las-wp/inc/fields-material.php.
 */

export interface MaterialBotao {
  rotulo: string;
  url: string;
  descricao?: string | null;
}

export interface MaterialAcf {
  evento?: string | null;
  chamada?: string | null;
  rodape?: string | null;
  indexar?: boolean | null;
  botoes?: (MaterialBotao | null)[] | null;
}

export interface Material {
  id: string;
  slug: string;
  title: string;
  materialacf?: MaterialAcf | null;
  featuredImage?: { node?: { sourceUrl?: string | null } | null } | null;
  seo?: WPSeo | null;
}

const MATERIAL_FIELDS = `
  id
  slug
  title

  featuredImage {
    node {
      sourceUrl
    }
  }

  materialacf {
    evento
    chamada
    rodape
    indexar
    botoes {
      rotulo
      url
      descricao
    }
  }

  seo {
    title
    metaDesc
    canonical
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
    }
  }
`;

export async function getMaterialBySlug(
  slug: string,
): Promise<Material | null> {
  const query = `
    query GetMaterialBySlug($id: ID!) {
      material(id: $id, idType: SLUG) {
        ${MATERIAL_FIELDS}
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ material: Material | null }>(query, {
      id: slug,
    });
    return data?.material || null;
  } catch (error) {
    console.error(`Failed to fetch material "${slug}" from WP:`, error);
    return null;
  }
}

/**
 * Só os botões preenchidos, na ordem em que o repeater os guarda.
 *
 * O ACF devolve a linha do repeater mesmo quando o editor a deixou pela
 * metade, então uma linha sem rótulo ou sem link viraria um botão que não
 * leva a lugar nenhum — pior que um botão a menos numa página que o cliente
 * recebe por e-mail.
 */
export function botoesValidos(material: Material | null): MaterialBotao[] {
  const brutos = material?.materialacf?.botoes;
  if (!Array.isArray(brutos)) return [];

  return brutos.filter(
    (b): b is MaterialBotao =>
      !!b &&
      typeof b.rotulo === 'string' &&
      !!b.rotulo.trim() &&
      !!b.url?.trim(),
  );
}
