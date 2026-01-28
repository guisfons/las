import { Product } from '../../../_components/card-product';

export default function UsageIndicationProduct({
  product,
}: {
  product: Product;
}) {
  return (
    <p
      className="max-w-3xl font-exo2 text-lg text-label"
      dangerouslySetInnerHTML={{
        __html: product?.detail?.usage_indication || '',
      }}
    ></p>
  );
}
