import { styled } from '@mui/material/styles';
import { FormControl, Select, MenuItem } from '@mui/material';

const styles = {
  fontFamily: 'Montserrat',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '130%',
};

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
  width: '140px',
  '& .MuiInputBase-input': {
    ...styles,
    padding: '7px 22px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  [theme.breakpoints.up('xl')]: {
    width: '370px',
    '& .MuiInputBase-input': {
      fontSize: '16px',
      padding: '15.5px 28px',
    },
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  border: '0.38px solid var(--mainColor)',
  borderRadius: '8px',
  [theme.breakpoints.up('xl')]: {
    border: '1px solid var(--mainColor)',
    borderRadius: '20px',
    '&.MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
      minHeight: 0,
    },
  },
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  ...styles,
  padding: '5px 20px',
  minHeight: '10px',
  width: '100%',
  fontSize: '10px',
  fontWeight: '500',
  '&.MuiMenuItem-root.Mui-selected': {
    color: 'var(--textColor)',
    backgroundColor: 'var(--secondColor)',
  },
  '&.Mui-selected:hover, &:hover': {
    fontSize: '11px',
    color: 'var(--secondColor)',
    backgroundColor: 'var(--buttonHoverColor)',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0',
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: '300',
    '&.MuiMenuItem-root.Mui-selected': {
      color: 'var(--secondColor)',
      backgroundColor: 'var(--buttonHoverColor)',
    },
    '&.Mui-selected:hover, &:hover': {
      fontSize: '22px',
      color: 'var(--secondColor)',
      backgroundColor: 'var(--mainColor)',
    },
  },
}));
