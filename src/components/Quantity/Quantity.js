import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { CustomButtonGroup, CustomTypography } from './Quantity.styled';

const Quantity = props => {
  const { currentQuantity, onChange, available, isDisabled } = props;

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
      <IconButton aria-label="reduce" disabled={isDisabled} onClick={handleDecrement} sx={{ padding: 0 }}>
        <Icon icon={'bi:dash-circle-fill'} width={'18px'} height={'18px'} />
      </IconButton>
      <CustomTypography marginX={'30px'}>{currentQuantity}</CustomTypography>
      <IconButton aria-label="increase" disabled={isDisabled} onClick={handleIncrement} sx={{ padding: 0 }}>
        <Icon icon={'bi:plus-circle-fill'} width={'18px'} height={'18px'} />
      </IconButton>
    </CustomButtonGroup>
  );
};

export default Quantity;
