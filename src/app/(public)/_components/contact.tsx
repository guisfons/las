'use client';

import { Button, Input } from '@/components/ui';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="Contact" className="relative overflow-hidden">
      <div className="max-w-7xl px-6 py-20 mx-auto flex items-center justify-center">
        <form
          action="https://formsubmit.co/m.sousa@lasforlife.com.br"
          method="POST"
          className="w-full flex flex-col gap-6"
        >
          {/* Configurações do FormSubmit */}
          <input type="hidden" name="_subject" value="Novo contato do site" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://seusite.com/obrigado"
          />

          <div className="mb-2">
            <p className="uppercase font-exo2 font-bold text-lg text-[#9494A1]">
              Contato
            </p>

            <p className="font-exo2 leading-10 font-bold text-2xl md:text-[44px] text-black">
              Dúvidas? <br /> Vamos Conversar!
            </p>
          </div>

          <Input
            type="text"
            name="name"
            className="w-full font-exo2 !text-lg md:w-11/12 md:max-w-96 rounded-full bg-[#f7f7f7] !border-transparent"
            placeholder="Nome"
            required
          />

          <Input
            type="tel"
            name="phone"
            className="w-full font-exo2 !text-lg md:w-11/12 md:max-w-96 rounded-full bg-[#f7f7f7] !border-transparent"
            placeholder="Telefone"
            required
          />

          <Textarea
            className="w-full font-exo2 !text-lg md:w-11/12 md:max-w-96 resize-none rounded-[20px] bg-[#f7f7f7] !border-transparent"
            placeholder="Mensagem"
            name="message"
            rows={5}
            required
          />

          <Button
            type="submit"
            className="w-full md:w-max mt-4 font-exo2 font-bold text-base rounded-full bg-[#f9d229] hover:bg-[#f9d229] text-[#090909] !px-8 !py-0"
          >
            Enviar mensagem <Icon name="arrow_right" />
          </Button>

          <Image
            src={'/images/landingpage/coffee-cup-las.png'}
            width={710}
            height={400}
            alt="coffee cup"
            className="hidden lg:block absolute top-20 -right-px max-w-[690px] rounded-s-2xl object-cover"
          ></Image>
        </form>
      </div>
    </section>
  );
}
