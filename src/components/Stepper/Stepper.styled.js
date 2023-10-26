import { styled } from '@mui/material/styles';
import { MobileStepper, IconButton } from '@mui/material';

export const CustomMobileStepper = styled(MobileStepper)(({ theme }) => ({
  padding: '0',
  width: '170px',
  maxHeight: '35px',
  maxWidth: '400px',
  justifyContent: 'center',
  gap: '15px',
  backgroundColor: 'transparent',
  '& .MuiMobileStepper-dots': {
    gap: '15px',
  },
  '& .MuiMobileStepper-dot': {
    margin: 0,
    width: '13px',
    height: '13px',
    border: '1px solid var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
    borderRadius: '50%',
  },
  '& .MuiMobileStepper-dotActive': {
    margin: 0,
    width: '13px',
    height: '13px',
    backgroundColor: 'var(--mainColor)',
    borderRadius: '50%',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '0',
  },
}));

export const CustomIconButton = styled(IconButton)(() => ({
  width: '30px',
  height: '30px',
  padding: '0',
  backgroundColor: 'var(--mainColor)',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: 'var(--buttonHoverColor)',
  },
  '&:disabled': {
    backgroundColor: 'var(--buttonDisabled)',
  },
}));
