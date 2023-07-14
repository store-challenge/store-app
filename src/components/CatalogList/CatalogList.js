import styles from "./CatalogList.module.css";
import Card from "../Card/Card";
import { Grid, Paper } from "@mui/material";

const CatalogList = ({ products }) => {
  return (
    <Grid container
    marginTop={{xs:2.5, lg:6.25}}
    direction="column"
    alignItems={{xs:"center",lg:'start'}}
    minWidth={'320px'}
    >
      <div className={styles.title}>
        <h3>Топ продажів</h3>
      </div>
      <Grid
        container
        marginTop={{xs:2.5, lg:6.25}}
        columns={{ xs: 6, md: 4 }}
        rowGap={2.5}
        columnGap={{ xs: 1, md: 1.5, lg: 1.75 }}
        maxWidth={'844px'}
        justifyContent="center"
        
        alignItems="center"
      >
        {products.map((product) => (
          <Grid item key={product.id}>
            <Card product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CatalogList;
