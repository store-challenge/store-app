import { StyedTitleText, StyedEmptyCart, StyedTypography, StyledImage } from './CartWithBadge.styled';
import CartImage from '../../data/images/Cart.png';

const CartModalEmptyContent = () => (
  <StyedEmptyCart>
    <StyledImage component="img" src={CartImage} alt="Cart image" />
    <StyedTitleText marginY={{ xs: 2.5, md: 6.25 }}>Кошик порожній</StyedTitleText>
    <StyedTypography>{`Завжди є час на виправлення :)`}</StyedTypography>
    <StyedTypography>{`Скористуйся Пошуком або Каталогом, щоб виправити це!`}</StyedTypography>
  </StyedEmptyCart>
);

export default CartModalEmptyContent;
