import { styled } from '@mui/material/styles';
import { Card, DialogContent, IconButton } from '@mui/material';

export const CustomCard = styled(Card)(({ theme }) => ({
  width: '244px',
  height: '250px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '30px',
  border: '2px solid var(--mainColor)',
  backgroundColor: '#FFF',
  [theme.breakpoints.up('xl')]: {
    width: '328px',
    height: '340px',
    gap: '20px',
    border: '4px solid var(--mainColor)',
  },
}));

export const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  [theme.breakpoints.up('xl')]: {
    gap: '30px',
  },
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  padding: '0',
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('xl')]: {
    width: '30px',
    height: '30px',
    top: '10px',
    right: '10px',
  },
}));
