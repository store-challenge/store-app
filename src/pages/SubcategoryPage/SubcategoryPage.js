import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { RoutesLinks } from '../../constant/constant';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Title from '../../components/Title/Title';
import CatalogList from '../../components/CatalogList/CatalogList';
import ButtonCustom from '../../components/Button/ButtonCustom';
import FilterDesktop from '../../components/Filter/FilterDesktop';
import FilterMobile from '../../components/Filter/FilterMobile';
import Sort from '../../components/Sort/Sort';

import { getProductList } from '../../services/getProducts';

const SubcategoryPage = ({ desktop }) => {
  const { subcategoryId } = useParams();
  const [limit, setLimit] = useState(9);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20_000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [currentInfo, setCurrentInfo] = useState([]);
  const { brandId, brandName, categoryId, categoryName, subcategoryName } = currentInfo;

  const sortOptions = [
    { name: 'asc', sortBy: 'p.product_price', orderBy: 'ASC' },
    { name: 'desc', sortBy: 'p.product_price', orderBy: 'DESC' },
    { name: 'az', sortBy: 'p.product_title', orderBy: 'ASC' },
    { name: 'za', sortBy: 'p.product_title', orderBy: 'DESC' },
    { name: 'newest', sortBy: 'p.updated', orderBy: 'DESC' },
  ];
  const [sort, setSort] = useState(sortOptions.length - 1);

  const path = [
    { path: `${RoutesLinks.HOMEPAGE}`, name: 'Головна сторінка' },
    { path: `${RoutesLinks.CATEGORY_PAGE}/${categoryId}`, name: categoryName },
    { path: `${RoutesLinks.SUBCATEGORY_PAGE}/${subcategoryId}`, name: subcategoryName },
  ];

  const fetchData = () => {
    getProductList(limit, subcategoryId, sort.sortBy, sort.orderBy)
      .then(data => {
        setProducts(data);

        const current = data.find(element => Number(element.subcategoryId) === Number(subcategoryId));
        return current ? setCurrentInfo(current) : null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });
  };

  useEffect(() => {
    fetchData();
  }, [limit, subcategoryId, sort.sortBy, sort.orderBy]);

  const handleShowMore = () => {
    setLimit(limit + 9);
  };
  const handleSortChange = selectedOption => {
    sortOptions.map(element => element.name === selectedOption && setSort(element));
  };

  return (
    <Stack>
      <BreadCrumbs currentPath={path} breakpoint={desktop} />
      {desktop && <Title text={subcategoryName} />}
      <Stack
        direction="row"
        justifyContent={desktop ? 'flex-end' : 'center'}
        alignItems="center"
        gap={'8px'}
        marginTop={!desktop && '22.5px'}>
        {!desktop && (
          <FilterMobile
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
        justifyContent="center"
        alignItems={{ xs: 'center', xl: 'flex-start' }}
        marginTop={desktop ? '50px' : '20px'}>
        {desktop && (
          <FilterDesktop
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            desktop={desktop}
          />
        )}
        <Stack maxWidth={'100%'} direction="column" alignItems={desktop ? 'flex-end' : 'center'}>
          <CatalogList products={products} />
          <ButtonCustom
            sx={{
              backgroundColor: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
              color: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
              marginTop: desktop ? '50px' : '20px',
              '&.Mui-disabled': {
                backgroundColor: '#6b4c7d40',
              },
            }}
            disabled={products}
            onClick={handleShowMore}
            text={'Показати ще'}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SubcategoryPage;
