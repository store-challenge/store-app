import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ButtonMore = styled(Button)(() => ({
  width: '288px',
  height: '48px',
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
