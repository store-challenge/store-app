import styles from "./card.module.css";
import { Icon } from "@iconify/react";

const Card = ({ product }) => {
  const { title, image, alt, price } = product;

  return (
    <div className={styles.wrapper}>
     <a href="#">
     <div className={styles.card}>
        <div className={styles.productImage}>
          <img src={image} alt={alt} />
        </div>
      </div>

      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.info}>
        <div className={styles.priceGroup}>
          <p className={styles.priceUah}>{`${price} ₴`}</p>
        </div>
        <div className={styles.basket}>
          <a href="#"><Icon className={styles.basketIcon} icon={"ion:cart-outline"} /></a>
        </div>
      </div>
     </a>
    </div>
  );
};

export default Card;
