import { Product } from '@/app/(public)/produtos/_components/card-product';
import { WPProductNode } from '../types/wordpress';

export function mapWPProductToProduct(wpProduct: WPProductNode): Product {
  const acf = wpProduct.productacf;

  return {
    id: wpProduct.databaseId,
    name: wpProduct.title,
    slug: wpProduct.slug, // Adding slug as it is used in the frontend
    specialities: acf?.specialities || [],
    brands: acf?.brands || [],
    logo_brand: acf?.logoBrand?.node?.sourceUrl,
    logo_brand_second: acf?.logoBrandSecond?.node?.sourceUrl,
    description: acf?.description || '',
    imageUrl: acf?.imageUrl?.node?.sourceUrl || '/placeholder.svg',
    detail: {
      subtitle: acf?.subtitle || '',
      tags: acf?.tags || [],
      // map repeater to array of strings
      about:
        acf?.about?.map((item) => item.point).filter((p): p is string => !!p) ||
        [],
      general_information: acf?.generalInformation || '',
      technical_data:
        acf?.technicalData?.map((row) =>
          [
            row.col1 || '',
            row.col2 || '',
            row.col3 || '',
            row.col4 || '',
          ].filter((col) => col !== ''),
        ) || [],
      pictures: acf?.pictures?.nodes?.map((img) => img.sourceUrl) || [],
      links:
        acf?.links?.map((link) => ({
          title: link.title || '',
          url: link.fileUrl || '',
          file_name: link.fileName || '',
          type:
            (link.type as
              | 'DEFAULT'
              | 'CATALOG'
              | 'CASE_REPORTS'
              | 'ARTICLES'
              | 'DIRECTIONS_FOR_USE') || 'DEFAULT',
        })) || [],
      videos:
        acf?.videos?.map((v) => ({
          description: v.description || '',
          url: v.videoUrl || '',
        })) || [],
      images:
        acf?.images?.nodes?.map((img) => ({
          url: img.sourceUrl,
          alt: img.altText || '',
        })) || [],
      testimonial: acf?.testimonial
        ? {
            testimonial: acf.testimonial.testimonialText || '',
            testimonial_pictures:
              acf.testimonial.testimonialPictures?.nodes?.map(
                (img) => img.sourceUrl,
              ) || [],
            doctor: {
              name: acf.testimonial.doctorName || '',
              specialty: acf.testimonial.doctorSpecialty || '',
              photo: acf.testimonial.doctorPhoto?.node?.sourceUrl,
            },
          }
        : undefined,
    },
  };
}
