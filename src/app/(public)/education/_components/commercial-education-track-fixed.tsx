'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CommercialEducationTrack() {
  const timelane = [
    {
      logo: '/salesmeeting.png',
      title: '',
      description: '',
    },
    {
      logo: '',
      title: 'Pilar de Estratégia',
      description: 'Mercado x Performance Ações & Objetivos',
    },
    {
      logo: '',
      title: 'Pilar de Execução',
      description: 'Treinamento Comercial Apoio ao Sell Out',
    },
    {
      logo: '',
      title: 'Pilar de Relacionamento',
      description: 'Principais KOLs Ações Regionais',
    },
    {
      logo: '',
      title: 'Conclusão',
      description: 'Boa medicina é um bom negócio!',
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calcula qual passo está ativo baseado no progresso
  const getActiveStep = (progress: number) => {
    const totalSteps = timelane.length;
    const stepProgress = progress * totalSteps;
    return Math.floor(stepProgress);
  };

  const activeStep = getActiveStep(scrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calcula quando a seção começa a entrar na tela (mais cedo)
      const startPosition = rect.top + window.scrollY - windowHeight * 0.01;
      // Calcula quando a seção termina de sair da tela
      const endPosition =
        rect.top + window.scrollY + sectionHeight - windowHeight * 0.3;

      const currentScroll = window.scrollY + windowHeight / 2;

      // Calcula o progresso (0 a 1)
      let progress = 0.18;
      if (currentScroll >= startPosition && currentScroll <= endPosition) {
        progress =
          (currentScroll - startPosition) / (endPosition - startPosition);
        progress = Math.max(0.18, Math.min(1, progress));
      } else if (currentScroll > endPosition) {
        progress = 1;
      }

      // Garante que sempre tenha um valor mínimo visível quando a seção estiver na tela
      if (rect.top < windowHeight && rect.bottom > 0) {
        progress = Math.max(0.03, progress);
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama uma vez para definir o estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 max-w-7xl px-6 py-20 mx-auto w-full flex flex-col gap-2 items-center justify-between"
    >
      <h1 className="font-exo2 w-full mr-auto text-4xl pb-6 font-bold text-[#3B3D63]">
        Trilha de <br /> Educação Comercial
      </h1>

      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute w-[8px] h-full rounded-xl bg-[#c2e3ff]">
          <div
            className="absolute top-0 left-0 w-[8px] h-52 rounded-xl bg-[#31a1ff] transition-all duration-100 ease-out"
            style={{
              top: `calc(${scrollProgress * 100}% - 208px)`,
              maxHeight: '100%',
            }}
          ></div>
        </div>

        {timelane.map((item, index) => (
          <div
            key={index}
            className={cn('w-max flex flex-col gap-4 py-4', {
              'ml-80 items-start': index % 2 === 0,
              'mr-80 items-end': index % 2 !== 0,
            })}
          >
            <p className="bg-[#31a1ff] font-exo2 text-white rounded-full w-8 md:w-12 h-8 md:h-12 text-xl md:text-4xl flex items-center justify-center text-center">
              {index + 1}
            </p>
            <p
              className="font-exo2 text-xl md:text-4xl text-[#3B3D63] font-bold transition-opacity duration-300"
              style={{ opacity: index <= activeStep ? 1 : 0.3 }}
            >
              Passo 0{index + 1}
            </p>
            {item.logo && (
              <Image
                width={248}
                height={28}
                src={item.logo}
                alt={item.title}
                className="w-32 md:w-60 object-contain transition-opacity duration-300"
                style={{ opacity: index <= activeStep ? 1 : 0.3 }}
              />
            )}
            {item.title && (
              <div
                className={cn(
                  'w-max flex flex-col transition-opacity duration-300',
                  {
                    'items-start text-start': index % 2 === 0,
                    'items-end text-end': index % 2 !== 0,
                  },
                )}
                style={{ opacity: index <= activeStep ? 1 : 0.3 }}
              >
                <h2 className="font-exo2 font-semibold text-sm md:text-2xl text-[#3B3D63]">
                  {item.title}
                </h2>
                <p className="font-exo2 max-w-[200px] text-[10px] md:text-lg font-light text-[#3B3D63]">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
