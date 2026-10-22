import { OG_PADRAO } from '@/lib/site';
import ProdutosClient from './produtos-client';
import { getAllProducts } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';

const titulo = 'Produtos: dispositivos médicos por especialidade';
const descricao =
  'Dispositivos médicos para ortopedia, coluna, ginecologia, uroginecologia e cabeça e pescoço, com registro na ANVISA, representados no Brasil pela LAS FOR LIFE. Ficha técnica, indicações e instruções de uso de cada um.';

export const metadata = {
  title: titulo,
  description: descricao,
  openGraph: {
    title: `${titulo} | LAS FOR LIFE`,
    description: descricao,
    images: [{ url: OG_PADRAO, width: 1200, height: 630 }],
  },
};

export default async function ProdutosPage() {
  const wpProducts = await getAllProducts();
  const products = wpProducts.map(mapWPProductToProduct);

  return <ProdutosClient initialProducts={products} />;
}
