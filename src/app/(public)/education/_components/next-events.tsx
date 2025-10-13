import { cn } from '@/lib/utils';
import Image from 'next/image';
import Icon from '@/shared/icon/icon';
import { EVENTS } from '../../../../../public/mocks/events';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events() {
  const btns = [
    {
      title: 'Todos',
    },
    {
      title: 'Cabeça e Pescoço',
    },
    {
      title: 'Coluna',
    },
    {
      title: 'Ginecologia',
    },
    {
      title: 'Ortopedia',
    },
  ];

  const events = EVENTS;

  const [filter, setFilter] = useState('Todos');

  // Animações para os cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -30,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <>
      <section
        id="nextEvent"
        className="w-full max-w-7xl px-6 pt-20 mx-auto flex flex-col gap-6 py-12"
      >
        <h1 className="font-exo2 text-2xl md:text-5xl">
          <strong>Próximos Eventos</strong>
        </h1>

        <div
          id="btns"
          className="flex gap-3 md:gap-7 whitespace-nowrap flex-wrap"
        >
          {btns.map((el, idx) => {
            return (
              <button
                key={idx}
                className={cn(
                  'py-1 md:py-2 px-2 md:px-8 bg-[#F0F0F0] rounded-full shrink-0 font-exo2 transition-all !text-sm md:!text-lg',
                  { 'bg-[#31A1FF] text-white': filter === el.title },
                )}
                onClick={() => setFilter(el.title)}
              >
                {el.title}
              </button>
            );
          })}
        </div>

        <div
          id="grid_events"
          className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-8"
        >
          <AnimatePresence>
            {events
              .filter((obj) => obj.type.includes(filter))
              .map((el) => {
                return (
                  <motion.figure
                    key={`${el.event}-${el.date_number}`} // Key única baseada no evento
                    className="flex flex-col"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                  >
                    {el.img && (
                      <Image
                        width={450}
                        height={300}
                        alt=""
                        src={el.img}
                        className="w-full bg-black/40 rounded-3xl"
                      />
                    )}
                    {!el.img && (
                      <div className="relative">
                        <div className="absolute w-full h-full p-4 bg-gradient-to-r from-gray-500 to-gray-200 opacity-60 rounded-3xl"></div>
                        <Image
                          width={450}
                          height={300}
                          alt=""
                          src={'/events/evento-logo.png'}
                          className="w-full rounded-3xl"
                        />
                      </div>
                    )}

                    <div className="absolute flex flex-col px-4 py-3">
                      <span className="font-exo2 text-white text-4xl lg:text-6xl">
                        <strong>{el.date_number}</strong>
                      </span>

                      <span className="font-exo2 text-white text-lg">
                        {el.month}
                      </span>
                    </div>

                    <div className="flex flex-col gap-4 mt-5">
                      <h1 className="font-exo2 text-2xl">
                        <strong>{el.event}</strong>
                      </h1>

                      {el.local && (
                        <p className="flex gap-2 items-start text-lg font-exo2">
                          <Icon
                            name="local"
                            className="size-3 mt-[6px] text-[#31A1FF]"
                          />{' '}
                          {el.local}
                        </p>
                      )}

                      {/* <strong className="font-exo2 font-bold text-lg flex items-center gap-3">
                      Inscreva-se <Icon name="arrow_right" />
                    </strong> */}
                    </div>
                  </motion.figure>
                );
              })}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
