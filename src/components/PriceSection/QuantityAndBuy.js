import { Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { useCart } from '../../providers/CartProvider';
import Quantity from '../Quantity/Quantity';
import ButtonCustom from '../Button/ButtonCustom';

const QuantityAndBuy = props => {
  const { selectedQuantity, setSelectedQuantity, available, handleClick, breakpoint, tablet } = props;
  const { id } = useParams();
  const { itemQuantities } = useCart();

  const isButtonDisabled = selectedQuantity + (itemQuantities[id] || 0) > available || available === 0;

  const handleBuyClick = () => {
    if (!isButtonDisabled) {
      handleClick(selectedQuantity);
    }
  };

  return (
    <Grid container flexDirection={'column'} rowGap={breakpoint ? 6.25 : 2.5} maxWidth={'100%'}>
      <Stack gap={'25px'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={'20px'}>
          <Quantity
            currentQuantity={selectedQuantity}
            onChange={newQuantity => setSelectedQuantity(newQuantity)}
            available={itemQuantities[id] ? available - itemQuantities[id] : available}
          />
          <ButtonCustom
            disabled={isButtonDisabled}
            onClick={handleBuyClick}
            text={'Купити'}
            sx={{
              width: tablet ? '177px' : '288px',
              margin: 0,
              backgroundColor: 'var(--mainColor)',
              color: 'var(--secondColor)',
              '&:hover': {
                backgroundColor: 'var(--mainColor)',
              },
              '&:active,&:focus-visible': {
                borderColor: 'var(--buttonHoverColor)',
                backgroundColor: 'var(--buttonHoverColor)',
              },
              '&:disabled': {
                backgroundColor: 'var(--buttonDisabled)',
              },
            }}
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default QuantityAndBuy;
