'use client';

import { Check } from 'lucide-react';

export default function WhatAreTechnicalForms() {
  const array = [
    {
      title: 'Manutenção Preventiva',
      description:
        'Realização de inspeções periódicas, calibrações e testes de segurança elétrica e ajustes para evitar falhas e garantir o funcionamento.',
    },
    {
      title: 'Manutenção Corretiva',
      description:
        'Diagnóstico e reparo de equipamentos com problemas, minimizando o tempo de inatividade e assegurando a eficácia dos procedimentos.',
    },
    {
      title: 'Apoio ao Cliente',
      description:
        'Ficou com alguma dúvida sobre o funcionamento do equipamento? Entre em contato que nossa equipe pode te ajudar.',
    },
  ];

  return (
    <section id="Contact" className="relative overflow-hidden">
      <div className="max-w-7xl px-6 py-20 mx-auto flex flex-col items-center justify-center">
        <p className="font-exo2 max-w-[525px] text-center leading-10 font-bold mb-4 text-2xl md:text-[44px] text-black">
          O que são os Serviços Técnicos?
        </p>

        <div className="w-full grid lg:grid-cols-3 gap-8 mt-10">
          {array.map((item, index) => (
            <div
              key={index}
              className="p-5 pb-6 border border-[#42BD5C] rounded-2xl"
            >
              <div className="aspect-square w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-[#cfeed6]">
                <Check className="w-6 h-6 text-[#42BD5C]" />
              </div>
              <p className="w-1/2 font-exo2 font-bold text-[28px] text-[#000000] mb-4">
                {item.title}
              </p>

              <p className="font-exo2 font-light text-base text-[#9494a1]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
