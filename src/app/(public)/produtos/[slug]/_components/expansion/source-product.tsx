import { Product } from '../../../_components/card-product';

export default function SourceProduct({ product }: { product: Product }) {
  return (
    <p
      className="font-exo2 text-lg text-label"
      dangerouslySetInnerHTML={{
        __html: product?.detail?.sources || '',
      }}
    ></p>
  );
}
