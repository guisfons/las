import { WPEventoNode } from '@/lib/types/events';
import { segmentoDoEvento, Segmento } from '@/lib/eventos/taxonomia';

/**
 * A cor de um evento é a do SEGMENTO, não a da especialidade (Bruno,
 * 02/10/2026).
 *
 * - **Autoral** usa o azul de **Promover Educação** (`#31A1FF`), que é a cor
 *   dos eventos da LAS — LAStalks, LASclubs, LASxperts são a frente de
 *   educação.
 * - **Patrocinado** usa o azul de **Articular o Ecossistema** (`#00B5C8`): é
 *   a LAS presente no evento de outro, que é exatamente essa frente.
 *
 * Antes cada especialidade tinha uma cor (ginecologia no verde de Tratar a
 * Doença, cabeça e pescoço em navy) e congresso em verde — cores de outras
 * frentes da marca emprestadas para dizer outra coisa.
 *
 * ⚠️ As classes ficam escritas por inteiro, aqui dentro de `src/app`: o
 * Tailwind só gera classe que encontra literal num arquivo que ele varre, e
 * `src/lib` não está no `content` dele. Montar `bg-${cor}/10` no render (como a
 * grade fazia) produz uma classe que não existe no CSS.
 */
export interface CoresSegmento {
  /** Hexadecimal, para SVG e estilo inline. */
  hex: string;
  /** Canais RGB separados por espaço, para a variável `--cor-evento`. */
  rgb: string;
  solido: string; // fundo cheio do botão principal
  solidoHover: string;
  suave: string; // fundo, texto e borda de etiqueta e botão secundário
  suaveHover: string;
  texto: string;
  textoHover: string;
  ponto: string;
  borda: string;
  bordaHover: string;
  degrade: string; // card sem imagem
  veu: string; // tom sobre a foto do topo da página do evento
}

export const CORES: Record<Segmento, CoresSegmento> = {
  Autoral: {
    hex: '#31A1FF',
    rgb: '49 161 255',
    solido: 'bg-[#31A1FF] text-white',
    solidoHover: 'hover:bg-[#258de6]',
    suave: 'bg-[#31A1FF]/10 text-[#31A1FF] border-[#31A1FF]/30',
    suaveHover: 'hover:bg-[#31A1FF]/20',
    texto: 'text-[#31A1FF]',
    textoHover: 'hover:text-[#31A1FF] group-hover:text-[#31A1FF]',
    ponto: 'bg-[#31A1FF]',
    borda: 'border-[#31A1FF]/30',
    bordaHover: 'hover:border-[#31A1FF]/30',
    degrade: 'from-[#31A1FF]/40 to-[#1a2a5e]',
    veu: 'from-[#31A1FF]/15',
  },
  Patrocinado: {
    hex: '#00B5C8',
    rgb: '0 181 200',
    solido: 'bg-[#00B5C8] text-white',
    solidoHover: 'hover:bg-[#009fb0]',
    suave: 'bg-[#00B5C8]/10 text-[#008a99] border-[#00B5C8]/30',
    suaveHover: 'hover:bg-[#00B5C8]/20',
    texto: 'text-[#00B5C8]',
    textoHover: 'hover:text-[#00B5C8] group-hover:text-[#00B5C8]',
    ponto: 'bg-[#00B5C8]',
    borda: 'border-[#00B5C8]/30',
    bordaHover: 'hover:border-[#00B5C8]/30',
    degrade: 'from-[#00B5C8]/40 to-[#1a2a5e]',
    veu: 'from-[#00B5C8]/15',
  },
};

export function coresDoEvento(evento: WPEventoNode): CoresSegmento {
  return CORES[segmentoDoEvento(evento)];
}

/**
 * A cor do evento como variável CSS, para páginas com muitos pontos de cor.
 * As classes leem `rgb(var(--cor-evento)/0.2)`, e quem declara a variável é o
 * elemento do evento — o mini-card de evento relacionado declara a dele.
 */
export function varCorEvento(evento: WPEventoNode): React.CSSProperties {
  return { ['--cor-evento' as string]: coresDoEvento(evento).rgb };
}
