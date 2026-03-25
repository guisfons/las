import { WPImage } from './wordpress';

export type WPEventoAcf = {
  img?: WPImage;
  imageType?: 'quadrada' | 'banner' | 'icon';
  dateNumber?: string;
  month?: string;
  year?: string;
  hours?: string;
  speaker?: string;
  moderator?: string;
  local?: string;
  subscribe?: string;
};

export type WPEventoNode = {
  id: string;
  slug: string;
  title: string;
  date: string;
  eventoacf?: WPEventoAcf;
  eventoCategorias?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
};

export type WPEventosConnection = {
  nodes: WPEventoNode[];
};
