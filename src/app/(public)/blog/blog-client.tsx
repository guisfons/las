'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { WPBlogPost } from '@/lib/api/blog';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

interface Props {
  posts: WPBlogPost[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function getPostImage(post: WPBlogPost): string | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogCover = post.blogacf?.coverImage as any;
  if (typeof blogCover === 'string' && blogCover) return blogCover;
  if (blogCover?.node?.sourceUrl) return blogCover.node.sourceUrl;
  if (blogCover?.node?.mediaItemUrl) return blogCover.node.mediaItemUrl;
  if (blogCover?.sourceUrl) return blogCover.sourceUrl;
  if (blogCover?.mediaItemUrl) return blogCover.mediaItemUrl;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const feat = post.featuredImage?.node as any;
  if (feat?.sourceUrl) return feat.sourceUrl;
  if (feat?.mediaItemUrl) return feat.mediaItemUrl;

  return undefined;
}

function getAuthorName(post: WPBlogPost): string {
  return post.blogacf?.authorName || post.author?.node?.name || 'LAS For Life';
}

// ─── Card Hero (destaque) ────────────────────────────────────────────────────
function CardHero({ post }: { post: WPBlogPost }) {
  const img = getPostImage(post);
  const categories = post.categories?.nodes || [];
  const excerpt = post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 200) || '';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative w-full aspect-[16/7] md:aspect-[16/6] rounded-3xl overflow-hidden bg-gray-900 flex items-end block"
    >
      {img && (
        <Image
          src={img}
          alt={post.title}
          fill
          priority
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div className="relative z-10 p-6 md:p-10 flex flex-col gap-3 w-full max-w-3xl">
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="font-exo2 text-xs font-semibold px-3 py-1 rounded-full bg-[#31A1FF] text-white"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}
        <h2 className="font-exo2 font-bold text-2xl md:text-4xl text-white leading-tight group-hover:text-[#31A1FF] transition-colors">
          {post.title}
        </h2>
        {excerpt && (
          <p className="font-exo2 text-white/70 text-sm md:text-base line-clamp-2">
            {excerpt}
          </p>
        )}
        <div className="flex items-center gap-4 text-white/60 text-xs font-exo2 mt-1">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" /> {formatDate(post.date)}
          </span>
          {post.blogacf?.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="size-3" /> {post.blogacf.readingTime} min
            </span>
          )}
          <span className="flex items-center gap-1 text-[#31A1FF] font-semibold">
            Ler artigo <ArrowRight className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Card padrão ─────────────────────────────────────────────────────────────
function CardPost({ post }: { post: WPBlogPost }) {
  const img = getPostImage(post);
  const author = getAuthorName(post);
  const categories = post.categories?.nodes || [];
  const excerpt = post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 120) || '';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg hover:border-[#31A1FF]/20 transition-all duration-300"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block relative aspect-[324/222] overflow-hidden bg-gray-100"
      >
        {img ? (
          <Image
            src={img}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#31A1FF]/20 to-[#1a2a5e]/30 flex items-center justify-center">
            <span className="font-exo2 font-bold text-2xl text-white/40">
              LAS
            </span>
          </div>
        )}
        {categories.length > 0 && (
          <div className="absolute top-3 left-3">
            <span className="font-exo2 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#31A1FF] text-white">
              {categories[0].name}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 text-gray-400 text-xs font-exo2 flex-wrap">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" /> {formatDate(post.date)}
          </span>
          {post.blogacf?.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="size-3" /> {post.blogacf.readingTime} min de
              leitura
            </span>
          )}
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-exo2 font-bold text-lg text-gray-900 leading-snug group-hover:text-[#31A1FF] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {excerpt && (
          <p className="font-exo2 text-sm text-gray-500 line-clamp-3 flex-1">
            {excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <span className="font-exo2 text-xs text-gray-400">{author}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-exo2 text-xs font-semibold text-[#31A1FF] flex items-center gap-1 hover:gap-2 transition-all"
          >
            Ler mais <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogClient({ posts }: Props) {
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories?.nodes?.forEach((c) => set.add(c.name)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [posts]);

  // Artigo em destaque (prioriza isFeatured, ou primeiro post com imagem, ou posts[0])
  const featuredPost = useMemo(() => {
    return (
      posts.find((p) => p.blogacf?.isFeatured) ||
      posts.find((p) => Boolean(getPostImage(p))) ||
      posts[0] ||
      null
    );
  }, [posts]);

  // Posts filtrados (excluindo o featured do grid principal)
  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => p.id !== featuredPost?.id)
      .filter((p) => {
        const matchCat =
          filter === 'Todos' ||
          (p.categories?.nodes || []).some((c) => c.name === filter);
        const matchSearch =
          !search ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          (p.excerpt || '').toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
      });
  }, [posts, featuredPost, filter, search]);

  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <section className="relative w-full bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-exo2 text-sm font-semibold text-[#31A1FF] uppercase tracking-widest">
              Blog LAS For Life
            </span>
            <h1 className="font-exo2 font-bold text-4xl md:text-5xl text-[#1a2a5e] leading-tight max-w-2xl">
              Conhecimento que transforma a saúde
            </h1>
            <p className="font-exo2 text-gray-500 text-lg max-w-xl">
              Artigos, novidades e conteúdos educativos para profissionais da
              saúde.
            </p>
          </div>

          {/* Busca */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artigos..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 font-exo2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#31A1FF] focus:ring-2 focus:ring-[#31A1FF]/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* ── FILTROS ──────────────────────────────────────── */}
      {categories.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-6 pb-8">
          <div className="flex gap-2 flex-wrap">
            {['Todos', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'font-exo2 text-sm px-4 py-1.5 rounded-full border transition-all',
                  filter === cat
                    ? 'bg-[#31A1FF] text-white border-[#31A1FF]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#31A1FF]/40 hover:text-[#31A1FF]',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      <main className="w-full max-w-7xl mx-auto px-6 pb-20 flex flex-col gap-10">
        {/* Post em destaque */}
        {featuredPost && filter === 'Todos' && !search && (
          <CardHero post={featuredPost} />
        )}

        {/* Grid de posts */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-exo2 text-gray-400 text-lg">
              Nenhum artigo encontrado.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <CardPost key={post.id} post={post} />
              ))}
            </div>
          </AnimatePresence>
        )}
      </main>

      <Footer />
    </>
  );
}
