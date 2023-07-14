import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CategoryList from './CategoryList';
import CategoryMoreButton from '../CategoryMoreButton/CategoryMoreButton';

const CategoryListMobile = props => {
  const { array, onClick } = props;
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
        marginTop: 2.5,
      }}>
      <CategoryList
        sx={{
          justifyContent: 'center',
        }}
        breakpoints={{ xs: 6, md: 4, lg: 3 }}
        array={array.slice(0, showMore ? array.length : md ? 4 : sm ? 3 : 2)}
        rowSpacing={2.5}
        columnSpacing={1}
        onClick={onClick}
      />
      <Grid sx={{ marginX: 'auto', marginTop: 2.5 }}>
        <CategoryMoreButton text={showMore ? 'Зменшити' : 'Більше категорій'} onClick={handleClickShowMore} />
      </Grid>
    </Grid>
  );
};

export default CategoryListMobile;
