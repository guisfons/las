'use client';

import Footer from '@/components/footer';
import { Button, Input } from '@/components/ui';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <>
      <section className="w-full max-w-7xl px-3 pt-36 mx-auto flex flex-col gap-3 md:gap-6 py-12">
        <header className="flex flex-col gap-6">
          <h1 className="max-w-60 md:max-w-full mx-auto font-exo2 text-2xl md:text-4xl font-bold text-center">
            Seja um distribuidor
          </h1>
          <p className="max-w-2xl w-11/12 mx-auto font-exo2 text-lg text-label text-center">
            Quer se tornar um distribuidor e levar esse produto para o seu
            mercado? <br /> Preencha seus dados e entraremos em contato!
          </p>
        </header>

        <form
          action="https://formsubmit.co/m.sousa@lasforlife.com.br"
          method="POST"
          className="w-full max-w-2xl mx-auto flex flex-col gap-10 mt-10"
        >
          {/* Configurações do FormSubmit */}
          <input
            type="hidden"
            name="_subject"
            value="Nova solicitação de distribuidor"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://seusite.com/obrigado"
          />

          <div>
            <p className="font-bold font-exo2 text-xl mb-4">Nome da Empresa</p>
            <Input
              type="text"
              name="company_name"
              className="w-full font-exo2 border-transparent h-10"
              placeholder="Digite aqui"
              required
            />
          </div>

          <div>
            <p className="font-bold font-exo2 text-xl mb-4">
              Região de atuação
            </p>

            <div className="w-full bg-[#f7f7f7] rounded-md pr-2">
              <select
                title="region"
                name="region"
                className="w-full h-10 px-3 py-2 border border-transparent bg-[#f7f7f7] rounded-md  text-sm font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Norte ">Norte </option>
                <option value="Nordeste ">Nordeste </option>
                <option value="Centro Oeste ">Centro Oeste </option>
                <option value="Sul ">Sul </option>
                <option value="Sudeste ">Sudeste </option>
              </select>
            </div>
          </div>

          <div>
            <p className="font-bold font-exo2 text-xl mb-4">Nome Completo</p>
            <Input
              type="text"
              name="full_name"
              className="w-full font-exo2 border-transparent h-10"
              placeholder="Digite aqui"
              required
            />
          </div>

          <div>
            <p className="font-bold font-exo2 text-xl mb-4">Cargo</p>
            <Input
              type="text"
              name="position"
              className="w-full font-exo2 border-transparent h-10"
              placeholder="Digite aqui"
              required
            />
          </div>

          <div>
            <p className="font-bold font-exo2 text-xl mb-4">Atuação</p>

            <div className="w-full bg-[#f7f7f7] rounded-md pr-2">
              <select
                title="business_area"
                name="business_area"
                className="w-full h-10 px-3 py-2 border border-transparent bg-[#f7f7f7] rounded-md  text-sm font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Médico ">Médico </option>
                <option value="Distribuidor ">Distribuidor </option>
                <option value="Hospital ">Hospital </option>
                <option value="Operador de Saúde">Operador de Saúde</option>
              </select>
            </div>
          </div>

          <div className="w-full flex justify-between items-center gap-4">
            <div className="w-full">
              <p className="font-bold font-exo2 text-xl mb-4">
                Telefone com DDD
              </p>

              <Input
                type="tel"
                name="phone"
                className="w-full font-exo2 border-transparent h-10"
                placeholder="Digite aqui "
                required
              />
            </div>

            <div className="w-full">
              <p className="font-bold font-exo2 text-xl mb-4">
                E-mail Profissional
              </p>
              <Input
                type="email"
                name="email"
                className="w-full font-exo2 border-transparent h-10"
                placeholder="Digite aqui"
                required
              />
            </div>
          </div>

          <div>
            <p className="font-bold font-exo2 text-xl mb-4">
              Quais produtos e marcas você distribui atualmente?
            </p>
            <Textarea
              rows={6}
              name="current_products"
              className="w-full font-exo2 border-transparent"
              placeholder="Digite aqui"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full max-w-56 font-exo2 font-bold ml-auto text-base mt-4 rounded-full bg-[#31a1ff] hover:bg-[rgba(49,162,255,0.5)] text-white !px-8 !py-0"
          >
            Enviar
          </Button>
        </form>
      </section>
      <Footer />
    </>
  );
}
