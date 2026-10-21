import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/api/blog';
import BlogClient from './blog-client';
import { OG_PADRAO } from '@/lib/site';

export const metadata: Metadata = {
  // O sufixo vem do template do layout raiz.
  title: 'Blog',
  description:
    'Artigos com referências científicas sobre ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço, da LAS FOR LIFE.',
  openGraph: {
    title: 'Blog | LAS FOR LIFE',
    description:
      'Artigos com referências científicas sobre ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço.',
    images: [{ url: OG_PADRAO, width: 1200, height: 630 }],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
