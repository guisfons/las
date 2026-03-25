import { fetchWPGraphQL } from '../wp';

export interface WPMenuItem {
  id: string;
  parentId?: string | null;
  label: string;
  path: string;
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
        }
      }
    }
  `;

  try {
    const data = await fetchWPGraphQL<{ menuItems: { nodes: WPMenuItem[] } }>(
      query,
    );
    const nodes = data?.menuItems?.nodes || [];
    return buildMenuTree(nodes);
  } catch (error) {
    console.error('Failed to fetch menu from WP:', error);
    return [];
  }
}

export function buildMenuTree(nodes: WPMenuItem[]) {
  const map = new Map();
  nodes.forEach((node) =>
    map.set(node.id, { title: node.label, url: node.path, items: [] }),
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roots: any[] = [];

  nodes.forEach((node) => {
    if (node.parentId) {
      const parent = map.get(node.parentId);
      if (parent) {
        parent.items.push(map.get(node.id));
      }
    } else {
      roots.push(map.get(node.id));
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
