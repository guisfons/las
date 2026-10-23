import { WPBlogPost } from '@/lib/api/blog';

export const AUTOR_PADRAO = 'LAS FOR LIFE';
export const LOGO_AUTOR_PADRAO =
  'https://mediumblue-swallow-341910.hostingersite.com/wp-content/uploads/2026/09/logo.png';

export type AutorDoPost = {
  nome: string;
  foto: string | undefined;
  cargo: string | undefined;
  /** O autor é a própria LAS: a foto é o logo e, nos dados estruturados, a organização. */
  organizacao: boolean;
};

const ehLas = (nome: string) => /^las\s*for\s*life$/i.test(nome.trim());

/**
 * Autor de um artigo do blog. Sem autor preenchido no campo do artigo, o autor
 * é a LAS FOR LIFE, com o logo como foto. O usuário do WordPress que publicou
 * não entra: ele é quem subiu o texto, não quem o assina.
 */
export function autorDoPost(post: WPBlogPost): AutorDoPost {
  const acf = post.blogacf;
  const nome = acf?.authorName?.trim() || AUTOR_PADRAO;
  const organizacao = ehLas(nome);
  const foto =
    acf?.authorPhoto?.node?.sourceUrl ||
    (organizacao ? LOGO_AUTOR_PADRAO : undefined);
  return {
    nome: organizacao ? AUTOR_PADRAO : nome,
    foto,
    cargo: acf?.authorRole || undefined,
    organizacao,
  };
}
