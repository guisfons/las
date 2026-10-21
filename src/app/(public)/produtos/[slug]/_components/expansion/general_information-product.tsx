import { Product } from '../../../_components/card-product';

export default function GeneralInformationProduct({
  product,
}: {
  product: Product;
}) {
  // <div>, e não <p>: o texto vem do WordPress já com <p>, e parágrafo dentro de
  // parágrafo é HTML inválido. O navegador o desfazia, o React via outra coisa
  // e descartava o HTML do servidor, redesenhando a página inteira.
  return (
    <div
      className="max-w-3xl font-exo2 text-lg text-label"
      dangerouslySetInnerHTML={{
        __html: product?.detail?.general_information || '',
      }}
    />
  );
}
