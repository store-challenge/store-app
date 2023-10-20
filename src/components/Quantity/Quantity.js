import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { CustomButtonGroup, CustomTypography } from './Quantity.styled';

const Quantity = props => {
  const { currentQuantity, onChange, available } = props;

  const handleIncrement = () => {
    if (currentQuantity < available) {
      onChange(currentQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      onChange(currentQuantity - 1);
    }
  };

  return (
    <CustomButtonGroup>
      <IconButton aria-label="reduce" onClick={handleDecrement} sx={{ padding: 0 }}>
        <Icon icon={'bi:dash-circle-fill'} width={'18px'} height={'18px'} color="var(--mainColor)" />
      </IconButton>
      <CustomTypography>{currentQuantity}</CustomTypography>
      <IconButton aria-label="increase" onClick={handleIncrement} sx={{ padding: 0 }}>
        <Icon icon={'bi:plus-circle-fill'} width={'18px'} height={'18px'} color="var(--mainColor)" />
      </IconButton>
    </CustomButtonGroup>
  );
};

export default Quantity;
