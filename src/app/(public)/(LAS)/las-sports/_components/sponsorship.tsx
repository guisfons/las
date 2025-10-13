'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Sponsorship() {
  return (
    <section className="relative max-w-7xl mx-auto w-full flex items-center justify-start gap-20 py-24">
      <div className="max-w-[477px]">
        <p className="font-exo2 font-bold text-2xl lg:text-[45px] text-black leading-none">
          Patrocinamos a Herkules Handebol
        </p>

        <div className="max-w-[300px] md:max-w-[565px] flex flex-col gap-6 my-6">
          <p className="font-exo2 font-normal text-base text-label">
            O Herkules é um time com um histórico de conquistas relevantes: foi
            campeão do Campeonato Brasileiro de Handebol na categoria sub-14 em
            2021 e, mais recentemente, venceu a Copa Sudeste de Handebol em
            2025, garantindo sua vaga no Campeonato Brasileiro de Clubes.
          </p>

          <p className="font-exo2 font-normal text-base text-label">
            Nosso patrocínio ao time tem um propósito social bem definido:
            apoiar crianças que não têm condições financeiras para arcar com
            materiais esportivos e custos de viagens para campeonatos.
            Acreditamos que o esporte vai além da competição — é uma poderosa
            ferramenta de inclusão social, promoção da saúde e desenvolvimento
            de valores como trabalho em equipe, disciplina e superação.
          </p>
        </div>

        <Link
          href=""
          className="w-max z-20 mt-10 flex items-center justify-center gap-1 bg-[#F9D229] text-base font-exo2 text-center font-medium rounded-full px-7 py-2 text-[#000000]"
        >
          Conheça o Projeto
        </Link>
      </div>

      <Image
        width={600}
        height={600}
        src="/images/las-screen/grid-sports.png"
        alt="Herkules Handebol"
        className="w-1/2 object-contain aspect-square"
        priority
      />
    </section>
  );
}
