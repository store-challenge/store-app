import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  StyedDialog,
  StyedDialogTitle,
  StyedTitleText,
  StyedCloseIcon,
  StyedContentWrapper,
} from './CartWithBadge.styled';
import CartModalEmptyContent from './CartModalEmptyContent';

const CartModalContainer = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyedDialog open={isOpen} onClose={setIsOpen} fullScreen={fullScreen} aria-labelledby="responsive-dialog-title">
      <StyedDialogTitle>
        <StyedTitleText>Кошик</StyedTitleText>
        <StyedCloseIcon onClick={setIsOpen} />
      </StyedDialogTitle>
      <StyedContentWrapper>
        <CartModalEmptyContent />
      </StyedContentWrapper>
    </StyedDialog>
  );
};

export default CartModalContainer;
