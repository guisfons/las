/**
 * Medição dos botões de ação do site inteiro pelo dataLayer do GTM (GTM-K38Z8QDS).
 *
 * Um ouvinte só, no documento, reconhece o botão pelo destino do link. Assim
 * botão novo que aponte para o orçamento, o distribuidor, o mapa, o WhatsApp etc.
 * entra na conta sem ninguém lembrar de ligar a medição nele.
 *
 *   cta_clique          clique num botão ou link de ação
 *   formulario_enviado  envio de formulário (o navegador já validou os campos)
 *
 * Parâmetros do cta_clique:
 *   cta_tipo     orcamento · distribuidor · mapa · ver_produto · whatsapp ·
 *                telefone · email · chatbot · rede_social · contato · agenda ·
 *                material · como_chegar
 *   cta_produto  o produto a que o clique se refere (do link, da página ou do banner)
 *   cta_evento   o evento, nos botões de WhatsApp e calendário da agenda
 *   cta_rotulo   o texto do botão
 *   cta_local    menu · rodape · banner_home · pagina_produto · mapa · pagina
 *   cta_destino  o endereço do link
 *
 * Parâmetros do formulario_enviado: form_tipo e cta_produto (no orçamento).
 *
 * Para forçar o tipo de um botão que não é link (ou mudar o reconhecido), use
 * data-cta="tipo" no elemento; para dizer o produto, data-cta-produto="Nome".
 * Medição nunca impede o clique: qualquer erro é engolido.
 */

const REDES =
  /(^|\.)(instagram|facebook|linkedin|youtube|tiktok|x|twitter)\.com$/;

function empurrar(dados: Record<string, string | undefined>) {
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = Array.isArray(w.dataLayer) ? w.dataLayer : [];
    const limpo: Record<string, string> = {};
    for (const [k, v] of Object.entries(dados)) if (v) limpo[k] = v;
    w.dataLayer.push(limpo);
  } catch {
    // dataLayer indisponível: segue sem medir.
  }
}

function texto(el: Element): string {
  const t =
    el.getAttribute('aria-label') ||
    (el as HTMLElement).innerText ||
    el.getAttribute('title') ||
    '';
  return t.replace(/\s+/g, ' ').trim().slice(0, 100);
}

function slugDoCaminho(caminho: string): string | undefined {
  const m = caminho.match(/^\/produtos\/([^/?#]+)/);
  return m ? decodeURIComponent(m[1]) : undefined;
}

/** O produto: atributo no elemento ou em volta, link, ou a página de produto aberta. */
function produtoDe(el: Element, url: URL | null): string | undefined {
  const marcado = el
    .closest('[data-cta-produto]')
    ?.getAttribute('data-cta-produto');
  if (marcado) return marcado;
  if (url) {
    const doOrcamento = url.searchParams.get('product');
    if (doOrcamento) return doOrcamento;
    if (url.origin === location.origin) {
      const slug = slugDoCaminho(url.pathname);
      if (slug) return slug;
    }
  }
  // Menu e rodapé são do site, não do produto aberto.
  if (
    slugDoCaminho(location.pathname) &&
    !el.closest('header, nav, footer, [data-cta-local="rodape"]')
  ) {
    return (
      document
        .querySelector('[data-cta-produto]')
        ?.getAttribute('data-cta-produto') || slugDoCaminho(location.pathname)
    );
  }
  return undefined;
}

function localDe(el: Element): string {
  const marcado = el
    .closest('[data-cta-local]')
    ?.getAttribute('data-cta-local');
  if (marcado) return marcado;
  if (el.closest('footer')) return 'rodape';
  if (el.closest('header, nav')) return 'menu';
  if (el.closest('.banner-hero')) return 'banner_home';
  if (el.closest('#unidades')) return 'mapa';
  if (slugDoCaminho(location.pathname)) return 'pagina_produto';
  return 'pagina';
}

/** O tipo pelo destino do link. Link de navegação comum devolve undefined e não é medido. */
function tipoDe(href: string, url: URL | null): string | undefined {
  if (href.startsWith('tel:')) return 'telefone';
  if (href.startsWith('mailto:')) return 'email';
  if (!url) return undefined;
  const host = url.hostname.replace(/^www\./, '');
  if (host === 'wa.me' || host.endsWith('whatsapp.com')) return 'whatsapp';
  if (host === 'udify.app') return 'chatbot';
  if (host === 'waze.com' || host.endsWith('.waze.com')) return 'como_chegar';
  if (REDES.test(host)) return 'rede_social';
  if (host === 'calendar.google.com' || host.startsWith('outlook.'))
    return 'agenda';
  if (url.pathname.toLowerCase().endsWith('.pdf')) return 'material';
  if (url.origin !== location.origin) return undefined;
  if (url.pathname.startsWith('/solicitar-orcamento')) return 'orcamento';
  if (url.pathname.startsWith('/seja-um-distribuidor')) return 'distribuidor';
  if (url.hash === '#unidades') return 'mapa';
  if (url.hash === '#Contact') return 'contato';
  if (slugDoCaminho(url.pathname)) return 'ver_produto';
  return undefined;
}

function aoClicar(e: MouseEvent) {
  try {
    const alvo = e.target as Element | null;
    const el = alvo?.closest?.('a, button, [data-cta]');
    if (!el) return;

    const href = el.getAttribute('href') || '';
    let url: URL | null = null;
    try {
      url =
        href && !href.startsWith('blob:') ? new URL(href, location.href) : null;
    } catch {
      url = null;
    }

    const tipo = el.getAttribute('data-cta') || tipoDe(href, url);
    if (!tipo) return;

    empurrar({
      event: 'cta_clique',
      cta_tipo: tipo,
      cta_produto: produtoDe(el, url),
      cta_evento:
        el.closest('[data-cta-evento]')?.getAttribute('data-cta-evento') ||
        undefined,
      // Botão só com ícone (redes sociais) fica com o nome do site no rótulo.
      cta_rotulo: texto(el) || url?.hostname.replace(/^www\./, '') || undefined,
      cta_local: localDe(el),
      cta_destino: url
        ? url.href.slice(0, 200)
        : href.slice(0, 200) || undefined,
    });
  } catch {
    // nunca impede o clique
  }
}

/** O tipo do formulário pela página em que ele está. */
function formTipoDe(form: HTMLFormElement): string {
  const marcado = form.getAttribute('data-form-tipo');
  if (marcado) return marcado;
  if (form.closest('footer, [data-cta-local="rodape"]')) return 'newsletter';
  const p = location.pathname;
  if (p.startsWith('/solicitar-orcamento')) return 'orcamento';
  if (p.startsWith('/seja-um-distribuidor')) return 'distribuidor';
  if (p.startsWith('/servicos-tecnicos')) return 'servico_tecnico';
  if (p.startsWith('/eventos')) return 'aviso_evento';
  if (form.closest('#Contact')) return 'contato';
  return 'outro';
}

function aoEnviar(e: SubmitEvent) {
  try {
    const form = e.target as HTMLFormElement | null;
    if (!form || form.tagName !== 'FORM') return;
    const produto = (
      form.elements.namedItem('product') as HTMLInputElement | null
    )?.value;
    empurrar({
      event: 'formulario_enviado',
      form_tipo: formTipoDe(form),
      cta_produto: produto || undefined,
    });
  } catch {
    // nunca impede o envio
  }
}

let ligado = false;

/** Liga os dois ouvintes uma vez só por carregamento (o layout pode remontar). */
export function ligarMedicaoDeCliques() {
  if (ligado || typeof document === 'undefined') return;
  ligado = true;
  // Fase de captura: o clique é registrado antes de o React trocar de página.
  document.addEventListener('click', aoClicar, true);
  document.addEventListener('submit', aoEnviar, true);
}
