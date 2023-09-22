import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Link, Box } from '@mui/material';
import { CustomBreadcrumbs } from './BreadCrumbs.styled';

const BreadCrumbs = ({ currentPath, breakpoint }) => {
  const previous = currentPath.length > 1 ? [currentPath.at(-2)] : null;
  const pathToUse = breakpoint ? currentPath : previous;
  return (
    <CustomBreadcrumbs
      aria-label="breadcrumb"
      aria-current="last"
      separator={breakpoint ? <Icon icon={'iconamoon:arrow-right-2-duotone'} style={{ fontSize: '24px' }} /> : null}>
      {pathToUse.map((element, index) => {
        const lastIndex = index === pathToUse.length - 1;
        const linkProps = {
          color: 'inherit',
          underline: 'none',
          style: {
            fontWeight: lastIndex && '500',
            cursor: lastIndex && 'default',
          },
        };
        return (
          <Box display={'flex'} alignItems={'center'} key={index}>
            {!breakpoint && <Icon icon={'iconamoon:arrow-left-2-duotone'} style={{ fontSize: '24px' }} />}
            <Link {...linkProps} component={RouterLink} to={element.path}>
              {element.name}
            </Link>
          </Box>
        );
      })}
    </CustomBreadcrumbs>
  );
};
export default BreadCrumbs;
