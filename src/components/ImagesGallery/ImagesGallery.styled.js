import { styled } from '@mui/material/styles';
import { Card, DialogContent, IconButton } from '@mui/material';

export const CustomCard = styled(Card)(({ theme }) => ({
  width: '132px',
  height: '138px',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '30px',
  border: '4px solid var(--mainColor)',
  backgroundColor: '#FFF',
  [theme.breakpoints.up('xl')]: {
    width: '310px',
    height: '322px',
  },
}));

export const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  padding: '0',
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '40px',
  height: '40px',
  '& Mui-IconButton:hover': {
    backgroundColor: 'var(--buttonHoverColor)',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
  },
}));
