import styles from "./card.module.css";
import { Icon } from "@iconify/react";
const Card = ({ product }) => {
  const { title, image, alt, price } = product;

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
          <img src={image} alt={alt} />
        </div>
      </div>

      <div className={styles.cardTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardPriceGroup}>
          <p className={styles.cardPriceUah}>{`${price} ₴`}</p>
        </div>
        <div className={styles.cardBasket}>
          <Icon className={styles.cardBasketIcon} icon={"ion:cart-outline"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
