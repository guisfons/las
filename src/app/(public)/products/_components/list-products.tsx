import CardProduct, { Product } from './card-product';

type ListProductsProps = {
  products: Product[];
};

export default function ListProducts({ products }: ListProductsProps) {
  return (
    <div className="h-max grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.length <= 0 && (
        <div className="md:col-span-3 w-full flex justify-center items-center py-20 text-label/50 font-exo2 text-2xl">
          Nenhum resultado encontrado.{' '}
        </div>
      )}
      {products.map((product, index) => (
        <div
          key={product.id}
          className="h-full transform transition duration-500 ease-in-out opacity-0 translate-y-6 animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
}
