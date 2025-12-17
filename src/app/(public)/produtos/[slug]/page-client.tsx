'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import BannerHero from './_components/banner-hero';
import Footer from '@/components/footer';

import { Product } from '../_components/card-product';
import AboutExpansion from './_components/about-expansion';
import { ALL_PRODUCTS } from '../../../../../public/mocks/products';

export default function Home() {
  const router = useRouter();
  // const { id }: { id: string } = useParams();
  const { slug }: { slug: string } = useParams();

  const product: Product | undefined = ALL_PRODUCTS.find(
    // (el) => el.id === Number(id),
    (el) => el.slug === slug,
  );

  // if (!product?.id) {
  //   router.push('/produtos');
  // }

  useEffect(() => {
    if (!product) {
      router.push('/produtos');
    }
  }, [product, router]);

  if (!product) return null;

  return (
    <>
      {product && (
        <>
          <BannerHero product={product}></BannerHero>
          <AboutExpansion product={product}></AboutExpansion>
        </>
      )}
      <Footer></Footer>
    </>
  );
}
