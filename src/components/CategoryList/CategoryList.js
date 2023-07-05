import Grid from '@mui/material/Unstable_Grid2';

import CategoryButton from '../../components/CategoryButton/CategoryButton';

const CategoryList = (props) => {
  const {
    rowSpacing,
    columnSpacing,
    sx,
    xs,
    sm,
    md,
    xl,
    array,
    onClick,
  } = props;

  return (
    <Grid
      container
      sx={sx}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
    >
      {array.map((el) => (
        <Grid key={el.name} xs={xs} sm={sm} md={md} xl={xl}>
          <CategoryButton onClick={onClick} icon={el.icon} text={el.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
