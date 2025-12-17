import { cn } from '@/lib/utils';
import { Product } from '../../../_components/card-product';

export default function TechnicalDataProduct({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="max-w-3xl w-full">
      <div className="flex flex-col">
        {product.detail?.technical_data.map((el, idx) => {
          return (
            <div
              key={idx}
              className={cn(
                'grid items-center justify-between gap-10 bg-[#f6f6f6] border border-[#e7e7ed] px-4 py-5',
                {
                  'bg-[#ffffff]': idx % 2 === 0,
                },
                {
                  'grid-cols-1': el.length === 1,
                },
                {
                  'grid-cols-2': el.length === 2,
                },
                {
                  'grid-cols-3': el.length === 3,
                },
                {
                  'grid-cols-4': el.length === 4,
                },
                {
                  'grid-cols-5': el.length === 5,
                },
                {
                  'grid-cols-6': el.length === 6,
                },
              )}
            >
              {el.map((text) => {
                return (
                  <>
                    {idx === 0 && (
                      <p className="font-exo2 font-semibold text-left text-xs md:text-sm">
                        {text || '-'}
                      </p>
                    )}
                    {idx > 0 && (
                      <p className="text-left font-exo2 font-normal text-[#272833] text-xs md:text-sm">
                        {text || '-'}
                      </p>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
