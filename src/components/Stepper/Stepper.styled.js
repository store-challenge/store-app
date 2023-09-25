import { styled } from '@mui/material/styles';
import { MobileStepper, IconButton } from '@mui/material';

export const CustomMobileStepper = styled(MobileStepper)(({ theme }) => ({
  marginTop: '20px',
  padding: '0',
  width: '170px',
  maxHeight: '30px',
  maxWidth: '400px',
  justifyContent: 'center',
  gap: '20px',
  backgroundColor: 'transparent',
  '& .MuiMobileStepper-dots': {
    gap: '20px',
  },
  '& .MuiMobileStepper-dot': {
    width: '8px',
    height: '8px',
    border: '1px solid var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
    borderRadius: '50%',
  },
  '& .MuiMobileStepper-dotActive': {
    width: '9px',
    height: '9px',
    backgroundColor: 'var(--mainColor)',
    borderRadius: '50%',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '10',
  },
}));

export const CustomIconButton = styled(IconButton)(() => ({
  width: '30px',
  height: '30px',
  padding: '0',
  backgroundColor: 'var(--mainColor)',
  borderRadius: '50%',
  '&.MuiIconButton-root:hover': {
    backgroundColor: 'var(--buttonHoverColor)',
  },
}));
