import { Grid } from '@mui/material';
import Card from '../Card/Card';

const CatalogList = ({ products, width }) => (
  <Grid
    container
    direction="row"
    alignItems={{ xs: 'center', xl: 'start' }}
    columns={{ xs: 6, sm: 4, md: 4 }}
    rowGap={{ xs: 2.5, xl: 6.25 }}
    columnGap={{ xs: 1, md: 1.5, xl: 1.75 }}
    minWidth={'320px'}
    maxWidth={width ? '1130px' : '844px'}
    justifyContent="center">
    {products.map(product => (
      <Grid item key={product.id}>
        <Card product={product} />
      </Grid>
    ))}
  </Grid>
);

export default CatalogList;
