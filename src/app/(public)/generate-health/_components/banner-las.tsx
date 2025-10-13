'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BannerLas({
  title,
  description,
  link,
  labelLink = 'Saiba Mais',
  imageBanner,
}: {
  title: string;
  description: string[];
  link?: string;
  labelLink?: string;
  imageBanner: string;
}) {
  return (
    <section className="relative size-full">
      <figure className="absolute left-0 top-0 w-full h-full -z-10">
        <Image
          src={imageBanner}
          width={1920}
          height={1080}
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="relative max-w-7xl min-h-[100dvh] mx-auto w-full flex items-center justify-start gap-20 py-24">
        <div className="max-w-[530px]">
          <p className="font-exo2 font-bold text-2xl lg:text-[56px] text-white leading-none">
            {title}
          </p>

          <div className="max-w-[300px] md:max-w-[565px] flex flex-col gap-6 my-6">
            {description.map((item, index) => (
              <p
                key={index}
                className="font-exo2 font-normal text-base text-white"
              >
                {item}
              </p>
            ))}
          </div>

          {link && (
            <Link
              href={link}
              className="w-max z-20 mt-10 flex items-center justify-center gap-1 bg-[#F9D229] text-base font-exo2 text-center font-medium rounded-full px-7 py-2 text-[#000000]"
            >
              {labelLink}
            </Link>
          )}
        </div>
      </div>
    </section>
    // <div className="banner-las">
    //   <div className="banner-las-content">
    //     <div className="banner-las-text">
    //       <h2>{title}</h2>
    //       <p>{description}</p>
    //       <a href={link} target="_blank" rel="noreferrer">
    //         Saiba mais
    //       </a>
    //     </div>
    //     <div
    //       className="banner-las-image"
    //       style={{ backgroundImage: `url(${imageBanner})` }}
    //     ></div>
    //   </div>
    // </div>
  );
}
