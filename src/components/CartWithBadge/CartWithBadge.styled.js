import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    bottom: '35%',
    left: '3%',
    minWidth: 14,
    height: 14,
    padding: 0,
    fontFamily: 'Montserrat',
    fontSize: '10px',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '130%',
    color: 'var(--mainColor)',
    backgroundColor: 'var(--secondColor)',
    borderRadius: '50%',
    [theme.breakpoints.up('xl')]: {
      width: 27,
      height: 27,
      fontSize: '18px',
    },
  },
}));
