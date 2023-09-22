import { CustomButton } from './ButtonCustom.styled';

const ButtonCustom = props => {
  const { onClick, text, type, sx, disabled, desktop } = props;

  return (
    <CustomButton
      variant={desktop ? 'contained' : 'outlined'}
      type={type}
      disabled={disabled}
      disableElevation
      sx={sx}
      onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default ButtonCustom;
