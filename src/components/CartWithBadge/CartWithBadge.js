import { Link } from 'react-router-dom';
import { RoutesLinks } from '../../constant/constant';
import { StyledBadge } from './CartWithBadge.styled';
import HeaderButton from '../HeaderButton/HeaderButton';

const CartWithBadge = props => {
  const { quantity, style, breakpoint } = props;
  return (
    <Link to={RoutesLinks.CART} onClick={() => {}}>
      <StyledBadge
        overlap="circular"
        showZero
        max={99}
        invisible={quantity === 0 && true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={quantity}>
        <HeaderButton icon="ion:cart-outline" style={{ fontSize: breakpoint ? '32px' : undefined }} key="cart" />
      </StyledBadge>
    </Link>
  );
};

export default CartWithBadge;
