import { Metadata } from 'next';
import Footer from '@/components/footer';
import BudgetForm from './_components/form';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('solicitar-orcamento');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Solicitar Orçamento | LAS For Life',
    description:
      'Solicite um orçamento personalizado para sua região e especialidade com a LAS For Life.',
  });
}

export default async function Home() {
  const pageData = await getPageBySlug('solicitar-orcamento');
  const acfData = pageData?.pageGeneric;

  const headerTitle = acfData?.headerTitle || 'Solicite um Orçamento';
  const headerDescription =
    acfData?.headerDescription ||
    'Nossa equipe especializada está pronta para entender suas necessidades e apresentar como nossos produtos podem agregar valor ao seu trabalho. Preencha o formulário abaixo e construiremos juntos uma proposta personalizada para sua região e especialidade.';
  const formAction =
    acfData?.formAction || 'https://formsubmit.co/m.sousa@lasforlife.com.br';

  return (
    <>
      <section className="w-full max-w-7xl px-3 pt-36 mx-auto flex flex-col gap-6 py-12">
        <header className="flex flex-col gap-6">
          <h1 className="max-w-60 md:max-w-full mx-auto font-exo2 text-2xl md:text-4xl font-bold text-center">
            {headerTitle}
          </h1>
          <p className="max-w-2xl w-11/12 mx-auto font-exo2 text-lg text-label text-center whitespace-pre-line">
            {headerDescription}
          </p>
        </header>

        <BudgetForm formAction={formAction} />
      </section>
      <Footer />
    </>
  );
}
