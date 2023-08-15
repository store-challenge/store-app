import { FilterContainer } from './Filter.styled';
import FilterRangeSlider from './FilterRangeSlider';
import FilterSearchComponent from './FilterSearchComponent';

const FilterDesktop = ({ priceRange, setPriceRange, selectedBrand, setSelectedBrand }) => (
  <FilterContainer>
    <FilterRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
    <FilterSearchComponent selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
  </FilterContainer>
);

export default FilterDesktop;
