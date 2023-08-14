import { useEffect, useState } from 'react';

import Container from '../../components/Container/Container';
import CatalogList from '../../components/CatalogList/CatalogList';
import ButtonCustom from '../../components/Button/ButtonCustom';

import * as data from '../../data';

const SubcategoryPage = ({ desktop }) => {
  const { products } = data;
  const currentItems = 3;
  const [currentProducts, setCurrentProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = products;
    const sorted = [...fetchedProducts].sort((a, b) => a.price - b.price);
    setCurrentProducts(fetchedProducts);
    setSortedProducts(sorted);
    setVisibleProducts(sorted.slice(0, currentItems));
  }, [products]);

  const handleShowMore = () => {
    setVisibleProducts(previousVisible => [
      ...previousVisible,
      ...sortedProducts.slice(previousVisible.length, previousVisible.length + currentItems),
    ]);
  };

  return (
    <Container breakpoint={desktop}>
      <CatalogList products={visibleProducts} />
      {sortedProducts.length > visibleProducts.length && <ButtonCustom onClick={handleShowMore} text={'Показати ще'} />}
    </Container>
  );
};
export default SubcategoryPage;
