import { Box, Slider, Typography, styled, TextField, Stack, Input } from '@mui/material';
import {
  FilterTitle,
  FilterSlider,
  FilterSliderInputMin,
  FilterSliderInputMax,
  SliderTypography,
} from './Filter.styled';

export default function RangeSlider({ priceRange, setPriceRange, desktop }) {
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBlur = () => {
    if (priceRange < 0) {
      setPriceRange(0);
    } else if (priceRange > 20_000) {
      setPriceRange(20_000);
    }
  };

  return (
    <Box>
      <FilterTitle>Ціна</FilterTitle>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SliderTypography>Від</SliderTypography>
        <SliderTypography>До</SliderTypography>
      </Box>
      <Stack sx={{ gap: desktop ? '0px' : '20px' }}>
        <FilterSlider value={priceRange} max={20_000} onChange={handleChange} valueLabelDisplay="auto" />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <FilterSliderInputMin
            disableUnderline
            type="number"
            value={priceRange[0]}
            onBlur={handleBlur}
            onChange={event => {
              setPriceRange([Number(event.target.value), priceRange[1]]);
            }}
          />
          <FilterSliderInputMax
            disableUnderline
            type="number"
            value={priceRange[1]}
            onBlur={handleBlur}
            onChange={event => {
              setPriceRange([priceRange[0], Number(event.target.value)]);
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
