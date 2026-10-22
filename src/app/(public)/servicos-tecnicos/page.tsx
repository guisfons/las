import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/api/pages';
import { generateSeoMetadata } from '@/lib/utils/seo';
import ServicosTecnicosClient from './servicos-tecnicos-client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('servicos-tecnicos');
  return generateSeoMetadata(pageData?.seo, {
    title: 'Serviços técnicos: manutenção e calibração de equipamentos',
    description:
      'Manutenção preventiva e corretiva, certificado de calibração e segurança elétrica e apoio ao cliente para os equipamentos médicos fornecidos pela LAS FOR LIFE. Solicite pelo formulário.',
    forcar: true,
  });
}

export default async function ServicosTecnicosPage() {
  const pageData = await getPageBySlug('servicos-tecnicos');
  return <ServicosTecnicosClient pageData={pageData} />;
}
