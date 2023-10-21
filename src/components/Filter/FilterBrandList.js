import { useState } from 'react';
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { StyledFormControl, FilterTitle, StyledCheckbox } from './Filter.styled';

export default function FilterBrandList({ brandList, selectedBrand, setSelectedBrand, breakpoint }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const menuPropsStyles = {
    PaperProps: {
      style: {
        maxWidth: '100%',
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        borderRadius: breakpoint ? '20px' : '15px',
        color: !breakpoint && 'var(--secondColor)',
        backgroundColor: breakpoint ? 'var(--secondColor)' : 'var(--mainColor)',
        boxShadow: '0px 8px 12px 0px rgba(9, 30, 66, 0.15), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)',
      },
    },
  };

  const handleDelete = brandToDelete => () => {
    setSelectedBrand(previousSelected => previousSelected.filter(brand => brand !== brandToDelete));
  };

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setSelectedBrand(value);
  };

  return (
    <div>
      <FilterTitle>Бренд</FilterTitle>
      <FormControl sx={{ width: breakpoint ? '100%' : '280px' }}>
        <InputLabel>Вибери бренд</InputLabel>
        <Select
          multiple
          value={selectedBrand}
          onChange={handleChange}
          // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(brand => (
                <Chip
                  key={brand}
                  onMouseDown={event => {
                    event.stopPropagation();
                  }}
                  label={brand}
                  onDelete={handleDelete(brand)}
                />
              ))}
            </Box>
          )}
          MenuProps={menuPropsStyles}>
          {brandList.map(brand => (
            <MenuItem key={brand.brandName} value={brand.brandName}>
              <StyledCheckbox checked={selectedBrand.includes(brand.brandName)} />
              <ListItemText primary={brand.brandName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
