'use client';

import { Button, Input } from '@/components/ui';
import { Textarea } from '@/components/ui/textarea';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FormInner({ formAction }: { formAction: string }) {
  const searchParams = useSearchParams();
  const product = searchParams.get('product') || '';

  return (
    <form
      action={formAction}
      method="POST"
      className="w-full max-w-2xl mx-auto flex flex-col gap-10 mt-10"
    >
      {/* Configurações do FormSubmit */}
      <input
        type="hidden"
        name="_subject"
        value={`Nova solicitação de orçamento`}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {/* <input type="hidden" name="_next" value="https://seusite.com/obrigado" /> */}
      <input
        type="hidden"
        name="_next"
        value="https://lasforlife.com.br/solicitar-orcamento?enviado=true"
      />

      <input
        title="product"
        type="text"
        name="product"
        defaultValue={product}
        className="absolute hidden"
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
        <p className="font-bold font-exo2 text-xl mb-4">Região de atuação</p>
        <div className="w-full bg-[#f7f7f7] rounded-md pr-2">
          <select
            title="region"
            name="region"
            className="w-full h-10 px-3 py-2 border border-transparent bg-[#f7f7f7] rounded-md text-sm font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro Oeste">Centro Oeste</option>
            <option value="Sul">Sul</option>
            <option value="Sudeste">Sudeste</option>
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
            className="w-full h-10 px-3 py-2 border border-transparent bg-[#f7f7f7] rounded-md text-sm font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Médico">Médico</option>
            <option value="Distribuidor">Distribuidor</option>
            <option value="Hospital">Hospital</option>
            <option value="Operador de Saúde">Operador de Saúde</option>
          </select>
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-4">
        <div className="w-full">
          <p className="font-bold font-exo2 text-xl mb-4">Telefone com DDD</p>
          <Input
            type="tel"
            name="phone"
            className="w-full font-exo2 border-transparent h-10"
            placeholder="Digite aqui"
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
  );
}

export default function BudgetForm({ formAction }: { formAction: string }) {
  return (
    <Suspense fallback={<div>Carregando formulário...</div>}>
      <FormInner formAction={formAction} />
    </Suspense>
  );
}
