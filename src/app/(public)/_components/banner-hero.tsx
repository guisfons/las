import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Icon from '@/shared/icon/icon';

import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerHero() {
  const banners = [
    {
      image: '/images/landingpage/line-hero.png',
      alt: 'Line Banner',
      url: '#Contact',
      target: '_self',
      textContent: `
        <p class="font-exo2 font-normal text-3xl sm:text-4xl md:text-7xl text-white">
          Somos o Movimento
        </p>
        <p class="font-exo2 font-light text-3xl sm:text-4xl md:text-7xl text-white">
          <strong class="font-semibold">LAS</strong>FOR
          <strong class="font-semibold">LIFE</strong>, mas pode
        </p>
        <p class="font-exo2 font-normal text-3xl sm:text-4xl md:text-7xl text-white">
          nos chamar de <strong class="font-semibold">LAS</strong>
        </p>
      `,
      customBg: true,
      button: true,
    },
    {
      image: '/images/landingpage/Banner-site-SpineMED.avif',
      alt: 'Banner - Laís Chat Bot',
      url: 'https://udify.app/chat/TPKKnNAf0hPmq1CM',
      target: '_blank',
      textContent: '',
      customBg: false,
      button: false,
    },
  ];

  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-dvh"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-dvh flex items-center justify-center ${
                banner.customBg
                  ? 'bg-black bg-bannerHeroMobile md:bg-BannerHeroWeb bg-no-repeat bg-top bg-cover px-1'
                  : ''
              }`}
            >
              {banner.customBg ? (
                <>
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    priority={index === 0}
                    className="object-cover object-center opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                </>
              ) : (
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center opacity-80"
                />
              )}
              {/* Conteúdo sobre o banner */}
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
        ))}
      </Swiper>
    </section>
  );
}
