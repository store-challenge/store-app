import { styled, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonCustom from '../../components/Button/ButtonCustom';

const breakpoints = {
  md: 'md',
  lg: 'lg',
};

const CustomTypography = styled(Typography)(({ theme, variant }) => {
  const baseStyles = {
    color: 'var(--mainColor)',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '130%',
  };

  const styles = {
    h1: {
      ...baseStyles,
      lineHeight: '75%',
      fontSize: theme.typography.pxToRem(40),
      [theme.breakpoints.up(breakpoints.md)]: {
        fontSize: theme.typography.pxToRem(80),
      },
      [theme.breakpoints.up(breakpoints.lg)]: {
        fontSize: theme.typography.pxToRem(160),
      },
    },
    h2: {
      ...baseStyles,
      fontSize: theme.typography.pxToRem(20),
      [theme.breakpoints.up(breakpoints.md)]: {
        fontSize: theme.typography.pxToRem(40),
      },
      [theme.breakpoints.up(breakpoints.lg)]: {
        fontSize: theme.typography.pxToRem(60),
      },
    },
    p: {
      ...baseStyles,
      minWidth: '276px',
      maxWidth: '900px',
      margin: '0 22px',
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(13),
      [theme.breakpoints.up(breakpoints.md)]: {
        margin: '0',
        fontWeight: '300',
        fontSize: theme.typography.pxToRem(16),
      },
      [theme.breakpoints.up(breakpoints.lg)]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
  };

  return styles[variant];
});

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
      <CustomTypography variant="h1">404</CustomTypography>
      <CustomTypography variant="h2">Page not found!</CustomTypography>
      <CustomTypography variant="p">
        Вибачте, але ми не змогли знайти сторінку, яку ви шукаєте. Схоже, що сталася помилка або сторінка була видалена.
      </CustomTypography>
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
