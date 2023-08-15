import Box from '@mui/material/Box';
import { Slider, Typography, styled } from '@mui/material';
import Input from '@mui/material/Input';
import { FilterTitle, FilterSlider, FilterSliderInput, SliderTypography } from './Filter.styled';

export default function RangeSlider({ priceRange, setPriceRange }) {
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBlur = () => {
    if (priceRange < 0) {
      setPriceRange(0);
    } else if (priceRange > 100) {
      setPriceRange(100);
    }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setPriceRange([value, priceRange[1]]);
  };

  return (
    <Box>
      <FilterTitle>Ціна</FilterTitle>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SliderTypography>Від</SliderTypography>
        <SliderTypography>До</SliderTypography>
      </Box>
      <Box>
        <FilterSlider value={priceRange} max={20_000} onChange={handleChange} valueLabelDisplay="auto" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <FilterSliderInput
            disableUnderline
            type={'number'}
            value={priceRange[0]}
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
          <FilterSliderInput
            disableUnderline
            type={'number'}
            value={priceRange[1]}
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
