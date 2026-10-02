import PageClient from './page-client';
import { getProductBySlug } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import { notFound } from 'next/navigation';
import { comMarca } from '@/lib/utils/seo';

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
  return {
    title: product.name,
    openGraph: {
      title: comMarca(product.name),
      ...(foto ? { images: [{ url: foto }] } : {}),
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const wpProduct = await getProductBySlug(params.slug);

  if (!wpProduct) {
    notFound();
  }

  const product = mapWPProductToProduct(wpProduct);

  return <PageClient initialProduct={product} />;
}
