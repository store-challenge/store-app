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
import { CustomFormControl, CustomOutlinedInput, FilterTitle } from './Filter.styled';

const brands = [
  { key: 0, brand: 'H&M' },
  { key: 1, brand: 'Bershka' },
  { key: 2, brand: 'P&B' },
  { key: 3, brand: 'MANGO' },
  { key: 4, brand: 'H&B' },
  { key: 5, brand: 'Massimo Dutti' },
  { key: 6, brand: 'H&C' },
  { key: 7, brand: 'Forever 21' },
  { key: 8, brand: 'GAP' },
  { key: 9, brand: 'Nike' },
  { key: 10, brand: 'Adidas' },
  { key: 11, brand: 'Puma' },
  { key: 12, brand: "Levi's" },
  { key: 13, brand: 'Calvin Klein' },
  { key: 14, brand: 'Tommy Hilfiger' },
  { key: 15, brand: 'Louis Vuitton' },
  { key: 16, brand: 'Gucci' },
  { key: 17, brand: 'Prada' },
  { key: 18, brand: 'Chanel' },
  { key: 19, brand: 'Versace' },
  { key: 20, brand: 'Dior' },
  { key: 21, brand: 'Balenciaga' },
  { key: 22, brand: 'Givenchy' },
  { key: 23, brand: 'Fendi' },
  { key: 24, brand: 'Valentino' },
  { key: 25, brand: 'Yves Saint Laurent' },
  { key: 26, brand: 'Balmain' },
];

export default function FilterBrandList({ onSelect, breakpoint }) {
  const [personName, setPersonName] = useState([]);
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
    setPersonName(previousSelected => previousSelected.filter(brand => brand !== brandToDelete));
  };

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FilterTitle>Бренд</FilterTitle>
      <FormControl sx={{ width: breakpoint ? '100%' : '280px' }}>
        <InputLabel id="demo-multiple-chip-label">Вибери бренд</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<CustomOutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(value => (
                <Chip
                  onMouseDown={event => {
                    event.stopPropagation();
                  }}
                  label={value}
                  onDelete={handleDelete(value)}
                />
              ))}
            </Box>
          )}
          MenuProps={menuPropsStyles}>
          {brands.map((name, index) => (
            <MenuItem
              key={index}
              value={name.brand}
              // style={getStyles(name, personName, theme)}
            >
              <Checkbox checked={personName.includes(name.brand)} />
              <ListItemText primary={name.brand} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
