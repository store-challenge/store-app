import { styled, Button } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  width: '288px',
  height: '48px',
  padding: '8px 22px',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '15px',
  lineHeight: '26px',
  textTransform: 'none',
  '&::first-letter': {
    textTransform: 'capitalize',
  },
  color: 'var(--mainColor)',
  border: '1px solid var(--mainColor)',
  borderRadius: '15px',
  '&:hover': {
    borderColor: 'var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
  },
  '&:active': {
    color: 'var(--secondColor)',
    borderColor: 'var(--buttonClickColor)',
    backgroundColor: 'var(--buttonClickColor)',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: '10px',
    width: '177px',
    height: '42px',
    color: 'var(--secondColor)',
    backgroundColor: 'var(--mainColor)',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    '&:hover': {
      border: 'inherit',
      backgroundColor: 'var(--buttonHoverColor)',
    },
    '&:active,&:focus-visible': {
      backgroundColor: 'var(--buttonClickColor)',
    },
  },
}));

const ButtonCustom = props => {
  const { onClick, text, type, sx, desktop } = props;

  return (
    <CustomButton variant={desktop ? 'contained' : 'outlined'} type={type} disableElevation sx={sx} onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default ButtonCustom;
