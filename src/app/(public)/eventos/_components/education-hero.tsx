import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import Link from 'next/link';

export default function EducationBanner() {
  return (
    <section className="relative w-full h-dvh bg-bannerEducationMobile sm:bg-bannerEducation bg-no-repeat bg-top bg-cover flex items-center justify-center flex-col">
      <Image
        src={'/images/education/line-hero-education.png'}
        width={1440}
        height={774}
        alt="line"
        className="hidden sm:flex absolute top-0 w-full h-auto object-cover"
      />
      <Image
        src={'/images/education/lines-mobile-education.png'}
        width={1440}
        height={774}
        alt="line"
        className="flex sm:hidden absolute top-0 w-full h-auto object-cover"
      />

      <div className="flex items-center justify-center flex-col">
        <p className="font-exo2 font-bold text-2xl lg:text-[56px] text-white text-center">
          Promover Educação
        </p>

        <p className="max-w-[300px] md:max-w-[565px] font-exo2 font-normal text-base text-center text-white mt-10 mb-10">
          Educamos para transformar. Por meio de conteúdos relevantes e <br />
          experiências de aprendizado, fortalecemos quem atua na saúde e <br />
          ampliamos possibilidades de crescimento para todo o ecossistema.
        </p>

        <Link
          href={'/education#Initiatives'}
          className="min-w-max z-20 flex items-center justify-center gap-1 bg-white text-base font-exo2 text-center font-medium rounded-full px-7 py-2 text-[#000000]"
        >
          Faça Parte <Icon name="arrow_right"></Icon>
        </Link>
      </div>
    </section>
  );
}
