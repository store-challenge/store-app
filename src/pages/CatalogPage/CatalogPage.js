import { useTheme } from '@mui/material/styles';
import { Stack, useMediaQuery } from '@mui/material';

import Container from '../../components/Container/Container';
import Advertising from '../../components/Advertising/Advertising';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryListMobile from '../../components/CategoryList/CategoryListMobile';
import CatalogList from '../../components/CatalogList/CatalogList';
import * as data from '../../data';

const CatalogPage = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Container breakpoint={desktop}>
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', xl: 'flex-start' }}>
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
