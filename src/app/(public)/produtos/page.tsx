import ProdutosClient from './produtos-client';
import { getAllProducts } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';

export const metadata = {
  title: 'Produtos',
};

export default async function ProdutosPage() {
  const wpProducts = await getAllProducts();
  const products = wpProducts.map(mapWPProductToProduct);

  return <ProdutosClient initialProducts={products} />;
}
