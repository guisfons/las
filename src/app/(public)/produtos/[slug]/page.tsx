import PageClient from './page-client';
import { getProductBySlug } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const wpProduct = await getProductBySlug(params.slug);
  const product = wpProduct ? mapWPProductToProduct(wpProduct) : null;

  return {
    title: product ? product.name : 'Produto não encontrado',
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
