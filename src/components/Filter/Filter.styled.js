import { Typography, Slider, FormControl, MenuItem, useAutocomplete } from '@mui/material';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import Input from '@mui/material/Input';

const styles = {
  fontFamily: 'Montserrat',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '130%',
};

export const FilterContainer = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  width: '320px',
  height: '651px',
  display: 'flex',
  gap: '20px',
  backgroundColor: 'var(--mainColor)',
  [theme.breakpoints.up('xl')]: {
    width: '272px',
    height: '669px',
    backgroundColor: 'var(--secondColor)',
    gap: '50px',
    marginRight: '20px',
  },
}));

export const FilterTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '130%',
  marginBottom: '50px',
}));

// Range Slider
export const FilterSliderInputMin = styled(Input)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '20px',
  textDecoration: 'underline',
  textDecorationColor: 'var(--mainColor)',
  margin: '0',
  '& .MuiInputBase-input': {
    textAlign: 'left',
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));

export const FilterSliderInputMax = styled(Input)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '20px',
  textDecoration: 'underline',
  margin: '0',
  '& .MuiInputBase-input': {
    textAlign: 'right',
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));

export const FilterSlider = styled(Slider)(({ theme }) => ({
  color: 'var(--mainColor)',
  width: '250px',
  textAlign: 'center',
  display: 'block',
  margin: '0 auto',
  marginTop: '50px',
}));

export const SliderTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '130%',
}));

// FilterBrandList

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
  ...styles,
  padding: '8px 20px',
  width: '288px',
  border: '0.38px solid var(--mainColor)',
  borderRadius: '10px',
  '& .MuiInputBase-input': {
    padding: 0,
  },
  [theme.breakpoints.up('xl')]: {
    padding: '18px',
    width: '100%',
    fontSize: '16px',
    border: '1px solid var(--mainColor)',
    borderRadius: '20px',
  },
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  ...styles,
  // padding: '10px 16px',
  minHeight: '10px',
  fontSize: '8.371px',
  fontWeight: 500,
  '&.Mui-selected': {
    color: 'var(--textColor)',
    backgroundColor: 'var(--secondColor)',
  },
  '&.Mui-selected:hover, &:hover': {
    fontSize: '10px',
    color: 'var(--secondColor)',
    backgroundColor: 'var(--buttonHoverColor)',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0',
    fontSize: '20px',
    fontWeight: 300,
    '&.Mui-selected': {
      // color: 'var(--secondColor)',
      // backgroundColor: 'var(--mainColor)',
    },
    '&.Mui-selected:hover, &:hover': {
      fontSize: '22px',
      color: 'var(--secondColor)',
      backgroundColor: 'var(--buttonHoverColor)',
    },
  },
}));
