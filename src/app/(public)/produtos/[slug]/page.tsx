import { ALL_PRODUCTS } from '../../../../../public/mocks/products';
import PageClient from './page-client';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = ALL_PRODUCTS.find((p) => p.slug === params.slug);

  return {
    title: product ? product.name : 'Produto não encontrado',
  };
}

export default function Page() {
  return <PageClient />;
}
