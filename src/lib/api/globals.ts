import { fetchWPGraphQL } from '../wp';

export interface WPMenuItem {
  id: string;
  parentId?: string | null;
  label: string;
  path: string;
  url?: string;
  target?: string;
  cssClasses?: string[];
}

export interface WPSocialLinks {
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  newsletterText?: string;
  newsletterEmail?: string;
  companyAddress?: string;
  companyPhone?: string;
}

export async function getPrimaryMenu(): Promise<WPMenuItem[]> {
  const query = `
    query GetMenu {
      menuItems(where: {location: PRIMARY}, first: 100) {
        nodes {
          id
          parentId
          label
          path
          url
          target
          cssClasses
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ menuItems: { nodes: WPMenuItem[] } }>(
      query,
    );
    let nodes = data?.menuItems?.nodes || [];

    // Fallback: If no menu is assigned to PRIMARY location, fetch menuItems without location filter
    if (!nodes.length) {
      const fallbackQuery = `
        query GetFallbackMenu {
          menuItems(first: 100) {
            nodes {
              id
              parentId
              label
              path
              url
              target
              cssClasses
            }
          }
        }
      `;
      const fallbackData = await fetchWPGraphQL<{
        menuItems: { nodes: WPMenuItem[] };
      }>(fallbackQuery);
      nodes = fallbackData?.menuItems?.nodes || [];
    }

    return buildMenuTree(nodes);
  } catch (error) {
    console.error('Failed to fetch menu from WP:', error);
    return [];
  }
}

export function buildMenuTree(nodes: WPMenuItem[]) {
  const map = new Map();
  nodes.forEach((node) => {
    let rawUrl = node.path || node.url || '/';

    // Remove site domain if full URL is stored
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      try {
        const parsed = new URL(rawUrl);
        rawUrl = parsed.pathname + parsed.search + parsed.hash;
      } catch {
        // Keep as is if invalid URL
      }
    }

    let sectionId: string | undefined = undefined;
    let url = rawUrl;

    if (url.includes('#')) {
      const parts = url.split('#');
      url = parts[0] || '/';
      sectionId = parts[1];
    }

    map.set(node.id, {
      title: node.label,
      url: url,
      sectionId: sectionId,
      target: node.target || undefined,
      cssClasses: node.cssClasses || [],
      items: [],
    });
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roots: any[] = [];

  nodes.forEach((node) => {
    if (node.parentId) {
      const parent = map.get(node.parentId);
      if (parent) {
        parent.items.push(map.get(node.id));
      }
    } else {
      const rootItem = map.get(node.id);
      if (rootItem) {
        roots.push(rootItem);
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clean = (item: any) => {
    if (item.items.length === 0) delete item.items;
    else item.items.forEach(clean);
  };

  roots.forEach(clean);
  return roots;
}

export async function getSocialLinks(): Promise<WPSocialLinks | null> {
  const query = `
    query GetSocialLinks {
      globalOptions {
        socialLinks {
          facebookUrl
          instagramUrl
          linkedinUrl
          youtubeUrl
          newsletterText
          newsletterEmail
          companyAddress
          companyPhone
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{
      globalOptions: { socialLinks: WPSocialLinks };
    }>(query);
    return data?.globalOptions?.socialLinks || null;
  } catch (error) {
    console.error('Failed to fetch social links from WP:', error);
    return null;
  }
}
