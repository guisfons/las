// page.tsx (SERVER)
import ProdutosClient from './produtos-client';

export const metadata = {
  title: 'Produtos',
};

export default function ProdutosPage() {
  return <ProdutosClient />;
}
