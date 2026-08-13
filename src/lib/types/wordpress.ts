// src/lib/types/wordpress.ts

export type WPImage = {
  node: {
    sourceUrl: string;
    altText?: string;
  };
};

export type WPProductAcf = {
  logoBrand?: WPImage;
  logoBrandSecond?: WPImage;
  imageUrl?: WPImage;
  description?: string;
  subtitle?: string;
  about?: {
    point?: string;
  }[];
  generalInformation?: string;
  // A repeater field in ACF will return an array of objects
  technicalData?: {
    col1?: string;
    col2?: string;
    col3?: string;
    col4?: string;
  }[];
  // Gallery fields return nodes (plural)
  pictures?: { nodes: { sourceUrl: string; altText?: string }[] };
  links?: {
    title?: string;
    fileUrl?: string; // the actual uploaded file or external url
    fileName?: string;
    type?: string | string[];
  }[];
  videos?: {
    description?: string;
    videoUrl?: string;
  }[];
  images?: { nodes: { sourceUrl: string; altText?: string }[] };
  testimonial?: {
    testimonialText?: string;
    testimonialPictures?: { nodes: { sourceUrl: string; altText?: string }[] };
    doctorName?: string;
    doctorSpecialty?: string;
    doctorPhoto?: WPImage;
  };
  sources?: string;
};

export type WPProductNode = {
  id: string;
  databaseId: number;
  slug: string;
  title: string;
  productacf?: WPProductAcf;
  productSpecialities?: { nodes: { name: string }[] };
  productBrands?: { nodes: { name: string }[] };
  productTags?: { nodes: { name: string }[] };
};

export type WPProductsConnection = {
  nodes: WPProductNode[];
};
