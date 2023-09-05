import { CustomButton } from './ButtonCustom.styled';

const ButtonCustom = props => {
  const { onClick, text, type, sx, desktop } = props;

  return (
    <CustomButton variant={desktop ? 'contained' : 'outlined'} type={type} disableElevation sx={sx} onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default ButtonCustom;
