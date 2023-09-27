import { styled } from '@mui/material/styles';
import { ButtonGroup, Typography } from '@mui/material';

export const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  width: '176px',
  height: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid var(--mainColor)',
  borderRadius: '15px',
  color: 'var(--mainColor)',
  backgroundColor: 'var(--secondColor)',
  [theme.breakpoints.down('xl')]: {
    width: '286px',
    fontSize: '15px',
    fontWeight: '500',
  },
}));

export const CustomTypography = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '95%',
  letterSpacing: '0.6px',
  color: 'var(--mainColor)',
}));