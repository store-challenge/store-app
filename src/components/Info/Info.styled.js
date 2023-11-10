import { styled, Typography } from '@mui/material';

export const CustomTypography = styled(Typography)(({ theme, variant }) => {
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
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(80),
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.pxToRem(160),
      },
    },
    h2: {
      ...baseStyles,
      fontSize: theme.typography.pxToRem(20),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(40),
      },
      [theme.breakpoints.up('lg')]: {
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
      [theme.breakpoints.up('md')]: {
        margin: '0',
        fontWeight: '300',
        fontSize: theme.typography.pxToRem(16),
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
  };

  return styles[variant];
});
