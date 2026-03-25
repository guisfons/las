'use client';

import Image from 'next/image';

export default function Segmentations() {
  const array = [
    {
      image: '/images/treating-disease/grid-1.png',
      title: 'Bucomaxilofacial, Cabeça & Pescoço e Otorrinolaringologia',
    },
    {
      image: '/images/treating-disease/grid-2.png',
      title: 'Cirurgia Geral e Ginecologia',
    },
    {
      image: '/images/treating-disease/grid-3.png',
      title: 'Coluna, Joelho, Quadril, Mão, Pé, Tornozelo e Trauma',
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-24">
        <section className="relative max-w-7xl h-full mx-auto w-full flex flex-col items-center justify-between gap-4 px-6">
          <p className="font-exo2 max-w-[350px] text-center font-bold text-4xl text-black">
            Segmentações
          </p>

          <p className="font-exo2 text-lg text-center text-label max-w-[565px]">
            Atuamos com diversas segmentações como:
          </p>
        </section>

        <div className="grid md:grid-cols-3 w-full mt-10">
          {array.map((item, index) => (
            <div
              key={index}
              className="w-full aspect-square flex flex-col items-start justify-end"
            >
              <Image
                width={800}
                height={800}
                src={item.image}
                alt={item.title}
                className="absolute md:w-1/3 aspect-square object-cover"
              />
              <p className="md:w-2/3 relative z-10 font-exo2 text-base md:text-3xl font-semibold p-6 text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <section className="relative max-w-7xl h-full mx-auto w-full flex flex-col items-center justify-between gap-4 px-6 mt-20">
          <p className="font-exo2 max-w-[350px] text-center font-bold text-4xl text-black">
            LAS no Ecossistema
          </p>

          <Image
            width={800}
            height={800}
            src="/images/treating-disease/map-treating-disease.png"
            alt="LAS no Ecossistema"
            className="w-full h-auto"
          />
        </section>
      </div>
    </>
  );
}
