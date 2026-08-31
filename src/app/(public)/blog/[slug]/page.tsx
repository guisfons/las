import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/api/blog';
import BlogPostClient from './page-client';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Artigo não encontrado' };

  const description =
    post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) ||
    `Artigo da LAS For Life: ${post.title}`;

  const img =
    post.blogacf?.coverImage?.node?.sourceUrl ||
    post.featuredImage?.node?.sourceUrl;

  return {
    title: `${post.title} | Blog LAS For Life`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.date,
      images: img ? [{ url: img }] : [],
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

  return <BlogPostClient post={post} relatedPosts={related} />;
}
