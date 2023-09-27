import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import Quantity from '../Quantity/Quantity';
import ButtonCustom from '../Button/ButtonCustom';

const PriceSection = props => {
  const { available, price, breakpoint } = props;
  const [cartQuantity, setCartQuantity] = useState(0);

  const styles = {
    fontFamily: 'Montserrat',
    fontSize: breakpoint ? '20px' : '13px',
    fontStyle: 'normal',
    lineHeight: '130%',
  };

  const handleBuyClick = () => {
    if (cartQuantity < available) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  return (
    <Grid container flexDirection={'column'} rowGap={breakpoint ? 6.25 : 2.5} maxWidth={'100%'}>
      <Typography
        variant="paragraph"
        style={styles}
        color={available ? 'var(--mainColor)' : '#6b4c7d40'}
        sx={{ fontWeight: breakpoint && '300' }}>
        {available ? `В наявності ${available}` : 'Не в наявності'}
      </Typography>
      <Typography variant="paragraph" style={styles} color={'var(--priceTextColor)'}>
        {price && `${price.toLocaleString()} ₴`}
      </Typography>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={'20px'}>
        <Quantity style={styles} currentQuantity={available} />
        <ButtonCustom
          disabled={cartQuantity >= available}
          onClick={handleBuyClick}
          text={'Купити'}
          sx={{
            margin: 0,
            backgroundColor: 'var(--mainColor)',
            color: 'var(--secondColor)',
            '&.Mui-disabled': {
              backgroundColor: '#6b4c7d40',
            },
          }}
        />
      </Box>
    </Grid>
  );
};

export default PriceSection;
