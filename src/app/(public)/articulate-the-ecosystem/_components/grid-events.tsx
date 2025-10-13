'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function GridEvents() {
  const grid = [
    {
      picture: '/images/articulate-the-ecosystem/card-grid-event.png',
      title: 'Eventos',
    },
    {
      picture: '/images/articulate-the-ecosystem/card-grid-round-tables.png',
      title: 'Mesas Redondas',
    },
    {
      picture: '/images/articulate-the-ecosystem/card-grid-summit.png',
      title: 'Summit',
    },
    {
      picture: '/images/articulate-the-ecosystem/card-grid-podcast.png',
      title: 'Podcast',
    },
  ];

  return (
    <section
      id="Initiatives"
      className="relative w-full flex items-center justify-center flex-wrap"
    >
      <div className="relative z-20 max-w-7xl px-6 py-20 mx-auto w-full flex flex-col gap-10 items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-exo2 text-2xl text-center font-bold md:text-3xl max-w-[779px]">
            Criamos espaços e ocupamos conversas que movem o futuro da saúde{' '}
          </h1>

          <span className="font-exo2 text-gray-500 text-center text-lg flex-wrap p-0 m-0 max-w-[613px]">
            Estamos construindo pontes, criando diálogos e cocriando soluções
            com o setor da saúde. Quer a LAS no seu evento ou podcast?
          </span>

          <Link
            href={'/education#Initiatives'}
            className="w-max z-20 flex items-center justify-center gap-1 text-base font-exo2 bg-[#00b5c8] text-white text-center font-medium rounded-full px-7 py-2"
          >
            Entre em Contato
          </Link>
        </div>

        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-9 mt-10 mx-auto">
          {grid.map((el, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  'aspect-[3/4] relative w-full m-0 p-0 flex flex-col items-center justify-center rounded-2xl overflow-hidden',
                )}
                style={{
                  backgroundImage: `url(${el.picture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="relative z-20 size-full flex flex-col justify-end items-center gap-6 text-white text-center px-0 pb-8">
                  <p className="w-11/12 md:w-10/12 font-exo2 text-xl sm:text-3xl font-bold">
                    {el.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
