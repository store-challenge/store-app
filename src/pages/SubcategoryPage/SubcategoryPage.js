import Container from '../../components/Container/Container';
import CatalogList from '../../components/CatalogList/CatalogList';

import * as data from '../../data';

const SubcategoryPage = ({ desktop }) => {
  const { products } = data;

  return (
    <Container breakpoint={desktop}>
      <CatalogList products={products} />
    </Container>
  );
};
export default SubcategoryPage;
