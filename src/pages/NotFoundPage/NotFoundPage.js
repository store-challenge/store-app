import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { Info } from '../../components/Info/Info';
import ButtonCustom from '../../components/Button/ButtonCustom';

const NotFoundPage = ({ desktop }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: { xs: '20px', md: '35px', lg: '50px' },
        marginY: '80px',
      }}>
      <Info variant={'h1'} text={'404'} />
      <Info variant={'h2'} text={'Page not found!'} />
      <Info
        variant={'p'}
        text={
          'Вибачте, але ми не змогли знайти сторінку, яку ви шукаєте. Схоже, що сталася помилка або сторінка була видалена.'
        }
      />
      <ButtonCustom
        onClick={handleGoBack}
        text={'Назад'}
        sx={{
          color: desktop ? 'var(--secondColor)' : 'var(--mainColor)',
          backgroundColor: desktop ? 'var(--mainColor)' : 'var(--secondColor)',
        }}
      />
    </Box>
  );
};

export default NotFoundPage;
