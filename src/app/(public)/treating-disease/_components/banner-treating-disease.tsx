'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function BannerTreatingDisease() {
  return (
    <>
      <section className="w-full h-auto relative flex justify-center items-center overflow-hidden">
        <Image
          src="/images/treating-disease/banner-treating-disease-2.png"
          width={1920}
          height={1080}
          alt="Banner BannerTreatingDisease"
          className="absolute w-dvw h-full min-h-dvh object-cover"
        />

        <div
          className={cn(
            'relative max-w-7xl h-full mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-20 py-24 px-6',
          )}
        >
          <div className="flex flex-col w-full">
            <p
              className={cn(
                'font-exo2 max-w-[350px] font-bold text-4xl text-[#7EE000]',
              )}
            >
              Conectando soluções e cuidado
            </p>

            <p className="font-exo2 mt-6 text-lg text-white max-w-[565px]">
              Entregamos soluções inovadoras que tornam o trabalho dos
              especialistas mais eficiente e melhoram a experiência de quem
              recebe o cuidado, atuando em especialidades como Ortopedia,
              Coluna, Cabeça e Pescoço e Ginecologia.
            </p>

            <p className="font-exo2 mt-6 text-lg text-white max-w-[565px]">
              Nesta frente, nos dedicamos exclusivamente para a importação,
              distribuição e venda de dispositivos médicos.
            </p>

            <p className="font-exo2 mt-6 text-lg text-white max-w-[565px]">
              Para isso, a LAS tem parceria estratégica com subdistribuidores
              por todo território nacional e com fabricantes de diferentes
              partes do mundo, entre estes:
            </p>
          </div>

          <p className="w-[500px] font-exo2 text-4xl text-white text-center font-bold">
            BRASIL <br />
            ESTADOS UNIDOS <br />
            HOLANDA <br />
            REINO UNIDO <br />
            TURQUIA <br />
            BÉLGICA <br />
            FRANÇA <br />
            ALEMANHA <br />
            ITÁLIA <br />
            CHINA
          </p>
        </div>
      </section>
    </>
  );
}
