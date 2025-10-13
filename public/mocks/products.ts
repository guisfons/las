import { Product } from '@/app/(public)/products/_components/card-product';

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Lâminas de Serra',
    specialities: ['Ortopedia'],
    brands: ['ACF Medical'],
    logo_brand: '/images/brands/acf_medical_logo.png',
    description:
      'As Lâminas de Serra ACF Medical possuem design único feito a laser e dentes em formato prismado polidos em cerâmica, garantindo total precisão e corte ideal do osso.',
    imageUrl: '/images/products/lamina_acf.png',
    detail: {
      subtitle: '',
      tags: ['Joelho', 'Quadril', 'Trauma'],
      about: [
        'A homogeneidade da espessura da lâmina permite cortes lisos e precisos.',
        'A qualidade do aço utilizado contribui em minimizar a possibilidade de necrose térmica em até 90%.',
        'As lâminas possuem bordas arredondadas para fornecer maior segurança a seus usuários.',
        'Modelos fornecidos estéreis e seguramente embalados. A embalagem mantém a estabilidade do dispositivo durante seus 5 anos de vida útil.',
        'As lâminas de serra ACF Medical também permitem ótimo controle das peças de mão. A velocidade variável permite ao cirurgião moldar o osso.',
      ],
      general_information:
        'Para cirurgias de: Artroplastia de Joelho, Quadril, Ombro e Cirurgias de Revisão, cirurgias cardíacas, Trauma ACL (Ligamento Cruzado Anterior), Cirurgias de Mão, Pé e Pulso. As lâminas estão disponíveis para todos os engates dos motores: Aesculap, AO Synthes, De Soutter, Linvatec, Hall, MicroAire, Otyker, Stryker.',
      technical_data: [],
      pictures: ['/images/products/lamina_acf.png'],
      links: [
        {
          title: 'Lâminas ACF',
          url: '/pdfs/Catálogo/Lâminas_ACF/LAS_Folheto_ACF_Maio_23_Visualizacao.pdf',
          file_name: 'LAS Folheto ACF Maio 23 Visualizacao',
          type: 'CATALOG',
        },
        {
          title: 'Lâminas Cirúrgicas ACF',
          url: '../images/use-instruction/80517190022-Laminas-ACF.pdf',
          file_name: 'Anvisa nº 80517190022',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Lâminas para Serra Cirúrgica',
          url: '../images/use-instruction/80517199006-Laminas-Cirurgicas.pdf',
          file_name: 'Anvisa nº 80517199006',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/lamina_acf.png',
          alt: 'Lâminas de Serra ACF Medical em uso cirúrgico',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 2,
    name: 'Motor ACF',
    specialities: ['Ortopedia'],
    brands: ['ACF Medical'],
    logo_brand: '/images/brands/acf_medical_logo.png',
    description:
      'Um dos equipamentos mais modernos e atuais do mercado brasileiro. O motor ACF Sign, composto por Serra e Perfurador, é a combinação perfeita de design e performance.',
    imageUrl: '/images/products/motor_acf.png',
    detail: {
      subtitle: '',
      tags: ['Joelho', 'Quadril', 'Trauma'],
      about: [
        "Equipado com IPX 6, que o torna praticamente à prova d'água.",
        'Tem todo o seu corpo revestido com alumínio aeroespacial que evita corrosão.',
        'Maior controle para o cirurgião durante toda a operação.',
        'Carga rápida: em apenas 25 minutos seu equipamento está pronto para ser utilizado novamente.',
        'Tecnologia Nano Drive: não estraga com a esterilização.',
      ],
      general_information:
        'Artroplastia (Joelho, quadril, ombro, Punho, mão tornozelo e pé), Cirurgia de amputação, Cirurgia de trauma',
      technical_data: [],
      pictures: ['/images/products/motor_acf.png'],
      links: [
        {
          title: 'Folder ACF Medical',
          url: 'https://www.lasbrasil.com/wp-content/uploads/2023/06/LAS_Folheto_ACF_Maio_23_Visualizacao.pdf',
          file_name: '',
          type: 'DEFAULT',
        },
        {
          title: 'Catálogo ACF Medical',
          url: 'https://www.lasbrasil.com/wp-content/uploads/2022/02/ACF-Saw-Blades-Brochure.pdf',
          file_name: '',
          type: 'DEFAULT',
        },
        {
          title: 'Clique aqui para acessar o site da ACF',
          url: 'https://www.acf.com.tr/',
          file_name: '',
          type: 'DEFAULT',
        },
        {
          title: 'Solicite a sua amostra',
          url: 'https://conteudo.lasbrasil.med.br/solicite-sua-amostra-de-lamina-de-serra-acf',
          file_name: '',
          type: 'DEFAULT',
        },
        {
          title: 'Sistema de Ferramenta Elétrica Cirúrgica',
          url: '../images/use-instruction/80517199007-Serra-e-Perfurador-ACF.pdf',
          file_name: 'Anvisa nº 80517199007',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/motor_acf.png',
          alt: 'Motor ACF Sign em procedimento cirúrgico',
        },
      ],
      testimonial: {
        testimonial:
          '‘’A impressão que eu tinha antes de conhecer e utilizá-lo se confirmou. Após três cirurgias realizadas, o motor superou minhas expectativas: ele é extremamente robusto, fácil de manusear, ergonômico, com uma empunhadura confortável e um tamanho ideal. Além disso, a potência é notável; é um motor que exige um certo treinamento para dominar. Já usei em um paciente homem forte com osso duro e o motor respondeu muito bem, mostrando-se muito preciso e potente.’’',
        testimonial_pictures: [],
        doctor: {
          name: 'Dr. Inácio Ventura',
          specialty: 'CRM 222230',
          photo: '/images/testimonials/Dr.Inacio Ventura.jpg',
        },
      },
    },
  },
  // {
  //   id: 3,
  //   name: 'Blue Needle Estéril – Uso único',
  //   specialities: ['Ortopedia'],
  //   brands: ['Bowa Medical'],
  //   logo_brand: '/images/brands/bowa_site.png',
  //   description:
  //     'Eletrodo de agulha para Microdissecção Modelo: Estéril – Uso único.Os microdissectores BOWA são eletrodos de agulha de precisão usados em cirurgias que promovem cortes precisos e com pouco sangramento. Foram projetadas para serem utilizadas em conjunto com canetas monopolares, sendo compatíveis com as mais utilizadas no mercado',
  //   imageUrl: '/images/products/blueneedleUnico.png',
  //   detail: {
  //     subtitle: 'Eletrodo de agulha para Microdissecção.',
  //     tags: ['Cabeça e Pescoço', 'Trauma', 'Mão'],
  //     about: [
  //       'Economia de custos em comparação aos principais concorrentes.',
  //       'Material estéril – Uso único.',
  //       'Ótima cicatrização.',
  //       'Pode ser usado nos principais geradores dos hospitais (Ex: Valleylab).',
  //       'Corte de precisão e coagulação de tecidos moles.',
  //       'Produto importado da Alemanha.',
  //     ],
  //     general_information:
  //       'Cirurgias Orais e Maxilofaciais ,Cirurgias de Joelho e Quadril ,Cirurgias de Pé e Tornozelo ,Cirurgias de Coluna ,Cirurgias Plásticas e Estéticas ,Cirurgias de Cabeça e Pescoço/Otorrino',
  //     technical_data: [
  //       ['Características', 'Descrição'],
  //       ['Comprimento do produto', '71 mm'],
  //       ['Comprimento de trabalho', '22 mm'],
  //       ['Peso total bruto / Peso individual líquido', '130 g / 5 g'],
  //       [
  //         'Materiais',
  //         'Aço inoxidável, polipropileno, poliamida, LDPE, PEAD, elastômeros termoplásticos, não contém ftalatos, não contém látex',
  //       ],
  //       ['Diâmetro do conector', '2.4 mm'],
  //       ['Tipo de eletrodo', 'Eletrodo de agulha NON-Stick antiaderente'],
  //       ['Forma do eletrodo', 'Reto'],
  //       ['Monopolar / bipolar / passivo', 'Monopolar'],
  //       ['Rigidez elétrica', '6000 Vp'],
  //       ['Descartável / Reutilizável', 'Descartável'],
  //       ['Estéril / Não estéril', 'Estéril'],
  //       ['Método de esterilização', 'Radio esterilização'],
  //       ['Preparação', 'Não permitido'],
  //       ['Combinações possíveis', 'Canetas com conector de 2.4 mm'],
  //     ],
  //     pictures: ['/images/products/blueneedleUnico.png'],
  //     links: [
  //       {
  //         title: 'Blue Needle Estéril',
  //         url: '/pdfs/Catálogo/Blue_Needle_Esteril/Blue Needle Esteril.pdf',
  //         file_name: 'Blue Needle Esteril',
  //         type: 'CATALOG',
  //       },
  //     ],
  //     videos: [],
  //     images: [
  //       {
  //         url: '/images/products/blueneedleUnico.png',
  //         alt: 'Blue Needle estéril em procedimento de microdissecção',
  //       },
  //     ],
  //     testimonial: {
  //       testimonial: '',
  //       testimonial_pictures: [],
  //       doctor: {
  //         name: '',
  //         specialty: '',
  //         photo: '',
  //       },
  //     },
  //   },
  // },
  // {
  //   id: 4,
  //   name: 'Blue Needle Não Estéril – Reutilizável.',
  //   specialities: ['Ortopedia'],
  //   brands: ['Bowa Medical'],
  //   logo_brand: '/images/brands/bowa_site.png',
  //   description:
  //     'Modelo: Não Estéril – Reutilizável. Os microdissectores BOWA são eletrodos de agulha de precisão usados em cirurgias que promovem cortes precisos e com pouco sangramento. Foram projetadas para serem utilizadas em conjunto com canetas monopolares, sendo compatíveis com as mais utilizadas no mercado.',
  //   imageUrl: '/images/products/blueneedle_reutilizavel.png',
  //   detail: {
  //     subtitle: 'Eletrodo de agulha para Microdissecção.',
  //     tags: ['Mão', 'Trauma', 'Cabeça e Pescoço'],
  //     about: [
  //       'Economia de custos em comparação aos principais concorrentes.',
  //       'Material não estéril – reutilizável.',
  //       'Ótima cicatrização.',
  //       'Pode ser usado nos principais geradores dos hospitais (Ex: Valleylab).',
  //       'Corte de precisão e coagulação de tecidos moles.',
  //       'Produto importado da Alemanha.',
  //     ],
  //     general_information:
  //       'Cirurgias Orais e Maxilofaciais ,Cirurgias de Joelho e Quadril ,Cirurgias de Pé e Tornozelo ,Cirurgias de Coluna ,Cirurgias Plásticas e Estéticas ,Cirurgias de Cabeça e Pescoço/Otorrino.',
  //     technical_data: [
  //       ['Características', 'Descrição'],
  //       ['Dimensões do produto', '0.5 mm x 2 mm'],
  //       ['Comprimento de trabalho', '20 mm'],
  //       ['Comprimento total', '59 mm'],
  //       ['Peso total bruto / Peso individual líquido', '42 g / 2 g'],
  //       [
  //         'Materiais',
  //         'Aço inoxidável, Polipropileno GF10, tungstênio, PTFE, elastômeros termoplásticos, não contém ftalatos, não contém látex',
  //       ],
  //       ['Diâmetro do conector', '2.4 mm'],
  //       ['Tipo de eletrodo', 'Eletrodo de micro agulha'],
  //       ['Forma do eletrodo', 'Reto'],
  //       ['Monopolar / bipolar / passivo', 'Monopolar'],
  //       ['Força elétrica', '800 Vp'],
  //       ['Descartável / Reutilizável', 'Reutilizável'],
  //       ['Estéril / Não estéril', 'Não estéril'],
  //       ['Método de esterilização', 'Autoclavar'],
  //       ['Processamento', '75 ciclos'],
  //       [
  //         'Combinações permitidas',
  //         'Canetas reutilizáveis com conector de 2.4 mm',
  //       ],
  //     ],
  //     pictures: ['/images/products/blueneedle_reutilizavel.png'],
  //     links: [
  //       {
  //         title: 'Blue Needle Descartável',
  //         url: '/pdfs/Catálogo/Blue_needle_descartável/Blue Needle Nao Esteril.pdf',
  //         file_name: 'Blue Needle Nao Esteril',
  //         type: 'CATALOG',
  //       },
  //     ],
  //     videos: [],
  //     images: [
  //       {
  //         url: '/images/products/blueneedle_reutilizavel.png',
  //         alt: 'Blue Needle reutilizável em uso cirúrgico',
  //       },
  //     ],
  //     testimonial: {
  //       testimonial: '',
  //       testimonial_pictures: [],
  //       doctor: {
  //         name: '',
  //         specialty: '',
  //         photo: '',
  //       },
  //     },
  //   },
  // },
  {
    id: 5,
    name: 'CellColt',
    specialities: ['Ortopedia'],
    brands: ['MDL'],
    logo_brand: '/images/brands/mdl_logo.png',
    description:
      'O CellColt™ é composto por um Kit de Cânulas que fazem a sucção de células mesenquimais de forma seletiva e fechada, criando um fluxo exclusivamente posterior e radial. Esta característica minimiza a diluição do aspirado de medula com o sangue periférico potencializando terapias de regeneração tecidual.',
    imageUrl: '/images/products/produto_cellcolt1.png',
    detail: {
      subtitle: '',
      tags: ['Mão', 'Quadril', 'Trauma', 'Joelho', 'Coluna'],
      about: [
        'Bloco deslizante patenteado.',
        'Permite coleta intraóssea em dois níveis diferentes.',
        'Em um único ponto de entrada, é possível realizar 6 aspirações.',
        'Cânula interna fechada.',
        'Coleta posterior e radial.',
        'Abertura alternada de 6 dos 12 orifícios.',
      ],
      general_information:
        'Pode ser utilizado em vários tipos de procedimentos cirúrgicos:, Ortopedia, Bucomaxilo, Coluna, Podendo ser utilizado em conjunto com matrizes ósseas, cartilagens, enxertos de todos os tipos, com êxito em variados procedimentos cirúrgicos, principalmente:, Alívio da dor, Artrite, Artrose, Tendinopatias, Injúrias de ligamento, Degeneração de disco, Artrodese, Pseudoartrose, Necrose óssea, Próteses, Reconstrução maxilar, Ortognática, Fraturas ',
      technical_data: [
        ['Componente', 'Comprimento', 'Largura (manopla)', 'Diâmetro'],
        ['Introdutor com ponta diamantada', '150,70 mm', '71,40 mm', '2,20 mm'],
        ['Introdutor com ponta', 'romba	150,70 mm', '71,40 mm', '2,20 mm'],
        ['Cânula CellColt', '150,70 mm', '-', '2,25 mm'],
        [
          'Dispositivo CellColt',
          '100,00 mm (cânula)',
          '76,00 mm (manopla)',
          '3,00 mm (externo)',
        ],
        [
          'Dispositivo CellColt',
          '60,00 mm (manopla)',
          '-',
          '2,30 mm (interno)',
        ],
      ],
      pictures: ['/images/products/produto_cellcolt1.png'],
      links: [
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/A Comparative Quantification in Cellularity of Bone Marrow Aspirated.pdf',
          file_name:
            'A Comparative Quantification in Cellularity of Bone Marrow Aspirated',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/A systematic review of the concept and clinical applications.pdf',
          file_name:
            'A systematic review of the concept and clinical applications',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/Anatomy of the ilium for bone marrow aspiration map of sectors.pdf',
          file_name:
            'Anatomy of the ilium for bone marrow aspiration map of sectors',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/Bone Marrow Aspirate and Biopsy.pdf',
          file_name: 'Bone Marrow Aspirate and Biopsy',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/Bone Marrow Aspirate Clot A Useful Technique in Diagnosis and Fallow-up of Hematological Disorders.pdf',
          file_name:
            'Bone Marrow Aspirate Clot A Useful Technique in Diagnosis and Fallow-up of Hematological Disorders',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/Bone Marrow Biopsy Operator Experience.pdf',
          file_name: 'Bone Marrow Biopsy Operator Experience',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Artigos/Cellcolt/CellColt - RecoveryCell - sistema de microaspiração multiradial de medula óssea autóloga (M-BMA).pdf',
          file_name:
            'CellColt - RecoveryCell - sistema de microaspiração multiradial de medula óssea autóloga (M-BMA)',
          type: 'ARTICLES',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Catálogo/CellColt/LAS_Folheto_CellColt_A4_Maio_23_Visualizacao.pdf',
          file_name: 'LAS folheto Cellcot A4 Maio 23 Visualizacao',
          type: 'CATALOG',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Catálogo/CellColt/LAS_Folheto_CellColt_A4_Maio_23.pdf',
          file_name: 'LAS folheto Cellcot A4 Maio 23',
          type: 'CATALOG',
        },
        {
          title: 'CellColt',
          url: '/pdfs/Relatos_de_caso/Cellcolt/x01° Relato de Caso - Dr. Marcos Cardoso (1).docx',
          file_name: '1° Relato de Caso - Dr. Marcos Cardoso (1)',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Kit Cirúrgico CellColt',
          url: '../images/use-instruction/80517199005-CellColt.pdf',
          file_name: 'Anvisa nº 80517199005',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'CellColt Care',
          url: '../images/use-instruction/Cellcolt-care.pdf',
          file_name: 'Anvisa nº 80517199008',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/produto_cellcolt1.png',
          alt: 'Sistema CellColt para coleta de células mesenquimais',
        },
      ],
      testimonial: {
        testimonial:
          '“Utilizei o Cellcolt algumas vezes, trata-se de um produto de fácil aplicabilidade para o médico, ele nos proporciona uma coleta maior de células mesenquimais por possuir orifícios laterais na extremidade da cânula e permitir a retirada do BMA de vários níveis diferentes.”',
        testimonial_pictures: [
          '/images/testimonials/Cellcolt1.jpg',
          '/images/testimonials/Cellcolt2.jpg',
          '/images/testimonials/Cellcolt3.jpg',
        ],
        doctor: {
          name: 'Dr. Rafael Leme',
          specialty: 'CRM 162172',
          photo: '/images/testimonials/Dr.RafaelLeme.jpg',
        },
      },
    },
  },
  {
    id: 6,
    name: 'CellHarvest',
    specialities: ['Ortopedia'],
    brands: ['MDL'],
    logo_brand: '/images/brands/mdl_logo.png',
    description:
      'O CellHarvest é um kit de cânulas projetado especificamente para aspiração intraóssea. Seu design permite uma coleta radial eficiente, com cinco pontos estrategicamente posicionados, além de uma coleta frontal. O kit inclui uma cânula principal graduada, que fornece precisão nas profundidades, e dois introdutores: um com ponta diamantada para uma perfuração da cortical mais eficaz e outro com ponta romba, que facilita a inserção até a profundidade ideal para a aspiração, minimizando a presença de fragmentos ósseos no material coletado e assegurando uma amostra mais limpa.',
    imageUrl: '/images/products/CellHarvest.png',
    detail: {
      subtitle: '',
      tags: ['Mão', 'Quadril', 'Trauma', 'Joelho', 'Coluna'],
      about: [
        'A cânula de ponta romba facilita a inserção até a profundidade ideal, garantindo que o procedimento seja feito com precisão, sem causar traumas excessivos aos tecidos circundantes. Isso é especialmente importante em procedimentos intraósseos, onde o risco de perfurações indesejadas ou lesões é reduzido.',
        'A ponta romba da cânula ajuda a minimizar a presença de fragmentos ósseos no material coletado, o que melhora a qualidade da amostra obtida para uso em enxertos, matrizes ósseas ou outras terapias regenerativas.',
        'A aspiração radial e frontal proporciona uma coleta mais abrangente e eficiente ao redor e à frente do ponto de inserção. Combinando as duas abordagens, aumenta-se a área de coleta sem a necessidade de reposicionamento frequente, permitindo a obtenção de uma amostra maior e mais completa. Isso reduz a quantidade de perfurações necessárias, tornando o procedimento significativamente mais eficiente e menos invasivo para o paciente. A coleta radial amplia o alcance lateral, enquanto a coleta frontal explora o material à frente da cânula, maximizando a obtenção de células em uma única inserção.',
      ],
      general_information:
        'O aspirado intraósseo pode ser utilizado em uma ampla variedade de procedimentos, em especial nas áreas de Ortopedia, Bucomaxilofacial, Coluna e Fisiatria. Ele pode ser combinado com matrizes ósseas, cartilagens e enxertos de todos os tipos, apresentando excelentes resultados em diversas intervenções. Entre os principais benefícios clínicos estão:,  , Alívio da dor, Tratamento da artrite, Abordagem da artrose, Terapia para tendinopatias, Tratamento de lesões ligamentares, Regeneração de disco intervertebral, Tratamento de Feridas',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Componente',
          'Cânula CellHarvest / Introdutor com ponta diamantada / Introdutor com ponta romba / Tampa do conector leur',
          'Aço inoxidável AISI 304 / ISO 9626 + Polipropileno branco | Aço inoxidável AISI 302 / ISO 9626 + Polipropileno branco | Aço inoxidável AISI 302 / ISO 9626 + Polipropileno branco | lock	Polietileno',
        ],
        [
          'Esterilização e uso',
          'Método de esterilização | Condição de uso | Reprocessamento',
          'Óxido de etileno | Produto de uso único | Proibido',
        ],
        [
          'Apresentação',
          'Embalagem primária | Embalagem secundária',
          'Pouch PET/Papel cirúrgico (Tyvek) com filme de alumínio (PA/PE e PET/PE) | Caixa cartonada individual',
        ],
      ],
      pictures: ['/images/products/CellHarvest.png'],
      links: [
        {
          title: 'CellHarvest',
          url: '/pdfs/Catálogo/CellHarvest/Flyer_A4_CellHarvest_-_v6.pdf',
          file_name: 'Flyer A4 CellHaverst',
          type: 'CATALOG',
        },
        {
          title: 'CellHarvest',
          url: '../images/use-instruction/Cell-harvest.pdf',
          file_name: 'Anvisa nº 80517199011',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/CellHarvest.png',
          alt: 'Kit CellHarvest para aspiração intraóssea',
        },
      ],
      testimonial: {
        testimonial:
          '”O CellHarvest com seus furos laterais me permite uma coleta de material de alta qualidade e mais rápida, com menos sangue periférico, e ainda aumenta a segurança ao minimizar a fragmentação óssea.”',
        testimonial_pictures: [],
        doctor: {
          name: 'Dr Walter Bonaparte Junior',
          specialty: 'CRM 60086 SP',
          photo: '/images/testimonials/Dr.WalterBonaparteJunior.jpg',
        },
      },
    },
  },
  {
    id: 7,
    name: 'EasyCore Hip',
    specialities: ['Ortopedia'],
    brands: ['Apex'],
    logo_brand: '/images/brands/apex_logo.png',
    description:
      'O EasyCore Hip é um sistema híbrido completo para a descompressão do núcleo da cabeça femoral do quadril, para o tratamento minimamente invasivo dos dois primeiros estágios (pré-colapso) da necrose avascular do quadril. O sistema é composto por um kit de instrumentais amplos e uma lâmina de descompressão expansível de uso único.',
    imageUrl: '/images/products/produto_banner_Easycore_Hip_3.png',
    detail: {
      subtitle: '',
      tags: ['Quadril'],
      about: [
        'Versatilidade – É possível utilizar três opções de enxertos: autólogo, grânulo e sintético. Isso permite que o cirurgião escolha o enxerto mais adequado para cada caso, levando em consideração as características do paciente e as necessidades específicas do tratamento. ',
        'Precisão: A lâmina expansível descartável EasyCore Hip, feita em Nitinol, pode ser ampliada e retraída com facilidade até o raio de corte necessário para remover seletivamente o osso necrosado. ',
        'A Biodescompressão do Quadril é uma abordagem inovadora para o tratamento de necrose avascular do quadril. Este procedimento combina o uso do EasyCore Hip com o poder dos ortobiológicos para promover uma regeneração mais rápida e eficiente.',
        'O BMA (Aspirado de Medula Óssea) coletado com o Cellcolt é uma poderosa fonte de células-tronco e fatores de crescimento que estimulam a reparação e a regeneração tecidual. Essa terapia com ortobiológicos acelera o processo de cura, ajudando o corpo a se recuperar de forma mais eficiente.',
        'O osso autólogo, enxerto padrão ouro, pode ser coletado com o Quickdraw, um sistema de coleta minimamente invasivo com cânula de coleta descartável e kit de instrumentais de alta qualidade. Esse enxerto ósseo autólogo utiliza o próprio osso do paciente para fornecer suporte estrutural e estabilidade durante a recuperação.',
        'A Biodescompressão do Quadril oferece uma abordagem abrangente e personalizada para o tratamento de problemas no quadril, visando a restauração da mobilidade, alívio da dor e a regeneração eficaz.',
      ],
      general_information:
        'Descompressão do núcleo da cabeça femoral para o tratamento minimamente invasivo dos dois primeiros estágios (pré-colapso) da necrose avascular do quadril.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Composição', 'Matéria-prima', 'Liga NITI (ASTM 2063)'],
        ['Dimensões', 'Diâmetro | Comprimento', '7 mm | 206,4 mm'],
        ['Registro ANVISA', 'Nº', '80517199001'],
        [
          'Esterilização',
          'Método | Produto Estéril | Validade',
          'Radiação gama | Sim | 3 anos',
        ],
        ['Uso', 'Tipo', 'Uso único / descartável após uso'],
        [
          'Finalidade',
          'Indicação',
          'Descompressão de necrose avascular (estágios I e II) da cabeça femoral',
        ],
        [
          'Compatibilidade',
          'Conjunto compatível',
          'Conjunto EasyCore Hip – Cód. 207-00 (não estéril)',
        ],
        [
          'Contraindicações',
          '-',
          'Infecção, osteoporose severa, alergia a metais, fraturas, doenças imunológicas ou neurológicas graves',
        ],
        ['Efeitos Adversos', '-', 'Não se aplica'],
        [
          'Recomendações',
          'Profissional habilitado',
          'Deve ser utilizado apenas por profissionais qualificados',
        ],
        [
          'Armazenamento',
          'Condições',
          'Local com umidade relativa < 80%, ventilado, sem gases corrosivos',
        ],
      ],
      pictures: ['/images/products/produto_banner_Easycore_Hip_3.png'],
      links: [
        {
          title: 'Easy Core Hip',
          url: '/pdfs/Catálogo/EasyCore_Hip/EasyCore Hip Híbrido .pdf',
          file_name: 'EasyCore Hip Híbrido',
          type: 'CATALOG',
        },
        {
          title: 'EasyCore Hip',
          url: '../images/use-instruction/80517190016-EASYCORE.pdf',
          file_name: 'Anvisa nº 80517190016',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Lâmina expansível descartável EasyCore Hip',
          url: '../images/use-instruction/80517199001-Lamina-EasyCore.pdf',
          file_name: 'Anvisa nº 80517199001',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Kit Cânula Para Necrose Avascular Do Quadril',
          url: '../images/use-instruction/10243070088-Kit-Canula-Avascular-do-Quadril.pdf',
          file_name: 'Anvisa nº 10243070088',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/produto_banner_Easycore_Hip_3.png',
          alt: 'Sistema EasyCore Hip para descompressão femoral',
        },
      ],
      testimonial: {
        testimonial:
          '“É um dispositivo que contribui em estágios iniciais de osteonecrose da cabeça femoral (como por exemplo: artroplastia do quadril) Fator fundamental para evitar o dissabor de uma cirurgia mais complexa. Garantindo um bem-estar e recuperação pós cirúrgica acelerada. Este é o instrumento de escolha dos ortopedistas devido a resistência o que garante a segurança de não quebra durante o ato operatório.”',
        testimonial_pictures: [
          '/images/testimonials/EasyCore Hip 1.jpg',
          '/images/testimonials/EasyCore Hip 2.jpg',
        ],
        doctor: {
          name: 'Dr. Bruno Vargas',
          specialty: 'CRM 998613-RJ',
          photo: '/images/testimonials/Dr.BrunoVargas.jpg',
        },
      },
    },
  },
  {
    id: 8,
    name: 'EasyFill Knee',
    specialities: ['Ortopedia'],
    brands: ['Apex', 'Macom'],
    logo_brand: '/images/brands/apex_logo.png',
    logo_brand_second: '/images/brands/macom_logo.png',
    description:
      'Composto pelo Kit de Cânulas especialmente desenvolvidas para a Osteocondroplastia do Joelho.',
    imageUrl: '/images/products/produto_banner_easyfill_knee_01.png',
    detail: {
      subtitle: 'Solução para Osteocondroplastia do joelho.',
      tags: ['Joelho', 'quadril', 'ombro', 'Punho', 'mão', 'tornozelo e pé'],
      about: [
        'A técnica tem como objetivo proporcionar alívio imediato da dor, melhorar a qualidade de vida e melhora na mobilidade do paciente.',
        'Trata-se de um procedimento cujos riscos associados à cirurgia são baixos.',
        'A nova geração dos kits EasyFill Knee possuem saída lateral ou saída frontal. Desta forma, é possível oferecer ao cirurgião maior precisão no preenchimento da área que precisa ser tratada.',
      ],
      general_information:
        'Osteocondroplastia: Solução cirúrgica, minimamente invasiva e percutânea, que tem como objetivo preencher os defeitos ósseos subcondrais e tratar as lesões da medula óssea do joelho através da injeção de substituto em pasta no local da lesão.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Modelos',
          'Códigos Comerciais',
          'MA-160SCPF, MA-160SCPL, MA-160SCP, MA-200SCP',
        ],
        ['Registro ANVISA', 'Nº', '10243070056'],
        [
          'Composição',
          'Principais materiais',
          'Aço inox AISI 304 / ISO 7153-1, Policarbonato, Polipropileno, ABS, Polietileno, Silicone',
        ],
        [
          'Componentes',
          'Itens do kit',
          'Cânula, Mandril, Êmbolo, Conector 3 vias, Bisturi nº11, Caneta com régua, Injetores de 1 mL',
        ],
        [
          'Compatibilidade',
          'Enxerto',
          'Fosfato de cálcio reabsorvível (não incluso no kit)',
        ],
        [
          'Esterilização',
          'Método | Produto Estéril',
          'Óxido de Etileno (ETO) | Sim',
        ],
        ['Uso', 'Tipo', 'Uso único / descartável'],
        ['Validade', 'Prazo', '5 anos'],
        [
          'Volumes úteis',
          'Capacidade da cânula',
          '1,2 mL a 1,5 mL (varia por modelo)',
        ],
        ['Dimensões da Embalagem', 'L x C x A', '280 x 340 x 115 mm'],
        [
          'Armazenamento',
          'Condições',
          '10°C a 35°C / Umidade 15% a 65% / Local seco, limpo e longe da luz solar',
        ],
        [
          'Transporte',
          'Requisitos',
          'Evitar quedas, choques, empilhamento e umidade; manter integridade da embalagem',
        ],
        [
          'Contraindicações',
          '-',
          'Uso fora da indicação / manipulação incorreta / embalagem danificada ou vencida',
        ],
        [
          'Efeitos Adversos',
          '-',
          'Lesão por má utilização ou manuseio inadequado',
        ],
      ],
      pictures: [
        '/images/products/produto_banner_easyfill_knee_01.png',
        '/images/products/produto_banner_easyfill_knee_01.png',
        '/images/products/produto_banner_easyfill_knee_01.png',
        '/images/products/produto_banner_easyfill_knee_01.png',
        '/images/products/produto_banner_easyfill_knee_01.png',
        '/images/products/produto_banner_easyfill_knee_01.png',
      ],
      links: [
        {
          title: 'Easy Fill Knee',
          url: '/pdfs/Catálogo/Easyfill_knee/Folder_EasyFill Knee_Subcondroplastia_Frontal_Lateral.pdf',
          file_name: 'Folder EasyFill Knee Subcondroplastia Frontal Lateral',
          type: 'CATALOG',
        },
        {
          title: 'Easy Fill Knee',
          url: '/pdfs/Catálogo/Easyfill_knee/Guia_Medico_Subcondroplastia.pdf',
          file_name: 'Guia Medico Subcondroplastia',
          type: 'CATALOG',
        },
        {
          title: 'Kit Descartável Para Osteocondroplastia De Joelho Macom',
          url: '../images/use-instruction/10243070056-Kit-para-osteocondroplastia-de-Joelho.pdf',
          file_name: 'Anvisa nº 10243070056',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: `
            "O ACF Sign elevou a precisão das minhas cirurgias a um novo patamar. A ergonomia e a leveza do equipamento reduzem o cansaço em procedimentos longos, enquanto a performance do perfurador e da serra é simplesmente impecável. A tecnologia NanoDrive entrega potência com controle, e o IPX6 me dá segurança na higienização. É, sem dúvida, um dos motores mais confiáveis com os quais já trabalhei."
            <br /><br /> 
            - <i>Dr. Ricardo Souza, ortopedista cirúrgico.</i>
          `,
          url: 'https://www.youtube.com/watch?v=BSja_KXBDLU&list=PLFJOsaBztZUkxwzGLYQ4H44Wi4nFKe-Be',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_easyfill_knee_01.png',
          alt: 'Kit EasyFill Knee para osteocondroplastia',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [
          '/images/testimonials/Easyfill Knee1.jpg',
          '/images/testimonials/Easyfill Knee2.jpg',
          '/images/testimonials/Easyfill Knee3.jpg',
        ],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 9,
    name: 'EasyFill Small Joints',
    specialities: ['Ortopedia'],
    brands: ['Macom'],
    logo_brand: '/images/brands/macom_logo.png',
    description:
      'O EasyFill Small Joints é indicado para procedimentos minimamente invasivos e é composto por um Kit de cânulas especialmente desenvolvidas para pequenas articulações, como pé, tornozelo, punho e ombro, nos tratamentos de: Osteocondroplastia, Osteoplastia, microfraturas e lesão tipo "Edema do Osso Subcondral", fratura subcondral, alteração do Trabeculado Ósseo, alteração da massa óssea.',
    imageUrl: '/images/products/EasyFill-Small-Joints.png',
    detail: {
      subtitle: 'Solução para Osteocondroplastia de pequenas articulações.',
      tags: ['Mão', 'Pé'],
      about: [
        'Pacientes em geral retornam pra casa no mesmo dia do procedimento.',
        'Procedimento minimamente invasivo.',
        'Melhora da motricidade local.',
        'Alívio imediato da dor.',
        'Melhora da qualidade de vida.',
      ],
      general_information:
        'Tratamento de Osteoplastia, Microfraturas e Lesão tipo "Edema do Osso Subcondral", Fratura subcondral, Alteração do Trabeculado Ósseo, Alteração da Massa Óssea ou preenchimento de cistos/defeitos ósseos com Injeção Percutânea do Substituto Ósseo de Fosfato de Cálcio;',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Código', 'Modelo comercial', 'MA-8030-OPA'],
        ['Registro ANVISA', 'Nº', '10243079008'],
        [
          'Composição',
          'Principais materiais',
          'Aço inox AISI 304 / ISO 7153-1, Copolímero ABS, Policarbonato, Polietileno, Poliéster, Silicone',
        ],
        [
          'Componentes',
          'Itens do kit',
          'Cânula 3,0 x 80mm, Mandril, Êmbolo, Conector 3 vias, Bisturi nº 11, Caneta, Régua, Injetores',
        ],
        ['Volume Útil', 'Cânula', '0,9 mL'],
        ['Dimensões da Embalagem', 'L x C x A', '320 x 250 x 37 mm'],
        [
          'Indicação de uso',
          'Finalidade',
          'Tratamento de lesões ósseas subcondrais (BML), osteocondrite do Tálus, Calcâneo, punho, pé',
        ],
        [
          'Funcionamento',
          'Mecanismo de ação',
          'Injeção de substituto ósseo (não incluso) por cânula graduada guiada por fluoroscopia',
        ],
        [
          'Compatibilidade',
          'Substituto ósseo',
          'Fosfato de cálcio injetável, reabsorvível, com porosidade',
        ],
        [
          'Esterilização',
          'Método | Produto estéril',
          'Óxido de Etileno (ETO) | Sim',
        ],
        ['Uso', 'Tipo', 'Uso único / descartável'],
        ['Validade', 'Prazo', '5 anos'],
        [
          'Norma de Conexão',
          'Compatibilidade',
          'Luer Lock conforme ABNT ISO 594-1',
        ],
        ['Contraindicações', '-', 'Uso fora da indicação'],
        [
          'Efeitos Adversos',
          'Possíveis riscos',
          'Lesões por manuseio inadequado, risco de contaminação por reuso',
        ],
        ['Manuseio', 'Reprocessamento', 'Proibido'],
        [
          'Armazenamento',
          'Condições',
          '10°C a 35°C / Umidade 15% a 65% / Local seco e protegido da luz',
        ],
      ],
      pictures: ['/images/products/EasyFill-Small-Joints.png'],
      links: [
        {
          title: 'EasyFill Small Joints',
          url: '/pdfs/Catálogo/Easyfill_Smalljoints/LAS_Folheto_Easyfill__Small_Joints_Agosto_2023_Visualizacao.pdf',
          file_name:
            'LAS Folheto Easyfill Small Joints Agosto 2023 Visualizacao',
          type: 'CATALOG',
        },
        {
          title:
            'Kit Descartável De Osteocondroplastia Para Pequenas Articulações Macom – Easy Fill Small Joints',
          url: '../images/use-instruction/10243079008-Kit-para-Osteocondroplastia-de-pequenas-articulacoes.pdf',
          file_name: 'Anvisa nº 10243079008',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/EasyFill-Small-Joints.png',
          alt: 'EasyFill Small Joints para pequenas articulações',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 10,
    name: 'Dynavisc',
    specialities: ['Ortopedia'],
    brands: ['Fziomed'],
    logo_brand: '/images/brands/fziomed.png',
    description:
      'O Dynavisc é um gel barreira de adesão bioabsorvível para cirurgia de tendões e nervos periféricos. Fornecido pronto para uso em uma seringa de 1mL com um aplicador estéril e flexível, tem aplicação fácil e rápida. Transparente, proporciona uma visão clara do tendão e das estruturas neurais durante a sua colocação. O Dynavisc é formulado a partir da tecnologia de biomateriais – combinação absorvível de: Carboximetilcelulose (CMC) e Óxido de Polietileno (PEO).',
    imageUrl: '/images/products/produto_banner_Dynavisc_2.png',
    detail: {
      subtitle: '',
      tags: ['Mão', 'Pé', 'Tornozelo', 'Joelho', 'Ombro', 'Cotovelo'],
      about: [
        'Reduz a Fibrose: Estudos demonstraram que a barreira de gel de CMC / PEO pode reduzir a formação de aderências.',
        'Excelente segurança do produto: absorvível, biocompatível, claro e incolor permitindo a visualização de tendões e estruturas neurais.',
      ],
      general_information:
        'Utilizado durante cirurgias de tendões e/ ou de nervos periféricos para revestir tecidos cirurgicamente traumatizados., Funciona como uma barreira protetora temporária para separar os tecidos e reduzir a fibrose e a formação de aderências pós-cirúrgicas. Indicado para: Cirurgias da Mão, Cirurgias do Joelho, Cirurgias de Ombro e Cotovelo, Cirurgias do Pé & Tornozelo',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Registro ANVISA', 'Número', '80517190037'],
        [
          'Finalidade de Uso',
          'Indicação',
          'Reduzir fibrose e formação de adesões após cirurgia de tendões e nervos periféricos',
        ],
        [
          'Composição',
          'Material',
          'Gel absorvível, transparente, viscoselástico, não contém componentes animais ou bacterianos',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          '1 seringa com Dynavisc (1 mL, luer lock), 1 ponta aplicadora, 1 instrução de uso',
        ],
        ['Estéril', 'Método de esterilização', 'Esterilizado por vapor'],
        ['Reutilização', 'Uso único', 'Produto de uso único – não reutilizar'],
        [
          'Armazenamento',
          'Temperatura',
          '2 °C a 25 °C (não congelar, não expor a temperaturas acima de 39 °C)',
        ],
        ['Contraindicações', '-', 'Presença de infecção já manifesta'],
        ['Avisos', '-', 'Não injetar em vasos sanguíneos'],
        [
          'Aplicação',
          'Local de uso',
          'Entre tendão e bainha; evitar aspiração/remoção do gel',
        ],
        [
          'Reações adversas',
          'Possíveis efeitos',
          'Febre, dor, vermelhidão, inchaço, prurido, infecção, aderência, entre outros',
        ],
        [
          'Atenção especial',
          'Pacientes alérgicos',
          'Não utilizar em pacientes com hipersensibilidade conhecida aos componentes',
        ],
        [
          'Pós-uso',
          'Descarte',
          'Descartar seringas e resíduos conforme política institucional de resíduos biológicos',
        ],
      ],
      pictures: ['/images/products/produto_banner_Dynavisc_2.png'],
      links: [
        {
          title: 'Dynavisc',
          url: '/pdfs/Artigos/Dynavisc/Prevention Of Peritendinous Adhesions After Tenolysis by Means Of A Carboxy-Methylcellulose (CMC).pdf',
          file_name:
            'Prevention Of Peritendinous Adhesions After Tenolysis by Means Of A Carboxy-Methylcellulose (CMC)',
          type: 'ARTICLES',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Artigos/Dynavisc/Revision surgery in carpal tunnel syndrome.pdf',
          file_name: 'Revision surgery in carpal tunnel syndrome',
          type: 'ARTICLES',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Artigos/Dynavisc/Efficacy and Safety of Dynavisc® Gel in Preventing.pdf',
          file_name: 'Efficacy and Safety of Dynavisc® Gel in Preventing',
          type: 'ARTICLES',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Artigos/Dynavisc/Efficacy of Anti-adhesion gel of CMC with PEO on peripheral nerve experimental results.pdf',
          file_name:
            'Efficacy of Anti-adhesion gel of CMC with PEO on peripheral nerve experimental results',
          type: 'ARTICLES',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Artigos/Dynavisc/Prevention of perineural fibrosis after neurolysis and carboxymethylcellulose polyethileneoxide barrier agent f.pdf',
          file_name:
            'Prevention of perineural fibrosis after neurolysis and carboxymethylcellulose polyethileneoxide barrier agent f',
          type: 'ARTICLES',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Catálogo/Dynavisc/FZIOMED_Folder_Dynavisc_Maio_23_Visualizacao.pdf',
          file_name: 'FZIOMED Folder Dynavisc Maio 23 Visualizacao',
          type: 'CATALOG',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Closed Rupture of extensor hallucis longus_dr Franco Bassetto.pdf',
          file_name:
            'Dynavisc_Closed Rupture of extensor hallucis longus_dr Franco Bassetto',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Dupuytren Desease_dr Gustavo Mantovani.pdf',
          file_name: 'Dynavisc Dupuytren Desease dr Gustavo Mantovani',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_hand tumor Resection_dr Gustavo Mantovani.pdf',
          file_name: 'Dynavisc hand tumor Resection dr Gustavo Mantovani',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Irregular Nodule on the Flexor Tendons_dr Gustavo Mantovani.pdf',
          file_name:
            'Dynavisc Irregular Nodule on the Flexor Tendons dr Gustavo Mantovani',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Ligament Reconstruction_dr Marcio Aita.pdf',
          file_name: 'Dynavisc Ligament Reconstruction dr Marcio Aita',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Osteoarthritis_dr Marcio Aita.pdf',
          file_name: 'Dynavisc Osteoarthritis dr Marcio Aita',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Tenolysis and Neurorrhaphies_dr Franco Basseto.pdf',
          file_name: 'Dynavisc Tenolysis and Neurorrhaphies dr Franco Basseto',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '/pdfs/Relatos_de_caso/Dynavisc/Dynavisc_Tenoplasty_dr Marcio Aita.pdf',
          file_name: 'Dynavisc Tenoplasty dr Marcio Aita',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Dynavisc',
          url: '../images/use-instruction/IFU_Dynavisc_02402B-Draft.pdf',
          file_name: 'Anvisa nº 80517190037',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeos do Dynavisc',
          url: 'https://bit.ly/playlist_dynavisc',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_Dynavisc_2.png',
          alt: 'Dynavisc gel anti-aderente para cirurgias',
        },
      ],
      testimonial: {
        testimonial:
          '“As aderências pós-operatórias sempre foram a maior complicação nas cirurgias, e sempre pensávamos nos benefícios que traria um produto que impedisse isso. O Dynavisc veio suprir essa necessidade, mostrando bons resultados desde o início.”',
        testimonial_pictures: [
          '/images/testimonials/Dynavisc1.png',
          '/images/testimonials/Dynavisc2.jpg',
        ],
        doctor: {
          name: 'Dra. Ana Faccioni',
          specialty: 'CRM: 37417-PR',
          photo: '/images/testimonials/Dra.AnaFaccioni.jpg',
        },
      },
    },
  },
  {
    id: 11,
    name: 'Interpose',
    specialities: ['Coluna'],
    brands: ['Fziomed'],
    logo_brand: '/images/brands/fziomed.png',
    description:
      'O Interpose é um gel barreira de adesão bioabsorvível para cirurgia de coluna, pronto para ser usado, de aplicação fácil e rápida.',
    imageUrl:
      '/images/products/produto_banner_Interpose_Gel_AntiAdesao_Cirurgia_Coluna_Embalagem1.png',
    detail: {
      subtitle: '',
      tags: ['Cabeça e Pescoço', 'Coluna'],
      about: [
        'O Interpose já foi utilizado em mais de 500.000 procedimentos pelo mundo.',
        'Através de estudos observou-se Redução da fibrose, Redução efetiva da adesão e da dor, Menos complicações neurológicas, Menos complicações músculo esqueléticas, Excelente segurança do produto: absorvível, biocompatível, claro e incolor que não obstrui o local operado',
      ],
      general_information:
        'O Interpose destina-se a ser colocado em torno do tecido neural após cirurgia de coluna para reduzir a formação de adesão e relatos de sintomas, como a dor. O Interpose é formulado a partir da tecnologia de biomateriais – combinação absorvível de: Carboximetilcelulose (CMC) e Óxido de Polietileno (PEO).',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Registro ANVISA', 'Número', '80517190034'],
        [
          'Finalidade de Uso',
          'Indicação',
          'Barreira mecânica para reduzir adesões pós-operatórias em cirurgias de coluna',
        ],
        [
          'Composição',
          'Fórmula',
          'Água estéril, CMC, PEO, Cloreto de sódio, Cloreto de cálcio',
        ],
        [
          'Apresentação',
          'Embalagem',
          '1 seringa de 3 mL (luer lock), 1 ponta aplicadora, 1 instrução de uso',
        ],
        [
          'Esterilização',
          'Método | Estéril Sim / Não',
          'Esterilizado por vapor | Sim',
        ],
        ['Reutilização', 'Tipo de uso', 'Uso único – Não reutilizar'],
        ['Armazenamento', 'Condições', 'Temperatura entre 2°C e 25°C'],
        ['Contraindicações', '-', 'Presença de infecções evidentes'],
        [
          'Precauções',
          'Uso em pacientes',
          'Não recomendado para crianças, grávidas ou lactantes',
        ],
        [
          'Incompatibilidades',
          'Não utilizar com',
          'Outros fármacos, produtos de barreira ou agentes hemostáticos',
        ],
        [
          'Aplicação',
          'Momento de uso | Local de uso',
          'Após hemóstase e antes do fechamento da incisão | Em torno dos tecidos neurais',
        ],
        [
          'Estudos Clínicos',
          'Evidência científica',
          'Estudo multicêntrico com 352 pacientes demonstrou redução significativa da dor nas pernas',
        ],
        [
          'Eficácia',
          'Resultados',
          'Melhoria estatisticamente significativa nas dores e qualidade de vida em até 6 meses',
        ],
        [
          'Modo de Uso',
          'Aplicação',
          'Técnica asséptica, uso imediato após a cirurgia, sem irrigação do local após aplicação',
        ],
        ['Volume do Produto', 'Quantidade', '3 mL'],
      ],
      pictures: [
        '/images/products/produto_banner_Interpose_Gel_AntiAdesao_Cirurgia_Coluna_Embalagem1.png',
      ],
      links: [
        {
          title: 'Interpose',
          url: '/pdfs/Artigos/Interpose/Clinical Assessment of a CMC and PEO gel to inhibit postoperative epidural ashesion formation after discectomy.pdf',
          file_name:
            'Clinical Assessment of a CMC and PEO gel to inhibit postoperative epidural ashesion formation after discectomy',
          type: 'ARTICLES',
        },
        {
          title: 'Interpose',
          url: '/pdfs/Artigos/Interpose/EFFECT~1.PDF',
          file_name: 'EFFECT~1',
          type: 'ARTICLES',
        },
        {
          title: 'Interpose',
          url: '/pdfs/Artigos/Interpose/Prevention of peri­neural fibrosis after neurolysis and carboxy­methyl­.pdf',
          file_name:
            'Prevention of peri­neural fibrosis after neurolysis and carboxy­methy',
          type: 'ARTICLES',
        },
        {
          title: 'Interpose',
          url: '/pdfs/Artigos/Interpose/Reduction of leg pain by Oxiplex Gel after lumbar discectomy.pdf',
          file_name:
            'Reduction of leg pain by Oxiplex Gel after lumbar discectomy',
          type: 'ARTICLES',
        },
        {
          title: 'Interpose',
          url: '/pdfs/Catálogo/Interpose/FIZIOMED_Folder_Interpose_Maio_23_Visualizacao.pdf',
          file_name: 'FIZIOMED Folder Interpose Maio 23 Visualizacao',
          type: 'CATALOG',
        },
        {
          title: 'Interpose',
          url: '../images/use-instruction/IFU_Interpose_02391B-Draft.pdf',
          file_name: 'Anvisa nº 80517190034',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeos Interpose',
          url: 'https://bit.ly/playlist_interpose',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_Interpose_Gel_AntiAdesao_Cirurgia_Coluna_Embalagem1.png',
          alt: 'Interpose gel anti-adesão para cirurgia de coluna',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [
          '/images/testimonials/Interpose1.jpg',
          '/images/testimonials/Interpose2.png',
        ],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 12,
    name: 'Oxiplex/AP',
    specialities: ['Ginecologia'],
    brands: ['Fziomed'],
    logo_brand: '/images/brands/fziomed.png',
    description:
      'O gel de barreira de adesão Oxiplex/AP® é uma formulação exclusiva da Fziomed. Trata-se de um gel fluido, descartável e de uso único. Destina-se a servir como uma barreira mecânica temporária e absorvível que separa superfícies de tecido opostas traumatizadas cirurgicamente na cavidade peritoneal, onde as adesões poderiam potencialmente se formar.',
    imageUrl:
      '/images/products/produto_banner_Oxiplex_AP_Gel_Barreira_AntiAdesao_Cirurgia_Geral_Embalagem.png',
    detail: {
      subtitle: '',
      tags: ['Peritônio', 'Ginecologia'],
      about: [
        'Separa e reveste os tecidos reduzindo a fibrose e a adesão.',
        'Modera a dor e melhora os resultados cirúrgicos.',
        'Fácil e rápida aplicação. Pronto para usar, claro e incolor, é seguro e bioabsorvível.',
      ],
      general_information:
        'Cirurgias Peritoneais ,Cirurgias Ginecológicas (Adesiólise, Cirurgia Ovariana, Cirurgia Tubária, Miomectomia, Tratamento da Endometriose, Histerectomia)',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', 'FPC-09012 / FPC-09014'],
        ['Registro ANVISA', 'Número', '80517190041'],
        [
          'Produto Estéril	',
          'Condição',
          'Estéril – esterilizado por óxido de etileno',
        ],
        [
          'Composição',
          'Material',
          'Gel de PEO (óxido de polietileno) + CMC (carboximetilcelulose de sódio), estabilizado por cálcio',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          '2 seringas de 20 mL + 1 aplicador + instruções de uso',
        ],
        [
          'Indicação de uso',
          'Finalidade',
          'Reduzir a incidência, extensão e severidade de aderências pós-operatórias',
        ],
        [
          'Indicações clínicas',
          'Aplicações',
          'Cirurgias intrauterinas e peritoneais',
        ],
        [
          'Contraindicações',
          '',
          'Presença de infecção; histórico de hipersensibilidade ao produto',
        ],
        ['Reutilização', '', 'Proibido reprocessar – uso único'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura entre 2–25 °C; manter ao abrigo da luz',
        ],
        [
          'Método de Aplicação',
          '',
          'Aplicação direta nas superfícies anatômicas ao final da cirurgia com camada única (2 mm)',
        ],
        ['Validade', 'Tempo de Validade', '3 anos (vide embalagem)'],
      ],
      pictures: [
        '/images/products/produto_banner_Oxiplex_AP_Gel_Barreira_AntiAdesao_Cirurgia_Geral_Embalagem.png',
      ],
      links: [
        {
          title: 'Oxiplex AP',
          url: '/pdfs/Artigos/Oxiplex_AP/Oxiplex AP - Lundorff - Clinical Evaluation (Laparoscopy).pdf',
          file_name:
            'Oxiplex AP - Lundorff - Clinical Evaluation (Laparoscopy)',
          type: 'ARTICLES',
        },
        {
          title: 'Oxiplex AP',
          url: '/pdfs/Artigos/Oxiplex_AP/Oxiplex AP - Lundorff - Young Reduction of Postoperative (Laparoscopic).pdf',
          file_name:
            'Oxiplex AP - Lundorff - Young Reduction of Postoperative (Laparoscopic)',
          type: 'ARTICLES',
        },
        {
          title: 'Oxiplex AP',
          url: '/pdfs/Relatos_de_caso/Oxiplex_AP/Oxiplex_AP_Dr Patrick Bellelis_Endometriosis-Complications-1.pdf',
          file_name:
            'Oxiplex AP Dr Patrick Bellelis_Endometriosis-Complications-1',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex AP',
          url: '/pdfs/Relatos_de_caso/Oxiplex_AP/Oxiplex-AP Endometrioma DrKondo.pdf',
          file_name: 'Oxiplex-AP Endometrioma DrKondo',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex AP',
          url: '/pdfs/Relatos_de_caso/Oxiplex_AP/OxiplexAP_Dr.-Tcherniakovsky_Videolaparoscopic-Treatment-of-De.pdf',
          file_name:
            'OxiplexAP_Dr.-Tcherniakovsky_Videolaparoscopic-Treatment-of-De',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex/AP',
          url: '../images/use-instruction/80517190041-OXIPLEX-AP.pdf',
          file_name: 'Anvisa nº 80517190041',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeos do Oxiplex AP',
          url: 'https://bit.ly/playlist_OxiplexAP',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_Oxiplex_AP_Gel_Barreira_AntiAdesao_Cirurgia_Geral_Embalagem.png',
          alt: 'Oxiplex AP gel barreira para cirurgias peritoneais',
        },
      ],
      testimonial: {
        testimonial:
          '“A prevenção de aderências pós-operatórias em cirurgias pélvicas é sempre um desafio. Sem dúvida que uma boa técnica cirúrgica é o principal fator, no entanto, se pudermos otimizar estes resultados, isto seria ainda melhor. Tenho utilizado o Gel Oxiplex  AP para cirurgias de endometriose, miomectomias, histerectomia e cirurgias oncológicas com excelentes resultados nos controles de imagem e em um second look que tivemos a oportunidade de realizar.”',
        testimonial_pictures: [
          '/images/testimonials/OxiplexAP1.png',
          '/images/testimonials/OxiplexAP2.png',
        ],
        doctor: {
          name: 'Dr. Patrick Bellelis',
          specialty: 'CRM 117230',
          photo: '/images/testimonials/Dr.PatrickBellelis.jpg',
        },
      },
    },
  },
  {
    id: 13,
    name: 'Oxiplex/IU',
    specialities: ['Ginecologia'],
    brands: ['Fziomed'],
    logo_brand: '/images/brands/fziomed.png',
    description:
      'O gel de barreira de adesão Oxiplex/IU é uma formulação exclusiva da Fziomed. É um gel escoável que se destina a servir como uma barreira mecânica temporária e absorvível que separa superfícies de tecidos opostos traumatizados cirurgicamente na cavidade uterina, onde as aderências podem se formar. O Oxiplex/IU é fornecido pronto para uso em uma seringa de 10 mL com um aplicador estéril.',
    imageUrl:
      '/images/products/produto_banner_Oxiplex_IU_Gel_AntiAdesao_Cirurgia_Intrauterina_Embalagem.png',
    detail: {
      subtitle: '',
      tags: ['Cavidade Uterina', 'Ginecologia'],
      about: [
        'Reduz a Fibrose: Separa e reveste os tecidos, reduz aderências, protege o procedimento e otimiza a cura.',
        'Segurança excepcional do produto.',
        'Pronto para usar, de aplicação rápida, incolor e oferece cobertura completa.',
      ],
      general_information:
        'Projetado e indicado para uso em cirurgia intrauterina. Adesiólise, Síndrome de Asherman, Miomectomia, Polipectomia, Dilatação e Curetagem, Produtos retidos da concepção, Cirurgia do Septo Uterino',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', 'FPC-09017 / FPC-09019'],
        ['Registro ANVISA', 'Número', '80517190042'],
        [
          'Produto Estéril	',
          'Condição',
          'Estéril – esterilizado por óxido de etileno',
        ],
        [
          'Composição',
          'Material',
          'Gel de PEO (óxido de polietileno) + CMC (carboximetilcelulose de sódio), estabilizado por cálcio',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          '1 seringa de 10 mL + 1 aplicador + etiquetas autoadesivas + instruções de uso',
        ],
        [
          'Indicação de uso',
          'Finalidade',
          'Reduzir a incidência, extensão e severidade de aderências pós-operatórias',
        ],
        [
          'Indicações clínicas',
          'Aplicações',
          'Procedimentos intrauterinos para redução de aderências',
        ],
        [
          'Contraindicações',
          '',
          'Presença de infecção; histórico de hipersensibilidade ao produto',
        ],
        ['Reutilização', '', 'Proibido reprocessar – uso único'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura entre 2–25 °C; manter ao abrigo da luz',
        ],
        [
          'Método de Aplicação',
          '',
          'Aplicação direta na cavidade uterina ao final do procedimento, preenchendo útero e canal cervical com uma camada uniforme',
        ],
        ['Validade', 'Tempo de Validade', '3 anos (vide embalagem)'],
      ],
      pictures: [
        '/images/products/produto_banner_Oxiplex_IU_Gel_AntiAdesao_Cirurgia_Intrauterina_Embalagem.png',
      ],
      links: [
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Artigos/Oxiplex_IU/Oxiplex IU - Di Spiezio - Home Du Tecnhique.pdf',
          file_name: 'Oxiplex IU - Di Spiezio - Home Du Tecnhique',
          type: 'ARTICLES',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Artigos/Oxiplex_IU/Oxiplex IU - Difficult Hysteroscopic Surgery and Intrauterine Carboxymethyl Cellulose Polyethylene Oxide Dual Polymer Gel Res.pdf',
          file_name:
            'Oxiplex IU - Difficult Hysteroscopic Surgery and Intrauterine Carboxymethyl Cellulose Polyethylene Oxide Dual Polymer Gel Res',
          type: 'ARTICLES',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Artigos/Oxiplex_IU/Oxiplex IU - DiSpiezio - Efficacy of a Polyethylene Oxide–Sodium Carboxymethylcellulose Gel in Prevention of Intrauterin.pdf',
          file_name:
            'Oxiplex IU - DiSpiezio - Efficacy of a Polyethylene Oxide–Sodium Carboxymethylcellulose Gel in Prevention of Intrauterin',
          type: 'ARTICLES',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Artigos/Oxiplex_IU/Oxiplex IU - Fuchs - Intercoat OxiplexAP Gel for Preventing Intrauterine Adhesions.pdf',
          file_name:
            'Oxiplex IU - Fuchs - Intercoat OxiplexAP Gel for Preventing Intrauterine Adhesions',
          type: 'ARTICLES',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/Dr. Marcia Penteado Case Report hyteroscopic metroplasty.pdf',
          file_name: 'Dr. Marcia Penteado Case Report hyteroscopic metroplasty',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/Dra Marcia Penteado Case Report hyteroscopic metroplasty and myomectomy.pdf',
          file_name:
            'Dra Marcia Penteado Case Report hyteroscopic metroplasty and myomectomy',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/MM0189-_OxiplexAP_Dr.Moscovitz_Hysteroscopic-Adhesiolysis_11122024.pdf',
          file_name: 'Dr.Moscovitz Hysteroscopic Adhesiolysis',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/MM0191-_OxiplexIU_Dr.-Kondo_Septate-Uterus_11122024.pdf',
          file_name: 'Dr. Kondo Septate Uterus',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/MM0193-_OxiplexIU_Dr.-Moscovitz_Treatment-of-Intrauterine-Adhesions_11112024.pdf',
          file_name: 'Dr. Moscovitz Treatment of Intrauterine Adhesions',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/Oxiplex IU CaseReport Fziomed dr. Kondo- Intrauterine Adhesions and Pelvic Endometriosis.pdf',
          file_name:
            'Dr. Kondo  Intrauterine Adhesions and Pelvic Endometriosis',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/Oxiplex IU CaseReport Fziomed dr. Menakaya- Septate-Uterus.pdf',
          file_name: 'Dr. Menakaya Septate Uterus',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/Oxiplex IU CaseReport Fziomed_dr Menakaya - Fundal-Haematometria.pdf',
          file_name: 'Dr. Menakaya Fundal Haematometria',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/Oxiplex-IU_Hysteroscopic Treatment of Retained Products of Conception Dr.Kelm.pdf',
          file_name:
            'Dr.Kelm Hysteroscopic Treatment of Retained Products of Conception',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex IU',
          url: '/pdfs/Relatos_de_caso/Oxiplex_IU/OxiplexIU_Adhesions_Following_MIUA_with_Partial_Uterine_Septum_dr Cunha.pdf',
          file_name:
            'Dr Cunha Adhesions Following MIUA with Partial Uterine Septum',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Oxiplex/IU',
          url: '../images/use-instruction/80517190040-Oxiplex-IU.pdf',
          file_name: 'Anvisa nº 80517190040',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/produto_banner_Oxiplex_IU_Gel_AntiAdesao_Cirurgia_Intrauterina_Embalagem.png',
          alt: 'Oxiplex IU gel para cirurgia intrauterina',
        },
      ],
      testimonial: {
        testimonial:
          '“Uma das possíveis complicações no pós-operatório de cirurgias intrauterinas é o surgimento de sinequias na cavidade endometrial, o que pode vir a comprometer o futuro reprodutivo das pacientes. Dessa maneira, medidas que visem a PREVENÇÃO dessas sinequias são benéficas para as pacientes. Assim sendo, o uso do OXIPLEX IU consiste em ótima opção na prevenção das sinequias, além de ser material de aplicação bastante simples”',
        testimonial_pictures: [
          '/images/testimonials/OxiplexIU1.png',
          '/images/testimonials/OxiplexIU2.png',
          '/images/testimonials/OxiplexIU3.png',
        ],
        doctor: {
          name: 'Dr. Adolpho Kelm',
          specialty: 'CRM 94636',
          photo: '/images/testimonials/Dr.AdolphoKelm.jpg',
        },
      },
    },
  },
  {
    id: 14,
    name: 'Gripper',
    specialities: ['Ortopedia'],
    brands: ['MedEnvision'],
    logo_brand: '/images/brands/medenvision_logo.png',
    description:
      'O Gripper é um dispositivo auto retrátil, patenteado mundialmente, que permite aos cirurgiões ortopedistas executarem a cirurgia de forma procedimentalizada e posicionar/fixar os afastadores com segurança, fornecendo maior visibilidade, estabilidade e segurança para a operação.',
    imageUrl: '/images/products/produto_gripper.png',
    detail: {
      subtitle: '',
      tags: ['Quadril'],
      about: [
        'O conceito de procedimentalização do centro cirúrgico através do Esyconcept e do uso do Gripper permite que o cirurgião foque 100% no paciente durante a cirurgia.',
        'Artigo publicado no Journal of Orthopaedics mostra os resultados do Gripper®️ durante a curva de aprendizado da Abordagem Direta Anterior em ATQ, onde se destacam menos lesões nos músculos, menor índice de inflamação, menor perda de sangue e menor tempo cirúrgico.',
        'Estabilidade: O Gripper® é estável e versátil sob as mais exigentes circunstâncias, sem perder a estabilidade necessária do afastador.',
        'Redução no tempo cirúrgico gerando menos riscos de potenciais contaminações.',
        'Visibilidade: O Gripper® permite visibilidade superior no campo de operação facilitando a detecção das estruturas anatômicas.',
      ],
      general_information:
        'Cirurgias Quadril (Com destaque à ATQ – Acesso Via Anterior), Cirurgias Joelho, Cirurgias Pé & Tornozelo, Cirurgias Coluna',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Nome Comercial', 'Nome | Código', 'Gripper | ME-GR1000'],
        ['Registro ANVISA', 'Número', '80517190032'],
        ['Esterilização', 'Método | Produto estéril', 'Óxido de etileno | Sim'],
        ['Validade', 'Prazo de uso', '3 anos'],
        ['Uso', 'Tipo', 'Uso único – Produto descartável'],
        [
          'Composição',
          'Materiais principais',
          'Policarbonato, PBT, Tevdek (PET/PTFE), Aço inox (ASTM A967), Borracha EPDM',
        ],
        ['Dimensões', 'Produto principal', 'Gripper: 120 x 38 x 35 mm'],
        [
          'Acessórios compatíveis',
          'Modelos',
          'ME-FD1000, ME-FD3000, ME-FD4000 (dispositivos de fixação vendidos separadamente, não estéreis)',
        ],
        [
          'Dimensões dos acessórios',
          'ME-FD1000',
          'postes 88,8x71x210 mm e 88,8x71x95 mm',
        ],
      ],
      pictures: ['/images/products/produto_gripper.png'],
      links: [
        {
          title: 'Gripper',
          url: '/pdfs/Catálogo/Gripper/Medenvision_2020_Gripper (1).pdf',
          file_name: 'Medenvision_2020_Gripper (1)',
          type: 'DEFAULT',
        },
        {
          title: 'Retrator de Acesso Cirúrgico – GRIPPER',
          url: '../images/use-instruction/80517190032-Gripper.pdf',
          file_name: 'Anvisa nº 80517190032',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeos do Gripper MedEnvision',
          url: 'https://bit.ly/playlist_Gripper',
        },
      ],
      images: [
        {
          url: '/images/products/produto_gripper.png',
          alt: 'Gripper MedEnvision sistema de afastamento',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: ['/images/testimonials/Gripper.jpg'],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 15,
    name: 'EsySuit',
    specialities: ['Ortopedia'],
    brands: ['MedEnvision'],
    logo_brand: '/images/brands/medenvision_logo.png',
    description:
      'O EsySuit é um campo cirúrgico de cobertura estéril, confeccionado em peça única de tecido 2SBL, com dimensões de 400cm de comprimento x 240cm de largura, e mangas integradas nas pernas para maior mobilidade. Possui uma camada externa absorvente reforçada nas zonas cirúrgicas críticas (240cm x 164cm). A combinação design inovador e materiais de alta qualidade proporciona segurança e eficiência no ambiente cirúrgico.',
    imageUrl: '/images/products/esysuit-1.png',
    detail: {
      subtitle: '',
      tags: ['Quadril', 'Joelho'],
      about: [
        'O EsySuit™ pode ser colocado em menos de 1 minuto, garantindo agilidade e simplicidade no preparo cirúrgico.',
        'Reduz a necessidade de múltiplas manipulações e permite a execução de tarefas simultâneas, otimizando o trabalho da equipe médica.',
        'Elimina a necessidade de levantar as pernas do paciente durante o procedimento, proporcionando conforto para a equipe e o paciente.',
        'A janela integrada economiza tempo, eliminando a necessidade de drapeados padronizados e aumentando a eficiência no preparo.',
        'Com a redução de resíduos de 50 a 66%, o EsySuit™ contribui para um centro cirúrgico mais sustentável e responsável ambientalmente.',
        'Aumenta a eficiência dos processos no centro cirúrgico, garantindo a segurança tanto para os pacientes quanto para a equipe médica.',
      ],
      general_information:
        'Destina-se à cobertura protetora do paciente. O EsySuit™ foi projetado para estabelecer e manter um campo estéril durante o procedimento cirúrgico, e contribui para reduzir o risco de infecção. A peça única permite aplicar o EsySuit™ de forma rápida e fácil.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Nome Comercial',
          'Modelos',
          'EsySuit: ME-ED1000 (Supine), ME-ED1100 (Lateral), ME-ED1200 (Table), ME-ED2000 (Knee), ME-ED3000 (Shoulder), ME-ED1150 (AL Pouch)',
        ],
        ['Registro ANVISA', 'Número', '80517190042'],
        [
          'Composição',
          'Materiais',
          'Polipropileno (campo cirúrgico), poliuretano transparente (área de incisão)',
        ],
        [
          'Dimensões',
          'Exemplo',
          'ME-ED1000 a ME-ED3000: 2400 x 4000 mm / ME-ED1150: 1000 x 600 mm',
        ],
        ['Esterilização', 'Método | Produto estéril', 'Óxido de etileno | Sim'],
        ['Uso', 'Tipo', 'Produto de uso único – descartar após uso'],
        [
          'Apresentação',
          'Embalagem',
          'Primária: Tyvek + filme PET-O/PE (ou papel + filme azul para AL Pouch); Secundária: caixa cartonada',
        ],
        [
          'Indicação de Uso',
          'Finalidade',
          'Cobertura protetora do paciente para manter campo estéril e reduzir risco de infecção',
        ],
        [
          'Acessórios',
          'Opcional',
          'AL pouch (ME-ED1150), usado com o EsySuit Lateral para facilitar mobilização da perna',
        ],
        [
          'Armazenamento',
          'Condições',
          'Temperatura de 5°C a 30°C, local seco, longe da luz solar',
        ],
        ['Transporte', 'Requisitos', 'Mesmas condições de armazenamento'],
        ['Contraindicações', '-', 'Não se aplica'],
        ['Efeitos Adversos', '-', 'Não se aplica'],
        [
          'Descarte',
          'Procedimento',
          'Como resíduo hospitalar conforme RDC 222/18',
        ],
      ],
      pictures: ['/images/products/esysuit-1.png'],
      links: [
        {
          title: 'Esy_Suit',
          url: '/pdfs/Catálogo/Esy_Suit/Medenvision_2020_Esysuit.pdf',
          file_name: 'Medenvision_2020_Esysuit',
          type: 'ARTICLES',
        },
        {
          title: 'EsySuit',
          url: '../images/use-instruction/80517190042-EsySuit.pdf',
          file_name: 'Anvisa nº 80517190042',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/esysuit-1.png',
          alt: 'EsySuit campo cirúrgico estéril',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: ['/images/testimonials/Esysuit.jpg'],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 16,
    name: 'V4 - Monitor de Nervos Intra-operatórios',
    specialities: ['Cabeça e Pescoço'],
    brands: ['Neurosign'],
    logo_brand: '/images/brands/neurosign.png',
    description:
      'A linha de monitores de nervos intra-operatórios Neurosign V4 é destinada a reduzir o risco de danos nos nervos em procedimentos cirúrgicos.',
    imageUrl: '/images/products/produto_banner_Neurosign.png',
    detail: {
      subtitle: '',
      tags: [],
      about: [
        'Simplicidade – Controles fáceis de usar.',
        'Versatilidade – Adequado para uma vasta gama de procedimentos cirúrgicos.',
        'Proteção – Ajuda a evitar danos neurais e proporciona maior conforto ao cirurgião e paciente.',
        'Imediato – Áudio de EMG potente, que fornece feedback imediato e intuitivo diretamente ao cirurgião.',
      ],
      general_information:
        'Com 4 canais, o Neurosign V4 é um equipamento (com os eletrodos, sensores e probes) que auxilia os cirurgiões ao monitorizar múltiplos nervos cranianos, periféricos e cervicais em tempo real em diversos procedimentos. Permite que o cirurgião identifique e localize o tecido neural delicado com precisão. Destina-se a: neurocirurgia, cirurgia maxilofacial, cirurgia de cabeça e pescoço e otorrinolaringologia em geral.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Componentes Principais',
          'Unidade principal, Unidade de estimulação, Pré-amplificador, Sensor de silêncio, Software de Monitoramento ',
          'Monitor com tela sensível ao toque, botões de controle e conectores diversos, Permite conectar até dois probes de estimulação simultaneamente, Versões com 4 ou 8 canais para captação e amplificação dos sinais EMG, Reduz interferências de eletrocauterização, Com perfis customizáveis por cirurgião, filtros e relatórios exportáveis',
        ],
        [
          'Dispositivos Estéreis	',
          'Estimuladores cirúrgicos (uso único), Kit cânula com eletrodo de laringe, Eletrodos de agulha e superfície',
          'Agulha curva, elevator, anel dissector, tesoura com/sem eletrodo, Para captação de sinais das pregas vocais, Subdérmicos, de laringe, de referência',
        ],
        [
          'Composição',
          'Monitor, Estimuladores',
          'Não invasivo; múltiplos materiais; classe I, Aço inox AISI 304/316/410, PVC com fio de cobre',
        ],
        [
          'Registro ANVISA',
          '',
          '80517190035 (sistema Neurosign V4), 80517190007 (estimuladores), 80969869008 (kit cânula)',
        ],
        [
          'Indicação de uso',
          'Aplicações',
          'Cirurgias otorrinolaringológicas, neurológicas, de parótida, tireoide, coluna, extremidades',
        ],
        [
          'Modo de Funcionamento',
          'Monitoramento EMG + estimulação',
          'Amplificação de sinais EMG e estimulação com resposta auditiva e visual',
        ],
        [
          'Produto Estéril',
          'Condição',
          'Unidade principal: não estéril; Acessórios descartáveis: estéreis (óxido de etileno)',
        ],
        [
          'Reutilização',
          'Unidade principal, Itens descartáveis',
          'Reutilizável, com manutenção preventiva e calibração, Uso único – não reesterilizar',
        ],
        [
          'Esterilização',
          'Método',
          'Descartáveis: óxido de etileno; monitor: limpeza e desinfecção manual',
        ],
        [
          'Contraindicações',
          '',
          'Uso com bloqueadores neuromusculares (monitor); alergia a PVC ou aço inox (descartáveis)',
        ],
        [
          'Efeitos Adversos',
          '',
          'Raros – vermelhidão, inchaço da pele; risco de queimaduras com eletrocauterizador',
        ],
        [
          'Compatibilidade',
          '',
          'Todos os componentes compatíveis entre si – seguir registros e códigos de referência',
        ],
        [
          'Descarte',
          'Procedimento',
          'Conforme RDC 222/2018 para resíduos contaminantes e instruções do fabricante',
        ],
      ],
      pictures: ['/images/products/produto_banner_Neurosign.png'],
      links: [
        {
          title: 'Probe Estéril para Neurosign',
          url: '../images/use-instruction/80517190004-PROBES.pdf',
          file_name: 'Anvisa nº 80517190004',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Eletrodo de Laringe',
          url: '../images/use-instruction/80517190005-eletrodo-laringe.pdf',
          file_name: 'Anvisa nº 80517190005',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Eletrodo Estéril para Neurosign',
          url: '../images/use-instruction/80517190006-eletrodo-agulha.pdf',
          file_name: 'Anvisa nº 80517190006',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Eletrodo Cirúrgico para Neurosign Magstim',
          url: '../images/use-instruction/80517190007-eletrodos-cirurgicos.pdf',
          file_name: 'Anvisa nº 80517190007',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Neuromonitor Neurosign V4',
          url: '../images/use-instruction/80517190035-Neurosing-V4.pdf',
          file_name: 'Anvisa nº 80517190035',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title: 'Clip de Estimulação Contínua Descartável',
          url: '../images/use-instruction/80517199002-Clip de estimulacao continua descartavel.pdf',
          file_name: 'Anvisa nº 80517199002',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeos do Neurosign V4',
          url: 'https://www.youtube.com/watch?v=EVydvmt6qqY',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_Neurosign.png',
          alt: 'Monitor Neurosign V4 para monitoramento neural',
        },
      ],
      testimonial: {
        testimonial:
          '“Para o cirurgião, muito mais do que localizar o nervo, queremos analisar a integridade deste nervo. Por isso, saber avaliar as variações na latência e amplitude é tão importante. O Neurosign é uma ferramenta poderosíssima para se fazer essa análise. Sua estrutura oferece um sinal sonoro potente, que auxilia os cirurgiões com feedback imediato, intuitivo e em tempo real”',
        testimonial_pictures: [
          '/images/testimonials/V4_1.jpg',
          '/images/testimonials/V4_2.jpg',
          '/images/testimonials/V4_3.jpg',
        ],
        doctor: {
          name: 'Dr. Erivelto Volpi',
          specialty: 'CRM 57034',
          photo: '/images/testimonials/Dr.EriveltoVolpi.jpg',
        },
      },
    },
  },
  {
    id: 17,
    name: 'SafeSign',
    specialities: ['Cabeça e Pescoço'],
    brands: ['Neurosign'],
    logo_brand: '/images/brands/neurosign.png',
    description:
      'Dissector e Estimulador Tipo Tesoura foi desenhado para estimular os nervos enquanto disseca, o que reduz o risco de lesão do nervo e melhora a eficiência por reduzir o tempo cirúrgico gasto na troca de instrumentais.',
    imageUrl: '/images/products/tesoura.png',
    detail: {
      subtitle: '',
      tags: [],
      about: [
        'Reduz os riscos de lesão do nervo, pois estimula enquanto disseca.',
        'Reduz o tempo cirúrgico.',
        'Instrumento único, estéril e embalado individualmente.',
        'Compatibilidade: Monitores de nervos multicanais',
      ],
      general_information:
        'Adequado para uso em monitores de nervos multicanais, Ideal para cirurgias de tireoide e paratireoide.',
      technical_data: [],
      pictures: ['/images/products/tesoura.png'],
      links: [
        // {
        //   title: 'Lâminas Cirúrgicas ACF',
        //   url: '../images/use-instruction/80517190022-Laminas-ACF.pdf',
        //   file_name: 'Anvisa nº 80517190022',
        //   type: 'DIRECTIONS_FOR_USE',
        // },
      ],
      videos: [
        {
          description: 'Vídeos do Neurosign V4',
          url: 'https://www.youtube.com/watch?v=EVydvmt6qqY',
        },
      ],
      images: [
        {
          url: '/images/products/tesoura.png',
          alt: 'Dissector e Estimulador Tipo Tesoura Neurosign',
        },
      ],
      testimonial: {
        testimonial:
          '“Com o Safe Sign, que é a tesoura dissectora da Neurosign, o cirurgião tem, em tempo real, a avaliação neurológica do nervo no momento em que faz a dissecção. Assim, temos um sinal praticamente contínuo, aumentando a eficiência da monitorização intraoperatória. A Safe Sign é um instrumento que ajuda muito o cirurgião, sendo uma alternativa muito interessante e eficaz para a monitorização.”',
        testimonial_pictures: [
          '/images/testimonials/TesouraNeurosign1.png',
          '/images/testimonials/TesouraNeurosign2.png',
        ],
        doctor: {
          name: 'Dr. Erivelto Volpi',
          specialty: 'CRM 57034',
          photo: '/images/testimonials/Dr.EriveltoVolpi.jpg',
        },
      },
    },
  },
  {
    id: 19,
    name: 'PerOssal',
    specialities: ['Ortopedia', 'Coluna'],
    brands: ['Osartis'],
    logo_brand: '/images/brands/osartis_logo.png',
    description:
      'PerOssal® é um substituto ósseo absorvível bioativo e osteocondutor desenvolvido para a reparação e preenchimento de defeitos ósseos. Sua estrutura única microporosa, garante a absorção uniforme de substâncias líquidas (como antibióticos). No tratamento de osso infectado ou contaminado, o PerOssal® é indicado após a realização de desbridamento cirúrgico, acompanhado da administração simultânea de antibióticos seja de forma sistêmica ou local.',
    imageUrl: '/images/products/perosal.png',
    detail: {
      subtitle: 'Substituto Ósseo Absorvível Bioativo',
      tags: ['Mão', 'Quadril', 'Trauma', 'Joelho'],
      about: [
        'Tratamento de infecção local seguro e eficaz.',
        'Nova formação óssea dentro de 6 a 18 meses.',
        'Liberação prolongada de antibiótico durante um período de 10 dias.',
        'Não é necessário remoção',
        'Excelente biocompatibilidade',
      ],
      general_information:
        'PerOssal® é indicado para preenchimento ou reparação de defeitos ósseos.Possíveis áreas de aplicação,Traumatologia,Cirurgia ortopédica,Cirurgia da coluna,Cirurgia maxilofacial,Em caso de osso infectado ou contaminado, PerOssal® é indicado após desbridamento cirúrgico prévio e com administração simultânea de antibióticos de maneira sistêmica e/ou local.PerOssal® pode ser usado para aumento de osso autógeno.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Modelos Comerciais',
          'Código',
          '03-01031 (1x6) / 03-01032 (2x6) / 03-0102 (1x50)',
        ],
        ['Registro ANVISA', 'Número', '80517190044'],
        [
          'Produto Estéril	',
          'Condição',
          'Estéril – esterilizado por radiação gama',
        ],
        [
          'Composição',
          'Material',
          'Hidroxiapatita nanocristalina (51,5%) + Sulfato de Cálcio (48,5%)',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          'Frascos contendo 6 ou 50 pastilhas (6mm x 6mm) + blister + embalagem dupla estéril + etiquetas + instruções de uso',
        ],
        [
          'Indicação de uso',
          'Finalidade',
          'Preenchimento ou reconstrução de defeitos ósseos, inclusive infectados após desbridamento',
        ],
        [
          'Indicações clínicas',
          'Aplicações',
          'Defeitos ósseos em geral, com possibilidade de uso como extensor de enxerto autógeno',
        ],
        [
          'Contraindicações',
          '',
          'Defeitos em área de placas epifisárias abertas; precaução em distúrbios ósseos metabólicos e cálcio',
        ],
        ['Reutilização', '', 'Proibido reprocessar – uso único'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura entre +5°C e +30°C; proteger do calor e da luz direta',
        ],
        [
          'Método de Aplicação',
          'Procedimento',
          'Implantação direta em leito ósseo vital, bem vascularizado; pode ser usado seco ou hidratado com antibiótico',
        ],
        [
          'Validade',
          'Tempo de Validade',
          'Vide embalagem; não utilizar após o vencimento',
        ],
      ],
      pictures: ['/images/products/perosal.png'],
      links: [
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Kamal and Ramang.pdf',
          file_name: 'Kamal and Ramang (PerOssal tumor defect)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Najarro et al_2007.pdf',
          file_name: 'Najarro et al_2007 (PerOssal Abstract)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Sambri et al_2022.pdf',
          file_name: 'Sambri et al_2022 (PerOssal Distal Tibia Fracture)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Sambri et al_2023.pdf',
          file_name:
            'Sambri et al_2023 (PerOssal in singel satge chronic osteomyelitis)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Scharf et al_2023.pdf',
          file_name:
            'Scharf et al_2023 (PerOssal Distal Radius Fracture Children)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Szurkowska et a_2018.pdf',
          file_name: 'Szurkowska et a_2018 (PerOssal)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Tuleubayev and Rudenko_2021.pdf',
          file_name:
            'Tuleubayev and Rudenko_2021 (PerOssal AB release in rabbit)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Visani et al_2018.pdf',
          file_name: 'Visani et al_2018 (PerOssal)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Jimenez_Martin.pdf',
          file_name: 'Jiménez-Martín A_2009',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Berner_2008.pdf',
          file_name: 'Berner_2008',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Artigos/Perossal/Frese et al_2023.pdf',
          file_name: 'Frese et al_2023(PerOssal Vanco Masquelet)',
          type: 'ARTICLES',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Catálogo/PerOssal/PerOssal.pdf',
          file_name: 'PerOssal',
          type: 'CATALOG',
        },
        {
          title: 'PerOssal',
          url: '/pdfs/Relatos_de_caso/PerOssal/PerOssal_Case Reports 141-3010.60-02EN_final.pdf',
          file_name: 'PerOssal_Case Reports 141-3010.60-02EN_final',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Perossal',
          url: '../images/use-instruction/80517190044-PEROSSAL.pdf',
          file_name: 'Anvisa nº 80517190044',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/perosal.png',
          alt: 'PerOssal substituto ósseo bioativo',
        },
      ],
      testimonial: {
        testimonial:
          'Os resultados preliminares mostraram-se muito satisfatórios com o uso do PerOssal como substituto ósseo em falhas previamente infectadas, ou mesmo naquelas com elevado potencial para infecção. Ele une a possibilidade de associar antibiótico, para uma ação bactericida local, com a nano hidroxiapatita, eficaz como osteocondutor, que leva maior chance de consolidação da lesão.',
        testimonial_pictures: [
          '/images/testimonials/PerOssal1.png',
          '/images/testimonials/PerOssal2.png',
        ],
        doctor: {
          name: 'Dr Fabio Lucas Rodrigues',
          specialty: 'CRM 84143',
          photo: '/images/testimonials/DrFabioLucasRodrigues.png',
        },
      },
    },
  },
  {
    id: 20,
    name: 'PulsaClean',
    specialities: ['Ortopedia'],
    brands: ['Osartis'],
    logo_brand: '/images/brands/osartis_logo.png',
    description:
      'PulsaClean® é um sistema de lavagem pulsátil, fornecido totalmente estéril e descartável, com eficácia clinicamente comprovada para procedimentos ortopédicos e desbridamento de feridas, realizando uma intensa limpeza do leito ósseo e teciduais.',
    imageUrl: '/images/products/produto_banner_OSARTIS_Pulsaclean.png',
    detail: {
      subtitle: '',
      tags: ['Trauma'],
      about: [
        'Alta segurança do paciente devido aos grampos especiais que evitam o refluxo da solução de enxague.',
        'Peça de mão leve, design ergonômico e tubos de sucção e enxague com cerca de 3m oferecem um uso confortável para o cirurgião.',
        'Sistema único com bocais curtos e longos inclusos para resultados em diferentes campos de indicação com custo e operação otimizados.',
        'Controle de velocidade com dois estágios de fluxo.',
        'Produto sem látex.',
        'Limpeza intensa, mas suave devido à pressão de irrigação tipo névoa > 15 psi.',
      ],
      general_information:
        'Artroplastia total de joelho e quadril – cimentado e não cimentado, Revisões de artroplastias, Intervenções cirúrgicas, Limpeza de feridas',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', 'W-203 / REF: LD 1000'],
        ['Registro ANVISA', 'Número', '80517199003'],
        [
          'Produto Estéril	',
          'Condição',
          'Estéril – esterilizado por óxido de etileno',
        ],
        [
          'Composição',
          'Material',
          'Motor CC, bombas de compressão, peça de mão, bocais diversos, tubos de irrigação e resíduos, bolsa de bateria e cabo de alimentação.',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          'Peça de mão, bocais (curto, longo, femoral, proteção contra respingos), tubos de irrigação e resíduos, bolsa de bateria, cabo de alimentação. Extrator a vácuo e bolsa de irrigação não inclusos.',
        ],
        [
          'Indicação de uso',
          'Finalidade',
          'Limpeza de feridas abertas, tecidos moles e locais cirúrgicos. Utilizado em centros cirúrgicos, emergências e salas de tratamento.',
        ],
        [
          'Indicações clínicas',
          'Aplicações',
          'Procedimentos de lavagem e irrigação em feridas, tecidos moles e cirurgias',
        ],
        ['Contraindicações', '', 'Nenhuma identificada'],
        ['Reutilização', '', 'Proibido reprocessar – uso único'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura de -10°C a +40°C; umidade ≤95%; ambiente ventilado, sem gases corrosivos',
        ],
        [
          'Método de Aplicação',
          '',
          'Instalação do bocal na peça de mão, conexão dos tubos de irrigação e resíduos, ativação por acionador com controle de baixa ou alta potência. Pode ser usado com ou sem sucção (vácuo).',
        ],
      ],
      pictures: ['/images/products/produto_banner_OSARTIS_Pulsaclean.png'],
      links: [
        {
          title: 'Pulsa',
          url: '/pdfs/Catálogo/Pulsa/PulsaClean OSARTIS.pdf',
          file_name: 'PulsaClean OSARTIS',
          type: 'CATALOG',
        },
        {
          title: 'Pulsa',
          url: '/pdfs/Relatos_de_caso/Pulsa/Pulse Lavage Clinical Report 1 (002).pdf',
          file_name: 'Pulse Lavage Clinical Report 1 (002)',
          type: 'CASE_REPORTS',
        },
        {
          title: 'Pulsaclean: Sistema de Lavagem Pulsada Descartável',
          url: '../images/use-instruction/80517190003-PulsaClean.pdf',
          file_name: 'Anvisa nº 80517199003',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/produto_banner_OSARTIS_Pulsaclean.png',
          alt: 'PulsaClean sistema de lavagem pulsátil',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: ['/images/testimonials/PulsaClean.jpg'],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 21,
    name: 'QuickDraw',
    specialities: ['Ortopedia'],
    brands: ['Paradigm BioDevices'],
    logo_brand: '/images/brands/paradigm_biodevices.png',
    description:
      'O QuickDraw é um sistema de coleta universal com ferramentas de acesso para a coleta de enxerto ósseo autólogo através de uma incisão percutânea mínima na crista ilíaca.',
    imageUrl: '/images/products/quickdraw.png',
    detail: {
      subtitle: '',
      tags: ['Joelho', 'Quadril'],
      about: [
        'A utilização do Sistema QuickDraw permite a retirada do enxerto ósseo da Crista Ilíaca mocelizado em menor tempo comparado às técnicas convencionais através de uma pequena incisão de um espaço de 1 a 2cm.',
        'Os fatores de risco são reduzidos e minimizados, quadro de dor diminuído, e em alguns casos, nem relatados.',
        'Este enxerto é rico em nutrientes e inicia a cicatrização óssea através de infiltração osteoblásticas, recrutamento celular e proliferação.',
        'Uso manual ou com motor.',
      ],
      general_information:
        'O QuickDraw é composto por uma caixa de instrumental e de cânulas descartáveis para fazer a coleta do enxerto autólogo. As cânulas têm o diâmetro de 10mm, podendo ser coletados 7cc. Indicações: Cirurgias de Coluna, Cirurgias de Joelho (Osteotomia), Cirurgias de Quadril, Cirurgias de Bucomaxilo, Cirurgias de pé, Cirurgias de Mão, Cirurgias de Ombro ',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Modelos Comerciais',
          'Código',
          '988-1000S (10 mm curta) / 988-1000 (10 mm) / 988-1200 (12 mm)',
        ],
        ['Registro ANVISA', 'Número', '80517190027'],
        [
          'Produto Estéril	',
          'Condição	Estéril',
          'Estéril - esterilizado por óxido de etileno',
        ],
        ['Composição', 'Material', 'Policarbonato + Aço Inoxidável AISI 303'],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          '2 cânulas coletoras por kit, embaladas individualmente em blister PET + embalagem Tyvek® + caixa externa',
        ],
        [
          'Indicação de uso',
          'Finalidade',
          'Coleta de enxerto ósseo morselizado (osso esponjoso autólogo) para artrodese, fusão espinhal, cirurgia reconstrutiva, reparo de fratura, preenchimento de cage ou cavidade buco-maxilo',
        ],
        [
          'Indicações clínicas',
          'Aplicações',
          'Coleta de enxerto ósseo autólogo de locais como crista ilíaca, tíbia, fêmur, ulna e rádio',
        ],
        [
          'Contraindicações',
          '',
          'Infecção ativa no local doador, osteoporose, osteomalacia, coleta prévia no local, alergia a metais',
        ],
        ['Reutilização', '', 'Proibido reprocessar – uso único'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura entre 10°C e 40°C, local ventilado, sem gases corrosivos',
        ],
        [
          'Método de Aplicação',
          '',
          'Técnica percutânea guiada, com auxílio do conjunto de instrumental QuickDraw (vendido separadamente)',
        ],
        [
          'Efeitos Adversos',
          '',
          'Fratura no local doador, danos teciduais e nervosos, reação alérgica, infecção, perda de sangue, dor, desconforto',
        ],
      ],
      pictures: ['/images/products/quickdraw.png'],
      links: [
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/1)DONOR SITE MORBIDITY AT THE ILIAC CREST.pdf',
          file_name: '1)DONOR SITE MORBIDITY AT THE ILIAC CREST',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/2) Iliac-Crest-Bone-Graft-Harvesting-Techniques-A-comparison.pdf',
          file_name:
            '2) Iliac-Crest-Bone-Graft-Harvesting-Techniques-A-comparison',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/4) The Effect of Iliac Crest Autograft on the Outcome of.pdf',
          file_name: '4) The Effect of Iliac Crest Autograft on the Outcome of',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/5) Surgical Tip- A Minimally Invasive.pdf',
          file_name: '5) Surgical Tip- A Minimally Invasive.pdf',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/6) Patients Cannot Reliably Distinguish the Iliac Crest Bone Graft Donor Site From the Contralateral Side After Lumbar Spine Fusion.pdf',
          file_name:
            '6) Patients Cannot Reliably Distinguish the Iliac Crest Bone Graft Donor Site From the Contralateral Side After Lumbar Spine Fusion',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/A retrospective study of iliac crest bone grafting techniques.pdf',
          file_name:
            'A retrospective study of iliac crest bone grafting techniques',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/Can Iliac Crest Bone Graft Be Cheaper Than BMP.pdf',
          file_name: 'Can Iliac Crest Bone Graft Be Cheaper Than BMP',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/ICBG for MIS TLIF K. Singh.pdf',
          file_name: 'ICBG for MIS TLIF K. Singh',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/McLean.pdf',
          file_name: 'McLean',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/Percutaneous vs Open.pdf',
          file_name: 'Percutaneous vs Open',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Artigos/Quickdraw/Prospective Observational.pdf',
          file_name: 'Prospective Observational',
          type: 'ARTICLES',
        },
        {
          title: 'QuickDraw',
          url: '/pdfs/Catálogo/Quickdraw/LAS_Folheto_Quickdraw_Maio_2023_Visualizacao.pdf',
          file_name: 'Quickdraw',
          type: 'CATALOG',
        },
        {
          title: 'Conjunto Instrumental QuickDraw BR',
          url: '../images/use-instruction/80517190043-Conj-QuickDraw-BR.pdf',
          file_name: 'Anvisa nº 80517190043',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title:
            'Cânula coletora de enxerto autólogo com ponta cortante QuickDraw',
          url: '../images/use-instruction/80517199004-Canula-QuickDraw.pdf',
          file_name: 'Anvisa nº 80517199004',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeo do QuickDraw',
          url: 'https://youtu.be/KwG1eFrrtZU',
        },
      ],
      images: [
        {
          url: '/images/products/quickdraw.png',
          alt: 'QuickDraw sistema de coleta de enxerto ósseo',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [
          '/images/testimonials/QuickDraw1.jpg',
          '/images/testimonials/QuickDraw2.jpg',
          '/images/testimonials/QuickDraw3.jpg',
          '/images/testimonials/QuickDraw4.jpg',
          '/images/testimonials/QuickDraw5.jpg',
        ],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 22,
    name: 'RFA - Ablação por Radiofrequência',
    specialities: ['Cabeça e Pescoço'],
    brands: ['Curaway'],
    logo_brand: '/images/brands/curaway_logo.png',
    description:
      'A RFA é amplamente utilizada, bem pesquisada clinicamente e recomendada em diretrizes de tratamentos importantes. Pode ser utilizada para o tratamento radical de tumores sólidos em estágio inicial, além de ser uma ferramenta importante no tratamento abrangente de tumores em estágios intermediários e avançados.',
    imageUrl: '/images/products/fta_curaway.png',
    detail: {
      subtitle: 'A RFA é a técnica de ablação localizada mais clássica.',
      tags: [],
      about: [
        'Inativação local do tumor, com eficácia terapêutica precisa.',
        'Segurança controlável com poucas complicações.',
        'Terapia minimamente invasiva com menos dano ao corpo.',
        'Tratamento conformável e repetível.',
        'Rápida recuperação, pode induzir a imunidade anti-tumoral do corpo.',
      ],
      general_information:
        'Principais Indicações, Tumor de fígado, Nódulo/Tumor Tireoide Benígno ou Malígno, Mioma Uterino, Osteoma Osteóide, Nódulos/Tumor de Mama, Câncer Pulmão ou Nódulo Pulmonar, Câncer de Rim, Câncer de Próstata, Metástase Ossea',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        [
          'Modelos Disponíveis',
          'Tipos',
          'Fixo (Monopolar), Ajustável (Monopolar), Duplo (Bipolar)',
        ],
        [
          'Composição',
          'Componentes',
          'Agulha, filme de isolamento, bainha de proteção, rolha de profundidade, alça, tubo, cabo de conexão, tubulação de entrada e saída',
        ],
        [
          'Compatibilidade',
          'Gerador de RF',
          'Exclusivo para CR-S2000 (CuraWay)',
        ],
        [
          'Contraindicações',
          '-',
          'Infecção, ascite grave, coagulopatias, gravidez, múltiplos tumores pulmonares, etc.',
        ],
        [
          'Esterilização',
          'Método | Validade ',
          'Óxido de etileno | 3 anos após esterilização',
        ],
        ['Uso', 'Tipo', 'Produto de uso único (descartável)'],
        ['Apresentação', 'Embalagem', '1 peça/blister estéril'],
        [
          'Armazenamento',
          'Condições',
          '-10 °C a 40 °C / Umidade relativa ≤ 80% / Local seco e ventilado',
        ],
        [
          'Funcionamento',
          'Temperatura de uso | Umidade relativa | Pressão atmosférica',
          '10 °C a 40 °C | 30% a 75% | 700 hPa a 1060 hPa',
        ],
        [
          'Segurança',
          'Tensão nominal do eletrodo | Conectores',
          '180V | Exclusivos (bipolar, monopolar e neutro)',
        ],
        ['Funcionamento térmico', 'Temperatura de ablação', '60 °C a 110 °C'],
        [
          'Tabela de Modelos',
          'Dimensões diversas',
          'Comprimentos de agulha de 7 mm a 210 mm, diâmetros de 1,2 mm (18G) a 1,8 mm (15G), com opções de exposição de 5 a 40 mm (ver Tabela do IFU)',
        ],
      ],
      pictures: ['/images/products/fta_curaway.png'],
      links: [
        {
          title: 'RFA',
          url: '/pdfs/Artigos/RFA/ARTIGO DR ERIVELTO VOLPI.pdf',
          file_name: 'ARTIGO DR ERIVELTO VOLPI',
          type: 'ARTICLES',
        },
        {
          title: 'RFA',
          url: '/pdfs/Artigos/RFA/Radiofrequency ablation and related ultrasound-guided.pdf',
          file_name: 'Radiofrequency ablation and related ultrasound-guided',
          type: 'ARTICLES',
        },
        {
          title: 'RFA',
          url: '/pdfs/Artigos/RFA/Radiofrequency Ablation for Benign Thyroid Nodules.pdf',
          file_name: 'Radiofrequency Ablation for Benign Thyroid Nodules',
          type: 'ARTICLES',
        },
        {
          title: 'RFA',
          url: '/pdfs/Artigos/RFA/Radiofrequency Ablation for Solitary Autonomously.pdf',
          file_name: 'Radiofrequency Ablation for Solitary Autonomously',
          type: 'ARTICLES',
        },
        // {
        //   title: 'Lâminas Cirúrgicas ACF',
        //   url: '../images/use-instruction/80517190022-Laminas-ACF.pdf',
        //   file_name: 'Anvisa nº 80517190022',
        //   type: 'DIRECTIONS_FOR_USE',
        // },
      ],
      videos: [],
      images: [
        {
          url: '/images/products/fta_curaway.png',
          alt: 'Sistema RFA para ablação por radiofrequência',
        },
      ],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [
          '/images/testimonials/RFA1.jpg',
          '/images/testimonials/RFA2.jpg',
          '/images/testimonials/RFA3.jpg',
          '/images/testimonials/RFA4.jpg',
        ],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 23,
    name: 'SafeView',
    specialities: ['Ortopedia'],
    brands: ['Mission Surgical Innovations'],
    logo_brand: '/images/brands/mission_surgical.png',
    description:
      'O SafeView ™, Sistema Endoscópico de Liberação de Tecidos Moles, oferece aos cirurgiões mais controle e reduz a complexidade cirúrgica. A tecnologia patenteada da cânula transparente oferece visualização 360 ° e segurança incomparável.',
    imageUrl: '/images/products/produto_banner_Missionsurgical_Safeview.png',
    detail: {
      subtitle: '',
      tags: [''],
      about: [
        'Cânula transparente, visualização ilimitada panorâmica 360 °.',
        'Tamanho da cânula minimizado.',
        'Inserção fácil, incisão mínima, menos invasiva – reduz possibilidade de infecção.',
        'Liberação tecidual precisa e reproduzível.',
        'Operação independente do artroscópio e da lâmina de corte proporciona ao cirurgião um controle completo e uma sensação tátil generosa.',
        'Compatível com escopia universal, possui design ergonômico.',
      ],
      general_information:
        'O sistema SafeView ™ é indicado na liberação endoscópica de: Membros Superiores: Túnel do Carpo e Túnel Cubital, Membros Inferiores: Fascite Plantar, Ressecção do Gastrocnêmio e Túnel Tarsal',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', '1601010'],
        ['Registro ANVISA', 'Número', '80517190033'],
        ['Produto Estéril	', 'Condição	Estéril', 'sterilizado por radiação gama'],
        [
          'Composição',
          'Material',
          'Plástico de grau médico (Policarbonato, Polifenilsulfona) + Aço inoxidável 301 (ASTM F899-02)',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          'Dilatador sequencial, elevador sinovial, cânula SafeView, obturador SafeView, raspa in-situ e lâmina de corte frontal',
        ],
        [
          'Indicação de uso',
          'Finalidade',
          'Liberação de tecidos moles em procedimentos minimamente invasivos: túnel do carpo, túnel cubital, túnel do tarso, fascite plantar e gastrocnêmio',
        ],
        [
          'Indicações clínicas',
          'Aplicações',
          'Tratamento de síndromes compressivas e outras condições que exijam ressecção de tecido mole',
        ],
        [
          'Contraindicações',
          '',
          'Repetição de liberação no mesmo local, deformações anatômicas, defeitos neurológicos, lesão prévia no local cirúrgico',
        ],
        ['Reutilização', '', 'Proibido reprocessar - uso único'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura entre -4°C e +55°C; umidade entre 17% e 70%; manter na embalagem original até o uso',
        ],
        [
          'Método de Aplicação',
          'Procedimento',
          'Técnica endoscópica minimamente invasiva com auxílio de dilatadores, cânula, obturador, raspa e lâmina de corte',
        ],
        [
          'Efeitos Adversos',
          '',
          'Não aplicável segundo IFU, mas o fabricante alerta para riscos cirúrgicos gerais',
        ],
      ],
      pictures: [
        '/images/products/produto_banner_Missionsurgical_Safeview.png',
      ],
      links: [
        {
          title: 'SafeView',
          url: '/pdfs/Catálogo/Safe_view/LAS_Folheto_Safeview_A4_4x4.pdf',
          file_name: 'LAS_Folheto_Safeview_A4_4x4.pdf',
          type: 'CATALOG',
        },
        {
          title:
            'Kit Safeview – Sistema Endoscópico De Liberação De Tecidos Moles',
          url: '../images/use-instruction/80517190033-SafeView-A.pdf',
          file_name: 'Anvisa nº 80517190033',
          type: 'DIRECTIONS_FOR_USE',
        },
        {
          title:
            'Kit Safeview-R – Sistema Endoscópico De Liberação De Tecidos Moles, Corte Reverso',
          url: '../images/use-instruction/80517190038-SafeView-R.pdf',
          file_name: 'Anvisa nº 80517190038',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Confira a playlist do SafeView™',
          url: 'https://bit.ly/playlist_SafeView',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_Missionsurgical_Safeview.png',
          alt: 'SafeView sistema endoscópico de liberação',
        },
      ],
      testimonial: {
        testimonial:
          '“O Safeview, assim como outras técnicas endoscópicas de menor agressão tissular, favorece um desfecho de dor e função mais favoráveis no curto prazo. Ele permite flexibilidade para utilizar tanto a técnica anterógrada quanto a retrógrada. A cânula transparente aumenta a segurança no posicionamento em relação ao nervo. O Safeview possibilita a realização de um procedimento minimamente invasivo com total segurança, já que oferece controle sobre a colocação do instrumental e dos medidores, além da vantagem de a cânula ser transparente. Um dos dispositivos do Safeview é o raspador, o que facilita a localização do retináculo flexor, proporcionando mais tranquilidade e segurança na liberação dele.”',
        testimonial_pictures: [
          '/images/testimonials/SafeView™1.jpg',
          '/images/testimonials/SafeView™2.jpg',
          '/images/testimonials/SafeView™3.jpg',
        ],
        doctor: {
          name: 'Dr. Hélio Garcia',
          specialty: '',
          photo: '/images/testimonials/Dr.HelioGarcia.jpg',
        },
      },
    },
  },
  {
    id: 24,
    name: 'SpineMED',
    specialities: ['Coluna'],
    brands: ['SpineMED'],
    logo_brand: '/images/brands/spinemed.png',
    description:
      'Voltado para o tratamento conservador de patologias de disco lombar e cervical, o sistema SpineMED® foi projetado para tratar e descomprimir os discos intervertebrais degenerados através da distração. Este sistema, certificado pelo INMETRO e ANVISA, fornece um procedimento não-cirúrgico, in e livre do uso de medicamentos para pacientes que sofrem de doenças na coluna.',
    imageUrl: '/images/products/produto_banner_SpineMED.png',
    detail: {
      subtitle: '',
      tags: [],
      about: [
        'Supera contrações de reflexo.',
        'Distração focada na origem da dor.',
        'Capacidade de tratar diversas patologias da coluna.',
        'Acomoda pacientes de diferentes pesos e alturas.',
        'Sessões repetitivas (Sistema computadorizado).',
        'Segurador de Pelve.',
        'Promotor de calor infravermelho.',
      ],
      general_information:
        'Indicações, Dores discogênicas, Hérnia de Disco, Dor Ciática, Radiculopatia de Membro Inferior, Radiculopatia de Membro Superior, Dor Cervical, Dor Lombar, Estenose Foraminal, Artrose Facetária',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', 'S200E / S200EC'],
        ['Registro ANVISA', 'Número', '80517190043'],
        [
          'Composição',
          'Material',
          'Estrutura metálica, componentes eletrônicos, sistema pneumático e de tração, software proprietário',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          'Mesa SpineMED®, unidade cervical, restrições pélvicas e de tronco, touchcomputer, software SpineMED®, acessórios diversos',
        ],
        [
          'Indicação de Uso',
          'Finalidade',
          'Tratamento não cirúrgico para dor lombar, cervical, ciática, hérnia de disco, abaulamentos, degeneração discal e síndrome facetária',
        ],
        [
          'Indicações Clínicas',
          'Aplicações',
          'Hérnia de disco, abaulamento discal, doença degenerativa do disco, síndrome facetária posterior, estenose (em casos selecionados), dor cervical e lombar crônica',
        ],
        [
          'Contra indicações',
          '',
          'Fraturas recentes, osteoporose severa, gravidez, tumores espinais, síndrome da cauda equina, hardware implantado, espondilolistese grau II ou superior, malformações vertebrais, entre outras',
        ],
        ['Reutilização', '', 'Equipamento de uso contínuo – não descartável'],
        [
          'Armazenamento',
          'Condições',
          'Temperatura entre -10°C e +40°C; umidade até 95%; ambiente sem gases corrosivos',
        ],
        [
          'Método de Aplicação',
          'Procedimento',
          'Sessões de descompressão com tração controlada por software, com ajustes de ângulo e força personalizados para cada segmento da coluna (lombar e cervical)',
        ],
        [
          'Efeitos Adversos',
          '',
          'Dor transitória, desconforto local, principalmente na região acima de S1 se a tensão for excessiva; geralmente resolvido com ajuste dos parâmetros',
        ],
      ],
      pictures: ['/images/products/produto_banner_SpineMED.png'],
      links: [
        {
          title: 'SpineMED',
          url: '/pdfs/Catálogo/SpineMED/SpineMed - Enxoval - Folder para Medicos Verso.pdf',
          file_name: 'SpineMed - Enxoval - Folder para Medicos Verso',
          type: 'CATALOG',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2008_Spinal Decompression Measurement of Treatment Outcomes.pdf',
          file_name:
            '2008_Spinal Decompression Measurement of Treatment Outcomes',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2009_Clinical Report. Spinal Decompression Measurement of Treatment Outcomes.pdf',
          file_name:
            '2009_Clinical Report. Spinal Decompression Measurement of Treatment Outcomes',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2010_T~1.PDF',
          file_name: '2010_T~1',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2011_A multimodal treatment Approach using Spinal Decompression via SpineMED.pdf',
          file_name:
            '2011_A multimodal treatment Approach using Spinal Decompression via SpineMED',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2012_Effect-of-Decompression-Therapy-Combined-with-Joint-Mobilization.pdf',
          file_name:
            '2012_Effect-of-Decompression-Therapy-Combined-with-Joint-Mobilization',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2012_RetrospectiveStudyofSpineMEDpatients.pdf',
          file_name: '2012_RetrospectiveStudyofSpineMEDpatients',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2013_Short-term Effect of SpineMED Decompression System for Lumbar Disc Herniation.pdf',
          file_name:
            '2013_Short-term Effect of SpineMED Decompression System for Lumbar Disc Herniation',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2015_C~1.PDF',
          file_name: '2015_C~1',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2017_Non Surgical Disc Decompression & Clinical Efficacy.pdf',
          file_name: '2017_Non Surgical Disc Decompression & Clinical Efficacy',
          type: 'ARTICLES',
        },
        {
          title: 'SpineMED',
          url: '/pdfs/Artigos/SpineMED/2024_Assessment of SpineMED® Traction Effect on Cervical Disc Herniat.pdf',
          file_name:
            '2024_Assessment of SpineMED® Traction Effect on Cervical Disc Herniat',
          type: 'ARTICLES',
        },
        {
          title: 'Spinemed',
          url: '../images/use-instruction/SPINEMED.pdf',
          file_name: 'Anvisa nº 80517190003',
          type: 'DIRECTIONS_FOR_USE',
        },
      ],
      videos: [
        {
          description: 'Vídeos SpineMED',
          url: 'https://bit.ly/playlist_SpineMED',
        },
      ],
      images: [
        {
          url: '/images/products/produto_banner_SpineMED.png',
          alt: 'SpineMED sistema de descompressão vertebral',
        },
      ],
      testimonial: {
        testimonial:
          '"O tratamento conservador da coluna primeiro é muito importante para o paciente, claro, todo mundo sabe! Mas também para o cirurgião, porque fideliza o paciente, ele volta várias vezes. O que estou falando é sobre a minha experiência com a SpineMED, uma mesa de tração computadorizada, bastante controlada para o peso e tamanho do paciente, e que tem resultados, na minha experiência, bastante positivos, especialmente para dor lombar crônica, ainda não cirúrgica, e para estenose de canal leve, em que o cirurgião percebe que ainda não está na hora de operar e que o paciente ainda não está muito convencido de operar. Ou seja, tem um efeito positivo bastante grande, e eu tive a oportunidade de ter resultados bastante convincentes."',
        testimonial_pictures: [],
        doctor: {
          name: 'Dr. Luiz Pimenta',
          specialty: 'CRM 17434 SP',
          photo: '/images/testimonials/DrLuizPimenta.jpg',
        },
      },
    },
  },
  // {
  //   id: 25,
  //   name: 'HaemoCer Plus',
  //   specialities: [],
  //   brands: ['BioCer'],
  //   logo_brand: '',
  //   description:
  //     'HaemoCer Plus™ é um pó hemostático absorvível feito à base de plantas e que não contém componentes animais ou humanos. Este produto é uma tecnologia criada através do processo de engenharia de polissacarídeos reabsorvíveis da BioCer (PURE).',
  //   imageUrl: '/images/products/foto-haemorcer.png',
  //   detail: {
  //     subtitle: '',
  //     tags: [''],
  //     about: [
  //       'Em contato com o sangue, o HaemoCer Plus™ atrai a água, concentrando plaquetas, hemácias e proteínas de coagulação no local do sangramento. Em segundos, forma-se um gel aderente que interrompe o sangramento e cria uma barreira protetora — sem qualquer interação química ou aditivo. Após a hemostasia, o material é completamente absorvido pelo organismo, sem deixar resíduos.',
  //     ],
  //     general_information:
  //       '⁠Neurocirurgia,⁠ Cirurgia Cardíaca, Vascular e Torácica,⁠ Ortopedia,⁠ Queimadura,⁠ Cirurgia Plástica,⁠ Cirurgia Geral,⁠ Transplante,⁠ Traumatologia,⁠ Cirurgia de Tumores,⁠ Cirurgia Oral e Maxilofacial,⁠ Cirurgia Otorrinolaringológica,⁠ Urologia / Ginecologia,⁠ Cirurgia Pediatrica.',
  //     technical_data: [[]],
  //     pictures: ['/images/products/foto-haemorcer.png'],
  //     links: [
  //       {
  //         title: 'HaemoCer Plus™',
  //         url: '/pdfs/Catálogo/HaemoCer/HaemoCer.pdf',
  //         file_name: 'HaemoCer Plus™',
  //         type: 'CATALOG',
  //       },
  //     ],
  //     videos: [],
  //     images: [
  //       {
  //         url: '/images/products/foto-haemorcer.png',
  //         alt: '',
  //       },
  //     ],
  //     testimonial: {
  //       testimonial: '“”',
  //       testimonial_pictures: ['', '', ''],
  //       doctor: {
  //         name: '',
  //         specialty: '',
  //         photo: '',
  //       },
  //     },
  //   },
  // },
  // {
  //   id: 26,
  //   name: 'Sistema Cirúrgico Ultrassônico',
  //   specialities: [],
  //   brands: [],
  //   logo_brand: '',
  //   description:
  //     'O Sistema Cirúrgico Ultrassônico foi desenvolvido para oferecer dissecação de tecidos com precisão milimétrica e mínimo trauma térmico. Sua tecnologia converte energia elétrica em vibrações ultrassônicas de alta frequência, permitindo cortes limpos, emulsificação e coagulação eficaz em um único instrumento. Com design ergonômico, controle intuitivo e resposta imediata, o equipamento é ideal para procedimentos que exigem delicadeza e segurança',
  //   imageUrl: '/images/products/foto-ultrassonico.png',
  //   detail: {
  //     subtitle: '',
  //     tags: [''],
  //     about: [
  //       'O Sistema Cirúrgico Ultrassônico foi desenvolvido para oferecer dissecação de tecidos com precisão milimétrica e mínimo trauma térmico. Sua tecnologia converte energia elétrica em vibrações ultrassônicas de alta frequência, permitindo cortes limpos, emulsificação e coagulação eficaz em um único instrumento. Com design ergonômico, controle intuitivo e resposta imediata, o equipamento é ideal para procedimentos que exigem delicadeza e segurança.',
  //     ],
  //     general_information:
  //       ' ⁠Cirurgia de mama, ⁠Cirurgia hepatobiliar, Cirurgia abdominal na Cirurgia ginecológica, ⁠Cirurgia otorrinolaringológica, Cirurgia torácica, ⁠Cirurgia de cabeça e pescoço, Cirurgia urológica.',
  //     technical_data: [['']],
  //     pictures: ['/images/products/foto-ultrassonico.png'],
  //     links: [
  //       {
  //         title: 'Sistema Cirúrgico Ultrassônico',
  //         url: '/pdfs/Catálogo/Sistema_cirúrgico_ultrassônico/Folder_Ultrassonico.pdf',
  //         file_name: 'Sistema Cirúrgico Ultrassônico',
  //         type: 'CATALOG',
  //       },
  //     ],
  //     videos: [],
  //     images: [
  //       {
  //         url: '/images/products/foto-ultrassonico.png',
  //         alt: '',
  //       },
  //     ],
  //     testimonial: {
  //       testimonial: '“”',
  //       testimonial_pictures: [],
  //       doctor: {
  //         name: '',
  //         specialty: '',
  //         photo: '',
  //       },
  //     },
  //   },
  // },
  {
    id: 27,
    name: 'Histeroscopia cirúrgica',
    specialities: [],
    brands: ['BioCer'],
    logo_brand: '',
    description:
      'Equipamento utilizado para procedimento médico minimamente invasivo que permite tratar condições ginecológicas na cavidade uterina.',
    imageUrl: '/images/products/foto-storz-06.webp',
    detail: {
      subtitle: '',
      tags: [''],
      about: [
        'O ressectoscópio bipolar 26 Fr oferece uma solução completa para histeroscopias cirúrgicas precisas, seguras e minimamente invasivas. Equipado com tecnologia alemã de alto desempenho, é a escolha ideal para ginecologistas que buscam eficiência aliada à segurança. \nProjetado para uso em histeroscopias cirúrgicas, o equipamento conta com sistema óptico HOPKINS®️, eletrodos bipolares e camisa de trabalho de 26 Fr. A irrigação com solução salina proporciona um campo cirúrgico mais seguro e com excelente visibilidade.',
      ],
      general_information:
        'Ideal para o tratamento de diversas alterações uterinas, incluindo: Miomas submucosos, Pólipos endometriais, Adenomiose, Sinéquias uterinas (Síndrome de Asherman), Istmocele, Útero septado',
      technical_data: [['']],
      pictures: ['/images/products/foto-storz-06.webp'],
      links: [
        {
          title: 'Histeroscopia cirúrgica',
          url: '/pdfs/Catálogo/Histeroscopia/Histeroscopia.pdf',
          file_name: 'Histeroscopia cirúrgica',
          type: 'CATALOG',
        },
        // {
        //   title: 'Lâminas Cirúrgicas ACF',
        //   url: '../images/use-instruction/80517190022-Laminas-ACF.pdf',
        //   file_name: 'Anvisa nº 80517190022',
        //   type: 'DIRECTIONS_FOR_USE',
        // },
      ],
      videos: [],
      images: [],
      testimonial: {
        testimonial:
          '“Quando trabalhamos com o eletrodo bipolar e um ressectoscópio de qualidade superior, conseguimos realizar cortes precisos que otimizam o procedimento. A tecnologia bipolar oferece uma segurança significativamente maior em comparação à monopolar, permitindo o uso de soro fisiológico como meio líquido, o que proporciona ainda mais segurança para o paciente. Além disso, a energia bipolar possibilita maior tempo de trabalho durante os procedimentos, sendo especialmente vantajosa em intervenções mais longas. É um equipamento que não só eleva a qualidade do procedimento, mas também oferece um nível superior de segurança.”',
        testimonial_pictures: [],
        doctor: {
          name: 'Dra. Mariana Cunha',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 28,
    name: 'Microdissector smartOne® KLS',
    specialities: [],
    brands: ['KLS'],
    logo_brand: '/images/brands/KLS_Logo.svg',
    description:
      'Eletrodo de agulha com revestimento NSTC. Estéril e de uso único',
    imageUrl: '/images/products/FOTO-80-700-06-04_h_100.png',
    detail: {
      subtitle: '',
      tags: [''],
      about: [
        'O Eletrodo de Agulha smartOne® é um microdissector monopolar descartável projetado para conduzir energia elétrica em procedimentos de corte e coagulação. Possui design ergonômico, isolamento externo e revestimento NonStick que previne a aderência de tecidos, garantindo segurança, precisão e praticidade intraoperatória. NSTC = nonStick Teflon coated (revestimento não aderente)',
      ],
      general_information:
        'Este produto pode ser usado para todos os procedimentos cirúrgicos em que os benefícios clínicos da aplicação monopolar (corte de tecidos e/ou hemostasia) foram já comprovados.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', '80-700-06-04'],
        ['Registro ANVISA', 'Número', '81198980069'],
        [
          'Composição',
          'Material',
          'Eletrodo metálico com ponta ativa, parte intermediária, sistema de fixação hexagonal e encaixe padrão universal',
        ],
        [
          'Dimensões',
          'Medidas principais',
          'Comprimento total: 70 ± 1 mm; ponta ativa: 20 ± 1 mm; parte intermediária: 33,3 ± 0,5 mm; diâmetro da ponta: Ø 2,36 ± 0,02 mm; Ø 0,8 mm | Ø 3,2 mm | Ø 5 mm; encaixe Ø 2,4 mm (padrão universal)',
        ],
        [
          'Apresentação',
          'Conteúdo da embalagem',
          'Embalagem primária: envelope Tyvek estéril individual; embalagem secundária: caixa cartonada com 10 unidades',
        ],
      ],
      pictures: ['/images/products/FOTO-80-700-06-04_h_100.png'],
      links: [
        // {
        //   title: 'Lâminas Cirúrgicas ACF',
        //   url: '../images/use-instruction/80517190022-Laminas-ACF.pdf',
        //   file_name: 'Anvisa nº 80517190022',
        //   type: 'DIRECTIONS_FOR_USE',
        // },
      ],
      videos: [],
      images: [],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
  {
    id: 29,
    name: 'BonOs® R NF & BonOs® R NF Genta',
    specialities: ['Ortopedia'],
    brands: ['Osartis'],
    logo_brand: '/images/brands/osartis_logo.png',
    description:
      'Cimento ósseo de PMMA de alta viscosidade e secagem rápida para utilização em cirurgia óssea. A mistura de dois componentes estéreis individuais produz um cimento ósseo dúctil que, após o seu endurecimento, fixa o implante e transfere uniformemente para o osso as tensões produzidas durante o movimento.',
    imageUrl: '/images/products/bonos_r_nf.png',
    detail: {
      subtitle: '',
      tags: ['Joelho', 'Quadril'],
      about: [
        'BonOs® R NF é uma resina acrílica de secagem rápida para uso em cirurgia óssea. Indicado na substituição parcial ou total do quadril, joelho e demais articulações, o BonOs® R NF é indicado para fixação de resinas sintéticas e de componentes de próteses metálicas em ossos vitais não infectados, caso seja necessária a reconstrução da articulação. Na cirurgia de tumores, o BonOs® R NF é utilizado em combinação com fixação interna para preenchimento de cavidades ósseas após remoção do tumor.',
        '',
        'BonOs® R NF Genta é uma resina acrílica de secagem rápida para uso em cirurgia óssea e contém o antibiótico sulfato de gentamicina, que protege o implante e o tecido circundante da colonização por patógenos sensíveis à gentamicina.',
      ],
      general_information:
        'Indicado para fixação de resinas sintéticas e de componentes de próteses metálicas durante a substituição parcial ou total da anca, joelho e outras articulações, caso seja diagnosticada ou exista a suspeita de infecção por organismos sensíveis à gentamicina. O antibiótico confere proteção contra a colonização bacteriana no implante e nos tecidos envolventes.',
      technical_data: [
        ['Categoria', 'Item', 'Descrição'],
        ['Modelos Comerciais', 'Código', '01-0137 / 01-0236'],
        ['Registro ANVISA', 'Número', '80517190045 / 80517190046'],
      ],
      pictures: [
        '/images/products/bonos_r_nf.png',
        '/images/products/Bonos.png',
      ],
      links: [],
      videos: [],
      images: [],
      testimonial: {
        testimonial: '',
        testimonial_pictures: [],
        doctor: {
          name: '',
          specialty: '',
          photo: '',
        },
      },
    },
  },
];
