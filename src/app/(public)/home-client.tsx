'use client';

import BannerHero from './_components/banner-hero';
import AboutUs from './_components/about-us';
import ForHealth from './_components/for-health';
import Carroussel from './_components/carroussel';
import Partners from './_components/partners';
import Impact from './_components/impact';
import Contact from './_components/contact';
import Footer from '@/components/footer';
import { WPPageNode } from '@/lib/types/pages';

interface HomeClientProps {
  pageData: WPPageNode | null;
}

export default function HomeClient({ pageData }: HomeClientProps) {
  // Safe extraction of ACF values from the fetched pageData
  const acf = pageData?.pageHome;

  return (
    <>
      <BannerHero></BannerHero>
      <AboutUs acfData={acf?.aboutUs}></AboutUs>
      <ForHealth acfData={acf?.forHealth}></ForHealth>
      <Carroussel acfData={acf?.carroussel}></Carroussel>
      <Partners acfData={acf?.partners}></Partners>
      <Impact acfData={acf?.impact}></Impact>
      <Contact acfData={acf?.contact}></Contact>
      <Footer></Footer>
    </>
  );
}
