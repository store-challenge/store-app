import { useTheme } from '@mui/material/styles';
import { Container, Stack, useMediaQuery } from '@mui/material';

import Advertising from '../../components/Advertising/Advertising';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryListMobile from '../../components/CategoryList/CategoryListMobile';
import CatalogList from "../../components/CatalogList/CatalogList";

import { products, categories } from '../../data';

const CatalogPage = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleClickCategoryButton = (e) => {
    return;
  };

  return (
    <Container maxWidth="xl">
      <Stack
        marginTop={{ xs: 2.5, lg: 6.25 }}
        marginBottom={{ xs: 2.5, lg: 20 }}
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', lg: 'flex-start' }}
      >
        {desktop && (
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
        )}
        <Stack
          direction="column"
          alignItems={desktop ? 'flex-start' : 'center'}
        >
          <Advertising />
          {!desktop && (
            <CategoryListMobile
              array={categories}
              onClick={handleClickCategoryButton}
            />
          )}
          <CatalogList products={products} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CatalogPage;
