import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

import Container from '../../components/Container/Container';
import Advertising from '../../components/Advertising/Advertising';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryListMobile from '../../components/CategoryList/CategoryListMobile';
import Title from '../../components/Title/Title';
import CatalogList from '../../components/CatalogList/CatalogList';

import { RoutesLinks } from '../../constant/constant';
import { advertising } from '../../data/images/index';

import { getAllCategories } from '../../services/getCategories';
import { getAllHotProducts } from '../../services/getProducts';

const CatalogPage = ({ desktop }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [allHotProducts, setAllHotProducts] = useState([]);
  const [limitHot, setLimitHot] = useState(9);

  useEffect(() => {
    Promise.all([getAllCategories(), getAllHotProducts(limitHot)])
      .then(([categoriesResult, hotProductsResult]) => {
        setAllCategories(categoriesResult);
        setAllHotProducts(hotProductsResult);
        return null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });
  }, [limitHot]);

  return (
    <Container breakpoint={desktop}>
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', xl: 'flex-start' }}
        marginBottom={desktop && 1.75}>
        {desktop && (
          <CategoryList
            array={allCategories}
            href={RoutesLinks.CATEGORY_PAGE}
            rowGap={6.25}
            columnGap={0}
            breakpoints={{ xl: 12 }}
            sx={{
              flexDirection: 'column',
              marginRight: 14,
            }}
          />
        )}
        <Stack maxWidth={'100%'} direction="column" alignItems={desktop ? 'flex-start' : 'center'}>
          <Advertising advertising={advertising} />
          {!desktop && <CategoryListMobile array={allCategories} href={RoutesLinks.CATEGORY_PAGE} desktop={desktop} />}
          <Title text="Топ продажів" />
          <CatalogList products={allHotProducts} />
        </Stack>
      </Stack>
    </Container>
  );
};
export default CatalogPage;
