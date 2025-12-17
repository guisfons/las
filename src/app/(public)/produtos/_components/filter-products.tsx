import { Button } from '@/components/ui';
import Icon from '@/shared/icon/icon';
import { ALL_PRODUCTS } from '../../../../../public/mocks/products';

type FilterProductsProps = {
  selectedSpecialties: string[];
  setSelectedSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  onClose?: () => void; // novo prop
};

export default function FilterProducts({
  selectedSpecialties,
  setSelectedSpecialties,
  selectedBrands,
  setSelectedBrands,
  onClose,
}: FilterProductsProps) {
  const allSpecialties = ALL_PRODUCTS.flatMap(
    (product) => product.specialities,
  );
  const specialities = Array.from(new Set(allSpecialties));

  const allProductsFilter = ALL_PRODUCTS.filter(
    (product) => product.brands.length > 0,
  );
  const allBrands = allProductsFilter.flatMap((product) => product.brands[0]);
  const brands = Array.from(new Set(allBrands));

  // Função para alternar seleção de specialty
  function toggleSpecialty(specialty: string) {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(
        selectedSpecialties.filter((s) => s !== specialty),
      );
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  }

  // Função para alternar seleção de brand
  function toggleBrand(brand: string) {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  }

  // Função para aplicar filtros - aqui pode ter lógica extra se quiser
  function applyFilters() {
    onClose?.();
    // Pode deixar vazio ou adicionar lógica
  }

  return (
    <section className="overflow-hidden w-full max-w-80 h-max pt-5 pb-7 px-6 rounded-2xl border border-black/10 bg-white">
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-6">
        <p className="font-exo2 font-bold text-xl text-black">Especialidades</p>
        <Icon name="filter" />
      </div>

      <div className="max-h-[calc(65vh-6rem-3rem-3rem-53px-28px-40px)] md:max-h-full overflow-auto">
        {specialities.map((speciality) => (
          <div
            key={speciality}
            className="flex items-center justify-start gap-2 my-4"
          >
            <input
              type="checkbox"
              id={speciality}
              className="w-4 h-4 accent-green"
              checked={selectedSpecialties.includes(speciality)}
              onChange={() => toggleSpecialty(speciality)}
            />
            <label
              htmlFor={speciality}
              className="font-exo2 font-normal text-sm text-label cursor-pointer"
            >
              {speciality}
            </label>
          </div>
        ))}
      </div>

      <div className="w-full border-b border-black/10 my-6"></div>

      <p className="font-exo2 font-bold text-xl text-black">Marcas</p>

      <div className="max-h-[calc(65vh-6rem-3rem-3rem-53px-28px-40px)] md:max-h-full overflow-auto w-full flex gap-2 flex-wrap mt-5">
        {brands.map((brand) => (
          <div
            key={brand}
            onClick={() => toggleBrand(brand)}
            className={`rounded-full px-5 py-2 cursor-pointer select-none ${
              selectedBrands.includes(brand)
                ? 'bg-green text-white'
                : 'bg-[#F0F0F0] text-black/60'
            }`}
          >
            <p className="font-exo2 font-normal text-sm">{brand}</p>
          </div>
        ))}
      </div>

      <div className="w-full border-b border-black/10 my-6"></div>

      <Button
        onClick={applyFilters}
        className="w-full rounded-full font-exo2 text-sm font-bold bg-green focus:bg-green hover:bg-green active:bg-green"
      >
        Aplicar Filtros
      </Button>
    </section>
  );
}
