import Grid from '@mui/material/Unstable_Grid2';

import CategoryButton from '../CategoryButton/CategoryButton';

const CategoryList = props => {
  const { rowSpacing, columnSpacing, sx, breakpoints, array, onClick } = props;

  return (
    <Grid container sx={sx} rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
      {array.map(element => (
        <Grid key={element.name} breakpoints={breakpoints}>
          <CategoryButton href="/category" onClick={onClick} icon={element.icon} text={element.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
