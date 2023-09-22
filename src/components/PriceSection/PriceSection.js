import React, { useState } from 'react';
import { Typography } from '@mui/material';
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
    <Grid
      container
      rowGap={breakpoint ? 6.25 : 2.5}
      columnGap={20}
      marginTop={breakpoint ? 6.25 : 2.5}
      marginLeft={breakpoint && 10}
      width={breakpoint ? '176px' : '288px'}>
      <Grid>
        <Typography
          variant="paragraph"
          style={styles}
          color={available ? 'var(--mainColor)' : '#6b4c7d40'}
          sx={{ fontWeight: breakpoint && '300' }}>
          {available ? `В наявності ${available}` : 'Не в наявності'}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="paragraph" style={styles} color={'var(--priceTextColor)'}>
          {price && `${price.toLocaleString()} ₴`}
        </Typography>
      </Grid>
      <Grid>
        <Quantity style={styles} currentQuantity={available} />
      </Grid>
      <Grid>
        <ButtonCustom
          disabled={cartQuantity >= available}
          onClick={handleBuyClick}
          text={'Купити'}
          sx={{
            backgroundColor: 'var(--mainColor)',
            color: 'var(--secondColor)',
            margin: 0,
            '&.Mui-disabled': {
              backgroundColor: '#6b4c7d40',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PriceSection;
