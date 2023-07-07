import styles from "./CatalogPage.module.css";
import { useTheme } from '@mui/material/styles';
import { Container,Box, Stack, useMediaQuery } from '@mui/material';

import Advertising from '../../components/Advertising/Advertising';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryListMobile from '../../components/CategoryList/CategoryListMobile';
import Card from '../../components/Card/Card';

import { products, categories } from '../../data';

const CatalogPage = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  const handleClickCategoryButton = (e) => {
    return
  };

  return (
    <Container maxWidth="xl">
      <Stack
        direction={{ xl: 'row-reverse' }}
        justifyContent="center"
        alignItems={{ xs: 'center', xl: 'flex-start' }}
        paddingY ={{ xs: 2.5, xl: 6.25 }}
      >
        <Advertising />
        {desktop ? (
          <CategoryList
            sx={{
              flexDirection: 'column',
              marginRight: 14,
            }}
            array={categories}
            rowSpacing={6.25}
            columnSpacing={0}
            breakpoints={{ xl: 12 }}
            onClick={handleClickCategoryButton}
          />
        ) : (
          <CategoryListMobile
            array={categories}
            onClick={handleClickCategoryButton}
          />
        )}
      </Stack>

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
