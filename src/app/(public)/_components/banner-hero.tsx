import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import Link from 'next/link';

export default function BannerHero() {
  return (
    <section className="relative w-full h-dvh bg-bannerHeroMobile md:bg-BannerHeroWeb bg-no-repeat bg-top px-1 bg-cover flex items-center justify-center gap-10 md:gap-11 flex-col">
      {/* <section className="relative w-full h-full max-h-dvh"> */}
      <Image
        src={'/images/landingpage/line-hero.png'}
        width={1440}
        height={774}
        alt="line"
        className="absolute top-0 w-full object-contain hidden md:block z-10"
      ></Image>

      <div className="w-full relative flex items-center justify-center flex-col max-w-md md:max-w-full mx-auto text-center z-20">
        <p className="font-exo2 font-normal text-3xl sm:text-4xl md:text-7xl text-white break-words">
          Somos o Movimento
        </p>
        <p className="font-exo2 font-light text-3xl sm:text-4xl md:text-7xl text-white break-words">
          <strong className="font-semibold">LAS</strong>FOR
          <strong className="font-semibold">LIFE</strong>, mas pode
        </p>
        <p className="font-exo2 font-normal text-3xl sm:text-4xl md:text-7xl text-white break-words">
          nos chamar de <strong className="font-semibold">LAS</strong>
        </p>
      </div>
      {/* <div className="w-full relative  flex items-center justify-center max-w-full mx-auto z-20">
        <Image
          src="/images/landingpage/banner-site-new.jpg"
          width={1200}
          height={600}
          alt="LASFORLIFE Logo"
          className="w-full h-full max-h-dvh aspect-video object-contain"
        />
      </div> */}

      <Link
        href="/#Contact"
        className="relative z-20 min-w-max flex items-center justify-center gap-1 bg-[#f9d229] text-base font-exo2 text-center font-medium rounded-full px-6 py-3 text-[#000000]"
      >
        Entre em contato <Icon name="arrow_right"></Icon>
      </Link>
    </section>
  );
}
