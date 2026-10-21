import { MetadataRoute } from 'next';
import { getAllProducts } from '@/lib/api/products';
import { getAllEventos } from '@/lib/api/events';
import { eventoTemDetalhes } from '@/lib/eventos/agenda';
import { getAllBlogPosts } from '@/lib/api/blog';

import { SITE_URL } from '@/lib/site';

const BASE_URL = SITE_URL;

/** Data de alteração vinda do WordPress (sem fuso), ou nada. */
function alterado(data?: string): Date | undefined {
  if (!data) return undefined;
  const d = new Date(`${data.replace(/Z?$/, '')}-03:00`);
  return isNaN(d.getTime()) ? undefined : d;
}

/**
 * Gerado na hora, na Vercel — nunca no build.
 *
 * O build roda na máquina de quem publica (deploy-site-las.sh) e consulta o
 * WordPress dezenas de vezes, o bastante para o WAF da Hostinger bloquear o
 * IP. Em 02/10/2026 o sitemap no ar saiu assim, sem nenhum evento e sem nenhum
 * post, porque as duas consultas falharam em silêncio no `catch`.
 *
 * ⚠️ `revalidate = 3600` foi a primeira tentativa e não bastava: a versão
 * inicial continuava saindo do build, e cada publicação devolvia ao ar um
 * sitemap incompleto por até uma hora. As consultas ao WordPress continuam
 * em cache de 60s (fetchWPGraphQL), então gerar na hora não as multiplica.
 */
// Datas: só as que o WordPress conhece (produto, evento, post). Página fixa vai
// sem data; antes todas levavam a hora em que o sitemap foi gerado, e o Google
// passa a ignorar um campo que muda sempre.
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/articular-o-ecossistema`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gerar-saude`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tratar-doenca`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/eventos`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/produtos`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/instrucoes-de-uso-dos-produtos`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/seja-um-distribuidor`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/servicos-tecnicos`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solicitar-orcamento`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/las-clubs`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/las-social`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/las-sports`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/las-talks`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/las-xperience`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/las-xperts`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/educacao`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/certificado`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Rotas dinâmicas de produtos
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await getAllProducts();
    productRoutes = products.map((product) => ({
      url: `${BASE_URL}/produtos/${product.slug}`,
      lastModified: alterado(product.modified),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  } catch {
    // Se falhar, continua sem as rotas de produto
  }

  // Rotas dinâmicas de eventos
  let eventoRoutes: MetadataRoute.Sitemap = [];
  try {
    const eventos = await getAllEventos();
    // Só evento com página interna de verdade. Os outros abrem uma página que
    // repete o card, e não devem concorrer na busca.
    eventoRoutes = eventos.filter(eventoTemDetalhes).map((evento) => ({
      url: `${BASE_URL}/eventos/${evento.slug}`,
      lastModified: alterado(evento.modified),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }));
  } catch {
    // Se falhar, continua sem as rotas de evento
  }

  // Rotas dinâmicas do blog
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllBlogPosts();
    blogRoutes = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: alterado(post.modified || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }));
  } catch {
    // Se falhar, continua sem as rotas do blog
  }

  return [...staticRoutes, ...productRoutes, ...eventoRoutes, ...blogRoutes];
}
