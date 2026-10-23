import { WPBlogPost } from '@/lib/api/blog';
import { OG_PADRAO, urlDoSite } from '@/lib/site';
import { ORGANIZACAO_ID, trilha } from '@/lib/seo/organizacao';
import { autorDoPost } from '@/lib/blog/autor';

const iso = (d?: string) => (d ? `${d.replace(/Z?$/, '')}-03:00` : undefined);

/**
 * O artigo para Google e IAs: título, autor, datas e quem publica. Data e
 * autoria são o que as IAs usam para decidir se a fonte é atual e confiável.
 */
export function dadosDoArtigo(post: WPBlogPost, descricao: string) {
  const url = urlDoSite(`/blog/${post.slug}`);
  const imagem =
    post.blogacf?.coverImage?.node?.sourceUrl ||
    post.featuredImage?.node?.sourceUrl ||
    OG_PADRAO;
  const autor = autorDoPost(post);
  return [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#artigo`,
      headline: post.title,
      description: descricao,
      url,
      mainEntityOfPage: url,
      image: imagem,
      datePublished: iso(post.date),
      dateModified: iso(post.modified || post.date),
      inLanguage: 'pt-BR',
      author: autor.organizacao
        ? { '@id': ORGANIZACAO_ID }
        : {
            '@type': 'Person',
            name: autor.nome,
            ...(autor.cargo ? { jobTitle: autor.cargo } : {}),
          },
      publisher: { '@id': ORGANIZACAO_ID },
      ...(post.categories?.nodes?.length
        ? { articleSection: post.categories.nodes.map((c) => c.name) }
        : {}),
      ...(post.tags?.nodes?.length
        ? { keywords: post.tags.nodes.map((t) => t.name).join(', ') }
        : {}),
    },
    trilha([
      ['Início', '/'],
      ['Blog', '/blog'],
      [post.title, `/blog/${post.slug}`],
    ]),
  ];
}
