import type { BannerProdutoDados } from './banner-produto';

// Banners de produto da home (ordem de exibição depois do "Somos o Movimento").
// Texto só com o que está na página do produto e em peças aprovadas: sem
// "único", "menor do mercado" nem promessa de resultado.
export const BANNERS_PRODUTO: BannerProdutoDados[] = [
  {
    id: 'kim',
    tema: 'escuro',
    especialidade: 'Uroginecologia',
    titulo: 'A diferença começa no [poro da malha].',
    texto:
      'KIM®, sling 100% macroporoso e sem nós para a incontinência urinária de esforço feminina.',
    destaques: ['Poro de 1.450 μm', '60 g/m²', 'Para TOT e TVT'],
    imagem: {
      src: '/images/banners/kim-sling.webp',
      largura: 929,
      altura: 565,
      alt: 'Sling KIM®, malha macroporosa sem nós',
    },
    parceiro: {
      src: '/images/banners/logo-neomedic.jpg',
      alt: 'Neomedic',
      largura: 300,
      altura: 94,
    },
    cta: { rotulo: 'Conheça o KIM®', url: '/produtos/kim' },
    registro: 'ANVISA 80517190047',
  },
  {
    id: 'vertestable-spine',
    tema: 'navy',
    especialidade: 'Coluna',
    titulo: 'Cimento ósseo [radiopaco] para vertebroplastia e cifoplastia.',
    texto:
      'VERTESTABLE® Spine: 45% de dióxido de zircônio no pó, visível em tempo real sob fluoroscopia.',
    // Destaques pedidos pela LAS em 25/11/2026 (saiu "Luer-lock e cânulas").
    destaques: ['Radiopaco', 'Média viscosidade', 'Tecnologia alemã'],
    imagem: {
      src: '/images/banners/vertestable-spine.webp',
      largura: 1099,
      altura: 1805,
      alt: 'VERTESTABLE® Spine: pó e ampola do cimento ósseo, com a coluna vertebral',
    },
    parceiro: {
      src: '/images/banners/logo-osartis.png',
      alt: 'OSARTIS',
      largura: 400,
      altura: 71,
    },
    cta: {
      rotulo: 'Conheça o VERTESTABLE®',
      url: '/produtos/vertestable-spine',
    },
    registro: 'ANVISA 80517190050',
  },
  {
    id: 'spinemed',
    tema: 'claro',
    especialidade: 'Coluna',
    titulo: 'Tratamento [não cirúrgico] da dor na coluna.',
    texto:
      'A SpineMED® descomprime os discos lombares e cervicais por distração controlada por software, sem uso de medicamentos.',
    destaques: ['Coluna lombar e cervical', '17 cidades em 10 estados e no DF'],
    imagem: {
      src: '/images/banners/spinemed-mesa.webp',
      largura: 697,
      altura: 585,
      alt: 'Mesa de descompressão SpineMED®',
    },
    parceiro: {
      src: '/images/banners/logo-spinemed.png',
      alt: 'SpineMED',
      largura: 300,
      altura: 56,
    },
    cta: { rotulo: 'Encontre uma unidade', url: '/produtos/spinemed#unidades' },
    cta2: {
      rotulo: 'Tire suas dúvidas no chatbot',
      url: 'https://udify.app/chat/TPKKnNAf0hPmq1CM',
      externo: true,
    },
    registro: 'Notificação ANVISA 80517190003',
  },
  {
    id: 'durolane',
    tema: 'escuro',
    especialidade: 'Ortopedia',
    // Tagline definida pela LAS (João Bianchi, 16/11/2026), com o 3D em destaque.
    titulo: 'O único ácido hialurônico com tecnologia [3D NASHA®].',
    texto:
      'DUROLANE®, ácido hialurônico de origem não animal em aplicação única, indicado para a osteoartrite de joelho e quadril.',
    destaques: [
      'Aplicação única',
      '+2 milhões de pacientes tratados',
      '+25 anos de uso clínico',
    ],
    imagem: {
      src: '/images/banners/durolane-caixa-seringa.webp',
      largura: 1200,
      altura: 808,
      alt: 'Caixa e seringa do DUROLANE® 60 mg/3 mL',
    },
    parceiro: {
      src: '/images/banners/logo-durolane.png',
      alt: 'DUROLANE',
      largura: 500,
      altura: 105,
    },
    cta: { rotulo: 'Conheça o DUROLANE®', url: '/produtos/durolane' },
    cta2: {
      rotulo: 'Encontre um médico ou clínica',
      url: '/produtos/durolane#unidades',
    },
    registro: 'ANVISA 80117580552',
  },
];
