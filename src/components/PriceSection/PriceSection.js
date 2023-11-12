import { Typography, Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { useCart } from '../../providers/CartProvider';
import Price from './Price';
import Quantity from '../Quantity/Quantity';
import ButtonCustom from '../Button/ButtonCustom';

const PriceSection = props => {
  const { selectedQuantity, setSelectedQuantity, available, price, newPrice, handleClick, breakpoint } = props;
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
      <Typography
        variant="paragraph"
        color={available ? 'var(--mainColor)' : 'var(--buttonDisabled)'}
        sx={{ fontWeight: breakpoint && '300', fontSize: !breakpoint && '13px' }}>
        {available ? `В наявності ${available}` : 'Не в наявності'}
      </Typography>
      <Stack gap={'25px'}>
        <Price price={price} newPrice={newPrice} breakpoint={breakpoint} />
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
              margin: 0,
              backgroundColor: 'var(--mainColor)',
              color: 'var(--secondColor)',
              '&:hover': {
                border: 'inherit',
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

export default PriceSection;
