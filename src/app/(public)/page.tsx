import HomeClient from './home-client';
import { getPageBySlug } from '@/lib/api/pages';

export default async function Home() {
  // Fetch ACF data from WordPress using the 'home' slug
  const pageData = await getPageBySlug('home');

  return <HomeClient pageData={pageData} />;
}
