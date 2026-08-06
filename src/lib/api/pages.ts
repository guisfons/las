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
      logo {
        sourceUrl
      }
      titlePlus
      description
      image {
        sourceUrl
      }
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
        img {
          sourceUrl
        }
        title
        description
        logoOne {
          sourceUrl
        }
        logoTwo {
          sourceUrl
        }
        url
      }
      showMoreButton
    }
    partners {
      title
      gallery {
        alf
        url {
          sourceUrl
        }
      }
    }
    impact {
      title
      mainBlock {
        title
        number
        symbol
        icon {
          sourceUrl
        }
        backgroundImage {
          sourceUrl
        }
      }
      estatistics {
        icon {
          sourceUrl
        }
        bg
        title
        number
        symbol
      }
      wavesImage {
        sourceUrl
      }
    }
    contact {
      title
      subtitle
      image {
        sourceUrl
      }
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
      backgroundImage {
        sourceUrl
      }
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
      imageLine {
        sourceUrl
      }
      title
      description
      label
    }
    howWeDoItToday {
      banner {
        sourceUrl
      }
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
        picture {
          sourceUrl
        }
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

  pageTreating {
    heroBanner {
      imageLine {
        sourceUrl
      }
      title
      description
      label
    }
    howWeDoItToday {
      banner {
        sourceUrl
      }
      title
      description {
        text
      }
    }
  }

  pageGenerate {
    heroBanner {
      imageLine {
        sourceUrl
      }
      title
      description
      label
    }
    howWeDoItToday {
      banner {
        sourceUrl
      }
      title
      description {
        text
      }
    }
    cardLas {
      title
      description
      grid {
        logo {
          sourceUrl
        }
        picture {
          sourceUrl
        }
        description
        link
      }
    }
    bannerLas {
      title
      description {
        text
      }
      imageBanner {
        sourceUrl
      }
      link
    }
  }

  pageInstructions {
    titleHeader
    productsList {
      brand
      name
      anvisa
      fileUrl {
        sourceUrl
      }
    }
  }

  pageGeneric {
    headerTitle
    headerDescription
    formAction
  }

  pageLasSports {
    howWeDoItToday {
      banner {
        sourceUrl
      }
      logo {
        sourceUrl
      }
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
      imageBanner {
        sourceUrl
      }
      link
      labelLink
    }
    sponsorship {
      title
      description {
        text
      }
      image {
        sourceUrl
      }
      link
    }
  }

  pageLasSocial {
    howWeDoItToday { banner { sourceUrl } logo { sourceUrl } description { text } link }
    bannerLas { title description { text } imageBanner { sourceUrl } link labelLink }
  }

  pageLasClubs {
    howWeDoItToday { banner { sourceUrl } logo { sourceUrl } description { text } link }
    bannerLas { title description { text } imageBanner { sourceUrl } link labelLink }
  }

  pageLasTalks {
    howWeDoItToday { banner { sourceUrl } logo { sourceUrl } description { text } link }
    bannerLas { title description { text } imageBanner { sourceUrl } link labelLink }
  }

  pageLasXperience {
    howWeDoItToday { banner { sourceUrl } logo { sourceUrl } description { text } link }
    bannerLas { title description { text } imageBanner { sourceUrl } link labelLink }
  }

  pageLasXperts {
    howWeDoItToday { banner { sourceUrl } logo { sourceUrl } description { text } link }
    bannerLas { title description { text } imageBanner { sourceUrl } link labelLink }
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
