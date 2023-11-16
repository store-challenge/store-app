import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const styles = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '130%',
};

export const CustomTypographyTitle = styled(Typography)(({ theme }) => ({
  ...styles,
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '18px',
  fontWeight: 700,
  [theme.breakpoints.up('xl')]: {
    marginTop: '50px',
    marginBottom: '50px',
    fontSize: '25px',
    justifyContent: 'start',
  },
}));

export const CustomTypographySubTitle = styled(Typography)(({ theme }) => ({
  ...styles,
  marginTop: '20px',
  marginBottom: '20px',
  fontSize: '13px',
  [theme.breakpoints.up('xl')]: {
    marginTop: '50px',
    marginBottom: '50px',
    fontSize: '20px',
  },
}));
