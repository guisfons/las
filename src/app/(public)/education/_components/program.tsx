import Image from 'next/image';

export default function Program() {
  return (
    <section className="bg-programEducation bg-no-repeat bg-top bg-cover">
      <div className="w-full max-w-7xl px-6 pt-20 mx-auto flex items-center justify-between gap-10 py-10">
        <div id="left" className="flex flex-col gap-6 w-11/12 md:max-w-md">
          <Image
            src={'/las-academy.png'}
            width={300}
            height={50}
            alt="LAS Academy"
            className="w-full max-w-72 object-contain"
          />

          <p className="font-exo2 font-light text-lg text-white">
            A LASacademy é focada em suprir as necessidades educacionais,
            científicas, de inovação e produtos no mercado de dispositivos
            médicos: Fomentamos o conhecimento, a aprendizagem e geramos valor
            para os diversos interessados da cadeia da saúde (médicos,
            pacientes, distribuidores, planos de saúde e hospitais, em todo
            território nacional) através de ensinamentos e discussões.
          </p>

          {/* <Link
            href={'/#Contact'}
            className="ml-8 text-center md:ml-8 lg:ml-8 font-exo2 p-3 rounded-full text-white bg-[#31A1FF] w-40"
          >
            Saiba Mais
          </Link> */}
        </div>

        <figure id="right" className="w-1/2 max-w-3xl hidden md:block">
          <Image
            src={'/images/education/gridEducation.png'}
            width={760}
            height={500}
            alt="Grid Education"
            className="w-full object-contain"
          ></Image>
        </figure>
      </div>
    </section>
  );
}
