'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Icon from '@/shared/icon/icon';

export default function ForHealth() {
  const options = [
    {
      label: 'Gerar Saúde',
      background: 'bg-[#F9D229]',
      image: 'bg-createHealth',
      text: 'Queremos transformar a saúde em algo cotidiano, começando por nós: colaboradores podem usar a primeira hora do expediente para se exercitar e incentivamos participação em corridas beneficentes. Apoiamos programas sociais com parte do nosso lucro e patrocinamos um time de handball para crianças sem condições financeiras.',
      link: '/generate-health',
    },
    {
      label: 'Tratar Doença',
      background: 'bg-[#7EE000]',
      image: 'bg-treatDesease',
      text: 'Trazemos ao Brasil as melhores tecnologias e soluções médicas do mundo, para que médicos tenham acesso ao que há de mais eficaz para cuidar de seus pacientes.',
      link: '/treating-disease',
    },
    {
      label: `Desenvolver Tecnologia <br/>e Inovação`,
      background: 'bg-[#42BD5C]',
      image: 'bg-createTecnology',
      text: 'Estamos no processo de abrir nossa própria fábrica. Queremos desenvolver produtos e materiais que complementem a nossa cadeia. Inovação não é necessariamente sobre fazer o novo, é sobre fazer a diferença na ponta.',
      link: '',
    },
    {
      label: 'Articular o Ecossistema',
      background: 'bg-[#00B5C8]',
      image: 'bg-articulatedEcosystem',
      text: 'Unimos diferentes agentes do setor para pensar, cocriar e construir um sistema de saúde mais eficiente, acessível e integrado.',
      link: '/articulate-the-ecosystem',
    },
    {
      label: 'Promover Educação',
      background: 'bg-[#0072ac]',
      image: 'bg-promoteEducation',
      text: 'Acreditamos no poder do conhecimento. Criamos espaços de troca entre médicos, distribuidores e fabricantes - e também levamos informação para os pacientes.',
      link: '/education',
    },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % options.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [options.length, isHovering]);

  return (
    <section className="relative max-w-8xl mx-auto flex items-center flex-col lg:flex-row justify-center overflow-hidden">
      {options.map((el, idx) => {
        return (
          <button
            key={idx}
            className={cn(
              `w-full lg:w-max relative h-full min-w-10 cursor-pointer transition-all duration-300 ease-in-out ${el.background}`,
              idx === activeItem
                ? `flex-grow ${el.image} bg-no-repeat bg-top bg-cover`
                : '',
            )}
            onClick={() => {
              setActiveItem(idx);
              setIsHovering(true);
            }}
          >
            <div className={cn('h-full w-full object-cover')}>
              <div
                className={cn(
                  'size-full py-2 px-6 lg:p-10 flex items-end justify-between flex-col lg:items-end lg:flex-row',
                  {
                    'backdrop-brightness-[0.7] gap-12 lg:gap-0':
                      idx === activeItem,
                  },
                )}
              >
                <div className="relative w-full lg:w-max lg:h-[70vh] lg:max-h-[533px] flex flex-col justify-between items-center">
                  <div className="flex-1 w-full lg:size-4 flex items-end justify-center">
                    <p
                      className={cn(
                        'w-full lg:min-w-[400px] flex items-center font-exo2 font-normal text-black lg:-rotate-90 text-left lg:origin-center lg:mb-44 text-xl lg:text-4xl whitespace-nowrap',
                        {
                          'text-white': idx === activeItem,
                        },
                      )}
                    >
                      <span className="flex flex-col items-center font-exo2 font-light text-5xl mr-6 lg:mr-10">
                        {idx === activeItem ? '-' : '+'}
                      </span>{' '}
                      <div dangerouslySetInnerHTML={{ __html: el.label }}></div>
                    </p>
                  </div>
                </div>

                <motion.div
                  viewport={{ once: true }}
                  // animate={{
                  //   width: idx !== activeItem ? '1%' : 'calc(100%)',
                  // }}
                  transition={{ type: 'spring', stiffness: 40, damping: 80 }}
                  className="transition-all overflow-hidden lg:pl-6"
                >
                  {idx === activeItem && (
                    <div
                      className={cn(
                        'w-px h-full flex flex-col gap-20 overflow-hidden',
                        {
                          'w-full': idx === activeItem,
                        },
                      )}
                    >
                      <div
                        className={cn(
                          'w-px mx-auto lg:max-w-[776px] flex flex-col gap-6 !overflow-hidden',
                          {
                            'w-full lg:w-10/12 pb-4': idx === activeItem,
                          },
                        )}
                      >
                        <p className="min-h-max md:min-h-52 flex items-end lg:items-end lg:min-h-max font-exo2 text-white text-xs md:text-base text-left line-clamp-6">
                          {el.text}
                        </p>

                        {el.link && (
                          <Link
                            href={el.link}
                            className="font-bold font-exo2 text-white flex text-base items-center gap-1"
                          >
                            Saiba Mais
                            <Icon
                              name="arrow_right"
                              className="font-bold size-4 ml-1 text-main transition-all duration-300 ease-in-out group-hover:translate-x-0.5"
                            ></Icon>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
}
