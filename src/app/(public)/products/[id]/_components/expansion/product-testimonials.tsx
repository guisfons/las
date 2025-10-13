'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import type { Product } from '../../../_components/card-product';
import Image from 'next/image';

interface TestimonialData {
  testimonial: string;
  testimonial_pictures?: string[];
  doctor: {
    name: string;
    specialty: string;
    photo?: string;
  };
}

// Definir a estrutura esperada para o detail
interface ProductDetailExtended {
  pictures?: string[];
  testimonial?: TestimonialData;
  // Manter as propriedades originais do Product.detail
  subtitle?: string;
  tags?: string[];
  about?: string[];
  general_information?: string;
  technical_data?: Record<string, string | undefined>;
  links?: Array<{ title: string; url: string }>;
}

export default function ProductTestimonials({ product }: { product: Product }) {
  console.log(product);
  // Type the data properly with fallbacks
  const detail = product.detail as ProductDetailExtended | undefined;
  const testimonialData: TestimonialData | undefined = detail?.testimonial;
  const testimonialPictures: string[] =
    testimonialData?.testimonial_pictures || [];

  // Estado para controlar qual imagem está sendo mostrada
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);

  // Se não há testimonial, não mostra o componente
  if (!testimonialData) {
    return (
      <p className="font-exo2 text-xs lg:text-lg text-label">
        Não há depoimentos disponíveis para este produto.
      </p>
    );
  }

  // Remover tags <strong> do texto do depoimento
  const cleanTestimonial = testimonialData.testimonial.replace(
    /<\/?strong>/g,
    '',
  );

  // Função para navegar para uma imagem específica
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Função para ir para próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % testimonialPictures.length);
  };

  // Função para ir para imagem anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + testimonialPictures.length) % testimonialPictures.length,
    );
  };

  // Handlers para mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (testimonialPictures.length <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || testimonialPictures.length <= 1) return;
    e.preventDefault();
    dragCurrentX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || testimonialPictures.length <= 1) return;
    e.preventDefault();

    const deltaX = dragCurrentX.current - dragStartX.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }

    setIsDragging(false);
    dragStartX.current = 0;
    dragCurrentX.current = 0;
  };

  // Handlers para touch (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (testimonialPictures.length <= 1) return;
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    dragCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || testimonialPictures.length <= 1) return;
    dragCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging || testimonialPictures.length <= 1) return;

    const deltaX = dragCurrentX.current - dragStartX.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }

    setIsDragging(false);
    dragStartX.current = 0;
    dragCurrentX.current = 0;
  };

  return (
    <div className="w-full">
      {/* Subtítulo - apenas no desktop */}
      {/* <div className="mb-8 hidden lg:block">
        <p className="max-w-3xl font-exo2 text-xs lg:text-lg text-label">
          Acesse materiais exclusivos que comprovam a eficácia do{' '}
          <strong>{product.name}</strong> e apoiam o cuidado de excelência ao
          paciente.
        </p>
      </div> */}

      {/* Layout Desktop: lado a lado */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
        {/* Carousel de imagens - lado esquerdo - só mostra se tiver imagens */}
        {testimonialPictures.length > 0 && (
          <div className="relative">
            <div
              className="aspect-[6/5] w-full bg-gray-100 rounded-2xl overflow-hidden flex justify-center items-center cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={
                  testimonialPictures[currentImageIndex] ||
                  '/placeholder.svg?height=400&width=600'
                }
                alt="Imagem do depoimento"
                width={600}
                height={400}
                className="w-full object-contain pointer-events-none"
                draggable={false}
              />

              {/* Indicadores (bolinhas) dentro da imagem - só mostra se há mais de uma imagem */}
              {testimonialPictures.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {testimonialPictures.map((_, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-gray-700 hover:bg-white/70'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Conteúdo do texto - lado direito */}
        <div className={`flex flex-col justify-center space-y-6`}>
          {/* Depoimento */}
          {cleanTestimonial && (
            <div>
              <p className="font-exo2 text-xs lg:text-xl text-label">
                {cleanTestimonial}
              </p>
            </div>
          )}

          {/* Informações do médico - só mostra se tiver dados do médico */}
          {(testimonialData.doctor.name ||
            testimonialData.doctor.specialty ||
            testimonialData.doctor.photo) && (
            <div className="flex items-center gap-4 pt-4">
              {/* Foto do médico - só mostra se tiver foto */}
              {testimonialData.doctor.photo && (
                <div className="w-16 h-16 lg:w-[81px] lg:h-[81px] flex-shrink-0 overflow-hidden bg-gray-200 rounded-full">
                  <Image
                    src={testimonialData.doctor.photo || '/placeholder.svg'}
                    alt={`Foto de ${testimonialData.doctor.name}`}
                    width={81}
                    height={81}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Nome e especialidade - só mostra se tiver dados */}
              {(testimonialData.doctor.name ||
                testimonialData.doctor.specialty) && (
                <div>
                  {testimonialData.doctor.name && (
                    <h4 className="font-exo2 text-lg lg:text-3xl font-bold text-gray-900">
                      {testimonialData.doctor.name}
                    </h4>
                  )}
                  {testimonialData.doctor.specialty && (
                    <p className="font-exo2 text-xs lg:text-xl text-label">
                      {testimonialData.doctor.specialty}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Layout Mobile: coluna única */}
      <div className="md:hidden md:grid-cols-2 flex flex-col space-y-6">
        {/* Depoimento */}
        {cleanTestimonial && (
          <div>
            <p className="font-exo2 text-xs lg:text-xl text-label">
              {cleanTestimonial}
            </p>
          </div>
        )}

        {/* Informações do médico - só mostra se tiver dados do médico */}
        {(testimonialData.doctor.name ||
          testimonialData.doctor.specialty ||
          testimonialData.doctor.photo) && (
          <div className="flex items-center gap-4">
            {/* Foto do médico - só mostra se tiver foto */}
            {testimonialData.doctor.photo && (
              <div className="w-16 h-16 lg:w-[81px] flex-shrink-0 overflow-hidden bg-gray-200 rounded-full">
                <Image
                  src={testimonialData.doctor.photo || '/placeholder.svg'}
                  alt={`Foto de ${testimonialData.doctor.name}`}
                  width={81}
                  height={81}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Nome e especialidade - só mostra se tiver dados */}
            {(testimonialData.doctor.name ||
              testimonialData.doctor.specialty) && (
              <div>
                {testimonialData.doctor.name && (
                  <h4 className="font-exo2 text-lg lg:text-3xl font-bold text-gray-900">
                    {testimonialData.doctor.name}
                  </h4>
                )}
                {testimonialData.doctor.specialty && (
                  <p className="font-exo2 text-xs lg:text-xl text-label">
                    {testimonialData.doctor.specialty}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Carousel de imagens - parte inferior no mobile - só mostra se tiver imagens */}
        {testimonialPictures.length > 0 && (
          <div className="relative">
            <div
              className="aspect-[4/3] w-full bg-gray-100 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={
                  testimonialPictures[currentImageIndex] ||
                  '/placeholder.svg?height=400&width=600'
                }
                alt="Imagem do depoimento"
                width={600}
                height={400}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />

              {/* Indicadores (bolinhas) dentro da imagem - só mostra se há mais de uma imagem */}
              {testimonialPictures.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {testimonialPictures.map((_, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
