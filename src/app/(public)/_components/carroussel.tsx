'use client';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carroussel({ more = true }: { more?: boolean }) {
  const divsOfCarroussel = [
    {
      img: '/products/tennisPlayer.png',
      title: 'Superando Desafios',
      description:
        'Uma lesão rara. Perda óssea de 10 cm. E um enxerto com antibiótico local que entregou regeneração, proteção e recuperação total.',
      logo_one: '/images/brands/osartis_logo.png',
      logo_two: '/logo.svg',
      url: '/products/19',
    },
    {
      img: '/products/momAndBaby.png',
      title: 'Apoio que Faz a Diferença',
      description:
        'Após anos tentando engravidar, com o suporte do gel de barreira de adesão Oxiplex/IU, ela transformou a esperança em realidade.',
      logo_one: '/oniplex.png',
      logo_two: '/logo.svg',
      url: '/products/13',
    },
    {
      img: '/products/babyAndGrandfather.png',
      title: 'Recuperação com Significado',
      description:
        'Um trauma. Uma cartilagem comprometida. E uma solução biológica que usa o que o próprio corpo tem de melhor.',
      logo_one: '/images/brands/mdl_logo.png',
      logo_two: '/logo.svg',
      url: '/products/6',
    },
    {
      img: '/products/aYoungPatient.png',
      title: 'Precisão que Preserva',
      description:
        'Um nódulo de grandes dimensões. Uma paciente jovem. E uma tecnologia que trata com eficácia, sem comprometer a função da glândula.',
      logo_one: '/images/brands/curaway_logo.png',
      logo_two: '/logo.svg',
      url: '/products/22',
    },
  ];

  return (
    <section className="relative max-w-8xl px-6 py-10 lg:py-20 mx-auto flex items-center flex-col gap-10 justify-center overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <h1 className="max-w-52 md:max-w-max  text-2xl md:text-3xl font-exo2 text-center">
          <strong>Produtos que Impactam Vidas</strong>
        </h1>

        <p className="text-gray-500 font-exo2 text-lg md:text-xl w-full lg:w-3/5 pt-4 flex flex-wrap text-center">
          Oferecemos soluções pensadas para proporcionar o conforto, bem-estar e
          apoiar a saúde em cada passo.
        </p>
      </div>

      <div
        className="w-11/12 mx-auto md:w-full flex flex-col lg:flex-row gap-8 
        overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]"
      >
        <Swiper
          id="swiper-custom"
          centeredSlides={true}
          slidesPerView={2.8} // 90% da tela (1 slide mais uma parte do próximo)
          slidesPerGroupSkip={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: false,
            enabled: false,
          }}
          autoplay={{
            delay: 5000, // tempo em ms entre slides (3 segundos)
            disableOnInteraction: false, // autoplay não para após interação do usuário
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, // para telas até 739px
            },
            740: {
              slidesPerView: 2, // de 740px até 1199px
            },
            1200: {
              slidesPerView: 3, // 1200px em diante
            },
          }}
          navigation={false}
          modules={[Autoplay]}
        >
          {[...divsOfCarroussel, ...divsOfCarroussel]?.map((el, index) => (
            <SwiperSlide key={index}>
              <a href={el.url} className="w-full max-w-lg mx-auto">
                <div className="relative w-full flex flex-col rounded-xl overflow-hidden bg-[rgba(127,224,0,0.07)]">
                  <div className="relative">
                    <figure className="relative z-10 m-0 p-0 flex flex-col gap-8">
                      <Image
                        width={500}
                        height={150}
                        src={el.img}
                        alt=""
                        className="size-full object-cover"
                      />
                    </figure>

                    <div className="absolute w-full bottom-0 z-20 p-8 pb-16 border overflow-hidden border-none">
                      <p className="text-2xl font-exo2 font-bold text-white">
                        {el.title}
                      </p>
                      <p className="font-exo2 text-sm text-white">
                        {el.description}
                      </p>
                    </div>
                  </div>

                  {/* <div className="absolute z-20 -bottom-6 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="relative block"
                      style={{ width: 'calc(278% + 1.3px)', height: '250px' }}
                    >
                      <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-[#F6FDED]"
                      />
                    </svg>
                  </div> */}

                  <div className="z-20 flex justify-between gap-6 p-6">
                    <Image
                      width={300}
                      height={100}
                      src={el.logo_one}
                      alt=""
                      className="w-full max-w-32 h-10 object-contain"
                    />
                    <Image
                      width={300}
                      height={100}
                      src={el.logo_two}
                      alt=""
                      className="w-full max-w-32 h-10 object-contain"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {more && (
        <Link
          href={'/products'}
          className="bg-[#73CC00] font-exo2 py-3 px-6 rounded-full text-center text-white"
        >
          <strong>Ver Todos</strong>
        </Link>
      )}
    </section>
  );
}
