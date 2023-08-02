import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { styled, useTheme } from '@mui/material/styles';
import { Breadcrumbs, Link, useMediaQuery } from '@mui/material';
import { RoutesLinks } from '../../constant/constant';

const CustomBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontWeight: '300',
  fontStyle: 'normal',
  lineHeight: '130%',
  color: 'var(--mainColor)',
  '& .MuiBreadcrumbs-separator': {
    marginLeft: '0',
    marginRight: '0',
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: '15px',
    fontWeight: '500',
    '& .MuiBreadcrumbs-ol': {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
    },
  },
}));

const BreadCrumbs = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <CustomBreadcrumbs
      aria-label="breadcrumb"
      aria-current="last"
      separator={<Icon icon={'iconamoon:arrow-right-2-duotone'} style={{ fontSize: '24px' }} />}>
      <Link
        color="inherit"
        underline="none"
        component={RouterLink}
        to={RoutesLinks.HOMEPAGE}
        sx={{ display: 'flex', alignItems: 'center' }}>
        {desktop ? (
          'Головна сторінка'
        ) : (
          <>
            <Icon icon={'iconamoon:arrow-left-2-duotone'} style={{ fontSize: '24px' }} />
            На головну
          </>
        )}
      </Link>
      {desktop &&
        pathnames.map((path, index) => {
          const lastIndex = index === pathnames.at(-1);
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const linkProps = {
            href: path.url,
            color: 'inherit',
            underline: 'none',
            style: {
              fontWeight: !lastIndex && '500',
              cursor: !lastIndex && 'default',
              visibility: !desktop && !lastIndex && 'hidden',
            },
          };

          return (
            <Link {...linkProps} component={RouterLink} to={to} key={index}>
              {path}
            </Link>
          );
        })}
    </CustomBreadcrumbs>
  );
};
export default BreadCrumbs;
