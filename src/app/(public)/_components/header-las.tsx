'use client';

import Image from 'next/image';

export default function HeaderLas({
  logo,
  description,
  titulo,
}: {
  logo: string;
  description: string[];
  /** Nome do programa: vira o H1 da página, pelo texto alternativo do logo. */
  titulo: string;
}) {
  return (
    <section
      className={`relative max-w-7xl mx-auto flex overflow-hidden py-16 px-6 ${description.length > 1 ? 'flex-col !pb-0' : 'flex-col gap-6 md:flex-row items-center justify-center md:justify-between'}`}
    >
      {/* O logo é o título da página: o H1 que faltava nas páginas dos
          programas, lido pelo Google e pelas IAs no texto alternativo. */}
      <h1 className="m-0">
        <Image
          width={500}
          height={75}
          src={logo}
          alt={titulo}
          className="h-16 object-contain md:object-left"
        />
      </h1>

      <div
        className={`gap-6 ${description.length === 1 ? 'w-full flex justify-between md:w-3/5 md:max-w-[700px]' : 'w-full grid md:grid-cols-2 mt-10'}`}
      >
        {description.map((line, index) => (
          <p
            key={index}
            className={`text-base text-center md:text-left text-label`}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
