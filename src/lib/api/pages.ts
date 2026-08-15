import { fetchWPGraphQL } from '../wp';
import { WPPageNode, WPPagesConnection } from '../types/pages';

const PAGE_FIELDS = `
  id
  databaseId
  slug
  title

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

  pageHome {
    aboutUs {
      logo { node { sourceUrl } }
      titlePlus
      description
      image { node { sourceUrl } }
      bottomTitle
      bottomDescription
    }
    forHealth {
      options {
        label
        background
        image
        text
        link
      }
    }
    carroussel {
      title
      description
      items {
        img { node { sourceUrl } }
        title
        description
        logoOne { node { sourceUrl } }
        logoTwo { node { sourceUrl } }
        url
      }
      showMoreButton
    }
    partners {
      title
      gallery {
        alf
        url { node { sourceUrl } }
      }
    }
    impact {
      title
      mainBlock {
        title
        number
        symbol
        icon { node { sourceUrl } }
        backgroundImage { node { sourceUrl } }
      }
      estatistics {
        icon { node { sourceUrl } }
        bg
        title
        number
        symbol
      }
      wavesImage { node { sourceUrl } }
    }
    contact {
      title
      subtitle
      image { node { sourceUrl } }
      formAction
    }
  }

  pageDistributor {
    header {
      title
      description
    }
    form {
      formAction
      subject
    }
  }

  pageTechnical {
    hero {
      title
      description
      backgroundImage { node { sourceUrl } }
    }
    whatIs {
      title
      items {
        title
        description
      }
    }
    form {
      subtitle
      title
      description
      formAction
    }
  }

  pageArticulate {
    heroBanner {
      imageLine { node { sourceUrl } }
      title
      description
      label
    }
    howWeDoItToday {
      banner { node { sourceUrl } }
      title
      description {
        text
      }
    }
    gridEvents {
      title
      description
      buttonLabel
      buttonLink
      events {
        title
        picture { node { sourceUrl } }
      }
    }
    gridPictures {
      title
      pictures {
        nodes {
          sourceUrl
        }
      }
    }
  }
  pageInstructions {
    titleHeader
    productsList {
      brand
      name
      anvisa
      fileUrl { node { sourceUrl } }
    }
  }

  pageGeneric {
    headerTitle
    headerDescription
  }

  pageLasSports {
    howWeDoItToday {
      banner { node { sourceUrl } }
      logo { node { sourceUrl } }
      description {
        text
      }
      link
    }
    bannerLas {
      title
      description {
        text
      }
      imageBanner { node { sourceUrl } }
      link
      labelLink
    }
    sponsorship {
      title
      description {
        text
      }
      image { node { sourceUrl } }
      link
    }
  }

  pageLasSocial {
    howWeDoItToday { banner { node { sourceUrl } } logo { node { sourceUrl } } description { text } link }
    bannerLas { title description { text } imageBanner { node { sourceUrl } } link labelLink }
  }

  pageLasClubs {
    howWeDoItToday { banner { node { sourceUrl } } logo { node { sourceUrl } } description { text } link }
    bannerLas { title description { text } imageBanner { node { sourceUrl } } link labelLink }
  }

  pageLasTalks {
    howWeDoItToday { banner { node { sourceUrl } } logo { node { sourceUrl } } description { text } link }
    bannerLas { title description { text } imageBanner { node { sourceUrl } } link labelLink }
  }

  pageLasXperience {
    howWeDoItToday { banner { node { sourceUrl } } logo { node { sourceUrl } } description { text } link }
    bannerLas { title description { text } imageBanner { node { sourceUrl } } link labelLink }
  }

  pageLasXperts {
    howWeDoItToday { banner { node { sourceUrl } } logo { node { sourceUrl } } description { text } link }
    bannerLas { title description { text } imageBanner { node { sourceUrl } } link labelLink }
  }
`;

export async function getAllPages(): Promise<WPPageNode[]> {
  const query = `
    query GetAllPages {
      pages(first: 100) {
        nodes {
          ${PAGE_FIELDS}
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ pages: WPPagesConnection }>(query);
    const nodes = data?.pages?.nodes || [];
    return nodes;
  } catch (error) {
    console.error('Failed to fetch pages from WP:', error);
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<WPPageNode | null> {
  const query = `
    query GetPageBySlug($id: ID!) {
      page(id: $id, idType: URI) {
        ${PAGE_FIELDS}
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ page: WPPageNode }>(query, {
      id: slug,
    });
    return data?.page || null;
  } catch (error) {
    console.error(`Failed to fetch page ${slug} from WP.`, error);
    return null;
  }
}
