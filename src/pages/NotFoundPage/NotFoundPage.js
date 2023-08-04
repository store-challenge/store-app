import { styled, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryMoreButton from '../../components/CategoryMoreButton/CategoryMoreButton';

const CustomTypographyH1 = styled(Typography)(({ theme }) => ({
  color: 'var(--mainColor)',
  fontFamily: '"Montserrat", sans-serif',
  fontStyle: 'normal',
  lineHeight: '75%',
  fontWeight: '500',
  fontSize: theme.typography.pxToRem(40),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(80),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(160),
  },
}));

const CustomTypographyH2 = styled(Typography)(({ theme }) => ({
  color: 'var(--mainColor)',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  lineHeight: '130%',
  fontWeight: '500',
  fontSize: theme.typography.pxToRem(20),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(40),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(60),
  },
}));

const CustomTypographyP = styled(Typography)(({ theme }) => ({
  color: 'var(--mainColor)',
  minWidth: '276px',
  maxWidth: '900px',
  margin: '0 22px',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  lineHeight: '129%',
  fontWeight: '500',
  fontSize: theme.typography.pxToRem(13),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(16),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(20),
  },
}));

const NotFoundPage = () => {
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
      <CustomTypographyH1>404</CustomTypographyH1>
      <CustomTypographyH2>Page not found!</CustomTypographyH2>
      <CustomTypographyP>
        Вибачте, але ми не змогли знайти сторінку, яку ви шукаєте. Схоже, що сталася помилка або сторінка була видалена.
      </CustomTypographyP>
      <CategoryMoreButton onClick={handleGoBack} text={'Назад'} />
    </Box>
  );
};

export default NotFoundPage;
