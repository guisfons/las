import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/api/blog';
import BlogPostClient from './page-client';
import { comMarca, marcaEmMaiusculas } from '@/lib/utils/seo';
import { JsonLd } from '@/components/json-ld';
import { dadosDoArtigo } from '@/lib/seo/artigo';
import { OG_PADRAO } from '@/lib/site';

interface Props {
  params: { slug: string };
}

// Sempre gerada na hora. O layout lê o endereço da requisição (canônico), e
// página pré-gerada no build quebra com DYNAMIC_SERVER_USAGE ao revalidar:
// foi o que derrubou o blog em 22/10/2026, num build em que o WordPress respondeu.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Artigo não encontrado' };

  const description = marcaEmMaiusculas(
    post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) ||
      `Artigo da LAS FOR LIFE: ${post.title}`,
  );

  const img =
    post.blogacf?.coverImage?.node?.sourceUrl ||
    post.featuredImage?.node?.sourceUrl;

  return {
    title: post.title,
    description,
    openGraph: {
      title: comMarca(post.title),
      description,
      type: 'article',
      publishedTime: post.date,
      ...(post.modified ? { modifiedTime: post.modified } : {}),
      images: [{ url: img || OG_PADRAO }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(params.slug),
    getAllBlogPosts(6),
  ]);

  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== params.slug).slice(0, 3);

  const descricao = marcaEmMaiusculas(
    post.excerpt
      ?.replace(/<[^>]*>/g, '')
      .trim()
      .slice(0, 300) || `Artigo da LAS FOR LIFE: ${post.title}`,
  );
  return (
    <>
      <JsonLd dados={dadosDoArtigo(post, descricao)} />
      <BlogPostClient post={post} relatedPosts={related} />
    </>
  );
}
