import Image from 'next/image';
import { cn } from '@/lib/utils';

import { WPPageHomeAcf } from '@/lib/types/pages';

export default function Impact({
  acfData,
}: {
  acfData?: WPPageHomeAcf['impact'];
}) {
  const defaultStatistics = [
    {
      icon: '/batimentos.svg',
      bg: 'bg-[#31A1FF1A]',
      title: 'Anos no mercado',
      number: '18',
    },
    {
      icon: '/dna.svg',
      bg: 'bg-[#7EE0001A]',
      title: 'Itens no portfólio',
      symbol: '+',
      number: '100',
    },
    {
      icon: '/home+.svg',
      bg: 'bg-[#42BD5C1A]',
      title: 'Rede global de fornecedores',
      number: '15',
    },
    {
      icon: '/microscopio.svg',
      bg: 'bg-[#F9D22933]',
      title: 'Médicos capacitados',
      number: '345',
    },
  ];

  const estatistics =
    acfData?.estatistics && acfData.estatistics.length > 0
      ? acfData.estatistics.map((el) => ({
          icon: el.icon?.node?.sourceUrl || '',
          bg: el.bg || 'bg-[#31A1FF1A]',
          title: el.title || '',
          number: el.number || '',
          symbol: el.symbol || '',
        }))
      : defaultStatistics;

  const mainBlock = {
    title: acfData?.mainBlock?.title || 'Vidas Impactadas',
    number: acfData?.mainBlock?.number || '343.503',
    symbol: acfData?.mainBlock?.symbol || 'mil',
    icon: acfData?.mainBlock?.icon?.node?.sourceUrl || '/hearth.svg',
    backgroundImage: acfData?.mainBlock?.backgroundImage?.node?.sourceUrl || '',
  };

  const title = acfData?.title
    ? acfData.title.split('\n')
    : ['Impacto Real na', 'Saúde das Pessoas'];
  const wavesImage = acfData?.wavesImage?.node?.sourceUrl || '/waves.png';

  return (
    <section className="flex flex-col gap-12 p-2">
      <h1 className="font-exo2 text-3xl font-semibold lg:text-4xl text-center">
        {title.map((line, i) => (
          <span key={i}>
            {line}
            {i < title.length - 1 && <br />}
          </span>
        ))}
      </h1>

      <div
        id="left"
        className="flex flex-col lg:flex-row items-center justify-items-center"
      >
        <figure className="m-0 hidden lg:flex p-0 absolute left-0">
          <Image
            width={300}
            height={150}
            src={wavesImage}
            alt=""
            className="w-full h-[50rem] object-cover -mt-28"
          />
        </figure>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6">
          <div
            className="w-full flex justify-start items-end aspect-square rounded-2xl relative bg-center bg-no-repeat bg-cover max-h-[35rem] p-6 sm:p-14"
            style={{
              backgroundImage: mainBlock.backgroundImage
                ? `url(${mainBlock.backgroundImage})`
                : 'url(/runners.png)',
            }}
          >
            <div className="w-full !text-white relative flex flex-col gap-2 md:gap-4">
              <Image
                width={100}
                height={50}
                src={mainBlock.icon}
                alt=""
                className="size-8 md:size-14"
              />

              <p className="text-xl font-bold lg:text-4xl font-exo2">
                {mainBlock.title}
              </p>
              <p className="text-4xl lg:text-7xl font-exo2 font-bold">
                {mainBlock.number}{' '}
                <span className="opacity-60">{mainBlock.symbol}</span>
              </p>
            </div>
          </div>

          <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
            {estatistics.map((el, idx) => {
              return (
                <div
                  className="size-full flex flex-col justify-center items-start border-[#D4D2E3] border border-spacing-2 border-solid rounded-xl p-4 sm:p-6"
                  key={idx}
                >
                  <figure
                    className={cn(
                      'flex flex-col gap-6 rounded-xl items-center justify-center p-3 mb-4',
                      el.bg,
                    )}
                  >
                    <Image
                      width={150}
                      height={75}
                      src={el.icon}
                      alt=""
                      className="size-7 sm:size-11 aspect-square"
                    />
                  </figure>

                  <p className="text-black font-exo2 font-bold text-xs md:text-xl">
                    {el.title}
                  </p>

                  <p className="text-black font-bold text-2xl md:text-4xl font-exo2">
                    {el.number}
                    <span className="opacity-60">{el.symbol}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
