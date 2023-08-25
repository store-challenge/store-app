import { styled, Button } from '@mui/material';

const ButtonMore = styled(Button)(({ theme }) => ({
  width: '288px',
  height: '48px',
  padding: '8px 22px',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '15px',
  textTransform: 'none',
  color: 'var(--mainColor)',
  border: '1px solid var(--mainColor)',
  borderRadius: '15px',
  '&:hover': {
    color: 'none',
    borderColor: 'var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
  },
  '&:active': {
    color: 'var(--secondColor)',
    borderColor: 'var(--mainColor)',
    backgroundColor: 'var(--mainColor)',
  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: 'var(--mainColor)',
    color: 'var(--secondColor)',
    width: '177px',
    height: '42px',
    '&:hover': {
      color: 'var(--mainColor)',
    },
  },
}));

const CategoryMoreButton = props => {
  const { onClick, text } = props;

  return (
    <ButtonMore variant="outlined" disableElevation onClick={onClick}>
      {text}
    </ButtonMore>
  );
};

export default CategoryMoreButton;
