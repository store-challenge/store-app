import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Link } from '@mui/material';
import { CustomBreadcrumbs } from './BreadCrumbs.styled';
import { RoutesLinks } from '../../constant/constant';

const BreadCrumbs = ({ current, breakpoint }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean).slice(1);

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
      {breakpoint &&
        pathnames.map((path, index) => {
          const lastIndex = index === pathnames.at(-1);
          const label = current;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const linkProps = {
            href: path.url,
            color: 'inherit',
            underline: 'none',
            style: {
              fontWeight: !lastIndex && '500',
              cursor: !lastIndex && 'default',
              visibility: !breakpoint && !lastIndex && 'hidden',
            },
          };

          return (
            <Link {...linkProps} component={RouterLink} to={to} key={index}>
              {label}
            </Link>
          );
        })}
    </CustomBreadcrumbs>
  );
};
export default BreadCrumbs;
