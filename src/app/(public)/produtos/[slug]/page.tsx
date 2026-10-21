import PageClient from './page-client';
import { getProductBySlug } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import { notFound } from 'next/navigation';
import { comMarca } from '@/lib/utils/seo';
import { JsonLd } from '@/components/json-ld';
import { dadosDoProduto, descricaoDoProduto } from '@/lib/seo/produto';
import { OG_PADRAO } from '@/lib/site';

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
  const description = descricaoDoProduto(product);
  return {
    title: product.name,
    description,
    openGraph: {
      title: comMarca(product.name),
      description,
      images: [{ url: foto || OG_PADRAO }],
    },
    twitter: {
      card: 'summary_large_image',
      title: comMarca(product.name),
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
