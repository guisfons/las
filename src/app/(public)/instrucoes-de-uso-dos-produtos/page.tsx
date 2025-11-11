'use client';

import Footer from '@/components/footer';
import { Button } from '@/components/ui';

// Array de produtos
const products = [
  {
    brand: "ACF Medical",
    name: "Lâminas Cirúrgicas ACF",
    anvisa: "80517190022",
    fileUrl: "#",
  },
  {
    brand: "ACF Medical",
    name: "Lâminas para Serra Cirúrgica",
    anvisa: "80517199006",
    fileUrl: "#",
  },
  {
    brand: "ACF Medical",
    name: "Sistema de Ferramenta Elétrica Cirúrgica",
    anvisa: "80517199007",
    fileUrl: "#",
  },
  {
    brand: "CellColt MDL",
    name: "Kit Cirúrgico CellColt",
    anvisa: "80517199005",
    fileUrl: "#",
  },
  {
    brand: "CellColt Care",
    name: "CellColt Care",
    anvisa: "80517199008",
    fileUrl: "#",
  },
  {
    brand: "CellHarvest",
    name: "CellHarvest",
    anvisa: "80517199011",
    fileUrl: "#",
  },
  {
    brand: "EasyCore Hip",
    name: "EasyCore Hip",
    anvisa: "80517190016",
    fileUrl: "#",
  },
  {
    brand: "EasyCore Hip",
    name: "Lâmina expansível descartável EasyCore Hip",
    anvisa: "80517199001",
    fileUrl: "#",
  },
  {
    brand: "EasyCore Hip",
    name: "Kit Cânula Para Necrose Avascular Do Quadril",
    anvisa: "10243070088",
    fileUrl: "#",
  },
  {
    brand: "EasyFill",
    name: "Kit Descartável Para Osteocondroplastia De Joelho Macom",
    anvisa: "10243070056",
    fileUrl: "#",
  },
  {
    brand: "EasyFill",
    name: "Kit Descartável De Osteocondroplastia Para Pequenas Articulações Macom – Easy Fill Small Joints",
    anvisa: "10243079008",
    fileUrl: "#",
  },
  {
    brand: "Fziomed",
    name: "Dynavisc",
    anvisa: "80517190037",
    fileUrl: "#",
  },
  {
    brand: "Fziomed",
    name: "Interpose",
    anvisa: "80517190034",
    fileUrl: "#",
  },
  {
    brand: "Fziomed",
    name: "Oxiplex/AP",
    anvisa: "80517190041",
    fileUrl: "#",
  },
  {
    brand: "Fziomed",
    name: "Oxiplex/IU",
    anvisa: "80517190040",
    fileUrl: "#",
  },
  {
    brand: "MedEnvision",
    name: "Retrator de Acesso Cirúrgico – GRIPPER",
    anvisa: "80517190032",
    fileUrl: "#",
  },
  {
    brand: "MedEnvision",
    name: "Afastadores Cirúrgicos MedEnvision",
    anvisa: "80517190039",
    fileUrl: "#",
  },
  {
    brand: "MedEnvision",
    name: "EsySuit",
    anvisa: "80517190042",
    fileUrl: "#",
  },
  {
    brand: "Medigraft",
    name: "Kit Medigraft e Max",
    anvisa: "80517199010",
    fileUrl: "#",
  },
  {
    brand: "Neurosign",
    name: "Probe Estéril para Neurosign",
    anvisa: "80517190004",
    fileUrl: "#",
  },
  {
    brand: "Neurosign",
    name: "Eletrodo de Laringe",
    anvisa: "80517190005",
    fileUrl: "#",
  },
  {
    brand: "Neurosign",
    name: "Eletrodo Estéril para Neurosign",
    anvisa: "80517190006",
    fileUrl: "#",
  },
  {
    brand: "Neurosign",
    name: "Eletrodo Cirúrgico para Neurosign Magstim",
    anvisa: "80517190007",
    fileUrl: "#",
  },
  {
    brand: "Neurosign",
    name: "Neuromonitor Neurosign V4",
    anvisa: "80517190035",
    fileUrl: "#",
  },
  {
    brand: "Neurosign",
    name: "Clip de Estimulação Contínua Descartável",
    anvisa: "80517199002",
    fileUrl: "#",
  },
  {
    brand: "Osartis",
    name: "Pulsaclean: Sistema de Lavagem Pulsada Descartável",
    anvisa: "80517199003",
    fileUrl: "#",
  },
  {
    brand: "Osartis",
    name: "Perossal",
    anvisa: "80517190044",
    fileUrl: "#",
  },
  {
    brand: "QuickDraw",
    name: "Conjunto Instrumental QuickDraw BR",
    anvisa: "80517190043",
    fileUrl: "#",
  },
  {
    brand: "QuickDraw",
    name: "Cânula coletora de enxerto autólogo com ponta cortante QuickDraw",
    anvisa: "80517199004",
    fileUrl: "#",
  },
  {
    brand: "SafeView",
    name: "Kit Safeview – Sistema Endoscópico De Liberação De Tecidos Moles",
    anvisa: "80517190033",
    fileUrl: "#",
  },
  {
    brand: "SafeView",
    name: "Kit Safeview-R – Sistema Endoscópico De Liberação De Tecidos Moles, Corte Reverso",
    anvisa: "80517190038",
    fileUrl: "#",
  },
  {
    brand: "Spinemed",
    name: "Spinemed",
    anvisa: "80517190003",
    fileUrl: "#",
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full max-w-7xl px-3 pt-36 mx-auto flex flex-col gap-3 md:gap-6 py-12">
        <header className="flex flex-col gap-6">
          <h1 className="max-w-60 md:max-w-full mx-auto font-exo2 text-2xl md:text-4xl font-bold text-center">
            Instruções de uso dos produtos
          </h1>
        </header>
      </section>

      <section className="relative z-20 max-w-7xl px-6 pt-20 mx-auto w-full flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <h2 className="w-full max-w-md font-exo2 font-semibold text-2xl md:text-4xl text-black">
          Baixe aqui as instruções de uso dos produtos
        </h2>

        <article className="w-full flex flex-col gap-5 mb-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{item.name}</span>
                <span className="text-sm text-gray-600">
                  <strong>{item.brand}</strong> • Anvisa nº {item.anvisa}
                </span>
              </div>
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#73CC00] font-exo2 py-3 px-6 rounded-full text-center text-white">
                Baixar PDF
              </a>
            </div>
          ))}
        </article>
      </section>

      <Footer />
    </>
  );
}
