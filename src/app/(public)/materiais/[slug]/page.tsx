import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getMaterialBySlug,
  botoesValidos,
  type Material,
} from '@/lib/api/materiais';
import { generateSeoMetadata } from '@/lib/utils/seo';
import BotoesMaterial from './botoes-material';

interface Props {
  params: { slug: string };
}

/**
 * Página de material rico, no formato link tree.
 *
 * Não há `generateStaticParams` de propósito: a rota é renderizada sob
 * demanda. Uma página criada no WordPress precisa estar no ar na hora de
 * disparar a régua, e esperar um build para isso acontecer tornaria o
 * mecanismo inútil justamente quando ele é usado. O cache do fetch do
 * WPGraphQL é de 60s, então uma edição aparece em até um minuto.
 */

function descricaoDe(material: Material): string {
  const acf = material.materialacf;
  const chamada = acf?.chamada?.replace(/\s+/g, ' ').trim();
  if (chamada) return chamada.slice(0, 160);

  const n = botoesValidos(material).length;
  const evento = acf?.evento ? ` do ${acf.evento}` : '';
  return `Materiais${evento}: ${n} ${n === 1 ? 'item' : 'itens'} para download e consulta.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const material = await getMaterialBySlug(params.slug);
  if (!material) return { title: 'Material não encontrado' };

  const acf = material.materialacf;
  const capa = material.featuredImage?.node?.sourceUrl || undefined;

  const base = generateSeoMetadata(material.seo, {
    // Sem sufixo: o layout raiz já aplica o template '%s | LAS For Life'.
    title: material.title,
    description: descricaoDe(material),
    image: capa,
  });

  // Fora da busca por padrão. Ver o campo "Permitir que o Google indexe esta
  // página", no WordPress: estas páginas são entregues a quem já é da base.
  return acf?.indexar
    ? base
    : {
        ...base,
        robots: { index: false, follow: false },
      };
}

export default async function MaterialPage({ params }: Props) {
  const material = await getMaterialBySlug(params.slug);
  if (!material) notFound();

  const acf = material.materialacf;
  const botoes = botoesValidos(material);
  const paragrafos = (acf?.chamada || '')
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-[70vh] bg-[#f7f7f7]">
      <div className="mx-auto w-full max-w-[720px] px-5 py-14 md:px-6 md:py-20">
        <header className="mb-9 md:mb-11">
          {acf?.evento ? (
            <p className="font-exo2 mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#31A1FF]">
              {acf.evento}
            </p>
          ) : null}

          <h1 className="font-exo2 text-3xl font-bold leading-[1.12] text-[#1a2a5e] md:text-[2.6rem]">
            {material.title}
          </h1>

          {paragrafos.length > 0 ? (
            <div className="mt-5 flex flex-col gap-3">
              {paragrafos.map((p, i) => (
                <p
                  key={i}
                  className="font-exo2 text-base font-light leading-relaxed text-[#7D7D7D] md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          ) : null}
        </header>

        {botoes.length > 0 ? (
          <BotoesMaterial botoes={botoes} pagina={material.slug} />
        ) : (
          /* Página publicada sem nenhum botão preenchido. Dizer isso é melhor
             que entregar uma tela vazia a quem veio de um e-mail. */
          <p className="font-exo2 rounded-xl border border-line bg-white px-5 py-6 text-center text-base font-light text-label">
            Os materiais desta página ainda estão sendo preparados.
          </p>
        )}

        {acf?.rodape ? (
          <p className="font-exo2 mt-9 text-sm font-light leading-relaxed text-label md:mt-11">
            {acf.rodape}
          </p>
        ) : null}
      </div>
    </main>
  );
}
