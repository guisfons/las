'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollToPlugin);

export const useScrollTo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = async (sectionId?: string, targetPage?: string) => {
    if (!sectionId || !isClient) return;

    // Verificar se estamos no cliente e se é uma página diferente
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname : '';

    // Se precisar navegar para outra página
    if (targetPage && currentPath !== targetPage) {
      // Usar window.location para navegação entre páginas
      window.location.href = `${targetPage}#${sectionId}`;
    } else {
      // Scroll na mesma página
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(sectionId);

    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 80,
        },
        ease: 'power2.inOut',
      });
    }
  };

  return { scrollToSection };
};
