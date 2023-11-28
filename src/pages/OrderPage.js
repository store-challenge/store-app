import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { SubTitle } from '../components/Title/Title';

import Comment from '../components/OrderSections/Comment';
import Payment from '../components/OrderSections/Payment';

const OrderPage = ({ desktop }) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.between('640', 'xl'));

  const [paymentData, setPaymentData] = useState({});
  const [commentData, setCommentData] = useState({});

  const handlePaymentSubmit = data => {
    setPaymentData(data);
  };

  const handleCommentSubmit = data => {
    setCommentData(data);
  };

  return (
    <Stack alignItems={!desktop && 'center'}>
      <SubTitle
        text={'Оформлення замовлення'}
        sx={{ marginY: desktop ? 6.25 : 2.5, fontSize: '15px', color: 'var(--mainColor)' }}
      />
      <Grid container rowSpacing={{ xs: 2.5, sm: 3.5, xl: 4.75 }} columnSpacing={{ xs: 0, xl: 2 }}>
        <Grid xs={desktop ? 8 : 12}>
          <Payment
            userData={paymentData}
            onPaymentSubmit={handlePaymentSubmit}
            breakpoint={desktop}
            tabletBreakpoint={tablet}
          />
        </Grid>
        <Grid xs={desktop ? 8 : 12}>
          <Comment
            userData={commentData}
            onCommentSubmit={handleCommentSubmit}
            breakpoint={desktop}
            tabletBreakpoint={tablet}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default OrderPage;
