import { useSelector, useDispatch } from 'react-redux';
import { Divider, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FilterContainer } from './Filter.styled';
import FilterBrandList from './FilterBrandList';
import FilterRangeSlider from './FilterRangeSlider';
import ButtonCustom from '../Button/ButtonCustom';

export default function FilterDrawer({ priceRange, setPriceRange, selectedBrand, setSelectedBrand }) {
  // const handleDrawerToggle = () => {};

  return (
    <Drawer>
      <FilterContainer>
        <FilterRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
        <FilterBrandList selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
        <ButtonCustom text={'Застосувати'} type={'submit'} disableElevation onClick={''} />
        <ButtonCustom
          text={'Скинути фільтри'}
          type={'reset'}
          disableElevation
          onClick={''}
          sx={{
            backgroundColor: 'var(--secondColor',
          }}
        />
      </FilterContainer>
    </Drawer>
  );
}
