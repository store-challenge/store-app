import styles from "./CatalogPage.module.css";
import Card from "../../components/Card/Card";

const productsTest = [
  {
    id: 1,
    title: "Parfum Chanel №5",
    image: 'http://placekitten.com/200/300',
    alt: "Chanel №5 Perfume",
    price: 2550,
  },
  {
    id: 2,
    title: "Product 2",
    image: 'http://placekitten.com/200/300',
    alt: "Product 2",
    price: 100,
  },
  {
    id: 3,
    title: "Product 3",
    image: 'http://placekitten.com/200/300',
    alt: "Product 3",
    price: 500,
  },
  {
    id: 4,
    title: "Product 4",
    image: 'http://placekitten.com/200/300',
    alt: "Product 4",
    price: 750,
  },
  {
    id: 5,
    title: "Product 5",
    image: 'http://placekitten.com/200/300',
    alt: "Product 5",
    price: 1200,
  },
  {
    id: 2,
    title: "Product 2",
    image: 'http://placekitten.com/200/300',
    alt: "Product 2",
    price: 100,
  },
  {
    id: 3,
    title: "Product 3",
    image: 'http://placekitten.com/200/300',
    alt: "Product 3",
    price: 500,
  },
  {
    id: 4,
    title: "Product 4",
    image: 'http://placekitten.com/200/300',
    alt: "Product 4",
    price: 750,
  },
  {
    id: 5,
    title: "Product 5",
    image: 'http://placekitten.com/200/300',
    alt: "Product 5",
    price: 1200,
  },
];

const CatalogPage = () => {
  return (
    <div className={styles.catalogPageMainContent}>
      <div className={styles.catalogPageCategory}>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        <div className={styles.testCategory}></div>
        {/* place for Category component */}
      </div>
      <div className={styles.catalogPageAdAndProducts}>
        <div className={styles.catalogPageAd}>
          {/* place for Add component */}
        </div>
        <div className={styles.catalogPageTitle}>
          <h3>Топ продажів</h3>
        </div>
        <div className={styles.catalogPageProducts}>
          {productsTest.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CatalogPage;
