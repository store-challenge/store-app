import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import Container from '../../components/Container/Container';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Title from '../../components/Title/Title';
import CategoryList from '../../components/CategoryList/CategoryList';
import CatalogList from '../../components/CatalogList/CatalogList';

import { RoutesLinks } from '../../constant/constant';
import { getAllSubCategories } from '../../services/getSubCategories';
import { getHotProductsById } from '../../services/getProducts';

const CategoryPage = ({ desktop }) => {
  const { categoryId } = useParams();
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [hotProducts, setHotProducts] = useState([]);
  const [limitHot, setLimitHot] = useState(4);

  useEffect(() => {
    Promise.all([getAllSubCategories(categoryId), getHotProductsById(limitHot, categoryId)])
      .then(([subCategoriesResult, hotProductsResult]) => {
        setAllSubCategories(subCategoriesResult);
        setHotProducts(hotProductsResult);
        return null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });
  }, [limitHot, categoryId]);

  return (
    <Container breakpoint={desktop}>
      <Stack>
        <BreadCrumbs breakpoint={desktop} />
        <Stack sx={{ alignItems: !desktop && 'center' }} marginBottom={desktop && 1.75}>
          <Title text={categoryId} />
          <CategoryList
            array={allSubCategories}
            href={RoutesLinks.SUBCATEGORY_PAGE}
            rowGap={!desktop && 2.5}
            columnGap={!desktop && 1}
            sx={{ justifyContent: desktop ? 'space-evenly' : 'center' }}
          />
          <Title text="Топ продажів" />
          <Stack sx={{ alignItems: 'center' }}>
            <CatalogList products={hotProducts} width={true} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CategoryPage;
