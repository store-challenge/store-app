import { styled } from '@mui/material/styles';
import { Card, DialogContent, IconButton } from '@mui/material';

export const CustomCard = styled(Card)(({ theme }) => ({
  padding: '10px',
  width: '112px',
  height: '118px',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-between',
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
  gap: '20px',
  display: 'flex',
  flexWrap: 'wrap',
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
  [theme.breakpoints.down('xl')]: {
    width: '30px',
    height: '30px',
    top: '10px',
    right: '10px',
  },
}));
