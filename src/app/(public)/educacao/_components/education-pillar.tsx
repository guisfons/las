'use client';

import Icon from '@/shared/icon/icon';

type IconName = React.ComponentProps<typeof Icon>['name'];

export default function EducationPillar() {
  const array: { icon: IconName; description: string }[] = [
    {
      icon: 'people',
      description:
        'Criamos trilhas e espaços para médicos e distribuidores aprenderem juntos, trocarem experiências e se conectarem com fabricantes.',
    },
    {
      icon: 'chat',
      description:
        'Estimulamos o debate entre especialistas e apoiamos a produção de artigos científicos ',
    },
    {
      icon: 'microscopes',
      description:
        'Desenvolvemos iniciativas para que os pacientes conheçam melhor os benefícios das tecnologias.',
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl px-6 py-20 mx-auto w-full flex flex-col lg:flex-row gap-10 items-end justify-between">
      <div className="w-full lg:w-1/2 lg:max-w-[455px] flex flex-col">
        <h1 className="font-exo2 w-full max-w-[350px] text-4xl pb-6 font-bold text-[#3B3D63]">
          Educação como Pilar para LAS
        </h1>

        <p className="font-exo2 text-gray-500 text-lg flex-wrap p-0 m-0">
          O conhecimento é a ferramenta mais poderosa que um profissional de
          saúde pode ter - ele salva vidas, transforma carreiras e multiplica o
          impacto positivo no cuidado de cada pessoa.
        </p>

        <p className="font-exo2 text-gray-500 text-lg flex-wrap p-0 m-0">
          Em um setor que evolui constantemente, o aprendizado contínuo não é
          apenas uma vantagem, é uma responsabilidade com quem confia em nosso
          cuidado. Acreditamos que conhecimento compartilhado multiplica
          resultados. Por isso:
        </p>
      </div>

      <div className="w-full lg:w-1/2 lg:max-w-[470px] flex flex-col gap-12">
        {array.map((item, index) => (
          <div key={index} className="flex gap-6">
            <div className="h-max min-w-14 aspect-square rounded-sm bg-[#31a1ff] flex items-center justify-center">
              <Icon name={item.icon} className="text-white" />
            </div>

            <p className="font-exo2 text-gray-500 text-lg flex-wrap p-0 m-0">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
