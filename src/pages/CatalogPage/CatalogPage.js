import styles from "./CatalogPage.module.css";

import { useTheme } from '@mui/material/styles';
import { Container, useMediaQuery } from '@mui/material';

import Advertising from '../../components/Advertising/Advertising'
import CategoryList from '../../components/CategoryList/CategoryList'
import CategoryListMobile from '../../components/CategoryList/CategoryListMobile'
import Card from "../../components/Card/Card";

import { products, categories } from '../../data';

const CatalogPage = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  const handleClickCategoryButton = (e) => {
    return
  };

  return (
    <Container sx={{ paddingY: 2.5 }}>
      <Advertising />
      {desktop ? (
        <CategoryList
          array={categories}
          rowSpacing={{ xl: 6.25 }}
          columnSpacing={{ xl: 0 }}
          xl={12}
          onClick={handleClickCategoryButton}
        />
      ) : (
        <CategoryListMobile
          array={categories}
          onClick={handleClickCategoryButton}
        />
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
