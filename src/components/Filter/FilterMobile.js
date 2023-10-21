import { useState } from 'react';
import { Divider, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FilterContainer } from './Filter.styled';
import FilterBrandList from './FilterBrandList';
import FilterRangeSlider from './FilterRangeSlider';
import ButtonCustom from '../Button/ButtonCustom';
import FilterDrawer from './FilterDrawer';

const FilterMobile = ({ priceRange, setPriceRange, brandList, selectedBrand, setSelectedBrand, desktop }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(previousState => !previousState);
  };
  return (
    <div>
      <ButtonCustom
        text={'Фільтри'}
        type={'button'}
        disableElevation
        sx={{
          fontSize: '10px',
          lineHeight: '26px',
          textTransform: 'none',
          width: '140px',
          height: '29px',
          color: 'var(--secondColor)',
          backgroundColor: 'var(--mainColor)',
          borderRadius: '8px',
          '&:hover': {
            border: 'inherit',
            backgroundColor: 'var(--buttonHoverColor)',
          },
          '&:active,&:focus-visible': {
            backgroundColor: 'var(--buttonClickColor)',
          },
        }}
        onClick={handleDrawerToggle}
      />
      <FilterDrawer
        brandList={brandList}
        priceRange={priceRange}
        selectedBrand={selectedBrand}
        setPriceRange={setPriceRange}
        setSelectedBrand={setSelectedBrand}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
};
export default FilterMobile;
