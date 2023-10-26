import { styled } from '@mui/material/styles';
import { ButtonGroup, Typography } from '@mui/material';

export const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  padding: '8px 24px',
  width: '238px',
  height: '24px',
  fontSize: '15px',
  fontWeight: '500',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid var(--mainColor)',
  borderRadius: '15px',
  color: 'var(--mainColor)',
  backgroundColor: 'var(--secondColor)',
  [theme.breakpoints.up('640')]: {
    width: '126px',
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
