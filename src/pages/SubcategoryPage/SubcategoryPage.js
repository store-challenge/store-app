import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import Container from '../../components/Container/Container';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Title from '../../components/Title/Title';
import CatalogList from '../../components/CatalogList/CatalogList';
import ButtonCustom from '../../components/Button/ButtonCustom';
import FilterDesktop from '../../components/Filter/FilterDesktop';
import FilterMobile from '../../components/Filter/FilterMobile';

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

  const [priceRange, setPriceRange] = useState([0, 20_000]);
  const [selectedBrand, setSelectedBrand] = useState('');

  return (
    <Container breakpoint={desktop}>
      <BreadCrumbs breakpoint={desktop} />
      <Title text="TITLE" />

      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', xl: 'flex-start' }}
        marginBottom={desktop && 1.75}>
        {desktop && (
          <FilterDesktop
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        )}
        <Stack maxWidth={'100%'} direction="column" alignItems={desktop ? 'flex-start' : 'center'}>
          {!desktop && (
            <FilterMobile
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
          )}
          <CatalogList products={visibleProducts} />
          {sortedProducts.length > visibleProducts.length && (
            <ButtonCustom onClick={handleShowMore} text={'Показати ще'} />
          )}
        </Stack>
      </Stack>
    </Container>
  );
};
export default SubcategoryPage;
