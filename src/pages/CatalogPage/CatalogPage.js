import { useTheme } from '@mui/material/styles';
import { Container, Stack, useMediaQuery } from '@mui/material';

import Advertising from '../../components/Advertising/Advertising';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryListMobile from '../../components/CategoryList/CategoryListMobile';
import CatalogList from '../../components/CatalogList/CatalogList';
import * as data from '../../data';

const CatalogPage = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Container maxWidth="xl" sx={{ paddingTop: desktop ? 6.25 : 2.5, paddingBottom: desktop ? 20 : 2.5 }}>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', lg: 'flex-start' }}>
        {desktop && (
          <CategoryList
            sx={{
              flexDirection: 'column',
              marginRight: 14,
            }}
            array={data.categories}
            rowSpacing={6.25}
            columnSpacing={0}
            breakpoints={{ xl: 12 }}
            onClick={() => {}}
          />
        )}
        <Stack maxWidth={'100%'} direction="column" alignItems={desktop ? 'flex-start' : 'center'}>
          <Advertising />
          {!desktop && <CategoryListMobile array={data.categories} onClick={() => {}} />}
          <CatalogList products={data.products} />
        </Stack>
      </Stack>
    </Container>
  );
};
export default CatalogPage;
