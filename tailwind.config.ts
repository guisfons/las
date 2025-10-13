import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['var(--font-exo2)'],
      },
      colors: {
        label: '#9494A1',
        green: '#73cc00',
        line: '#D4D2E3',
        bgCard: '#fafdf7',
        products: '#f6f6f6',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        BannerHeroWeb: 'url("/images/landingpage/bannerHero.png")',
        bannerHeroMobile: 'url("/images/landingpage/bannerHeroMobile.png")',
        createHealth: 'url("/images/landingpage/gerar-saude.jpg")',
        'degrade-dows-up':
          'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        treatDesease: 'url("/images/landingpage/tratar-doenca.jpg")',
        createTecnology:
          'url("/images/landingpage/desenvolver-tecnologia.jpg")',
        articulatedEcosystem:
          'url("/images/landingpage/articular-ecossistema.jpg")',
        promoteEducation: 'url("/images/landingpage/promover-educacao.png")',
        bannerEducation: 'url("/images/education/bannerEducation.png")',
        bannerEducationMobile:
          'url("/images/education/bannerEducationMobile.png")',
        programEducation: 'url("/images/education/programaEducation.png")',
        technicalBanner: 'url("/images/technical/technical-banner.png")',
        generateHealthBanner:
          'url("/images/generate-health/banner-generate-health.png")',
        treatingDiseaseBanner:
          'url("/images/treating-disease/banner-treating-disease.png")',
        articulateEcosystemBanner:
          'url("/images/articulate-the-ecosystem/banner-articulate-ecosystem.png")',
        divRunners: 'url("/runners.png")',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'radius-bottom': '0 0 50% 50%',
        fancy: '64% 36% 17% 83% / 67% 80% 20% 33%',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },

  plugins: [tailwindcssAnimate],
};
export default config;
