import { styled, useTheme } from '@mui/material/styles';
import { Container, Badge } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

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
      height: 590,
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
  padding: 20,
  [theme.breakpoints.up('md')]: {
    padding: 50,
  },
}));

export const StyedEmptyCart = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    // padding: 50,
  },
}));
