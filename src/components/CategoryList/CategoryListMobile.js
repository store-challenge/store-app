import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CategoryList from './CategoryList';
import CategoryMoreButton from '../CategoryMoreButton/CategoryMoreButton'

const CategoryListMobile = (props) => {
  const { array, onClick } = props;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [showMore, setShowMore] = useState(false);

  const handleClickShowMore = () => {
    setShowMore((oldValue) => !oldValue);
  };

  return (
    <Grid
      container
      sx={{
        flexDirection: 'column',
        marginY: 2.5,
      }}
    >
      <CategoryList
        array={array.slice(0, showMore ? array.length : md ? 4 : sm ? 3 : 2)}
        rowSpacing={{ xs: 2.5 }}
        columnSpacing={{ xs: 1 }}
        breakpoints= {{ xs: 6, sm: 4, md: 3 }}
        onClick={onClick}
      />
      <Grid sx={{ marginX: 'auto', marginTop: 2.5 }}>
        <CategoryMoreButton
          text={showMore ? 'Зменшити' : 'Більше категорій'}
          onClick={handleClickShowMore}
        />
      </Grid>
    </Grid>
  );
};

export default CategoryListMobile;
