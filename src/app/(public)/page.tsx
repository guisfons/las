'use client';

import BannerHero from './_components/banner-hero';
import AboutUs from './_components/about-us';
import ForHealth from './_components/for-health';
import Carroussel from './_components/carroussel';
import Partners from './_components/partners';
import Impact from './_components/impact';
import Contact from './_components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <BannerHero></BannerHero>
      <AboutUs></AboutUs>
      <ForHealth></ForHealth>
      <Carroussel></Carroussel>
      <Partners></Partners>
      <Impact></Impact>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
