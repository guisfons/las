import { Product } from '../../../_components/card-product';

export default function GeneralInformationProduct({
  product,
}: {
  product: Product;
}) {
  return (
    <p
      className="max-w-3xl font-exo2 text-lg text-label"
      dangerouslySetInnerHTML={{
        __html: product?.detail?.general_information || '',
      }}
    ></p>
  );
}
