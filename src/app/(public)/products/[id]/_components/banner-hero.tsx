'use client';

import Image from 'next/image';
import Icon from '@/shared/icon/icon';
import { Product } from '../../_components/card-product';
import Link from 'next/link';

export default function BannerHero({ product }: { product: Product }) {
  return (
    <>
      <div className="w-full max-w-7xl px-3 lg:pt-36 mx-auto flex justify-between flex-col-reverse md:flex-row items-center gap-6 py-12 overflow-hidden">
        <div id="left" className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={'/logo.svg'}
              width={70}
              height={30}
              alt="logo"
              className="flex items-center justify-center object-contain"
            ></Image>

            {product?.logo_brand && (
              <>
                <div className="border-l border-black h-6"></div>

                <Image
                  src={product?.logo_brand}
                  width={100}
                  height={30}
                  alt="logo"
                  className="flex items-center justify-center object-contain pt-1 max-h-9 object-left"
                ></Image>
              </>
            )}
            {product?.logo_brand_second && (
              <>
                <div className="border-l border-black h-6"></div>

                <Image
                  src={product?.logo_brand_second}
                  width={100}
                  height={30}
                  alt="logo"
                  className="flex items-center justify-center object-contain pt-1 max-h-9 object-left"
                ></Image>
              </>
            )}
          </div>

          <div>
            <p className="font-exo2 font-bold text-2xl md:text-6xl">
              {product?.name}
            </p>

            <p className="max-w-xl font-exo2 mt-8 text-sm md:text-lg text-[#090909]">
              {product?.detail?.subtitle}
            </p>

            <p
              className="max-w-xl font-exo2 text-sm md:text-lg text-label"
              dangerouslySetInnerHTML={{ __html: product?.description || '' }}
            ></p>
          </div>

          <Link
            className="inline-flex items-center px-6 bg-green focus:bg-green active:bg-green hover:bg-green text-white font-exo2 text-lg font-bold w-max h-14 rounded-full"
            href={`/budget-request?product=${product?.name}`}
          >
            Solicite um orçamento
            <Icon name="arrow_right" className="text-2xl"></Icon>
          </Link>

          <div className="max-w-72 flex gap-2 flex-wrap">
            {/* {product?.specialities.map((tag, index) => ( */}
            <p className="w-max text-black font-exo2  text-sm px-2 text bg-green">
              {product?.specialities}
            </p>
            {/* ))} */}
          </div>
        </div>

        <div className="relative w-full max-w-80 lg:w-11/12 md:w-1/2 lg:aspect-square md:max-w-xl flex items-center justify-center">
          <Image
            src={'/images/products/figure-green.svg'}
            width={606}
            height={455}
            alt="Figure"
            className="absolute w-full -lg:left-10"
          />
          <Image
            src={product?.imageUrl ?? ''}
            width={606}
            height={455}
            alt={product?.name || 'Image Product'}
            className="relative z-10 w-11/12 h-auto object-cover rounded-2xl p-4 md:p-16"
          ></Image>
        </div>
      </div>
    </>
  );
}
