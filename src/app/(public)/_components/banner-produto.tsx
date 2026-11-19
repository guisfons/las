import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/shared/icon/icon';

/**
 * Banner de produto da home: texto de verdade e imagem do produto, num layout
 * só que se reorganiza em celular (uma imagem para todas as telas).
 * Linguagem das peças da LAS no Canva: arcos finos verdes, destaque em verde,
 * selo branco "LAS | parceiro", botão amarelo.
 */
export interface BannerProdutoDados {
  tema: 'escuro' | 'claro' | 'navy';
  especialidade: string;
  /** Título com o trecho em destaque entre colchetes: "Texto [destaque]." */
  titulo: string;
  texto: string;
  destaques: string[];
  imagem: { src: string; largura: number; altura: number; alt: string };
  parceiro: { src: string; alt: string; largura: number; altura: number };
  cta: { rotulo: string; url: string; externo?: boolean };
  cta2?: { rotulo: string; url: string; externo?: boolean };
  registro: string;
}

const TEMAS = {
  escuro: {
    fundo:
      'bg-[radial-gradient(120%_90%_at_75%_40%,#3d4a42_0%,#232b26_55%,#161b18_100%)]',
    texto: 'text-white',
    suave: 'text-white/80',
    destaque: 'text-[#8BE000]',
    chip: 'border-white/25 text-white/90 bg-white/5',
    halo: 'bg-[#7EE000]/20',
    cta2: 'border-white/60 text-white hover:bg-white/10',
    rodape: 'text-white/55',
  },
  navy: {
    fundo:
      'bg-[radial-gradient(120%_90%_at_75%_45%,#1f3d63_0%,#10233d_55%,#0a1628_100%)]',
    texto: 'text-white',
    suave: 'text-white/80',
    destaque: 'text-[#8BE000]',
    chip: 'border-white/25 text-white/90 bg-white/5',
    halo: 'bg-[#5DA9E9]/25',
    cta2: 'border-white/60 text-white hover:bg-white/10',
    rodape: 'text-white/55',
  },
  claro: {
    fundo: 'bg-[#F3F3F3]',
    texto: 'text-[#3f3f3f]',
    suave: 'text-[#5b5b5b]',
    destaque: 'text-[#5FA300]',
    chip: 'border-[#3f3f3f]/20 text-[#3f3f3f] bg-white/70',
    halo: 'bg-[#7EE000]/25',
    cta2: 'border-[#3f3f3f]/50 text-[#3f3f3f] hover:bg-black/5',
    rodape: 'text-[#3f3f3f]/55',
  },
} as const;

function Titulo({
  texto,
  classeDestaque,
}: {
  texto: string;
  classeDestaque: string;
}) {
  const partes = texto.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {partes.map((p, i) =>
        p.startsWith('[') ? (
          <span key={i} className={classeDestaque}>
            {p.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function Arcos() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-24 h-[70%] w-[70%] max-w-[900px] opacity-70"
      viewBox="0 0 600 600"
      fill="none"
    >
      <path
        d="M40 0 C 120 260, 380 340, 640 300"
        stroke="#7EE000"
        strokeWidth="2"
      />
      <path
        d="M260 -20 C 300 160, 470 230, 640 210"
        stroke="#42BD5C"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function BannerProduto({
  dados,
  prioridade = false,
}: {
  dados: BannerProdutoDados;
  prioridade?: boolean;
}) {
  const t = TEMAS[dados.tema];
  const link = (c: { url: string; externo?: boolean }) =>
    c.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <div className={`relative h-full w-full overflow-hidden ${t.fundo}`}>
      <Arcos />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[55%] w-[55%] opacity-50"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M-40 420 C 160 360, 360 470, 640 640"
          stroke="#7EE000"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr] items-center gap-4 px-6 pb-14 pt-8 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:grid-rows-1 lg:gap-10 lg:pb-12 lg:pt-0">
        {/* Texto */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-6">
          <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm">
            <Image
              src="/logo.svg"
              alt="LAS"
              width={72}
              height={28}
              className="h-5 w-auto sm:h-6"
            />
            <span className="h-5 w-px bg-[#3f3f3f]/25 sm:h-6" />
            <Image
              src={dados.parceiro.src}
              alt={dados.parceiro.alt}
              width={dados.parceiro.largura}
              height={dados.parceiro.altura}
              className="h-5 w-auto sm:h-6"
            />
          </div>

          <p
            className={`font-exo2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${t.destaque}`}
          >
            {dados.especialidade}
          </p>

          <h2
            className={`font-exo2 font-bold leading-[1.08] ${t.texto} text-[clamp(1.75rem,6.4vw,2.4rem)] lg:text-[clamp(2.5rem,3.9vw,3.75rem)]`}
            style={{ textWrap: 'balance' }}
          >
            <Titulo texto={dados.titulo} classeDestaque={t.destaque} />
          </h2>

          <p
            className={`max-w-xl font-exo2 text-[0.95rem] leading-snug sm:text-lg lg:text-xl ${t.suave}`}
          >
            {dados.texto}
          </p>

          <ul className="hidden flex-wrap gap-2 sm:flex">
            {dados.destaques.map((d) => (
              <li
                key={d}
                className={`rounded-full border px-3 py-1.5 font-exo2 text-sm ${t.chip}`}
              >
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-1 hidden flex-wrap items-center gap-3 lg:flex">
            <Link
              href={dados.cta.url}
              {...link(dados.cta)}
              className="flex items-center gap-1 rounded-full bg-[#F9D229] px-6 py-3 font-exo2 text-base font-medium text-black transition-colors hover:bg-[#f1c400]"
            >
              {dados.cta.rotulo} <Icon name="arrow_right" />
            </Link>
            {dados.cta2 && (
              <Link
                href={dados.cta2.url}
                {...link(dados.cta2)}
                className={`rounded-full border px-6 py-3 font-exo2 text-base font-medium transition-colors ${t.cta2}`}
              >
                {dados.cta2.rotulo}
              </Link>
            )}
          </div>

          <p className={`hidden font-exo2 text-xs lg:block ${t.rodape}`}>
            {dados.registro}
          </p>
        </div>

        {/* Produto */}
        <div className="relative flex h-full min-h-0 flex-col items-center justify-center gap-4">
          <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
            <div
              className={`absolute aspect-square w-[70%] max-w-[520px] rounded-full blur-3xl ${t.halo}`}
            />
            <Image
              src={dados.imagem.src}
              alt={dados.imagem.alt}
              width={dados.imagem.largura}
              height={dados.imagem.altura}
              priority={prioridade}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="relative max-h-full w-auto max-w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.25)] lg:max-h-[72%]"
            />
          </div>

          {/* Celular: botões embaixo da imagem */}
          <div className="flex w-full flex-col items-center gap-2 lg:hidden">
            <Link
              href={dados.cta.url}
              {...link(dados.cta)}
              className="flex w-full max-w-sm items-center justify-center gap-1 rounded-full bg-[#F9D229] px-6 py-3 font-exo2 text-base font-medium text-black"
            >
              {dados.cta.rotulo} <Icon name="arrow_right" />
            </Link>
            {dados.cta2 && (
              <Link
                href={dados.cta2.url}
                {...link(dados.cta2)}
                className={`w-full max-w-sm rounded-full border px-6 py-2.5 text-center font-exo2 text-sm font-medium ${t.cta2}`}
              >
                {dados.cta2.rotulo}
              </Link>
            )}
            <p className={`font-exo2 text-[11px] ${t.rodape}`}>
              {dados.registro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
