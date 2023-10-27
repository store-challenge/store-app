import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CatalogList from '../components/CatalogList/CatalogList';
// import ButtonCustom from '../components/Button/ButtonCustom';
import FilterDesktop from '../components/Filter/FilterDesktop';
import FilterMobile from '../components/Filter/FilterMobile';
import Sort from '../components/Sort/Sort';

import { getSearchProducts } from '../services/getSearchProducts';

const SearchListPage = ({ desktop }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const [searchList, setSearchList] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20_000]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const sortOptions = [
    { name: 'asc', sortBy: 'product_price', orderBy: 'ASC' },
    { name: 'desc', sortBy: 'product_price', orderBy: 'DESC' },
    { name: 'az', sortBy: 'product_title', orderBy: 'ASC' },
    { name: 'za', sortBy: 'product_title', orderBy: 'DESC' },
    { name: 'newest', sortBy: 'updated', orderBy: 'DESC' },
  ];
  const [sort, setSort] = useState(sortOptions.length - 1);

  useEffect(() => {
    getSearchProducts(query)
      .then(result => {
        setSearchList(result);
        return null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });
  }, [query]);

  // const handleShowMore = () => {
  //   setLimit(limit + 9);
  // };

  const handleSortChange = selectedOption => {
    sortOptions.map(element => element.name === selectedOption && setSort(element));
  };

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent={desktop ? 'flex-end' : 'center'}
        alignItems="center"
        gap={'8px'}
        marginTop={!desktop && '22.5px'}>
        {!desktop && (
          <FilterMobile
            brandList={brands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            desktop={desktop}
          />
        )}
        <Sort onSelect={handleSortChange} breakpoint={desktop} />
      </Stack>
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'center', xl: 'flex-start' }}
        marginTop={desktop ? '50px' : '20px'}>
        {desktop && (
          <FilterDesktop
            brandList={brands}
            priceRange={priceRange}
            selectedBrand={selectedBrand}
            setPriceRange={setPriceRange}
            setSelectedBrand={setSelectedBrand}
            desktop={desktop}
          />
        )}
        <Stack maxWidth={'100%'} direction="column" alignItems={desktop ? 'flex-end' : 'center'}>
          <CatalogList products={searchList} />
          {/* <ButtonCustom
            sx={{
              backgroundColor: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
              color: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
              marginTop: desktop ? '50px' : '20px',
              '&.Mui-disabled': {
                backgroundColor: '#6b4c7d40',
              },
            }}
            disabled={limit < 9 || products.length % 9 !== 0}
            onClick={handleShowMore}
            text={'Показати ще'}
          /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SearchListPage;
