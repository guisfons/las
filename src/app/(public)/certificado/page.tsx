import { getPageBySlug } from '@/lib/api/pages';
import CertificadoForm from './_components/form';

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
