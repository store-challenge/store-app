import { styled } from '@mui/material/styles';
import { Card, DialogContent, IconButton } from '@mui/material';

export const CustomCard = styled(Card)(({ theme }) => ({
  padding: '20px',
  width: '92px',
  height: '98px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '30px',
  border: '4px solid var(--mainColor)',
  backgroundColor: '#FFF',
  [theme.breakpoints.up('xl')]: {
    padding: '25px',
    width: '310px',
    height: '322px',
  },
}));

export const CustomDialogContent = styled(DialogContent)(() => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  padding: '0',
  position: 'absolute',
  top: '10px',
  right: '10px',
  width: '25px',
  height: '25px',
  '& Mui-IconButton:hover': {
    backgroundColor: 'var(--buttonHoverColor)',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    top: '20px',
    right: '20px',
  },
}));
