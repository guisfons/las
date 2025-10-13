'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import Link from 'next/link';

export default function EducationTrails() {
  const array = [
    {
      logo: '/las-talks.png',
      height: 27,
      circle: 'w-4 h-4',
      description:
        'O LAStalks é um evento exclusivo em que enviamos um KOL para ministrar uma aula a um grupo de médicos convidados. O encontro acontece em formato de jantar, promovendo atualização científica e networking em um ambiente intimista.',
      link: '/las-talks',
    },
    {
      logo: '/las-clubs-black.png',
      height: 27,
      circle: 'w-6 h-6',
      description:
        'O LASclubs é uma iniciativa que conecta os principais médicos especialistas do Brasil através de eventos semanais focados em ciência, práticas e troca de experiências. Cada Club é dedicado a uma especialidade específica - Trauma e Alongamento Ósseo, Mão, Quadril, Cabeça e Pescoço, e Ginecologia - garantindo discussões altamente profundas e direcionadas com KOLs (Key Opinion Leaders) liderando cada especialidade.',
      link: '/las-clubs',
    },
    {
      logo: '/las-xperts.png',
      height: 31,
      circle: 'w-8 h-8',
      description:
        'Nossos produtos nas mãos dos médicos, em projetos de Medicina Baseada em Evidência. Foram 32 Estudos de Caso publicados em 2024. ',
      link: '/las-xperts',
    },
    {
      logo: '/las-xperience.png',
      height: 33,
      circle: 'w-10 h-10',
      description:
        'A LASxperience é uma jornada imersiva em que levamos os médicos participantes para visitarem as fábricas das Marcas parceiras do nosso Movimento. Eles têm aula in loco com especialistas e discussões de caso – que dão a oportunidade deles verem na prática como os equipamentos são produzidos, têm contato com especialistas para explicar os diferenciais e informações originais dos produtos. ',
      link: '/las-xperience',
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl lg:px-6 py-20 mx-auto w-full flex flex-col gap-2 items-center justify-between">
      <h1 className="font-exo2 w-full text-center text-4xl pb-6 font-bold text-[#3B3D63]">
        Trilhas de Educação Médica
      </h1>

      <InfiniteMovingCards
        items={array}
        direction="right"
        pauseOnHover={false}
        speed="slow"
        className="block lg:!hidden"
      />

      <div className="hidden w-full lg:grid grid-cols-4 gap-y-16 mt-10">
        {array.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="relative w-max min-h-12 lg:min-h-16 py-1 px-2 lg:py-3 lg:px-4 flex mb-14 items-center justify-center bg-[#f2f2f2]"
              key={index}
            >
              <Image
                width={250}
                height={item.height}
                src={item.logo}
                alt={`Logo ${index}`}
                className="w-8/12 relative z-10 object-contain"
                style={{
                  height: item.height + 'px',
                }}
              />

              <div className="absolute rotate-45 -bottom-3 w-6 h-6 p-2 bg-[#f2f2f2]"></div>
            </div>

            <div className="relative flex justify-center items-center w-full h-[4px] bg-[#3B3D63]">
              <div
                className={`absolute rounded-full bg-[#3B3D63] ${item.circle}`}
              ></div>

              {index !== array.length - 1 && (
                <Icon
                  name="right_arrow"
                  className="absolute right-0 text-[#3B3D63]"
                />
              )}
            </div>

            <div className="mt-4 pt-10 p-4 lg:p-10">
              <p className="w-full max-w-[580px] font-exo2 text-black text-base font-medium flex-wrap p-0 m-0">
                {item.description}
              </p>

              <Link
                href={item.link || ''}
                className="w-max mt-6 z-20 flex items-center justify-center gap-1 bg-[#31a1ff] text-base font-exo2 text-center font-medium rounded-full px-4 py-2 text-white"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
