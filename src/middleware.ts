import { NextRequest, NextResponse } from 'next/server';

/**
 * Passa o caminho da página num cabeçalho para o layout raiz montar o endereço
 * canônico (o Next 14 não entrega o pathname a generateMetadata).
 *
 * ⚠️ Com a pasta src/, o Next só lê o middleware daqui. Havia um middleware.ts
 * na raiz do projeto que nunca rodou; ele punha "cache-control: no-store" em
 * tudo, e esse comportamento não foi trazido de propósito: travaria o cache de
 * todas as páginas.
 */
export function middleware(request: NextRequest) {
  const cabecalhos = new Headers(request.headers);
  cabecalhos.set('x-pathname', request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: cabecalhos } });
}

export const config = {
  // Só páginas: arquivos estáticos, imagens e a API não precisam.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.[a-z0-9]+$).*)'],
};
