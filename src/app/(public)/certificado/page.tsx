import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import CertificadoForm from './_components/form';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('certificado');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Consulta de Certificado | LAS For Life',
    description: 'Consulte o certificado dos produtos LAS For Life.',
  });
}

export default async function Home() {
  const pageData = await getPageBySlug('certificado');
  const acfData = pageData?.pageGeneric;
  const headerTitle = acfData?.headerTitle || 'Consulta de Certificado';

  return (
    <>
      <section className="flex-col relative w-full h-dvh flex items-center justify-center bg-bannerHeroMobile md:bg-BannerHeroWeb bg-no-repeat bg-top bg-cover px-1">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {headerTitle}
        </h1>

        <CertificadoForm />
      </section>
    </>
  );
}
