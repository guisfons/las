import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Todos os robôs entram, inclusive os de IA (GPTBot, OAI-SearchBot, ClaudeBot,
 * PerplexityBot, Google-Extended): ser lido por eles é o que permite à LAS
 * aparecer nas respostas. O sitemap vai no endereço com www, que é o que
 * responde; sem www ele redirecionava.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
