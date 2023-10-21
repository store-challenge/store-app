import { useState } from 'react';
import { StyledBadge } from './CartWithBadge.styled';
import HeaderButton from '../HeaderButton/HeaderButton';
import CartModalContainer from './CartModalContainer';

const CartWithBadge = props => {
  const { quantity, style, breakpoint } = props;

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledBadge
        onClick={handleOpenModal}
        overlap="circular"
        showZero
        max={99}
        invisible={quantity === 0 && true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{ cursor: 'pointer' }}
        badgeContent={quantity}>
        <HeaderButton icon="ion:cart-outline" style={{ fontSize: breakpoint ? '32px' : undefined }} key="cart" />
      </StyledBadge>

      <CartModalContainer isOpen={open} setIsOpen={handleOpenModal} />
    </>
  );
};

export default CartWithBadge;
