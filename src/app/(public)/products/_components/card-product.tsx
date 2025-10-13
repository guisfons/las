import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: number;
  name: string;
  specialities: string[];
  brands: string[];
  logo_brand?: string;
  logo_brand_second?: string;
  description: string;
  imageUrl: string;
  detail?: {
    subtitle: string;
    tags: string[];
    about: string[];
    general_information: string;
    technical_data: string[][];
    pictures: string[];
    links: {
      title: string;
      url: string;
      file_name: string;
      type:
        | 'CATALOG'
        | 'CASE_REPORTS'
        | 'ARTICLES'
        | 'DIRECTIONS_FOR_USE'
        | 'DEFAULT';
    }[];
    videos: {
      description: string;
      url: string;
    }[];
    images?: {
      url: string;
      alt: string;
    }[];
    testimonial?: {
      testimonial: string;
      testimonial_pictures?: string[];
      doctor: {
        name: string;
        specialty: string;
        photo?: string;
      };
    };
  };
}

export default function CardProduct({ product }: { product: Product }) {
  return (
    <>
      <section className="h-full group border border-line rounded-2xl flex flex-col overflow-hidden justify-center items-center gap-4 pb-8">
        <figure className="aspect-square bg-bgCard rounded-t-2xl w-full">
          <Image
            src={product.imageUrl || '/placeholder.svg'}
            alt={product.name}
            width={300}
            height={300}
            className="aspect-square object-contain w-full p-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </figure>

        <div className="h-full flex flex-col justify-center items-center gap-2 px-6">
          <p className="font-exo2 font-bold text-xl text-center">
            {product.name}
          </p>
          <p className="font-exo2 font-semibold uppercase text-xs text-center">
            {product.specialities.join(', ')}
          </p>
          <p className="font-exo2 text-label font-medium text-xs text-center line-clamp-3">
            {product.description}
          </p>
        </div>

        <Link
          // href={`/products`}
          href={`/products/${product.id}`}
          className="border border-line rounded-full p-2 px-4 bg-white text-black font-light font-exo2 text-sm hover:bg-line hover:text-white transition-colors duration-300 ease-in-out"
        >
          Saiba Mais
        </Link>
      </section>
    </>
  );
}
