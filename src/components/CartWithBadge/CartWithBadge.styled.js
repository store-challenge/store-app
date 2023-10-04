import { styled } from '@mui/material/styles';
import { Container, Badge, Dialog, Typography, IconButton, DialogTitle } from '@mui/material';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    bottom: '35%',
    left: '3%',
    minWidth: 14,
    height: 14,
    padding: 0,
    fontFamily: 'Montserrat',
    fontSize: '10px',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '130%',
    color: 'var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
    borderRadius: '50%',
    [theme.breakpoints.up('xl')]: {
      width: 27,
      height: 27,
      fontSize: '18px',
    },
  },
}));

export const CartModal = styled(Dialog)(({ theme }) => ({}));

export const CartTitleWrapper = styled(Container)(({ theme }) => ({
  padding: 20,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

export const CartTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--mainColor)',
  fontSize: '15px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
  lineHeight: '130%',
}));

export const Close = styled(IconButton)(({ theme }) => ({
  color: 'var(--mainColor)',
}));
