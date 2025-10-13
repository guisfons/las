/* eslint-disable prettier/prettier */
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center flex-wrap">
      <Image
        width={350}
        height={982}
        alt="hero image mask"
        src={'/images/landingpage/hero-image-mask.svg'}
        className="absolute right-0 top-0 h-full object-right object-cover z-10 hidden md:block"
      ></Image>

      <div
        id="AboutUs"
        className="relative z-20 max-w-7xl px-6 pt-20 mx-auto w-full flex flex-col md:flex-row items-center md:items-start md:justify-between"
      >
        <div className="w-full flex flex-col gap-5 mb-10">
          <Image
            width={51}
            height={51}
            alt="hero image mask"
            src={'/images/landingpage/logo-las.svg'}
            className="w-12 object-contain"
          ></Image>

          <p className="w-full max-w-md font-exo2 font-semibold text-2xl md:text-4xl text-black">
            Transformando a Indústria da Doença em Indústria da Saúde
          </p>

          <p className="w-full max-w-md font-exo2 text-[#9494A1] text-sm md:text-lg font-light">
            Acreditamos que a saúde começa com uma escolha: colocar as pessoas
            no centro. <br />
            <br />O{' '}
            <strong className="font-semibold !text-black">
              Movimento LAS FOR LIFE
            </strong>{' '}
            nasce dessa convicção. Mais do que revender produtos médicos,
            queremos redesenhar o papel da indústria no cuidado com a vida.{' '}
            <br />
            <br />
            Vamos juntos ativar essa mudança? O futuro da saúde já começou — e
            ele é mais humano, mais conectado e transformador.
          </p>
        </div>

        <Image
          width={747}
          height={747}
          alt="hero image mask"
          src={'/images/landingpage/human-connection-mask.png'}
          className="w-11/12 md:w-1/2 max-w-2xl object-contain"
        ></Image>
      </div>

      <div
        id="WaysToTransformHealth"
        className="relative z-20 pt-[99px]  max-w-[613px] w-full flex flex-col justify-center items-center gap-4 py-14"
      >
        <p className="font-exo2 text-black font-semibold text-2xl md:text-4xl text-center">
          Caminhos para transformar a saúde
        </p>

        <p className=" font-exo2 text-[#9494A1] font-normal text-sm md:text-lg text-center">
          Atuamos em diferentes frentes para gerar impacto — da prevenção ao
          cuidado, da educação à colaboração.
        </p>
      </div>
    </section>
  );
}
