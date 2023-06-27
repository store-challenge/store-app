import styles from "./card.module.css";
import { ReactComponent as BasketIcon } from "./basket-icon.svg";
import picture from "./picture.png";
const Card = (props) => {
  const { title, image, alt, price, coin } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
          <img src={picture} alt={alt} />
        </div>
      </div>

      <div className={styles.cardTitle}>
      <h3>{title}</h3>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardPriceGroup}>
          <p className={styles.cardPriceUah}>
            {`${price} ₴`}
          </p>
        </div>
        <div className={styles.cardBasket}>
          <BasketIcon className={styles.cardBasketIcon} />
        </div>
      </div>
    </div>
  );
};

export default Card;
