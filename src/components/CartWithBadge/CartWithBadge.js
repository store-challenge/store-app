import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { RoutesLinks } from '../../constant/constant';
import {
  StyledBadge,
  StyedDialog,
  StyedDialogTitle,
  StyedTitleText,
  StyedCloseIcon,
  StyedContentWrapper,
  StyedEmptyCart,
  StyedTypography,
} from './CartWithBadge.styled';
import HeaderButton from '../HeaderButton/HeaderButton';
import CartImage from '../../data/images/Cart.png';

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

      <StyedDialog
        open={open}
        onClose={handleOpenModal}
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title">
        <StyedDialogTitle>
          <StyedTitleText>Кошик</StyedTitleText>
          <StyedCloseIcon onClick={handleOpenModal} />
        </StyedDialogTitle>
        <StyedContentWrapper>
          <StyedEmptyCart>
            <img style={{ width: '158px', height: '126px' }} src={CartImage} alt="Cart image" />
            <StyedTitleText marginY={{ xs: 2.5, md: 6.25 }}>Кошик порожній</StyedTitleText>
            <StyedTypography>{`Завжди є час на виправлення :)`}</StyedTypography>
            <StyedTypography>{`Скористуйся Пошуком або Каталогом, щоб виправити це!`}</StyedTypography>
          </StyedEmptyCart>
        </StyedContentWrapper>
      </StyedDialog>
    </>
  );
};

export default CartWithBadge;
