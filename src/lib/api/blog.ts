import { fetchWPGraphQL } from '../wp';

export type WPBlogAcf = {
  coverImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  readingTime?: number;
  authorName?: string;
  authorPhoto?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  authorRole?: string;
  isFeatured?: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
  relatedProductSlug?: string;
};

export type WPBlogCategory = {
  name: string;
  slug: string;
};

export type WPBlogTag = {
  name: string;
  slug: string;
};

export type WPBlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  content?: string;
  excerpt?: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  blogacf?: WPBlogAcf;
  categories?: {
    nodes: WPBlogCategory[];
  };
  tags?: {
    nodes: WPBlogTag[];
  };
  author?: {
    node?: {
      name?: string;
      avatar?: {
        url?: string;
      };
    };
  };
};

export type WPBlogConnection = {
  nodes: WPBlogPost[];
  pageInfo?: {
    hasNextPage: boolean;
    endCursor: string;
  };
};

const BLOG_POST_FIELDS = `
  id
  slug
  title
  date
  excerpt
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
  blogacf {
    coverImage {
      node {
        sourceUrl
        altText
      }
    }
    readingTime
    authorName
    authorPhoto {
      node {
        sourceUrl
        altText
      }
    }
    authorRole
    isFeatured
    ctaLabel
    ctaUrl
    relatedProductSlug
  }
  categories {
    nodes {
      name
      slug
    }
  }
  tags {
    nodes {
      name
      slug
    }
  }
  author {
    node {
      name
      avatar {
        url
      }
    }
  }
`;

const BLOG_POST_FIELDS_WITH_CONTENT = BLOG_POST_FIELDS + `
  content
`;

export async function getAllBlogPosts(first = 100): Promise<WPBlogPost[]> {
  const query = `
    query GetAllBlogPosts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC }, status: PUBLISH }) {
        nodes {
          ${BLOG_POST_FIELDS}
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ posts: WPBlogConnection }>(query, {
      first,
    });
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Failed to fetch blog posts from WP:', error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<WPBlogPost | null> {
  const query = `
    query GetBlogPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        ${BLOG_POST_FIELDS_WITH_CONTENT}
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ post: WPBlogPost }>(query, {
      id: slug,
    });
    return data?.post || null;
  } catch (error) {
    console.error(`Failed to fetch blog post ${slug} from WP.`, error);
    return null;
  }
}

export async function getBlogPostsByCategory(
  categorySlug: string,
  first = 20,
): Promise<WPBlogPost[]> {
  const query = `
    query GetBlogPostsByCategory($categorySlug: String!, $first: Int!) {
      posts(
        first: $first,
        where: {
          categoryName: $categorySlug,
          orderby: { field: DATE, order: DESC },
          status: PUBLISH
        }
      ) {
        nodes {
          ${BLOG_POST_FIELDS}
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ posts: WPBlogConnection }>(query, {
      categorySlug,
      first,
    });
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Failed to fetch blog posts by category:', error);
    return [];
  }
}
