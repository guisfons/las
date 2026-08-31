import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/api/blog';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Blog | LAS For Life',
  description:
    'Artigos, notícias e conteúdos educativos sobre saúde, ortopedia, ginecologia e mais — da LAS For Life.',
  openGraph: {
    title: 'Blog | LAS For Life',
    description:
      'Artigos, notícias e conteúdos educativos sobre saúde, ortopedia, ginecologia e mais.',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
