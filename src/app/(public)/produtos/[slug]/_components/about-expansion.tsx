'use client';

import { Product } from '../../_components/card-product';
import { cn } from '@/lib/utils';
import GeneralInformationProduct from './expansion/general_information-product';
import TechnicalDataProduct from './expansion/technical-data-product';
import MediasProduct from './expansion/medias-product';
import ContentsProduct from './expansion/contents-product';
import ProductTestimonials from './expansion/product-testimonials';
import SourceProduct from './expansion/source-product';
import UnidadesProduct from './expansion/unidades-product';

export default function AboutExpansion({ product }: { product: Product }) {
  const expansion = [
    {
      number: '01',
      title: 'Indicações de uso',
      content: (
        <GeneralInformationProduct
          product={product}
        ></GeneralInformationProduct>
      ),
      is_active: !!(
        product?.detail?.general_information &&
        product.detail.general_information.replace(/<[^>]*>?/gm, '').trim()
          .length > 0
      ),
    },
    {
      number: '02',
      title: 'Unidades de Atendimento',
      content: <UnidadesProduct />,
      is_active: product.slug === 'spinemed',
    },
    {
      number: '03',
      title: 'Dados Técnicos',
      content: <TechnicalDataProduct product={product}></TechnicalDataProduct>,
      is_active: (product.detail?.technical_data || []).length > 0,
    },
    {
      number: '03b',
      title: 'Dados Técnicos 2',
      content: <TechnicalDataProduct product={product} dataKey="technical_data2"></TechnicalDataProduct>,
      is_active: (product.detail?.technical_data2 || []).length > 0,
    },
    // {
    //   number: '04',
    //   title: 'Preços e Comercial',
    //   content: <p> - </p>,
    // },
    {
      number: '05',
      title: 'Conteúdo',
      content: <ContentsProduct product={product} />,
      is_active: (product?.detail?.links || []).length > 0,
    },
    {
      number: '06',
      title: 'Depoimentos',
      content: <ProductTestimonials product={product}></ProductTestimonials>, // ← Substitui VideoProduct
      is_active: !!product.detail?.testimonial?.doctor?.name,
    },
    {
      number: '07',
      title: 'Imagens e Mídias',
      content: <MediasProduct product={product}></MediasProduct>,
      is_active: (product?.detail?.pictures || []).filter(Boolean).length > 0,
    },
    {
      number: '08',
      title: 'Referências',
      content: <SourceProduct product={product}></SourceProduct>,
      is_active: !!(
        product?.detail?.sources &&
        product.detail.sources.replace(/<[^>]*>?/gm, '').trim().length > 0
      ),
    },
  ];

  return (
    <>
      <div className="w-full max-w-7xl px-3 mx-auto flex flex-col justify-start gap-6 py-10">
        <div className="mb-10">
          <p className="font-exo2 font-bold text-xl md:text-4xl mb-4">
            Sobre o produto
          </p>
          {product.detail?.about?.map((item, index) => (
            <p
              key={index}
              className="w-11/12 font-exo2 text-sm md:text-lg text-label"
            >
              {item}
            </p>
          ))}
        </div>

        {expansion
          .filter((el) => el.is_active)
          .map((item, idx) => {
            return (
              <>
                <div
                  key={idx}
                  className="flex items-center gap-6 md:gap-16 justify-between"
                >
                  <p className="font-exo2 font-bold text-base md:text-2xl mr-auto">
                    {item.title}
                  </p>
                </div>

                <div className={cn(`w-full mb-10`)}>{item.content}</div>
              </>
            );
          })}
      </div>
    </>
  );
}
