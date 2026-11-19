'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Icon from '@/shared/icon/icon';

import 'swiper/css';
import 'swiper/css/pagination';
import BannerProduto from './banner-produto';
import { BANNERS_PRODUTO } from './banners-produto-dados';
export default function BannerHero({
  acfData,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  acfData?: any;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const banners = [
    {
      image:
        acfData?.image?.node?.sourceUrl || '/images/landingpage/line-hero.png',
      imageMobile: '',
      alt: acfData?.title || 'Line Banner',
      url: '#Contact',
      target: '_self',
      textContent:
        acfData?.description ||
        `
        <p class="font-exo2 font-normal text-3xl sm:text-4xl md:text-7xl text-white">
          Somos o Movimento
        </p>
        <p class="font-exo2 font-light text-3xl sm:text-4xl md:text-7xl text-white">
          <strong class="font-semibold">LAS</strong>FOR<strong class="font-semibold">LIFE</strong>, mas pode
        </p>
        <p class="font-exo2 font-normal text-3xl sm:text-4xl md:text-7xl text-white">
          nos chamar de <strong class="font-semibold">LAS</strong>
        </p>
      `,
      customBg: true,
      button: true,
    },
  ];

  return (
    <section className="relative w-full h-[calc(100dvh-100px)] lg:h-[calc(100dvh-82px)] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="banner-hero w-full h-[calc(100dvh-100px)] lg:h-[calc(100dvh-82px)]"
      >
        {banners.map((banner, index) => {
          const imageSrc =
            isMobile && banner.imageMobile ? banner.imageMobile : banner.image;

          return (
            <SwiperSlide key={index}>
              <div
                className={`relative w-full h-[calc(100dvh-100px)] lg:h-[calc(100dvh-82px)] flex items-center justify-center ${
                  banner.customBg
                    ? 'bg-black bg-bannerHeroMobile md:bg-BannerHeroWeb bg-no-repeat bg-top bg-cover px-1'
                    : ''
                }`}
              >
                <>
                  <Image
                    src={imageSrc}
                    alt={banner.alt}
                    fill
                    priority={index === 0}
                    className="object-cover object-center opacity-80"
                  />
                  {banner.customBg && (
                    <div className="absolute inset-0 bg-black/40 z-10" />
                  )}
                </>

                {!banner.button && banner.url && (
                  <a
                    href={banner.url}
                    target={banner.target}
                    className="absolute inset-0 z-10"
                  />
                )}

                <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 gap-6">
                  {banner.textContent && (
                    <div
                      dangerouslySetInnerHTML={{ __html: banner.textContent }}
                    />
                  )}

                  {banner.button && banner.url && (
                    <Link
                      href={banner.url}
                      target={banner.target}
                      className="flex items-center justify-center gap-1 bg-[#f9d229] text-base font-exo2 font-medium rounded-full px-6 py-3 text-black hover:bg-[#f1c400] transition-all"
                    >
                      Entre em contato <Icon name="arrow_right" />
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {BANNERS_PRODUTO.map((dados) => (
          <SwiperSlide key={dados.cta.url}>
            <BannerProduto dados={dados} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
