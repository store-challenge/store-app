import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ product }) => {
  const { href, title, image, alt, price } = product;

  return (
    <Link to={href}>
      <div className={styles.wrapper}>
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
            <Icon className={styles.basketIcon} icon={'ion:cart-outline'} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
