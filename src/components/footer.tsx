'use client';

import { Facebook, Instagram, Linkedin, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input } from './ui';
import { getAllProducts } from '@/lib/api/products';
import { mapWPProductToProduct } from '@/lib/utils/product-mapper';
import { useEffect, useState } from 'react';
import { getSocialLinks, WPSocialLinks } from '@/lib/api/globals';

export default function Footer() {
  const [specialities, setSpecialities] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [socialLinks, setSocialLinks] = useState<WPSocialLinks | null>(null);

  useEffect(() => {
    async function loadFooterData() {
      try {
        const wpProducts = await getAllProducts();
        const products = wpProducts.map(mapWPProductToProduct);

        const allSpecialties = products.flatMap((p) => p.specialities);
        setSpecialities(Array.from(new Set(allSpecialties)));

        const allBrands = products.flatMap((p) => p.brands[0]).filter(Boolean);
        setBrands(Array.from(new Set(allBrands)));

        const links = await getSocialLinks();
        if (links) {
          setSocialLinks(links);
        }
      } catch (error) {
        console.error('Failed to load footer data', error);
      }
    }
    loadFooterData();
  }, []);

  const especialidades = specialities
    .map((el) => ({
      label: el,
      router: '/',
    }))
    .sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));

  const marca = brands
    .map((el) => ({
      label: el,
      router: '/',
    }))
    .sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));

  const redes_sociais = [
    {
      link: socialLinks?.facebookUrl || 'https://www.facebook.com/lasbrasil',
      icon: <Facebook></Facebook>,
    },
    {
      link:
        socialLinks?.instagramUrl || 'https://www.instagram.com/las.forlife/',
      icon: <Instagram></Instagram>,
    },
    {
      link:
        socialLinks?.linkedinUrl ||
        'https://www.linkedin.com/company/lasforlife/',
      icon: <Linkedin></Linkedin>,
    },
    {
      link: socialLinks?.youtubeUrl || 'https://www.youtube.com/@lasforlife',
      icon: <YoutubeIcon></YoutubeIcon>,
    },
  ];

  return (
    <section className="relative w-full max-w-7xl px-6 pt-20 mx-auto flex flex-col gap-10 py-4">
      <div className="flex flex-row gap-20  justify-center md:justify-start">
        <div className="md:col-span-2 flex justify-center items-center flex-col md:justify-start md:items-start md:mr-auto">
          <form
            action={
              socialLinks?.newsletterEmail
                ? `https://formsubmit.co/${socialLinks.newsletterEmail}`
                : 'https://formsubmit.co/m.sousa@lasforlife.com.br'
            }
            method="POST"
            className="flex justify-center items-center flex-col md:justify-start md:items-start w-full"
            noValidate
          >
            <input
              type="hidden"
              name="_subject"
              value="Novidades - Newsletter"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <Image
              width={198}
              height={42}
              alt="hero image mask"
              src={'/images/footer/logo-lasforlife.svg'}
              className="w-48 object-contain"
            ></Image>

            <p className="max-w-96 font-exo2 text-[#9494A1] text-lg font-light text-center md:text-left my-4">
              {socialLinks?.newsletterText ||
                'Deseja ficar por dentro de todas as novidades do Movimento LAS FOR LIFE? Deixe seu e-mail aqui embaixo:'}
            </p>

            <Input
              type="email" // Mudança aqui
              name="email"
              className="w-full font-exo2 !text-lg h-12 md:w-11/12 max-w-96 rounded-full bg-[#f7f7f7]"
              placeholder="E-mail"
              required
            />

            <Button
              type="submit"
              className="w-full md:w-max font-exo2 font-bold text-base mt-4 rounded-full bg-[#31a1ff] hover:bg-[rgba(49,162,255,0.5)] text-white !px-8 !py-0"
            >
              Enviar
            </Button>
          </form>

          <div className="flex flex-col gap-4 font-exo2 text-[#9494A1] font-light text-base mt-2">
            {socialLinks?.companyAddress && (
              <p className="font-exo2 text-lg font-light text-[#9494A1] md:block text-center md:text-left whitespace-pre-line">
                {socialLinks.companyAddress}
              </p>
            )}
            {socialLinks?.companyPhone && (
              <div className="font-exo2 text-lg font-light text-[#9494A1] md:block text-center md:text-left">
                {socialLinks.companyPhone.split('|').map((phone, i, arr) => {
                  const cleanPhone = phone.trim();
                  return (
                    <span key={i}>
                      <a
                        href={`tel:+${cleanPhone.replace(/\D/g, '')}`}
                        className="hover:text-[#31a1ff] transition-colors"
                      >
                        {cleanPhone}
                      </a>
                      {i < arr.length - 1 && <span className="mx-2">|</span>}
                    </span>
                  );
                })}
              </div>
            )}
            {!socialLinks?.companyPhone && !socialLinks?.companyAddress && (
              <p>
                Preencha os dados no painel Opções Globais para que apareçam
                aqui.
              </p>
            )}
          </div>
        </div>

        <div className="flex-col gap-10 hidden md:flex">
          <p className="font-exo2 font-bold text-xl"> Especialidades </p>

          <div className="flex flex-col gap-4">
            {especialidades
              .filter((el) =>
                [
                  'Ortopedia',
                  'Coluna',
                  'Cabeça e Pescoço',
                  'Ginecologia',
                ].includes(el.label),
              )
              .map((el, idx) => {
                return (
                  <Link
                    key={idx}
                    href={`/produtos?specialty=${encodeURIComponent(el.label)}`}
                    className="m-0 font-exo2 text-[#9494A1] font-light text-lg"
                  >
                    {el.label}
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-10">
          <p className="font-exo2 font-bold text-xl"> Marcas </p>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {marca.map((el, idx) => (
                <Link
                  key={idx}
                  href={`/produtos?brand=${encodeURIComponent(el.label)}`}
                  className="m-0 font-exo2 text-[#9494A1] font-light text-lg"
                >
                  {el.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#9494A1] h-px"></div>

      <div className="w-full flex justify-center md:justify-between items-center">
        <p className="font-exo2 text-lg font-light text-[#9494A1] hidden md:block">
          Acompanhe nas redes
        </p>

        <div className="flex items-center gap-4">
          {redes_sociais.map((el, idx) => {
            return (
              <Link
                href={el.link}
                key={idx}
                className="m-0 font-exo2 bg-[rgba(49,162,255,0.10)] rounded-xl p-2 text-[#31a1ff] font-light text-lg"
              >
                {el.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
