import { urlDoSite } from '@/lib/site';
import { trilha } from '@/lib/seo/organizacao';

type ProdutoSeo = {
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  brands?: string[];
  specialities?: string[];
  detail?: {
    subtitle?: string;
    technical_data?: string[][];
    technical_data2?: string[][];
  };
};

/** Texto limpo, numa linha, cortado em frase ou palavra inteira. */
export function resumo(texto: string, limite = 155): string {
  const t = texto.replace(/\s+/g, ' ').trim();
  if (t.length <= limite) return t;
  const corte = t.slice(0, limite);
  const ponto = corte.lastIndexOf('. ');
  if (ponto > limite * 0.5) return corte.slice(0, ponto + 1);
  return `${corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:]$/, '')}…`;
}

/**
 * Descrição de cada produto para o Google: o subtítulo (o que é) mais o começo
 * da descrição cadastrada. Até 10/2026 as 32 páginas de produto tinham a mesma,
 * "LAS FOR LIFE – Saúde para a vida.".
 */
export function descricaoDoProduto(p: ProdutoSeo): string {
  const sub = (p.detail?.subtitle || '').trim();
  const desc = (p.description || '').trim();
  const base = sub ? `${p.name}: ${sub}.${desc ? ` ${desc}` : ''}` : desc;
  return resumo(base || `${p.name}, da LAS FOR LIFE.`);
}

/** Procura uma linha da ficha técnica pelo rótulo ("Registro ANVISA", "Modelo comercial"). */
function daFicha(p: ProdutoSeo, rotulo: RegExp): string | undefined {
  const linhas = [
    ...(p.detail?.technical_data || []),
    ...(p.detail?.technical_data2 || []),
  ];
  const linha = linhas.find((l) => l.length > 1 && rotulo.test(l[0]));
  return linha ? linha.slice(1).join(' ').trim() : undefined;
}

/**
 * O produto como dispositivo médico, para Google e IAs: o que é, quem fabrica,
 * quem distribui no Brasil e o registro na ANVISA. Sem preço nem oferta, de
 * propósito: o site não vende e não publica preço.
 */
export function dadosDoProduto(p: ProdutoSeo) {
  const url = urlDoSite(`/produtos/${p.slug}`);
  const registro = daFicha(p, /registro|anvisa/i);
  const modelo = daFicha(p, /modelo/i);
  const fabricante = (p.brands || [])[0];
  const imagem =
    p.imageUrl && !p.imageUrl.includes('placeholder') ? p.imageUrl : undefined;

  const produto: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${url}#produto`,
    name: p.name,
    url,
    description: resumo(
      [p.detail?.subtitle, p.description].filter(Boolean).join('. '),
      500,
    ),
    category: [
      'Dispositivo médico',
      ...(p.specialities || []).filter((e) => e && e !== 'Todos'),
    ].join(' > '),
    ...(imagem ? { image: imagem } : {}),
    ...(fabricante
      ? {
          brand: { '@type': 'Brand', name: fabricante },
          manufacturer: { '@type': 'Organization', name: fabricante },
        }
      : {}),
    ...(modelo ? { model: modelo } : {}),
    ...(registro
      ? {
          additionalProperty: {
            '@type': 'PropertyValue',
            name: 'Registro ANVISA',
            value: registro,
          },
        }
      : {}),
  };

  return [
    produto,
    trilha([
      ['Início', '/'],
      ['Produtos', '/produtos'],
      [p.name, `/produtos/${p.slug}`],
    ]),
  ];
}
