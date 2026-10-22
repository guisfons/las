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

/** Especialidade do site → enumeração MedicalSpecialty do schema.org. */
const ESPECIALIDADE: Record<string, string[]> = {
  Ortopedia: ['Musculoskeletal'],
  Coluna: ['Musculoskeletal'],
  Ginecologia: ['Gynecologic'],
  Uroginecologia: ['Gynecologic', 'Urologic'],
  'Cabeça e Pescoço': ['Otolaryngologic'],
};

/**
 * O produto como dispositivo médico, para Google e IAs: o que é, quem fabrica,
 * a especialidade e o registro na ANVISA.
 *
 * É MedicalDevice, não Product, de propósito (22/10/2026): Product obriga a
 * declarar preço, avaliação ou nota média ("offers", "review" ou
 * "aggregateRating"), o site não publica nenhum dos três, e o Search Console
 * acusava problema crítico em todas as páginas de produto. MedicalDevice não
 * tem marca nem fabricante; o fabricante vai na descrição.
 */
export function dadosDoProduto(p: ProdutoSeo) {
  const url = urlDoSite(`/produtos/${p.slug}`);
  const fichaRegistro = daFicha(p, /registro|anvisa/i);
  // A ficha pode trazer mais de um registro na mesma linha ("80517190047 80517190048").
  const numeros = fichaRegistro?.match(/\d[\d.\-/]{6,}\d/g) || [];
  const registro = numeros.length ? numeros.join(' e ') : fichaRegistro;
  const modelo = daFicha(p, /modelo/i);
  const fabricante = (p.brands || [])[0];
  const imagem =
    p.imageUrl && !p.imageUrl.includes('placeholder') ? p.imageUrl : undefined;
  const especialidades = Array.from(
    new Set(
      (p.specialities || []).flatMap((e) =>
        (ESPECIALIDADE[e] || []).map((m) => `https://schema.org/${m}`),
      ),
    ),
  );
  const identificadores = [
    ...(registro
      ? [{ '@type': 'PropertyValue', name: 'Registro ANVISA', value: registro }]
      : []),
    ...(modelo
      ? [{ '@type': 'PropertyValue', name: 'Modelo comercial', value: modelo }]
      : []),
  ];
  const texto = resumo(
    [p.detail?.subtitle, p.description].filter(Boolean).join('. '),
    500,
  );

  const produto: Record<string, unknown> = {
    '@type': 'MedicalDevice',
    '@id': `${url}#produto`,
    name: p.name,
    url,
    description: fabricante
      ? `${texto} Fabricante: ${fabricante}. Distribuído no Brasil pela LAS FOR LIFE.`
      : texto,
    ...(imagem ? { image: imagem } : {}),
    ...(especialidades.length ? { relevantSpecialty: especialidades } : {}),
    ...(identificadores.length ? { identifier: identificadores } : {}),
    ...(registro
      ? {
          legalStatus: `Registro ANVISA nº ${registro}`,
          recognizingAuthority: {
            '@type': 'GovernmentOrganization',
            name: 'Agência Nacional de Vigilância Sanitária (ANVISA)',
            url: 'https://www.gov.br/anvisa',
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
