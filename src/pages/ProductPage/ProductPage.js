import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { Stack, Box, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useTheme } from '@mui/material/styles';

import Notification from '../../components/Notification/Notification';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ImagesGallery from '../../components/ImagesGallery/ImagesGallery';
import { Title, SubTitle } from '../../components/Title/Title';
import InfoSection from '../../components/InfoSection/InfoSection';
import Price from '../../components/PriceSection/Price';
import QuantityAndBuy from '../../components/PriceSection/QuantityAndBuy';

import { RoutesLinks } from '../../constant/constant';
import { getProductById } from '../../services/getProducts';

import { useCart } from '../../providers/CartProvider';

const ProductPage = ({ desktop }) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.between('640', 'xl'));
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
    discountPrice,
  } = productInfo;
  const [imagesGallery, setImagesGallery] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useCart();

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

  const handleBuyClick = () => {
    Notification();
    addToCart(productInfo, selectedQuantity);
    setSelectedQuantity(1);
  };

  const Availability = () => (
    <>
      <Typography
        variant="paragraph"
        color={productAvailable ? 'var(--mainColor)' : 'var(--buttonDisabled)'}
        sx={{ fontWeight: desktop && '300', fontSize: !desktop && '13px' }}>
        {productAvailable ? `В наявності ${productAvailable}` : 'Не в наявності'}
      </Typography>
    </>
  );

  const Characteristics = () => (
    <>
      <SubTitle text={'Характеристики:'} />
      <InfoSection array={characteristics} columnGap={2.5} breakpoint={desktop} />
    </>
  );

  const Information = () => (
    <>
      <InfoSection array={mainInfo} columnGap={0.5} sx={{ fontWeight: desktop && 300 }} breakpoint={desktop} />
    </>
  );

  const PriceSection = () => (
    <>
      <Price price={price || 0} newPrice={discountPrice && discountPrice} breakpoint={desktop} />
    </>
  );

  const Purchase = () => (
    <>
      <QuantityAndBuy
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        available={productAvailable}
        handleClick={handleBuyClick}
        breakpoint={desktop}
        tablet={tablet}
      />
    </>
  );

  const DesktopView = () => (
    <>
      <Stack>
        <Information />
        <Characteristics />
      </Stack>

      <Stack rowGap={5}>
        <Availability />
        <PriceSection />

        <Purchase />
      </Stack>
    </>
  );

  const TabletView = () => (
    <>
      <Box>
        <Stack rowGap={2.5}>
          <Availability />
          <PriceSection />
        </Stack>

        <Stack>
          <Information />
          <Characteristics />
        </Stack>
      </Box>

      <Purchase />
    </>
  );

  const MobileView = () => (
    <>
      <Stack rowGap={2.5}>
        <Availability />
        <PriceSection />
        <Information />
      </Stack>

      <Purchase />

      <Stack>
        <Characteristics />
      </Stack>
    </>
  );

  return (
    <Stack alignItems={'center'}>
      <Stack maxWidth={'100%'} width={desktop ? '100%' : tablet ? '576px' : '288px'}>
        <BreadCrumbs currentPath={path} breakpoint={desktop} />
        <Grid
          container
          columnGap={tablet ? 3 : 13.75}
          flexWrap={(tablet || desktop) && 'nowrap'}
          justifyContent={'center'}>
          <ImagesGallery images={imagesGallery} breakpoint={desktop} />
          <Stack width={'100%'}>
            <Title text={title} sx={{ justifyContent: 'start', fontWeight: !desktop && 500 }} />
            <Grid container rowGap={!desktop && 2.5} justifyContent={'space-between'} width={'100%'}>
              {desktop ? <DesktopView /> : tablet ? <TabletView /> : <MobileView />}
            </Grid>
          </Stack>
        </Grid>
        <Box>
          <SubTitle text={'Про товар'} />
          <Typography
            variant="paragraph"
            color={'var(--mainColor)'}
            fontSize={!desktop && '13px'}
            fontWeight={desktop && '300px'}>
            {parse(description)}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductPage;
