import { styled } from '@mui/material/styles';
import { Breadcrumbs } from '@mui/material';

export const CustomBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
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
