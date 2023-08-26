import { styled } from '@mui/material/styles';
import { Select, MenuItem } from '@mui/material';

const styles = {
  fontFamily: 'Montserrat',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '130%',
};

export const CustomSelect = styled(Select)(({ theme }) => ({
  ...styles,
  padding: '8px',
  // minWidth: '140px',
  width: '140px',
  border: '0.38px solid var(--mainColor)',
  borderRadius: '10px',
  '& .MuiInputBase-input': {
    padding: 0,
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px',
    minWidth: '368px',
    fontSize: '16px',
    border: '1px solid var(--mainColor)',
    borderRadius: '20px',
  },
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  ...styles,
  padding: '10px 16px',
  minHeight: '10px',
  fontSize: '8.371px',
  fontWeight: '500',
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
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: '300',
    '&.Mui-selected': {
      color: 'var(--secondColor)',
      backgroundColor: 'var(--mainColor)',
    },
    '&.Mui-selected:hover, &:hover': {
      fontSize: '22px',
      color: 'var(--secondColor)',
      backgroundColor: 'var(--buttonHoverColor)',
    },
  },
}));
