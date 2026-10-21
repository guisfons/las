import { getAllProducts } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import { SITE_URL } from '@/lib/site';
import { resumo } from '@/lib/seo/produto';

/**
 * /llms.txt: um resumo do site em texto simples, no formato proposto em
 * llmstxt.org, para agentes de IA que o leem. Gerado na hora a partir do
 * WordPress, então produto novo entra sozinho. Nada aqui é inventado: os textos
 * de produto são o subtítulo e a descrição cadastrados.
 */
export const dynamic = 'force-dynamic';

const ORDEM = [
  'Ortopedia',
  'Coluna',
  'Ginecologia',
  'Uroginecologia',
  'Cabeça e Pescoço',
];

export async function GET() {
  let produtos: ReturnType<typeof mapWPProductToProduct>[] = [];
  try {
    produtos = (await getAllProducts()).map(mapWPProductToProduct);
  } catch {
    // Sem o WordPress, o resto do arquivo continua valendo.
  }

  const porEspecialidade = new Map<string, typeof produtos>();
  for (const p of produtos) {
    // Produto de duas especialidades (PerOssal, Interpose) aparece nas duas.
    const esps = ORDEM.filter((e) => (p.specialities || []).includes(e));
    for (const chave of esps.length ? esps : ['Outras especialidades']) {
      porEspecialidade.set(chave, [...(porEspecialidade.get(chave) || []), p]);
    }
  }
  const grupos = Array.from(porEspecialidade.entries()).sort(
    (a, b) => (ORDEM.indexOf(a[0]) + 1 || 99) - (ORDEM.indexOf(b[0]) + 1 || 99),
  );

  const linhaDoProduto = (p: (typeof produtos)[number]) => {
    const limpo = (t: string) =>
      t
        .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, '')
        .replace(/[.\s]+$/, '')
        .trim();
    const sub = p.detail?.subtitle ? `: ${limpo(p.detail.subtitle)}` : '';
    const curto = p.description ? resumo(p.description, 220) : '';
    const desc = curto
      ? curto.endsWith('…')
        ? ` ${curto.replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, '')}`
        : ` ${limpo(curto)}.`
      : '';
    const fab = p.brands?.[0] ? ` Fabricante: ${p.brands[0]}.` : '';
    return `- [${p.name}](${SITE_URL}/produtos/${p.slug})${sub}.${desc}${fab}`.replace(
      /\.\./g,
      '.',
    );
  };

  const texto = `# LAS FOR LIFE

> A LAS FOR LIFE é um Movimento que leva tecnologia médica, educação e conexão ao ecossistema da saúde no Brasil. Representa e distribui dispositivos médicos de fabricantes internacionais para ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço, e promove educação médica continuada pelos programas LAStalks, LASclubs e LASxperts. Missão: transformar a Indústria da Doença em Indústria da Saúde.

Sede: Rua das Rosas, 762, Mirandópolis, São Paulo, SP, CEP 04048-001. Telefone: (11) 3569-4106. Orçamentos: cotacao@lasforlife.com.br.

As informações de produto são de dispositivos médicos com registro na ANVISA, destinadas a profissionais de saúde. Indicações, contraindicações e instruções de uso estão na página de cada produto.

## Produtos por especialidade

${grupos
  .map(
    ([esp, lista]) => `### ${esp}\n\n${lista.map(linhaDoProduto).join('\n')}`,
  )
  .join('\n\n')}

## Educação médica

- [LAStalks](${SITE_URL}/las-talks): aula de um especialista de referência para um grupo de médicos convidados, em formato de jantar científico.
- [LASclubs](${SITE_URL}/las-clubs): encontros por especialidade, focados em ciência, prática e troca de experiências entre médicos.
- [LASxperts](${SITE_URL}/las-xperts): projetos de medicina baseada em evidência com os produtos, e cursos práticos com vagas limitadas.
- [LASxperience](${SITE_URL}/las-xperience): visitas de médicos às fábricas das marcas parceiras, com aulas e discussão de casos.
- [Eventos](${SITE_URL}/eventos): agenda de eventos próprios e congressos em que a LAS está presente.
- [Blog](${SITE_URL}/blog): artigos com referências científicas.

## Institucional

- [Gerar Saúde](${SITE_URL}/gerar-saude)
- [Tratar a Doença](${SITE_URL}/tratar-doenca)
- [Articular o Ecossistema](${SITE_URL}/articular-o-ecossistema)
- [Serviços técnicos](${SITE_URL}/servicos-tecnicos)
- [Instruções de uso dos produtos](${SITE_URL}/instrucoes-de-uso-dos-produtos)
- [Seja um distribuidor](${SITE_URL}/seja-um-distribuidor)
- [Solicitar orçamento](${SITE_URL}/solicitar-orcamento)
`;

  return new Response(texto, {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
}
