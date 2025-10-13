import { cn } from '@/lib/utils';
// import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import Link from 'next/link';

export default function CardLas({
  title,
  description,
  grid,
}: {
  title: string;
  description: string;
  grid: { logo: string; picture: string; description: string; link: string }[];
}) {
  return (
    <section
      id="Initiatives"
      className="relative w-full flex items-center justify-center flex-wrap"
    >
      <div className="relative z-20 max-w-7xl px-6 py-20 mx-auto w-full flex flex-col gap-10 items-center">
        <div className="flex flex-col">
          <h1 className="font-exo2 text-2xl text-center md:text-3xl pb-6">
            <strong> {title} </strong>
          </h1>

          <span className="font-exo2 text-gray-500 text-center text-lg flex-wrap p-0 m-0">
            {description}
          </span>
        </div>

        <div className="w-full h-full grid md:grid-cols-2 gap-9">
          {grid.map((el, idx) => {
            return (
              <Link
                href={el.link || ''}
                key={idx}
                className={cn(
                  'aspect-square relative w-full m-0 p-0 flex flex-col items-center justify-center rounded-2xl overflow-hidden',
                )}
                style={{
                  backgroundImage: `url(${el.picture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="relative z-20 size-full flex bg-degrade-dows-up flex-col justify-end items-center gap-6 text-white text-center p-4 md:pb-12">
                  <Image
                    width={600}
                    height={300}
                    src={el.logo}
                    alt=""
                    className="w-full max-h-8 object-contain"
                  />

                  <p className="w-11/12 md:w-10/12 font-exo2 text-xs md:text-base">
                    {el.description}
                  </p>

                  {/* <a
                    href=""
                    className="font-exo2 flex items-center gap-3 text-white underline text-xs md:text-base"
                  >
                    Saiba Mais <Icon name="arrow_right" />
                  </a> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
