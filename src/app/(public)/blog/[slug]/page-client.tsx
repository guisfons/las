'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Tag,
} from 'lucide-react';
import { WPBlogPost } from '@/lib/api/blog';
import Footer from '@/components/footer';

interface Props {
  post: WPBlogPost;
  relatedPosts: WPBlogPost[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function getPostImage(post: WPBlogPost): string | undefined {
  return (
    post.blogacf?.coverImage?.node?.sourceUrl ||
    post.featuredImage?.node?.sourceUrl
  );
}

function RelatedCard({ post }: { post: WPBlogPost }) {
  const img = getPostImage(post);
  const categories = post.categories?.nodes || [];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#31A1FF]/30 hover:bg-blue-50/30 transition-all"
    >
      <div className="relative aspect-[324/222] w-28 rounded-xl overflow-hidden shrink-0 bg-gray-100">
        {img ? (
          <Image
            src={img}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="112px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#31A1FF]/20 to-[#1a2a5e]/30" />
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        {categories[0] && (
          <span className="font-exo2 text-xs text-[#31A1FF] font-semibold">
            {categories[0].name}
          </span>
        )}
        <h4 className="font-exo2 font-bold text-sm text-gray-900 leading-snug line-clamp-2 group-hover:text-[#31A1FF] transition-colors">
          {post.title}
        </h4>
        <span className="font-exo2 text-xs text-gray-400">
          {formatDate(post.date)}
        </span>
      </div>
    </Link>
  );
}

export default function BlogPostClient({ post, relatedPosts }: Props) {
  const acf = post.blogacf;
  const img = getPostImage(post);
  const authorName =
    acf?.authorName || post.author?.node?.name || 'LAS For Life';
  const authorPhoto =
    acf?.authorPhoto?.node?.sourceUrl || post.author?.node?.avatar?.url;
  const categories = post.categories?.nodes || [];
  const tags = post.tags?.nodes || [];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[55vh] flex items-end overflow-hidden bg-[#0d1b3e]">
        {img && (
          <Image
            src={img}
            alt={post.title}
            fill
            priority
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12 pt-32 flex flex-col gap-4">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-exo2 text-sm transition-colors w-fit"
          >
            <ChevronLeft className="size-4" /> Blog
          </Link>

          {/* Categorias */}
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

          {/* Título */}
          <h1 className="font-exo2 font-bold text-3xl md:text-5xl text-white leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm font-exo2">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4 text-[#31A1FF]" />
              {formatDate(post.date)}
            </span>
            {acf?.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-[#31A1FF]" />
                {acf.readingTime} min de leitura
              </span>
            )}
            <span className="flex items-center gap-2">
              {authorPhoto ? (
                <span className="relative size-6 rounded-full overflow-hidden inline-block">
                  <Image
                    src={authorPhoto}
                    alt={authorName}
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </span>
              ) : null}
              {authorName}
              {acf?.authorRole && (
                <span className="text-white/50">· {acf.authorRole}</span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO ─────────────────────────────────────── */}
      <main className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Artigo */}
        <article className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg prose-blue max-w-none font-exo2
              prose-headings:font-exo2 prose-headings:font-bold prose-headings:text-[#1a2a5e]
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-[#31A1FF] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-2xl prose-img:shadow-md
              prose-strong:text-gray-900
              prose-blockquote:border-l-[#31A1FF] prose-blockquote:text-gray-500"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
              <Tag className="size-4 text-gray-400 mt-0.5" />
              {tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="font-exo2 text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-[#31A1FF]/10 hover:text-[#31A1FF] transition-colors cursor-default"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          {/* CTA do artigo */}
          {acf?.ctaUrl && acf?.ctaLabel && (
            <div className="mt-10 p-6 bg-gradient-to-br from-[#31A1FF]/5 to-[#1a2a5e]/5 border border-[#31A1FF]/15 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-exo2 font-semibold text-[#1a2a5e] text-lg">
                Quer saber mais sobre nossas soluções?
              </p>
              <Link
                href={acf.ctaUrl}
                className="inline-flex items-center gap-2 font-exo2 font-bold text-sm rounded-full px-6 py-3 bg-[#31A1FF] text-white hover:bg-[#258de6] transition-all shrink-0"
              >
                {acf.ctaLabel} <ExternalLink className="size-4" />
              </Link>
            </div>
          )}

          {/* Autor */}
          <div className="mt-10 p-6 bg-gray-50 rounded-3xl flex items-center gap-4">
            {authorPhoto ? (
              <div className="relative size-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src={authorPhoto}
                  alt={authorName}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            ) : (
              <div className="size-16 rounded-full bg-[#31A1FF]/20 flex items-center justify-center shrink-0">
                <span className="font-exo2 font-bold text-[#31A1FF] text-xl">
                  {authorName[0]}
                </span>
              </div>
            )}
            <div>
              <p className="font-exo2 font-bold text-gray-900">{authorName}</p>
              {acf?.authorRole && (
                <p className="font-exo2 text-sm text-gray-500">
                  {acf.authorRole}
                </p>
              )}
            </div>
          </div>
        </article>

        {/* ── SIDEBAR ─────────────────────────────────── */}
        <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-6">
          {/* Artigos relacionados */}
          {relatedPosts.length > 0 && (
            <div className="sticky top-24 flex flex-col gap-4">
              <h2 className="font-exo2 font-bold text-lg text-[#1a2a5e]">
                Leia também
              </h2>
              <div className="flex flex-col gap-3">
                {relatedPosts.map((rp) => (
                  <RelatedCard key={rp.id} post={rp} />
                ))}
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-exo2 font-semibold text-sm text-[#31A1FF] hover:underline"
              >
                Ver todos os artigos <ArrowRight className="size-3" />
              </Link>
            </div>
          )}
        </aside>
      </main>

      <Footer />
    </>
  );
}
