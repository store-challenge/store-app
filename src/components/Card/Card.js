import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { RoutesLinks } from '../../constant/constant';
import { useCart } from '../../providers/CartProvider';
import Price from '../PriceSection/Price';

const Card = ({ product, breakpoint }) => {
  const { id, title, image, price, discountPrice } = product;
  const { addToCart } = useCart();

  const handleBuyClick = () => {
    addToCart(product, 1);
  };

  return (
    <>
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
        </div>
      </Link>
      <div className={styles.info}>
        <Price price={price} newPrice={discountPrice} breakpoint={breakpoint} />
        <div className={styles.basket}>
          <Icon type="button" onClick={handleBuyClick} className={styles.basketIcon} icon={'ion:cart-outline'} />
        </div>
      </div>
    </>
  );
};

export default Card;
