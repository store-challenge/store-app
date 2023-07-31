import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import Container from '../../components/Container/Container';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Title from '../../components/Title/Title';
import CategoryList from '../../components/CategoryList/CategoryList';
import CatalogList from '../../components/CatalogList/CatalogList';

import { RoutesLinks } from '../../constant/constant';
import { getHotProducts } from '../../services/getProducts';

import * as data from '../../data';

const CategoryPage = ({ desktop }) => {
  const [limitHot, setLimitHot] = useState(4);
  const [hotProds, setHotProducts] = useState(null);
  const currentCategory = data.categories[0];

  useEffect(() => {
    setHotProducts(getHotProducts(limitHot));
  }, [limitHot]);

  return (
    <Container breakpoint={desktop}>
      <Stack>
        <BreadCrumbs breakpoint={desktop} />
        <Stack sx={{ alignItems: !desktop && 'center' }} marginBottom={desktop && 1.75}>
          <Title text={currentCategory.name} />
          <CategoryList
            array={data.subcategories}
            href={RoutesLinks.SUBCATEGORY_PAGE}
            rowGap={!desktop && 2.5}
            columnGap={!desktop && 1}
            sx={{ justifyContent: desktop ? 'space-evenly' : 'center' }}
          />
          <Title text="Топ продажів" />
          <Stack sx={{ alignItems: 'center' }}>
            <CatalogList products={data.hotProducts} width={true} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CategoryPage;
