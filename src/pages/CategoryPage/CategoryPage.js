import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';

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
  const [currentTitle, setCurrentTitle] = useState('');

  const path = [
    { path: `${RoutesLinks.HOMEPAGE}`, name: 'Головна сторінка' },
    { path: `${RoutesLinks.CATEGORY_PAGE}/${categoryId}`, name: currentTitle },
  ];

  useEffect(() => {
    Promise.all([getAllSubCategories(categoryId), getHotProductsById(limitHot, categoryId)])
      .then(([subCategoriesResult, hotProductsResult]) => {
        setAllSubCategories(subCategoriesResult);
        setHotProducts(hotProductsResult);

        const current = subCategoriesResult.find(element => Number(element.categoryId) === Number(categoryId));
        return current ? setCurrentTitle(current.catIdName) : null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });
  }, [limitHot, categoryId]);

  return (
    <Stack>
      <BreadCrumbs currentPath={path} breakpoint={desktop} />
      <Stack sx={{ alignItems: !desktop && 'center' }} marginBottom={desktop && 1.75}>
        <Title text={currentTitle} />
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
  );
};

export default CategoryPage;
