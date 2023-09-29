import { Stack } from '@mui/material';

import { useCart } from '../../providers/CartProvider';

const CartPage = ({ desktop }) => {
  const { quantity } = useCart();

  return (
    <Stack>
      <div>Total Quantity = {quantity}</div>
    </Stack>
  );
};
export default CartPage;
