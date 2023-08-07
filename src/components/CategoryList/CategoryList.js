import Grid from '@mui/material/Unstable_Grid2';

import CategoryButton from '../CategoryButton/CategoryButton';

const CategoryList = props => {
  const { array, breakpoints, href, rowGap, columnGap, sx } = props;

  return (
    <Grid container sx={sx} rowGap={rowGap} columnGap={columnGap}>
      {array.map(element => (
        <Grid key={element.id} breakpoints={breakpoints}>
          <CategoryButton item={element.id} href={href} icon={element.icon} text={element.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
