'use client';

import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

export default function Partners() {
  const imageGallery: { alf: string; url: string }[] = [
    { alf: 'fziomed', url: '/images/brands/fziomed.png' },
    { alf: 'acf_medical_logo', url: '/images/brands/acf_medical_logo.png' },
    { alf: 'apex', url: '/images/brands/apex_logo.png' },
    // { alf: 'bowa_site', url: '/images/brands/bowa_site.png' },
    { alf: 'curaway', url: '/images/brands/curaway_logo.png' },
    // { alf: 'aap_joints', url: '/images/brands/aap_joints.png' },
    // {
    //   alf: 'neomedic_international',
    //   url: '/images/brands/neomedic_international.png',
    // },
    { alf: 'macom_logo', url: '/images/brands/macom_logo.png' },
    { alf: 'mdl_logo', url: '/images/brands/mdl_logo.png' },
    { alf: 'med_envision', url: '/images/brands/med_envision.png' },
    { alf: 'mission_surgical', url: '/images/brands/mission_surgical.png' },
    { alf: 'neurosign', url: '/images/brands/neurosign.png' },
    { alf: 'osartis', url: '/images/brands/osartis_logo.png' },
    {
      alf: 'paradigm_biodevices',
      url: '/images/brands/paradigm_biodevices.png',
    },
    { alf: 'spinemed', url: '/images/brands/spinemed.png' },
    { alf: 'KLS', url: '/images/brands/KLS_Logo.svg' },
    {
      alf: 'STORZ',
      url: '/images/brands/STORZ-ENDOSKOPE-NODIA-KSBLUE-HR.jpg',
    },
    { alf: 'Kandel Medical', url: '/images/brands/kandel_medical.webp' },
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative max-w-7xl px-2 md:px-6 py-10 md:py-20 mx-auto flex flex-col items-center justify-center">
      <p className="font-exo2 font-semibold text-4xl"> Parceiros </p>

      <div className="w-11/12 mx-auto md:w-full">
        <Swiper
          slidesPerView={5}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={32}
          touchRatio={1}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // tempo em ms entre slides (3 segundos)
            disableOnInteraction: false, // autoplay não para após interação do usuário
          }}
          breakpoints={{
            0: {
              slidesPerView: 3, // para telas até 739px
            },
            740: {
              slidesPerView: 4, // de 740px até 1199px
            },
            1200: {
              slidesPerView: 5, // 1200px em diante
            },
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {imageGallery
            ?.sort((a, b) => a.alf.localeCompare(b.alf))
            .map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.url}
                  width={150}
                  height={150}
                  alt={image.alf}
                  className="relative w-full h-32 aspect-square object-contain py-10"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
