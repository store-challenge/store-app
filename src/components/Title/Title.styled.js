import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const styles = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '130%',
};

export const CustomTypography = styled(Typography)(({ theme }) => ({
  ...styles,
  marginTop: '20px',
  marginBottom: '20px',
  fontSize: '18px',
  fontWeight: 700,
  [theme.breakpoints.up('xl')]: {
    marginTop: '50px',
    marginBottom: '50px',
    fontSize: '25px',
  },
}));
