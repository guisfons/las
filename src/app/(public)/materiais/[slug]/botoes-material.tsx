'use client';

import { MaterialBotao } from '@/lib/api/materiais';

interface Props {
  botoes: MaterialBotao[];
  /** Slug da página, usado para separar os cliques por material no GTM. */
  pagina: string;
}

/**
 * Um link interno abre na mesma aba; um externo abre em aba nova.
 *
 * Quem recebe estas páginas está lendo um e-mail ou uma conversa de WhatsApp:
 * mandá-lo para fora do site sem aviso é como ele perde o lugar onde estava.
 */
function ehExterno(url: string): boolean {
  if (url.startsWith('/') || url.startsWith('#')) return false;
  try {
    return !new URL(url).hostname.endsWith('lasforlife.com.br');
  } catch {
    // URL malformada no ACF: trata como externa, que é o caso conservador.
    return true;
  }
}

export default function BotoesMaterial({ botoes, pagina }: Props) {
  /**
   * O site tem GTM (GTM-K38Z8QDS), então o clique vira evento no dataLayer.
   * Sem `window.dataLayer` a função não faz nada — é medição, não função:
   * ela nunca pode impedir a pessoa de chegar ao material.
   */
  function registrarClique(botao: MaterialBotao, posicao: number) {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      if (!Array.isArray(w.dataLayer)) return;
      w.dataLayer.push({
        event: 'material_clique',
        material_pagina: pagina,
        material_botao: botao.rotulo,
        material_url: botao.url,
        material_posicao: posicao + 1,
      });
    } catch {
      // Bloqueador de anúncio ou dataLayer indisponível: segue o link.
    }
  }

  return (
    <ul className="flex flex-col gap-3">
      {botoes.map((botao, i) => {
        const externo = ehExterno(botao.url);

        return (
          <li key={`${botao.url}-${i}`}>
            <a
              href={botao.url}
              onClick={() => registrarClique(botao, i)}
              {...(externo
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#31A1FF] hover:shadow-[0_6px_20px_-8px_rgba(26,42,94,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31A1FF] focus-visible:ring-offset-2 md:px-6 md:py-5"
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-exo2 text-base font-semibold leading-snug text-[#1a2a5e] md:text-lg">
                  {botao.rotulo}
                </span>
                {botao.descricao ? (
                  <span className="font-exo2 text-sm font-light text-label">
                    {botao.descricao}
                  </span>
                ) : null}
              </span>

              <span
                aria-hidden="true"
                className="shrink-0 text-[#31A1FF] transition-transform duration-200 group-hover:translate-x-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>

              {externo ? (
                <span className="sr-only">(abre em uma nova aba)</span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
