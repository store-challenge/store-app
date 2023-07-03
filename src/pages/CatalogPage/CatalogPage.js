import styles from "./CatalogPage.module.css";

import { useState } from "react";

import { Container, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Advertising from '../../components/Advertising/Advertising'
import CategoryList from '../../components/CategoryList/CategoryList'
import CategoryMoreButton from '../../components/CategoryMoreButton/CategoryMoreButton';
import Card from "../../components/Card/Card";

import { products, categories } from '../../data'


const CatalogPage = () => {
  const sm = useMediaQuery('(min-width: 480px)');
  const md = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');
  const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState('Більше категорій');

  const handleClickCategoryButton = (e) => {
    return
  };

  const handleClickShowMore = () => {
    setShowMore((oldValue) => !oldValue);
    showMore
      ? setButtonText('Більше категорій')
      : setButtonText('Зменшити');
  };

  return (
    <Container sx={{ paddingY: 2.5 }}>
      <Advertising />
      {desktop ? (
        <CategoryList
          array={categories}
          rowSpacing={{ xl: 6.25 }}
          columnSpacing={{ xl: 0 }}
          xlColumns={12}
          onClick={handleClickCategoryButton} />
      ) : (
        <Grid container sx={{ flexDirection: 'column', marginY: 2.5 }}>
          <CategoryList
            array={categories.slice(0, showMore ? categories.length : ( md ? 4 : (sm ? 3 : 2)))}
            rowSpacing={{ xs: 2.5 }}
            columnSpacing={{ xs: 1 }}
            xsColumns={6}
            smColumns={4}
            mdColumns={3}
            onClick={handleClickCategoryButton} />
          <Grid sx={{ marginX: 'auto', marginTop: 2.5 }}>
            <CategoryMoreButton text={buttonText} onClick={handleClickShowMore} />
          </Grid>
        </Grid>
      )}

      <div className={styles.catalogPageTitle}>
        <h3>Топ продажів</h3>
      </div>
      <div className={styles.catalogPageProducts}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
export default CatalogPage;
