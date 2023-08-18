import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useTheme } from '@mui/material/styles';
import { Link, useMediaQuery } from '@mui/material';
import { CustomBreadcrumbs } from './BreadCrumbs.styled';
import { RoutesLinks } from '../../constant/constant';

const BreadCrumbs = ({ breakpoint }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  console.log(location);
  console.log(pathnames);

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
        {breakpoint ? (
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
