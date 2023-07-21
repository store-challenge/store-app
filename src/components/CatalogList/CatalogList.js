import { Grid } from '@mui/material';
import Title from '../Title/Title';
import Card from '../Card/Card';

const CatalogList = ({ products }) => (
  <Grid
    container
    marginTop={{ xs: 2.5, xl: 6.25 }}
    direction="column"
    alignItems={{ xs: 'center', xl: 'start' }}
    minWidth={'320px'}>
    <Title text="Топ продажів" />
    <Grid
      container
      marginTop={{ xs: 2.5, xl: 6.25 }}
      columns={{ xs: 6, md: 4 }}
      rowGap={2.5}
      columnGap={{ xs: 1, md: 1.5, xl: 1.75 }}
      maxWidth={'844px'}
      justifyContent="center"
      alignItems="center">
      {products.map(product => (
        <Grid item key={product.id}>
          <Card product={product} />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default CatalogList;
