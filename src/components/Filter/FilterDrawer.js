import { useState } from 'react';
import { Divider, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FilterContainer } from './Filter.styled';
import FilterBrandList from './FilterBrandList';
import FilterRangeSlider from './FilterRangeSlider';
import ButtonCustom from '../Button/ButtonCustom';

export default function FilterDrawer({
  brandList,
  priceRange,
  selectedBrand,
  setPriceRange,
  setSelectedBrand,
  drawerOpen,
  handleDrawerToggle,
}) {
  const resetSelectedBrands = () => {
    setSelectedBrand([]);
  };

  return (
    <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
      <FilterContainer>
        <FilterRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
        <FilterBrandList brandList={brandList} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
        <ButtonCustom
          text={'Застосувати'}
          type={'submit'}
          disableElevation
          onClick={''}
          sx={{
            backgroundColor: 'var(--secondColor)',
            color: 'var(--mainColor)',
            padding: '8px',
            '&:hover': {
              color: 'var(--secondColor)',
              backgroundColor: 'var(--mainColor)',
              borderColor: 'var(--secondColor)',
            },
          }}
        />
        <ButtonCustom
          text={'Скинути фільтри'}
          type={'reset'}
          disableElevation
          onClick={resetSelectedBrands}
          sx={{
            backgroundColor: 'var(--mainColor)',
            color: 'var(--secondColor)',
            padding: '8px',
            borderColor: 'var(--secondColor)',
            '&:hover': {
              color: 'var(--mainColor)',
              backgroundColor: 'var(--secondColor)',
            },
          }}
        />
      </FilterContainer>
    </Drawer>
  );
}