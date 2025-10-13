'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import Footer from '@/components/footer';
import FilterProducts from './_components/filter-products';
import ListProducts from './_components/list-products';

import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import Icon from '@/shared/icon/icon';
import { ALL_PRODUCTS } from '../../../../public/mocks/products';

export default function Home() {
  const router = useRouter();

  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Ref para evitar atualizar URL no primeiro render
  const isInitialMount = useRef(true);

  // Sincroniza filtros com URL no mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const specialtiesFromUrl = params.getAll('specialty');
    const brandsFromUrl = params.getAll('brand');

    if (specialtiesFromUrl.length) {
      setSelectedSpecialties(specialtiesFromUrl);
    }
    if (brandsFromUrl.length) {
      setSelectedBrands(brandsFromUrl);
    }
  }, []);

  // Atualiza URL quando filtros mudam, exceto no primeiro render
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const params = new URLSearchParams();

    selectedSpecialties.forEach((spec) => params.append('specialty', spec));
    selectedBrands.forEach((brand) => params.append('brand', brand));

    const queryString = params.toString();
    router.replace(`/products?${queryString}`);
  }, [selectedSpecialties, selectedBrands, router]);

  // Filtra produtos baseado nos filtros
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const specialtyMatch =
      selectedSpecialties.length === 0 ||
      product.specialities.some((s) => selectedSpecialties.includes(s));

    const brandMatch =
      selectedBrands.length === 0 ||
      product.brands.some((b) => selectedBrands.includes(b));

    return specialtyMatch && brandMatch;
  });

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <section className="w-full max-w-7xl px-3 pt-36 mx-auto flex flex-col gap-6 py-12">
        <header className="flex flex-col gap-6">
          <h1 className="max-w-60 md:max-w-full mx-auto font-exo2 text-2xl md:text-4xl font-bold text-center">
            Produtos que Impactam Vidas
          </h1>
          <p className="max-w-xl w-11/12 mx-auto font-exo2 text-lg text-label text-center">
            Oferecemos soluções pensadas para proporcionar o conforto, bem-estar
            e apoiar a saúde em cada passo.
          </p>
        </header>

        <div className="md:hidden mt-10 ml-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="px-6 rounded-full border text-base font-exo2 font-bold border-black/10 bg-white"
              >
                Filtrar Por <Icon name="filter" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[calc(20rem+1rem)] pt-12 !px-4 !pb-4 rounded-2xl">
              <FilterProducts
                selectedSpecialties={selectedSpecialties}
                setSelectedSpecialties={setSelectedSpecialties}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                onClose={() => setOpen(false)} // Passa o callback para fechar
              />
            </DialogContent>
          </Dialog>
        </div>

        <div className="w-full flex gap-6 md:mt-10">
          <div className="hidden md:block">
            <FilterProducts
              selectedSpecialties={selectedSpecialties}
              setSelectedSpecialties={setSelectedSpecialties}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
          </div>

          <ListProducts products={filteredProducts} />
        </div>
      </section>
      <Footer />
    </>
  );
}
