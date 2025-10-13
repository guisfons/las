import Image from 'next/image';

export default function TechnicalHero() {
  return (
    <section className="relative w-full h-dvh bg-technicalBanner sm:bg-technicalBanner bg-no-repeat bg-top bg-cover flex items-center justify-center flex-col">
      <Image
        src={'/images/education/line-hero-education.png'}
        width={1440}
        height={774}
        alt="line"
        className="hidden sm:flex absolute top-0 w-full h-auto object-cover"
      />

      <div className="flex items-center justify-center flex-col">
        <p className="font-exo2 font-bold text-2xl lg:text-[56px] text-white text-center">
          Serviços Técnicos
        </p>

        <p className="max-w-[300px] md:max-w-[565px] font-exo2 font-normal text-base text-center text-white mt-10 mb-10">
          ENa LAS Brasil, entendemos que a excelência nos serviços técnicos é
          fundamental para a qualidade e desempenho dos equipamentos médicos.
          Nossa missão é garantir que as tecnologias médicas fornecidas através
          da LAS operem com eficiência e segurança, proporcionando o suporte
          necessário para que você possa focar no que realmente importa: o
          cuidado ao paciente.
        </p>
      </div>
    </section>
  );
}
