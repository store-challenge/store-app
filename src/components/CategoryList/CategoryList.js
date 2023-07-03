import Grid from '@mui/material/Unstable_Grid2';

import CategoryButton from '../../components/CategoryButton/CategoryButton';

const CategoryList = (props) => {
  const {
    rowSpacing,
    columnSpacing,
    xsColumns,
    smColumns,
    mdColumns,
    xlColumns,
    array,
    onClick,
  } = props;

  return (
    <Grid container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
      {Array.from(array).map((el, index) => (
        <Grid key={index} xs={xsColumns} sm={smColumns} md={mdColumns} xl={xlColumns}>
          <CategoryButton onClick={onClick} icon={el.icon} text={el.name} />
        </Grid>)
      )}
    </Grid>
  );
};

export default CategoryList;
