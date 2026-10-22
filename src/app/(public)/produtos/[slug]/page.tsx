import PageClient from './page-client';
import { getProductBySlug } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import { notFound } from 'next/navigation';
import { comMarca } from '@/lib/utils/seo';
import { JsonLd } from '@/components/json-ld';
import { dadosDoProduto, descricaoDoProduto } from '@/lib/seo/produto';
import { OG_PADRAO } from '@/lib/site';

/**
 * Título e descrição escritos a partir do que as pessoas buscam (Search
 * Console, 90 dias até 20/10/2026), para produtos que aparecem e quase não
 * recebem clique. O nome sozinho não dizia o que o produto é: "gripper",
 * "quickdraw" e "bonos" têm outros sentidos na busca. Sem número de registro
 * (o do QuickDraw diverge entre materiais) e sem promessa de efeito.
 */
const SEO_PRODUTO: Record<string, { titulo: string; descricao: string }> = {
  gripper: {
    titulo: 'Gripper: fixação de afastadores em cirurgia ortopédica',
    descricao:
      'O Gripper posiciona e fixa os afastadores durante a cirurgia ortopédica, para dar visibilidade e estabilidade ao campo operatório. Dispositivo da MedEnvision, com ficha técnica e indicações.',
  },
  quickdraw: {
    titulo: 'QuickDraw: coleta de enxerto ósseo autólogo percutânea',
    descricao:
      'Sistema para coleta de enxerto ósseo autólogo da crista ilíaca por incisão percutânea mínima, com ferramentas de acesso. Fabricante Paradigm BioDevices. Ficha técnica e indicações.',
  },
  'bonos-r-nf-bonos-r-nf-genta': {
    titulo: 'BonOs® R NF: cimento ósseo de PMMA de alta viscosidade',
    descricao:
      'Cimento ósseo de PMMA de alta viscosidade e presa rápida para fixação de implantes em cirurgia óssea, nas versões BonOs® R NF e R NF Genta. Fabricante Osartis. Ficha técnica e indicações.',
  },
  durolane: {
    titulo: 'DUROLANE®: ácido hialurônico em aplicação única',
    descricao:
      'Ácido hialurônico estabilizado de origem não animal (NASHA®), em aplicação única por ciclo, para o tratamento sintomático da osteoartrite leve a moderada do joelho e do quadril. Fabricante Bioventus.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const wpProduct = await getProductBySlug(params.slug);
  const product = wpProduct ? mapWPProductToProduct(wpProduct) : null;

  if (!product) return { title: 'Produto não encontrado' };

  // Prévia do link (WhatsApp, LinkedIn): mesmo título da aba, com a marca, e a
  // foto do produto quando há uma de verdade.
  const foto =
    product.imageUrl && !product.imageUrl.includes('placeholder')
      ? product.imageUrl
      : undefined;
  const proprio = SEO_PRODUTO[params.slug];
  const titulo = proprio?.titulo || product.name;
  const description = proprio?.descricao || descricaoDoProduto(product);
  return {
    title: titulo,
    description,
    openGraph: {
      title: comMarca(titulo),
      description,
      images: [{ url: foto || OG_PADRAO }],
    },
    twitter: {
      card: 'summary_large_image',
      title: comMarca(titulo),
      description,
      images: [foto || OG_PADRAO],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const wpProduct = await getProductBySlug(params.slug);

  if (!wpProduct) {
    notFound();
  }

  const product = mapWPProductToProduct(wpProduct);

  return (
    <>
      <JsonLd dados={dadosDoProduto(product)} />
      <PageClient initialProduct={product} />
    </>
  );
}
