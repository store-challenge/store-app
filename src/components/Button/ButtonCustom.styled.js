import { styled, Button } from '@mui/material';

export const CustomButton = styled(Button)(({ theme }) => ({
  width: '288px',
  height: '48px',
  padding: '8px 22px',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '15px',
  lineHeight: '26px',
  textTransform: 'none',
  '&::first-letter': {
    textTransform: 'capitalize',
  },
  border: '1px solid var(--mainColor)',
  borderRadius: '15px',
  '&:hover': {
    borderColor: 'var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
  },
  '&:active': {
    color: 'var(--secondColor)',
    borderColor: 'var(--buttonClickColor)',
    backgroundColor: 'var(--buttonClickColor)',
  },
  [theme.breakpoints.up('xl')]: {
    width: '177px',
    height: '42px',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    '&:hover': {
      border: 'inherit',
      backgroundColor: 'var(--buttonHoverColor)',
    },
    '&:active,&:focus-visible': {
      backgroundColor: 'var(--buttonClickColor)',
    },
  },
}));
