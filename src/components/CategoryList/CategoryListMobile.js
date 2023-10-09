import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CategoryList from './CategoryList';
import ButtonCustom from '../Button/ButtonCustom';

const CategoryListMobile = props => {
  const { array, href } = props;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [showMore, setShowMore] = useState(false);

  const handleClickShowMore = () => {
    setShowMore(oldValue => !oldValue);
  };

  return (
    <Grid
      container
      minWidth={'xs'}
      sx={{
        flexDirection: 'column',
      }}>
      <CategoryList
        sx={{
          justifyContent: 'center',
          marginTop: 2.5,
        }}
        breakpoints={{ xs: 6, md: 4, lg: 3 }}
        array={array.slice(0, showMore ? array.length : md ? 4 : sm ? 3 : 2)}
        href={href}
        rowGap={2.5}
        columnGap={1}
      />
      <Grid sx={{ marginX: 'auto', marginTop: 2.5 }}>
        <ButtonCustom
          text={showMore ? 'Зменшити' : 'Більше категорій'}
          onClick={handleClickShowMore}
          sx={{
            color: 'var(--mainColor)',
            backgroundColor: 'var(--secondColor)',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CategoryListMobile;
