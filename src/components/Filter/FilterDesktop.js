import { FilterContainer } from './Filter.styled';
import FilterRangeSlider from './FilterRangeSlider';
import FilterBrandList from './FilterBrandList';
import ButtonCustom from '../Button/ButtonCustom';

const FilterDesktop = ({ priceRange, setPriceRange, brandList, selectedBrand, setSelectedBrand, desktop }) => {
  const resetSelectedBrands = () => {
    setSelectedBrand([]);
  };

  return (
    <FilterContainer>
      <FilterRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} desktop={desktop} />
      <FilterBrandList
        brandList={brandList}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        breakpoint={desktop}
      />
      <ButtonCustom
        text={'Застосувати'}
        type={'submit'}
        sx={{
          backgroundColor: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
          color: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
        }}
      />
      <ButtonCustom
        text={'Скинути фільтри'}
        type={'button'}
        onClick={resetSelectedBrands}
        sx={{
          backgroundColor: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
          color: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
          padding: '8px',
        }}
      />
    </FilterContainer>
  );
};
export default FilterDesktop;
