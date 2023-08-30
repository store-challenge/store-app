import { Divider, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FilterContainer } from './Filter.styled';
import FilterBrandList from './FilterBrandList';
import FilterRangeSlider from './FilterRangeSlider';
import ButtonCustom from '../Button/ButtonCustom';

const FilterMobile = ({ priceRange, setPriceRange, selectedBrand, setSelectedBrand, desktop }) => (
  <div>
    <ButtonCustom
      text={'Фільтри'}
      type={'button'}
      disableElevation
      sx={{
        fontSize: '15px',
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
      desktop={!desktop}
    />
  </div>
);
export default FilterMobile;
