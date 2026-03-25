import { WPImage } from './wordpress';

export type WPTextGroup = {
  text?: string;
};

// =======================
// Home
// =======================
export type WPPageHomeAcf = {
  aboutUs?: {
    logo?: WPImage;
    titlePlus?: string;
    description?: string;
    image?: WPImage;
    bottomTitle?: string;
    bottomDescription?: string;
  };
  forHealth?: {
    options?: {
      label?: string;
      background?: string;
      image?: string;
      text?: string;
      link?: string;
    }[];
  };
  carroussel?: {
    title?: string;
    description?: string;
    items?: {
      img?: WPImage;
      title?: string;
      description?: string;
      logoOne?: WPImage;
      logoTwo?: WPImage;
      url?: string;
    }[];
    showMoreButton?: boolean;
  };
  partners?: {
    title?: string;
    gallery?: {
      alf?: string;
      url?: WPImage;
    }[];
  };
  impact?: {
    title?: string;
    mainBlock?: {
      title?: string;
      number?: string;
      symbol?: string;
      icon?: WPImage;
      backgroundImage?: WPImage;
    };
    estatistics?: {
      icon?: WPImage;
      bg?: string;
      title?: string;
      number?: string;
      symbol?: string;
    }[];
    wavesImage?: WPImage;
  };
  contact?: {
    title?: string;
    subtitle?: string;
    image?: WPImage;
    formAction?: string;
  };
};

// =======================
// Articulate Ecosystem
// =======================
export type WPPageArticulateAcf = {
  heroBanner?: {
    imageLine?: WPImage;
    title?: string;
    description?: string;
    label?: string;
  };
  howWeDoItToday?: {
    banner?: WPImage;
    title?: string;
    description?: { text?: string }[];
  };
  gridEvents?: {
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonLink?: string;
    events?: {
      title?: string;
      picture?: WPImage;
    }[];
  };
  gridPictures?: {
    title?: string;
    pictures?: { nodes: { sourceUrl: string }[] };
  };
};

// =======================
// Treating Disease
// =======================
export type WPPageTreatingAcf = {
  heroBanner?: {
    imageLine?: WPImage;
    title?: string;
    description?: string;
    label?: string;
  };
  howWeDoItToday?: {
    banner?: WPImage;
    title?: string;
    description?: WPTextGroup[];
  };
};

// =======================
// Generate Health
// =======================
export type WPPageGenerateAcf = {
  heroBanner?: {
    imageLine?: WPImage;
    title?: string;
    description?: string;
    label?: string;
  };
  howWeDoItToday?: {
    banner?: WPImage;
    title?: string;
    description?: WPTextGroup[];
  };
  cardLas?: {
    title?: string;
    description?: string;
    grid?: {
      logo?: WPImage;
      picture?: WPImage;
      description?: string;
      link?: string;
    }[];
  };
  bannerLas?: {
    title?: string;
    description?: WPTextGroup[];
    imageBanner?: WPImage;
    link?: string;
  };
};

// =======================
// Instructions
// =======================
export type WPPageInstructionsAcf = {
  titleHeader?: string;
  productsList?: {
    brand?: string;
    name?: string;
    anvisa?: string;
    fileUrl?: WPImage;
  }[];
};

// =======================
// Generic (Distribuidor / Certificado / etc)
// =======================
export type WPPageGenericAcf = {
  headerTitle?: string;
  headerDescription?: string;
  formAction?: string;
};

// =======================
// Technical Services
// =======================
export type WPPageTechnicalAcf = {
  hero?: {
    title?: string;
    description?: string;
    backgroundImage?: WPImage;
  };
  whatIs?: {
    title?: string;
    items?: {
      title?: string;
      description?: string;
    }[];
  };
  form?: {
    subtitle?: string;
    title?: string;
    description?: string;
    formAction?: string;
  };
};

// =======================
// Distributor
// =======================
export type WPPageDistributorAcf = {
  header?: {
    title?: string;
    description?: string;
  };
  form?: {
    formAction?: string;
    subject?: string;
  };
};

// =======================
// LAS Microsites
// =======================
export type WPPageLasAcf = {
  howWeDoItToday?: {
    banner?: WPImage;
    logo?: WPImage;
    description?: WPTextGroup[];
    link?: string;
  };
  bannerLas?: {
    title?: string;
    description?: WPTextGroup[];
    imageBanner?: WPImage;
    link?: string;
    labelLink?: string;
  };
  sponsorship?: {
    title?: string;
    description?: WPTextGroup[];
    image?: WPImage;
    link?: string;
  };
};

// =======================
// Node mapped structure
// =======================
export type WPPageNode = {
  id: string;
  databaseId: number;
  slug: string;
  title: string;

  pageHome?: WPPageHomeAcf;
  pageArticulate?: WPPageArticulateAcf;
  pageTreating?: WPPageTreatingAcf;
  pageGenerate?: WPPageGenerateAcf;
  pageInstructions?: WPPageInstructionsAcf;
  pageGeneric?: WPPageGenericAcf;
  pageTechnical?: WPPageTechnicalAcf;
  pageDistributor?: WPPageDistributorAcf;

  // Micro-sites specific groups
  pageLasSports?: WPPageLasAcf;
  pageLasSocial?: WPPageLasAcf;
  pageLasClubs?: WPPageLasAcf;
  pageLasTalks?: WPPageLasAcf;
  pageLasXperience?: WPPageLasAcf;
  pageLasXperts?: WPPageLasAcf;
};

export type WPPagesConnection = {
  nodes: WPPageNode[];
};
