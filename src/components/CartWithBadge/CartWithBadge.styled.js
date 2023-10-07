import { styled } from '@mui/material/styles';
import { Badge, Box, Dialog, DialogContentText, DialogTitle, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

export const StyedDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'var(--secondColor)',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      maxWidth: 1136,
      height: 913,
      borderRadius: 30,
    },
  },
}));

export const StyedDialogTitle = styled(DialogTitle)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  padding: 20,
  borderBottom: '2px solid var(--mainColor)',
  [theme.breakpoints.up('md')]: {
    padding: 50,
  },
}));

export const StyedTitleText = styled(DialogContentText)(({ theme }) => ({
  lineHeight: '130%',
  fontSize: '15px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
  color: 'var(--mainColor)',
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
}));

export const StyedTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  lineHeight: '130%',
  fontSize: '13px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
  color: 'var(--mainColor)',
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    fontWeight: '300',
  },
}));

export const StyedCloseIcon = styled(CloseIcon)(({ theme }) => ({
  width: 20,
  height: 20,
  color: 'var(--mainColor)',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    width: 32,
    height: 32,
  },
}));

export const StyedContentWrapper = styled(Stack)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: 20,
  [theme.breakpoints.up('md')]: {
    padding: 50,
  },
}));

export const StyedEmptyCart = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
}));

export const StyledImage = styled(Box)(({ theme }) => ({
  width: '158px',
  height: '126px',
  animation: 'mover 0.4s infinite  alternate',
  '@keyframes mover': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-4px)' },
  },
  [theme.breakpoints.up('md')]: {
    width: '314px',
    height: '248px',
  },
}));
