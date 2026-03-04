'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import BannerHero from './_components/banner-hero';
import Footer from '@/components/footer';

import { Product } from '../_components/card-product';
import AboutExpansion from './_components/about-expansion';

export default function Home({ initialProduct }: { initialProduct: Product }) {
  const router = useRouter();
  const { slug }: { slug: string } = useParams();

  const product = initialProduct;

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
