import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import { CustomSelect, CustomMenuItem } from './Sort.styled';

const Sort = ({ onSelect, breakpoint }) => {
  const [sortOption, setSortOption] = useState('newest');

  const valueOptions = [
    { value: 'asc', text: 'Від дешевих до дорогих' },
    { value: 'desc', text: 'Від дорогих до дешевих' },
    { value: 'az', text: 'Від А до Я' },
    { value: 'za', text: 'Від Я до А' },
    { value: 'newest', text: 'За новизною' },
  ];

  const menuPropsStyles = {
    PaperProps: {
      style: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: breakpoint ? '20px' : '15px',
        color: !breakpoint && 'var(--secondColor)',
        backgroundColor: breakpoint ? 'var(--secondColor)' : 'var(--mainColor)',
        boxShadow: 'none',
      },
    },
    MenuListProps: {
      style: {
        width: '100%',
        padding: 0,
      },
    },
  };

  const handleSort = event => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
    setSortOption(selectedOption);
  };

  return (
    <CustomSelect
      defaultValue={'newest'}
      value={sortOption}
      onChange={handleSort}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      variant="outlined"
      MenuProps={menuPropsStyles}
      IconComponent={props => (
        <Icon icon={'iconamoon:arrow-down-2-duotone'} style={{ fontSize: breakpoint ? '24px' : '10px' }} {...props} />
      )}>
      {valueOptions.map((element, index) => (
        <CustomMenuItem key={index} value={element.value}>
          {element.text}
        </CustomMenuItem>
      ))}
    </CustomSelect>
  );
};

export default Sort;
