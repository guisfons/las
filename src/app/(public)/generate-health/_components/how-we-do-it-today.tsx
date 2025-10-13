'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function HowWeDoItToday({
  banner,
  title,
  logo,
  description,
  link,
  classNameTitle,
  reverse = false,
}: {
  banner: string;
  title?: string;
  logo?: string;
  description: string[];
  link?: string;
  classNameTitle?: string;
  reverse?: boolean;
}) {
  return (
    <section
      className={cn(
        'relative max-w-7xl mx-auto w-full flex items-center justify-between gap-20 py-24 px-6',
        { 'flex-col-reverse md:flex-row-reverse': reverse },
        { 'flex-col md:flex-row': !reverse },
      )}
    >
      <Image
        src={banner}
        width={1440}
        height={774}
        alt="line"
        className="w-11/12 md:w-2/5 max-w-96 md:max-w-[555px] aspect-square rounded-3xl h-auto object-cover"
      />

      <div className="flex flex-col max-w-lg">
        {logo && (
          <Image
            src={logo}
            width={280}
            height={56}
            alt="line"
            className="h-14"
          />
        )}

        {title && (
          <p className={cn('font-exo2 font-bold text-4xl', classNameTitle)}>
            {title}
          </p>
        )}

        <div className="flex flex-col gap-6">
          {description.map((item, index) => (
            <p key={index} className="font-exo2 mt-6 text-lg text-label">
              {item}
            </p>
          ))}
        </div>

        {link && (
          <Link
            href={link}
            className="w-max z-20 flex items-center justify-center mt-10 gap-1 bg-[#F9D229] text-base font-exo2 text-center font-medium rounded-full px-7 py-2 text-[#000000]"
          >
            Saiba Mais
          </Link>
        )}
      </div>
    </section>
  );
}
