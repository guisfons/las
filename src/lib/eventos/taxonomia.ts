import { WPEventoNode } from '@/lib/types/events';

/**
 * Ponto único da taxonomia da página de eventos.
 *
 * Existe porque as mesmas três decisões — quais especialidades aparecem, como
 * se agrupa Ablação, e o que é evento autoral — precisavam valer ao mesmo tempo
 * nos filtros, na grade, no Mapa do Ano e no bloco "Quero ser avisado". Quando
 * cada tela decidia por conta própria, bastava mexer numa para as outras
 * passarem a dizer outra coisa.
 */

function normalizar(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

// ─── Especialidades ────────────────────────────────────────────────────────

/**
 * As cinco do rodízio da LAS, na ordem em que aparecem na tela.
 *
 * É lista declarada, e não o que o WordPress tiver: o site é a vitrine da
 * operação, e termo criado por engano no painel não deve virar filtro público.
 */
export const ESPECIALIDADES = [
  'Cabeça e Pescoço',
  'Coluna',
  'Ginecologia',
  'Ortopedia',
  'Uroginecologia',
] as const;

/**
 * Termos do WordPress que são a mesma especialidade com outro nome.
 *
 * "Ablação" são os 8 eventos de RFA, que é procedimento de cabeça e pescoço —
 * a separação criava duas portas para o mesmo assunto. A mesclagem é feita na
 * leitura, então o termo pode continuar existindo no painel sem aparecer aqui.
 */
const SINONIMOS: Record<string, string> = {
  ablacao: 'Cabeça e Pescoço',
  'ablacao por rfa': 'Cabeça e Pescoço',
  rfa: 'Cabeça e Pescoço',
  ccp: 'Cabeça e Pescoço',
};

const CANONICO = new Map<string, string>(
  ESPECIALIDADES.map((e) => [normalizar(e), e]),
);

/** O nome canônico de um termo do WordPress, ou null se ele não é especialidade. */
export function especialidadeCanonica(termo: string): string | null {
  const n = normalizar(termo);
  if (!n || n === 'todos') return null;
  return SINONIMOS[n] || CANONICO.get(n) || null;
}

/** As especialidades de um evento, já canônicas e sem repetição. */
export function especialidadesDoEvento(evento: WPEventoNode): string[] {
  const vistas = new Set<string>();
  (evento.eventoCategorias?.nodes || []).forEach((n) => {
    const c = n?.name ? especialidadeCanonica(n.name) : null;
    if (c) vistas.add(c);
  });
  return Array.from(vistas);
}

export function eventoTemEspecialidade(
  evento: WPEventoNode,
  especialidade: string | null,
): boolean {
  if (!especialidade) return true;
  return especialidadesDoEvento(evento).includes(especialidade);
}

/**
 * As especialidades a mostrar como filtro: as canônicas que têm pelo menos um
 * evento, na ordem declarada.
 *
 * ⚠️ Especialidade sem nenhum evento não vira botão. Um filtro que devolve
 * sempre uma lista vazia parece defeito da página, e não ausência de evento —
 * no dia em que o primeiro evento dela for cadastrado, o botão aparece sozinho.
 */
export function especialidadesComEvento(eventos: WPEventoNode[]): string[] {
  const comEvento = new Set<string>();
  eventos.forEach((e) =>
    especialidadesDoEvento(e).forEach((sp) => comEvento.add(sp)),
  );
  return ESPECIALIDADES.filter((sp) => comEvento.has(sp));
}

// ─── Segmentos ─────────────────────────────────────────────────────────────

export const SEGMENTOS = ['Autoral', 'Patrocinado'] as const;
export type Segmento = (typeof SEGMENTOS)[number];

/**
 * Evento autoral é o que a LAS organiza: LAStalks, LASclubs, LASxperts,
 * LASxperience, LASacademy. Todo o resto — congresso, feira, curso de parceiro
 * — é patrocinado.
 *
 * ⚠️ O nome do programa tem de estar NO COMEÇO do título, não em qualquer
 * lugar. "Recall Asami + LAStalks" é um evento patrocinado em que a LAS faz um
 * LAStalks dentro; procurar o nome solto no título o classificaria como
 * autoral. É o único caso em que as duas leituras divergem nos 87 eventos de
 * hoje, e o calendário do cliente confirma que ele é patrocinado.
 */
const PROGRAMAS_LAS =
  /^\s*(las\s*talks?|lastalks?|las\s*clubs?|lasclubs?|las\s*xperts?|lasxperts?|las\s*xperience|lasxperience|lasacademy|las\s*academy)/i;

/**
 * O segmento de um evento.
 *
 * A taxonomia do WordPress vence sempre que estiver preenchida — é o cliente
 * declarando. A derivação pelo nome é só o padrão para os eventos que ninguém
 * classificou, que hoje são todos.
 */
export function segmentoDoEvento(evento: WPEventoNode): Segmento {
  const declarado = (evento.eventoSegmentos?.nodes || [])
    .map((n) => n?.name && normalizar(n.name))
    .find((n) => n === 'autoral' || n === 'patrocinado');

  if (declarado) return declarado === 'autoral' ? 'Autoral' : 'Patrocinado';

  return PROGRAMAS_LAS.test(evento.title || '') ? 'Autoral' : 'Patrocinado';
}
