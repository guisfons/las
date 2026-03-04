import { fetchWPGraphQL } from "../wp";
import { WPProductNode, WPProductsConnection } from "../types/wordpress";

// A GraphQL fragment to avoid repeating the long list of fields
const PRODUCT_FIELDS = `
  id
  databaseId
  slug
  title
  productacf {
    specialities
    brands
    logoBrand {
      node {
        sourceUrl
        altText
      }
    }
    logoBrandSecond {
      node {
        sourceUrl
        altText
      }
    }
    imageUrl {
      node {
        sourceUrl
        altText
      }
    }
    description
    subtitle
    tags
    about {
      point
    }
    generalInformation
    technicalData {
      col1
      col2
      col3
      col4
    }
    pictures {
      nodes {
        sourceUrl
        altText
      }
    }
    links {
      title
      fileUrl
      fileName
      type
    }
    videos {
      description
      videoUrl
    }
    images {
      nodes {
        sourceUrl
        altText
      }
    }
    testimonial {
      testimonialText
      testimonialPictures {
        nodes {
          sourceUrl
          altText
        }
      }
      doctorName
      doctorSpecialty
      doctorPhoto {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export async function getAllProducts(): Promise<WPProductNode[]> {
  const query = `
    query GetAllProducts {
      products(first: 100) {
        nodes {
          ${PRODUCT_FIELDS}
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ products: WPProductsConnection }>(query);
    const nodes = data?.products?.nodes || [];
    console.log(`Fetched ${nodes.length} products from WP.`);
    return nodes;
  } catch (error) {
    console.error("Failed to fetch products from WP:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<WPProductNode | null> {
  const query = `
    query GetProductBySlug($id: ID!) {
      product(id: $id, idType: SLUG) {
        ${PRODUCT_FIELDS}
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ product: WPProductNode }>(query, { id: slug });
    return data?.product || null;
  } catch (error) {
    console.error(`Failed to fetch product ${slug} from WP.`, error);
    return null;
  }
}
