import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { RoutesLinks } from '../../constant/constant';

const Card = ({ product }) => {
  const { id, title, image, price } = product;

  return (
    <Link to={`${RoutesLinks.PRODUCT_PAGE}/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.productImage}>
            <img src={image} alt={'product image'} width="100%" height="100%" className={styles.image} />
          </div>
        </div>
        <div className={styles.title}>
          <h3 title={title}>{title}</h3>
        </div>
        <div className={styles.info}>
          <div className={styles.priceGroup}>
            <p className={styles.priceUah}>{`${price.toLocaleString()} ₴`}</p>
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
