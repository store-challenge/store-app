import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import parse from 'html-react-parser';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ImagesGallery from '../../components/ImagesGallery/ImagesGallery';
import InfoSection from '../../components/InfoSection/InfoSection';
import PriceSection from '../../components/PriceSection/PriceSection';
import Title from '../../components/Title/Title';

import { RoutesLinks } from '../../constant/constant';
import { getProductById } from '../../services/getProducts';

const ProductPage = ({ desktop }) => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const {
    title,
    productArticle,
    brand,
    categoryId,
    categoryName,
    subcategoryId,
    subcategoryName,
    productAvailable,
    price,
  } = productInfo;
  const [imagesGallery, setImagesGallery] = useState([]);
  const [description, setDescription] = useState('');

  const mainInfo = [{ label: 'article', name: 'Артикул:', value: productArticle }];

  const path = [
    { path: `${RoutesLinks.HOMEPAGE}`, name: 'Головна сторінка' },
    { path: `${RoutesLinks.CATEGORY_PAGE}/${categoryId}`, name: categoryName },
    { path: `${RoutesLinks.SUBCATEGORY_PAGE}/${subcategoryId}`, name: subcategoryName },
    { path: `${RoutesLinks.PRODUCT_PAGE}/${id}`, name: title },
  ];

  const characteristics = [
    { label: 'material', name: 'Бренд', value: brand },
    { label: 'type', name: 'Тип товару', value: categoryName },
  ];

  useEffect(() => {
    getProductById(id)
      .then(productInfoResult => {
        setProductInfo(productInfoResult);
        setImagesGallery(productInfoResult.images);
        setDescription(productInfoResult.description);
        return null;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Виникла помилка при отриманні даних:', error);
        return null;
      });
  }, [id]);

  return (
    <Stack>
      <BreadCrumbs currentPath={path} breakpoint={desktop} />
      <Grid container columnGap={13.75} flexWrap={desktop && 'nowrap'} justifyContent={'center'}>
        <ImagesGallery images={imagesGallery} breakpoint={desktop} />
        <Box width={'100%'}>
          <Title text={title} variant={'h4'} sx={{ fontSize: desktop ? '20px' : '13px', fontWeight: 500 }} />
          <Grid container rowGap={!desktop && 2.5} justifyContent={'space-between'} width={'100%'}>
            <Box>
              <InfoSection array={mainInfo} columnGap={0.5} breakpoint={desktop} />
              <Title
                text={'Характеристики:'}
                variant={'h4'}
                sx={{ fontSize: desktop ? '20px' : '13px', fontWeight: 500 }}
              />
              <InfoSection array={characteristics} columnGap={2.5} breakpoint={desktop} />
            </Box>
            <PriceSection available={productAvailable} price={price} breakpoint={desktop} />
          </Grid>
        </Box>
      </Grid>
      <Box>
        <Title text={'Про товар'} variant={'h4'} sx={{ fontSize: desktop ? '20px' : '13px', fontWeight: 500 }} />
        <Typography
          variant="paragraph"
          color={'var(--mainColor)'}
          fontSize={!desktop && '13px'}
          fontWeight={desktop && '300px'}>
          {parse(description)}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProductPage;
