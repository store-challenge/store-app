import { Typography, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Input from '@mui/material/Input';

export const FilterContainer = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  width: '320px',
  height: '651px',
  display: 'flex',
  gap: '20px',
  backgroundColor: 'var(--mainColor)',
  [theme.breakpoints.up('xl')]: {
    width: '272px',
    height: '669px',
    backgroundColor: 'var(--secondColor)',
    gap: '50px',
    marginRight: '20px',
  },
}));

export const FilterTitle = styled(Typography)`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 50px;
`;

// Range Slider
export const FilterSliderInput = styled(Input)`
  font-family: Montserrat;
  font-size: 20px;
  margin 0;
  .MuiInputBase-input{
    padding: 0;
    width: auto;
  }
`;

export const FilterSlider = styled(Slider)`
  color: var(--mainColor);
  width: 250px;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;

export const SliderTypography = styled(Typography)`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
`;
