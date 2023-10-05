import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { RoutesLinks } from '../../constant/constant';
import { StyledBadge, CartModal, CartTitleWrapper, CartTitle } from './CartWithBadge.styled';
import HeaderButton from '../HeaderButton/HeaderButton';

const CartWithBadge = props => {
  const { quantity, style, breakpoint } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        badgeContent={quantity}>
        <HeaderButton icon="ion:cart-outline" style={{ fontSize: breakpoint ? '32px' : undefined }} key="cart" />
      </StyledBadge>

      <CartModal fullScreen={fullScreen} open={open} onClose={handleOpenModal}>
        <CartTitleWrapper>
          <CartTitle variant="h2">Кошик</CartTitle>
        </CartTitleWrapper>
      </CartModal>
    </>
  );
};

export default CartWithBadge;
