import { Typography, Box } from '@mui/material';

const Price = props => {
  const { price, newPrice, breakpoint } = props;

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
      <Typography
        variant="paragraph"
        style={{
          color: newPrice && newPrice !== price ? 'var(--priceTextColor)' : 'var(--textColor)',
          fontSize: breakpoint ? '20px' : '15px',
        }}>
        {newPrice && `${newPrice.toLocaleString()} ₴`}
      </Typography>
      <Typography
        variant="paragraph"
        style={{
          color: newPrice && newPrice !== price ? 'var(--priceSaleTextColor)' : 'transparent',
          textDecoration: newPrice ? 'line-through' : 'none',
          fontSize: breakpoint ? '15px' : '13px',
        }}>
        {price && `${price.toLocaleString()} ₴`}
      </Typography>
    </Box>
  );
};

export default Price;
