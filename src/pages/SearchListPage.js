import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Stack } from '@mui/material';

import { Info } from '../components/Info/Info';
import CatalogList from '../components/CatalogList/CatalogList';
import ButtonCustom from '../components/Button/ButtonCustom';
import FilterDesktop from '../components/Filter/FilterDesktop';
import FilterMobile from '../components/Filter/FilterMobile';
import Sort from '../components/Sort/Sort';

import { getProductList } from '../services/getProducts';
import { getBrandsList } from '../services/getBrands';

const SearchListPage = ({ desktop }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('query');
  const [searchList, setSearchList] = useState([]);
  const [limit, setLimit] = useState(9);
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

  const [sort, setSort] = useState(() => {
    const savedSortName = queryParams.get('sort') || sortOptions.at(-1).name;
    return sortOptions.find(option => option.name === savedSortName) || sortOptions.at(-1);
  });

  useEffect(() => {
    const configProducts = { limit, productName, sortBy: sort.sortBy, orderBy: sort.orderBy };
    const configBrands = { productName };

    getProductList({ configProducts })
      .then(searchResult => {
        setSearchList(searchResult);
        return null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });

    getBrandsList({ configBrands })
      .then(brandsResult => {
        setBrands(brandsResult);
        return null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні брендів:', error);
        return null;
      });

    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set('sort', sort.name);
    navigate(`?${updatedParams.toString()}`, { replace: true });
  }, [limit, productName, sort.sortBy, sort.orderBy]);

  const handleShowMore = () => {
    setLimit(limit + 9);
  };

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
        <Stack width={'100%'} direction="column">
          {searchList.length > 0 ? (
            <Stack width={'100%'} alignItems={desktop ? 'flex-end' : 'center'}>
              <CatalogList products={searchList} breakpoint={desktop} />
              <ButtonCustom
                sx={{
                  backgroundColor: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
                  color: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
                  marginTop: desktop ? '50px' : '20px',
                  '&.Mui-disabled': {
                    backgroundColor: '#6b4c7d40',
                  },
                }}
                disabled={limit < 9 || searchList.length % 9 !== 0}
                onClick={handleShowMore}
                text={'Показати ще'}
              />
            </Stack>
          ) : (
            <Stack width={'100%'} alignItems={'center'}>
              <Info variant={'p'}>
                За запитом{' '}
                <big>
                  <strong>"{productName}"</strong>
                </big>{' '}
                нічого не знайдено.
              </Info>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SearchListPage;
