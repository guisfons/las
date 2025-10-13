'use client';

import Image from 'next/image';

export default function EducationProgram() {
  return (
    <section className="relative z-20 max-w-7xl px-4 md:px-6 py-20 mx-auto w-full flex flex-col gap-2 items-center justify-between">
      <h1 className="font-exo2 max-w-[525px] w-full text-center text-2xl md:text-4xl pb-6 font-bold text-[#3B3D63]">
        Nossa frente de Educação visa ser uma abordagem 360º
      </h1>

      <p className="w-full max-w-[580px] font-exo2 text-gray-500 text-center text-sm md:text-lg flex-wrap p-0 m-0">
        Como parte da LASacademy contamos com o programa 360º Education, cujas
        ações visam:
      </p>

      <div className="w-full grid grid-cols-10 items-center gap-4 mt-10">
        <div className="h-full flex flex-col gap-y-10 justify-between col-span-3">
          <p className="text-end max-w-[290px] font-exo2 text-xs md:text-base">
            Realização de atividades de Educação Médica Continuada
          </p>
          <p className="text-end max-w-[290px] font-exo2 text-xs md:text-base">
            Produção científica de publicações e projetos de pesquisa
          </p>
        </div>
        <Image
          src="/images/education/education-program.png"
          alt="Education Program"
          width={500}
          height={300}
          className="col-span-4 py-4 w-full h-auto"
        />
        <div className="h-full flex flex-col gap-y-10 justify-between col-span-3">
          <p className="max-w-[290px] font-exo2 text-xs md:text-base">
            Treinamento e a formação dos distribuidores LAS
          </p>
          <p className="max-w-[290px] font-exo2 text-xs md:text-base">
            Geração de inovação e desenvolvimento de novos produtos
          </p>
        </div>
      </div>
    </section>
  );
}
