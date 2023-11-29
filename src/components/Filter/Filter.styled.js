import {
  OutlinedInput,
  InputLabel,
  Select,
  Chip,
  Checkbox,
  ListItemText,
  Typography,
  Slider,
  FormControl,
  MenuItem,
  Input,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const styles = ({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '130%',
  color: 'var(--secondColor)',
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    color: 'var(--textColor)',
  },
});

export const FilterContainer = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  flexDirection: 'column',
  width: '320px',
  height: '100%',
  display: 'flex',
  gap: '20px',
  padding: '20px',
  backgroundColor: 'var(--mainColor)',
  [theme.breakpoints.up('xl')]: {
    width: '272px',
    height: '669px',
    backgroundColor: 'var(--secondColor)',
    gap: '50px',
    marginRight: '20px',
    padding: '0px',
  },
}));

export const FilterTitle = styled(Typography)(({ theme }) => ({
  ...styles,
  fontSize: '15px',
  fontWeight: 500,
  marginBottom: '20px',
  [theme.breakpoints.up('xl')]: {
    marginBottom: '50px',
  },
}));

// Range Slider
export const SliderTypography = styled(Typography)(({ theme }) => ({
  ...styles,
}));

export const FilterSliderInputMin = styled(Input)(({ theme }) => ({
  ...styles,
  textDecoration: 'underline',

  '& .MuiInputBase-input': {
    textAlign: 'left',
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  [theme.breakpoints.up('xl')]: {
    color: 'var(--mainColor)',
  },
}));

export const FilterSliderInputMax = styled(Input)(({ theme }) => ({
  ...styles,
  textDecoration: 'underline',

  '& .MuiInputBase-input': {
    textAlign: 'right',
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  [theme.breakpoints.up('xl')]: {
    color: 'var(--mainColor)',
  },
}));

export const FilterSlider = styled(Slider)(({ theme }) => ({
  color: 'var(--secondColor)',
  width: '270px',
  textAlign: 'center',
  display: 'block',
  margin: '0 auto',
  marginTop: '20px',
  [theme.breakpoints.up('xl')]: {
    color: 'var(--mainColor)',
    width: '250px',
    marginTop: '50px',
  },
}));

// FilterBrandList

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minHeight: '48px',
  borderRadius: '15px',
  border: '0.38px solid var(--mainColor)',
  borderColor: 'var(--secondColor)',
  '& .MuiInputBase-input': {
    padding: '8px 20px',
  },
  '& .MuiInputLabel-root': {
    ...styles,
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--secondColor)',
    '&.Mui-focused': {
      color: 'transparent',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  [theme.breakpoints.up('xl')]: {
    minHeight: '55px',
    fontSize: '16px',
    border: '1px solid var(--mainColor)',
    borderRadius: '20px',
    '& .MuiInputBase-input': {
      ...styles,
      padding: '18px 15px',
    },
    '& .MuiInputLabel-root': {
      ...styles,
      fontSize: '16px',
      color: 'var(--mainColor)',
      '&.Mui-focused': {
        color: 'transparent',
      },
    },
  },
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  ...styles,
  minHeight: '10px',
  fontSize: '8.371px',
  fontWeight: 500,
  color: 'var(--mainColor)',
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

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: 'var(--mainColor)',
  '&.Mui-checked': {
    color: 'var(--mainColor)',
  },
}));
