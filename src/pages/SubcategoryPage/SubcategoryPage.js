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
  const [sortedProducts, setSortedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20_000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  // const path = [
  //   { path: `${RoutesLinks.HOMEPAGE}`, name: 'Головна сторінка' },
  //   { path: `${RoutesLinks.CATEGORY_PAGE}/${categoryId}`, name: categoryName },
  //   { path: `${RoutesLinks.SUBCATEGORY_PAGE}/${subcategoryId}`, name: subcategoryName },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductList(limit, subcategoryId);
        setBrands(data['brands-list']);
        setProducts(data['products-list']);
      } catch (error) {
        console.error('Виникла помилка при отриманні даних:', error);
      }
    };

    fetchData();
  }, [limit, subcategoryId]);

  const handleShowMore = () => {
    setVisibleProducts(previousVisible => [
      ...previousVisible,
      ...sortedProducts.slice(previousVisible.length, previousVisible.length + limit),
    ]);
  };


  return (
    <Stack>
      <BreadCrumbs breakpoint={desktop} />
      {desktop && <Title text="TITLE" />}
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
        <Sort onSelect={sort => setSortOption(sort)} breakpoint={desktop} />
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
          {sortedProducts.length > visibleProducts.length && (
            <ButtonCustom
              sx={{
                backgroundColor: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
                color: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
                marginTop: desktop ? '50px' : '20px',
              }}
              onClick={handleShowMore}
              text={'Показати ще'}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SubcategoryPage;
