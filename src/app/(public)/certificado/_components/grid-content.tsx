'use client';

import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';

// 1. Importe o tipo dinamicamente das props do componente Icon
type IconName = React.ComponentProps<typeof Icon>['name'];

export default function GridContent() {
  // 2. Aplique o tipo 'IconName' à propriedade 'icon' do seu array
  const array: { icon: IconName; label: string }[] = [
    {
      icon: 'health',
      label: 'Dispositivos médicos',
    },
    {
      icon: 'dna',
      label: 'Medicina regenerativa',
    },
    {
      icon: 'doctor',
      label: 'Soluções para tratamentos não invasivos',
    },
    {
      icon: 'heartbeats',
      label: 'Tecnologias para otimização e segurança do centro cirúrgico',
    },
  ];

  return (
    <section
      className={cn(
        'relative max-w-7xl mx-auto w-full flex items-center justify-between gap-20 py-24 px-6',
      )}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <p className={cn('font-exo2 font-bold text-center text-4xl')}>
          Como fazemos isso hoje
        </p>

        <p className="font-exo2 mt-6 text-lg text-center text-label max-w-[580px]">
          Nosso portfólio é desenvolvido para atender às necessidades reais dos
          médicos e seus pacientes, com excelência nas áreas de:
        </p>

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {array.map((item, index) => (
            <div
              key={index}
              className="sm:min-h-52 border border-solid border-[#73cc00] rounded-lg p-6"
            >
              <div className="w-max flex-shrink-0 rounded-sm bg-[#dcf2bf] p-2">
                {/* Agora está 100% correto e sem erros de tipo */}
                <Icon name={item.icon} className="text-[#7EE000]" />
              </div>
              <div className="flex-1 mt-4">
                <p className="font-exo2 text-xl lg:text-3xl font-bold">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
