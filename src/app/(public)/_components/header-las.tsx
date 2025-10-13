'use client';

import Image from 'next/image';

export default function HeaderLas({
  logo,
  description,
}: {
  logo: string;
  description: string[];
}) {
  return (
    <section
      className={`relative max-w-7xl mx-auto flex overflow-hidden py-16 px-6 ${description.length > 1 ? 'flex-col !pb-0' : 'flex-col gap-6 md:flex-row items-center justify-center md:justify-between'}`}
    >
      <Image
        width={500}
        height={75}
        src={logo}
        alt="Logo"
        className="h-16 object-contain md:object-left"
      />

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
