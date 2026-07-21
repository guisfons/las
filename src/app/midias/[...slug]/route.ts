import { NextRequest, NextResponse } from 'next/server';
import { getMediaBySlug } from '@/lib/api/media';

/**
 * Rota de proxy de mídias: /midias/[...slug]
 *
 * Funciona como um proxy real — o browser nunca vê a URL do WP,
 * sempre vê lasforlife.com.br/midias/nomedodoc.
 * Isso permite rastrear acessos via Google Analytics.
 *
 * Para cadastrar uma mídia:
 *   1. Acesse o WordPress Admin → Mídias (CPT)
 *   2. Crie um novo item com um slug amigável (ex: "bula-neurosign")
 *   3. Cole a URL do arquivo (pode ser do WP, Drive, Dropbox, etc.)
 *   4. O link para o usuário será: lasforlife.com.br/midias/bula-neurosign
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string[] } },
) {
  const slug = params.slug.join('/');

  let fileUrl: string | undefined;

  // 1. Tenta buscar do WordPress (CPT "Mídia")
  const media = await getMediaBySlug(slug);
  fileUrl = media?.mediaacf?.fileUrl;

  // 2. Fallback: mapa estático (útil antes de ter o CPT configurado no WP)
  if (!fileUrl) {
    fileUrl = STATIC_MEDIA_MAP[slug];
  }

  if (!fileUrl) {
    return new NextResponse(
      JSON.stringify({
        error: 'Mídia não encontrada',
        slug,
        hint: 'Cadastre esta mídia no WordPress Admin → Mídias',
      }),
      { status: 404, headers: { 'Content-Type': 'application/json' } },
    );
  }

  try {
    const upstream = await fetch(fileUrl, {
      // Encaminha headers relevantes para suporte a range requests (seek em PDFs)
      headers: {
        'User-Agent': 'LASForLife-MediaProxy/1.0',
      },
    });

    if (!upstream.ok) {
      return new NextResponse('Erro ao buscar arquivo', {
        status: upstream.status,
      });
    }

    const contentType =
      upstream.headers.get('Content-Type') || 'application/octet-stream';
    const contentLength = upstream.headers.get('Content-Length');
    const contentDisposition = upstream.headers.get('Content-Disposition');

    const responseHeaders: HeadersInit = {
      'Content-Type': contentType,
      // Cache por 24h no edge, permitindo revalidação
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    };

    if (contentLength) {
      responseHeaders['Content-Length'] = contentLength;
    }

    // Mantém Content-Disposition se vier do upstream (inline ou download)
    if (contentDisposition) {
      responseHeaders['Content-Disposition'] = contentDisposition;
    }

    return new NextResponse(upstream.body, {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error(`[Media Proxy] Erro ao buscar ${fileUrl}:`, error);
    return new NextResponse('Erro interno ao buscar arquivo', { status: 500 });
  }
}

/**
 * Mapa estático de mídias — usado como fallback antes de ter o CPT no WP.
 * Formato: { 'slug-amigavel': 'https://url-real-do-arquivo.pdf' }
 *
 * COMO ADICIONAR:
 *   'nome-do-arquivo': 'https://wp.lasforlife.com.br/wp-content/uploads/...'
 *
 * Após configurar o CPT "Mídia" no WP, este mapa pode ser esvaziado.
 */
const STATIC_MEDIA_MAP: Record<string, string> = {
  // Instruções de uso dos produtos (PDFs locais servidos do /public)
  // Exemplo de uso com arquivo externo do WP:
  // 'bula-neurosign': 'https://mediumblue-swallow-341910.hostingersite.com/wp-content/uploads/2024/01/bula-neurosign.pdf',
};
