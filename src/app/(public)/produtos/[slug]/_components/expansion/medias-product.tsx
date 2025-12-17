import Image from 'next/image';
import { Product } from '../../../_components/card-product';

import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

export default function MediasProduct({ product }: { product: Product }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full">
      <div className="w-full flex gap-4">
        <Swiper
          slidesPerView={4}
          slidesPerGroupSkip={1}
          spaceBetween={6}
          touchRatio={1}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // tempo em ms entre slides (3 segundos)
            disableOnInteraction: false, // autoplay não para após interação do usuário
          }}
          navigation={false}
          breakpoints={{
            0: {
              slidesPerView: 2, // para telas até 739px
            },
            740: {
              slidesPerView: 3, // de 740px até 1199px
            },
            1200: {
              slidesPerView: 4, // 1200px em diante
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {product?.detail?.pictures?.map((item, index) => (
            <SwiperSlide key={index} className="size-full pb-10">
              <Image
                width={800}
                height={800}
                key={index}
                src={item}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto border border-[#D4D2E3] mb-4 object-cover aspect-square rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <p className="text-green font-exo2 text-lg">Baixe Agora:</p>

      {product?.detail?.links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black font-semibold font-exo2 text-sm md:text-lg underline"
        >
          {item.title}
        </a>
      ))} */}
    </div>
  );
}
