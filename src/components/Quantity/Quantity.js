import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { CustomButtonGroup, CustomTypography } from './Quantity.styled';

const Quantity = ({ currentQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < currentQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <CustomButtonGroup>
      <IconButton aria-label="reduce" onClick={handleDecrement} sx={{ padding: 0 }}>
        <Icon icon={'bi:dash-circle-fill'} width={'18px'} height={'18px'} color="var(--mainColor)" />
      </IconButton>
      <CustomTypography marginX={'30px'}>{quantity}</CustomTypography>
      <IconButton aria-label="increase" onClick={handleIncrement} sx={{ padding: 0 }}>
        <Icon icon={'bi:plus-circle-fill'} width={'18px'} height={'18px'} color="var(--mainColor)" />
      </IconButton>
    </CustomButtonGroup>
  );
};

export default Quantity;
